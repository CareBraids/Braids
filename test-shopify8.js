const domain = process.env.SHOPIFY_STORE_DOMAIN || 'carebraids.myshopify.com';
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || '274fbb73e6d6bc45d6152b93c1a76830';
const endpoint = `https://${domain}/api/2024-01/graphql.json`;

async function fetchProduct() {
  const req = await fetch(endpoint, {
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
        }
      }
    `,
      variables: { handle: "beauty-example-product-4" }
    })
  });
  const data = await req.json();
  console.log("productByHandle:", JSON.stringify(data, null, 2));
}

async function fetchProduct2() {
  const req = await fetch(endpoint, {
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
        }
      }
    `,
      variables: { handle: "beauty-example-product-4" }
    })
  });
  const data = await req.json();
  console.log("product:", JSON.stringify(data, null, 2));
}

fetchProduct().then(fetchProduct2);
