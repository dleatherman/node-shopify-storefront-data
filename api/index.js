const chalk = require('chalk');

const getShopInfo = require('./shop');
const getAllProducts = require('./products');
const getAllCollections = require('./collections');
const getAllPages = require('./pages');
const getAllArticles = require('./articles');

const getShopifyContent = async () => {
  console.log(chalk.yellow.bold(`SHOPIFY:GETTING SHOP INFO`))
  console.log(chalk.yellow.bold(`SHOPIFY:GETTING PRODUCTS`))
  console.log(chalk.yellow.bold(`SHOPIFY:GETTING COLLECTIONS`))
  console.log(chalk.yellow.bold(`SHOPIFY:GETTING PAGES`))
  console.log(chalk.yellow.bold(`SHOPIFY:GETTING ARTICLES`))

  const shop = await getShopInfo()
  const products = await getAllProducts()
  const collections = await getAllCollections()
  const pages = await getAllPages()
  const articles = await getAllArticles()

  console.log(chalk.greenBright.bold(`SHOPIFY:SUCCESSFULLY RETRIEVED ${shop.name.toUpperCase()} INFO`))
  console.log(chalk.greenBright.bold(`SHOPIFY:SUCCESSFULLY RETRIEVED ${products.length} PRODUCT${products.length > 1 || products.length == 0 ? 'S' : ''}`))
  console.log(chalk.greenBright.bold(`SHOPIFY:SUCCESSFULLY RETRIEVED ${collections.length} COLLECTIONS`))
  console.log(chalk.greenBright.bold(`SHOPIFY:SUCCESSFULLY RETRIEVED ${pages.length} PAGE${pages.length > 1 || pages.length == 0 ? 'S' : ''}`))
  console.log(chalk.greenBright.bold(`SHOPIFY:SUCCESSFULLY RETRIEVED ${articles.length} ARTICLE${articles.length > 1 || articles.length == 0 ? 'S' : ''}`))

  console.log(chalk.yellow.bold(`SHOPIFY:MAPPING PRODUCTS TO COLLECTIONS`))

  collections.map(collection => {
    if (collection.products.length > 0) {
      return collection.products.map(collectionProduct => {
        const foundProduct = products.find(product => {
          return product.id === collectionProduct.id
        })
        return foundProduct
      })
    } else {
      return collection
    }
  })

  console.log(chalk.greenBright.bold(`SHOPIFY:SUCCESSFULLY MAPPED PRODUCTS TO COLLECTIONS`))

  return {
    shop,
    products,
    collections,
    pages,
    articles,
  }

}

module.exports = getShopifyContent
