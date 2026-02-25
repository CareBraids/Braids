/**
 * Utility functions to interact with the Shopify Storefront API
 */

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
      console.error('Shopify GraphQL Errors:', JSON.stringify(errors, null, 2));
      throw new Error('Failed to fetch from Shopify API');
    }

    return data;
  } catch (error) {
    console.error('Error fetching from Shopify:', error);
    throw error;
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

  const data = await shopifyFetch({ query, variables: { first: limit } });

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
        variants(first: 10) {
          edges {
            node {
              id
              title
              availableForSale
              price {
                amount
                currencyCode
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

/**
 * Create a new customer (Registration).
 */
export async function createCustomer(input: any) {
  const query = `
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
          email
          firstName
          lastName
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch({ query, variables: { input } });
  return data?.customerCreate;
}

/**
 * Login a customer and get an access token.
 */
export async function createCustomerAccessToken(input: any) {
  const query = `
    mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken {
          accessToken
          expiresAt
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch({ query, variables: { input } });
  return data?.customerAccessTokenCreate;
}

/**
 * Get customer details and orders using their access token.
 */
export async function getCustomer(customerAccessToken: string) {
  const query = `
    query getCustomer($customerAccessToken: String!) {
      customer(customerAccessToken: $customerAccessToken) {
        id
        firstName
        lastName
        email
        phone
        orders(first: 20, sortKey: PROCESSED_AT, reverse: true) {
          edges {
            node {
              id
              orderNumber
              processedAt
              financialStatus
              fulfillmentStatus
              totalPrice {
                amount
                currencyCode
              }
              lineItems(first: 5) {
                edges {
                  node {
                    title
                    quantity
                    variant {
                      title
                      image {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch({ query, variables: { customerAccessToken } });
  return data?.customer || null;
}
