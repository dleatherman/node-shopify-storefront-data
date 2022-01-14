Retrieve your [Shopify](https://www.shopify.com/?ref=permalight-nyc) products, pages, and collections.
## Installation

The example above is using `dotenv` with a `.env` file to ensure credentials are **not** stored in the source code. Here's an example of the `.env` file:

```text
SHOPIFY_STORE_URL=*.myshopify.com
SHOPIFY_ACCESS_TOKEN=
SHOPIFY_API_VERSION=2021-10
```

1. Create a `.env` file with the following structure:
```text
   SHOPIFY_STORE_URL=*.myshopify.com
   SHOPIFY_ACCESS_TOKEN=
   SHOPIFY_API_VERSION=2022-01
```

2. Install the dependencies:
```text
npm install
```

3. Run the demo locally:
```text
node index.js
```