const fetch = require('node-fetch');
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
    query getProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
      }
    }
  `,
    variables: { handle: "hydra-shield-faux-locs-14" }
  })
}).then(r => r.json()).then(o => console.log("product: ", JSON.stringify(o, null, 2))).catch(console.error);

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': token,
  },
  body: JSON.stringify({
    query: `
    query getProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
      }
    }
  `,
    variables: { handle: "hydra-shield-faux-locs-14" }
  })
}).then(r => r.json()).then(o => console.log("productByHandle: ", JSON.stringify(o, null, 2))).catch(console.error);
