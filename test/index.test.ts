import { getShopURL } from "../src/getShopURL";
import { countries } from "../src/countries";
import { products } from "../src/AppleProducts";
import { describe, expect, it } from "vitest";
import { Country, Product } from "../src/types";
import isURL from "is-url";
import { getProductPrices } from "../src/getProductPrices";
import pRetry from "p-retry";

const allProducts = products.reduce(
  (acc, category) => [...acc, ...category.products],
  [] as Product[]
);

const createPairs = (country: Country) =>
  allProducts.map((product) => ({
    country,
    product,
  }));

// normal store
const ph = createPairs(countries["PH"]!);
// store without path
const us = createPairs(countries["US"]!);
// store redirect to different domain
const cn = createPairs(countries["CN"]!);
// store with multiple language
const ch = createPairs(countries["CH"]!);

const pairs = [...ph, ...us, ...cn, ...ch];

describe("shop url", () => {
  it.concurrent.each(pairs)(
    "should generate valid URL with $product.name in $country.name",
    async ({ country, product }) => {
      const url = await getShopURL(product, country);
      expect(url).toSatisfy(isURL);
      expect(
        await pRetry(
          () => {
            return fetch(url).then((r) => r.status);
          },
          { retries: 2 }
        )
      ).not.toBe(404);
    }
  );
});

// describe("scrape price", () => {
//   it.concurrent.each(pairs)(
//     "should get price in number with $product.name in $country.name",
//     async ({ country, product }) => {
//       const url = await getShopURL(product, country);
//       expect(await getProductPrices(url, product.selector)).toBeGreaterThan(0);
//     }
//   );
// });
