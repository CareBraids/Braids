/**
 * Utility functions to interact with the Shopify Storefront API
 */
import dns from 'node:dns';

// Fix for Node.js 18+ undici fetch timeouts on environments with broken IPv6
try {
  dns.setDefaultResultOrder('ipv4first');
} catch (e) {
  // Ignore in environments where this isn't supported (e.g. Edge runtime)
}

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch({
  query,
  variables,
  cache = 'no-store',
  revalidate,
}: {
  query: string;
  variables?: any;
  cache?: RequestCache;
  revalidate?: number;
}) {
  const endpoint = `https://${domain}/api/2024-01/graphql.json`;

  try {
    const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken!,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    };

    if (revalidate !== undefined) {
      fetchOptions.next = { revalidate };
    } else if (cache) {
      fetchOptions.cache = cache;
    }

    const response = await fetch(endpoint, fetchOptions);

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Shopify API error: ${response.status} ${response.statusText} \n ${text}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.warn('Shopify GraphQL Errors:', JSON.stringify(errors, null, 2));
      return null;
    }

    return data;
  } catch (error) {
    console.warn('Warning: Error fetching from Shopify:', error);
    return null;
  }
}

/**
 * Fetch a list of products from the store.
 */
export async function getProducts(limit = 10) {
  const query = `
    query getProducts($first: Int!) {
      products(first: $first, sortKey: CREATED_AT, reverse: true) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch({ 
    query, 
    variables: { first: limit },
    revalidate: 3600 // Cache for 1 hour to prevent slow layout loads
  });

  if (!data?.products?.edges) {
    return [];
  }

  // Format the raw GraphQL response into a cleaner array of products
  return data.products.edges.map(({ node }: any) => {
    // Formatting the price string using Intl.NumberFormat based on currency could be done here as well
    const priceCurrency = node.priceRange.minVariantPrice.currencyCode;
    const priceAmount = parseFloat(node.priceRange.minVariantPrice.amount);

    let formattedPrice = '';
    try {
      formattedPrice = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: priceCurrency,
      }).format(priceAmount);
    } catch (e) {
      formattedPrice = `${priceCurrency} ${priceAmount}`;
    }

    return {
      id: node.id,
      title: node.title,
      handle: node.handle,
      description: node.description,
      price: formattedPrice,
      imageSrc: node.images.edges[0]?.node.url || '/product_1.png', // Fallback image just in case
      imageAlt: node.images.edges[0]?.node.altText || node.title,
    };
  });
}

/**
 * Fetch a list of products matching a search query.
 */
export async function searchProducts(searchQuery: string, limit = 20) {
  const query = `
    query searchProducts($query: String!, $first: Int!) {
      products(first: $first, query: $query) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
               }
              }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch({ query, variables: { query: searchQuery, first: limit } });

  if (!data?.products?.edges) {
    return [];
  }

  return data.products.edges.map(({ node }: any) => {
    const priceCurrency = node.priceRange.minVariantPrice.currencyCode;
    const priceAmount = parseFloat(node.priceRange.minVariantPrice.amount);

    let formattedPrice = '';
    try {
      formattedPrice = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: priceCurrency,
      }).format(priceAmount);
    } catch (e) {
      formattedPrice = `${priceCurrency} ${priceAmount}`;
    }

    return {
      id: node.id,
      title: node.title,
      handle: node.handle,
      description: node.description,
      price: formattedPrice,
      imageSrc: node.images.edges[0]?.node.url || '/product_1.png',
      imageAlt: node.images.edges[0]?.node.altText || node.title,
    };
  });
}

/**
 * Fetch a single product by its handle (slug).
 */
export async function getProductByHandle(handle: string) {
  const query = `
    query getProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        handle
        descriptionHtml
        options {
          name
          values
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 5) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 100) {
          edges {
            node {
              id
              title
              availableForSale
              image {
                url
                altText
              }
              price {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch({ query, variables: { handle } });

  return data?.productByHandle || null;
}

/**
 * Create a new cart in Shopify and return the checkout URL.
 */
export async function createCart(lines: { merchandiseId: string; quantity: number }[]) {
  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: {
      lines,
    },
  };

  const data = await shopifyFetch({ query, variables });

  if (data?.cartCreate?.userErrors?.length > 0) {
    console.error('Shopify Cart Errors:', data.cartCreate.userErrors);
  }

  return data?.cartCreate?.cart || null;
}

async function getCustomerApiEndpoint() {
  const res = await fetch(`https://${domain}/.well-known/customer-account-api`, {
    next: { revalidate: 3600 }
  });
  const data = await res.json();
  return data.graphql_api;
}

/**
 * Utility function to interact with the Shopify Customer Account API
 */
async function customerFetch({
  query,
  variables,
  customerAccessToken,
}: {
  query: string;
  variables?: any;
  customerAccessToken: string;
}) {
  const endpoint = await getCustomerApiEndpoint();

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': customerAccessToken,
      'Origin': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store'
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Customer API error: ${response.status} ${response.statusText} \n ${text}`);
  }

  const { data, errors } = await response.json();
  if (errors) {
    console.error('Customer GraphQL Errors:', JSON.stringify(errors, null, 2));
    throw new Error('Failed to fetch from Customer API');
  }

  return data;
}

/**
 * Get customer details specific to the Account Dashboard
 */
export async function getCustomerDetails(customerAccessToken: string) {
  const query = `
    query getCustomerDetails {
      customer {
        id
        firstName
        lastName
        emailAddress {
          emailAddress
        }
        phoneNumber {
          phoneNumber
        }
        defaultAddress {
          id
          address1
          address2
          city
          zoneCode
          territoryCode
          zip
        }
        orders(first: 10, sortKey: CREATED_AT, reverse: true) {
          edges {
            node {
              id
              number
              createdAt
              financialStatus
              fulfillmentStatus
              totalPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  const rawData = await customerFetch({ query, customerAccessToken });
  if (!rawData?.customer) return null;
  const c = rawData.customer;

  // Transform Customer API data to match the UI expectations (which were built for Storefront API)
  return {
    id: c.id,
    firstName: c.firstName,
    lastName: c.lastName,
    email: c.emailAddress?.emailAddress || '',
    phone: c.phoneNumber?.phoneNumber || '',
    addresses: {
      edges: c.defaultAddress ? [{ node: c.defaultAddress }] : []
    },
    orders: {
      edges: c.orders?.edges?.map((edge: any) => ({
        node: {
          id: edge.node.id,
          orderNumber: edge.node.number,
          processedAt: edge.node.createdAt,
          financialStatus: edge.node.financialStatus,
          fulfillmentStatus: edge.node.fulfillmentStatus,
          totalPrice: edge.node.totalPrice,
          statusUrl: ''
        }
      })) || []
    }
  };
}
