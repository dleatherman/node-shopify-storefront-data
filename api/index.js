const getProducts = require('./products');
const getCollections = require('./collections');
const chalk = require('chalk');

const { collectionsQuery, productsQuery } = require('../config/queries');

// const getAllCollectionsAndProducts = async () => {
//   const products = await getProducts(productsQuery())
//   const collections = await getCollections(collectionsQuery())
// }

// module.exports = getAllCollectionsAndProducts();

(async () => {
  // const products = await getProducts(productsQuery())
  const collections = await getCollections(collectionsQuery())
})()