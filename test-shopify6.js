const domain = process.env.SHOPIFY_STORE_DOMAIN || 'carebraids.myshopify.com';
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || '274fbb73e6d6bc45d6152b93c1a76830';
const endpoint = `https://${domain}/api/2024-01/graphql.json`;

async function fetchProducts() {
  const req = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({
      query: `
      query getProducts {
        products(first: 5, sortKey: CREATED_AT, reverse: true) {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
      }
    `
    })
  });
  const data = await req.json();
  console.log(JSON.stringify(data, null, 2));
}

fetchProducts();
