const fs = require('fs');
const getShopifyContent = require('./api');

(async () => {
  const shopifyContent = await getShopifyContent()
  try {
    fs.writeFileSync('./shopify.json', JSON.stringify(shopifyContent))
    //file written successfully
  } catch (err) {
    console.error(err)
  }
})()
