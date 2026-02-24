const domain = process.env.SHOPIFY_STORE_DOMAIN || 'carebraids.myshopify.com';
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || '274fbb73e6d6bc45d6152b93c1a76830';

async function test() {
  const query = `
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
        }
        customerUserErrors {
          message
        }
      }
    }
  `;
  const variables = {
    input: {
      email: "test.register." + Date.now() + "@example.com",
      password: "password123",
      firstName: "Test",
      lastName: "User"
    }
  };

  try {
    const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables })
    });

    const body = await response.json();
    console.log(JSON.stringify(body, null, 2));
  } catch (err) {
    console.error("Fetch error", err);
  }
}

test();
