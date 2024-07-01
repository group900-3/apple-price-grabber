import { getShopURL } from "../src/getShopURL";
import { countries } from "../src/countries";
import { products } from "../src/AppleProducts";
import { describe, expect, it } from "vitest";
import { Product } from "../src/types";
import isURL from "is-url";

const allProducts = products.reduce(
  (acc, category) => [...acc, ...category.products],
  [] as Product[]
);
const allCountries = Object.values(countries);
const pairs = allCountries.flatMap((country) =>
  allProducts.map((product) => ({ country, product }))
);

describe("shop url", () => {
  it.concurrent.each(pairs)(
    "should generate valid URL with $product.name in $country.name",
    async ({ country, product }) => {
      const url = await getShopURL(product, country);
      expect(url).toSatisfy(isURL);
    }
  );
});
