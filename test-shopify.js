const domain = process.env.SHOPIFY_STORE_DOMAIN || 'carebraids.myshopify.com';
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || '274fbb73e6d6bc45d6152b93c1a76830';
const endpoint = `https://${domain}/api/2024-01/graphql.json`;

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': token,
  },
  body: JSON.stringify({
    query: `
    query getProducts($first: Int!) {
      products(first: $first, sortKey: PUBLISHED_AT, reverse: true) {
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
  `,
    variables: { first: 10 }
  })
}).then(r => r.json()).then(console.log).catch(console.error);
