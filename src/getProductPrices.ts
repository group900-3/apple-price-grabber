import { getShopURL } from "./getShopURL";
import { Category, Country, Metrics, Product } from "./types";
import { loadContents, processObjectConcurrently } from "./utils";
import * as cheerio from "cheerio";

export const getPriceWithShopURL = async (shopURL: string) => {
  const res = await loadContents(shopURL);
  const $ = cheerio.load(res);
  const metricsScript = $("#metrics").html();
  if (!metricsScript) throw new Error("No metrics on this page");
  const metrics = JSON.parse(metricsScript) as Metrics;
  return metrics.data.products[0]!.price.fullPrice;
};

const getProductPricesByCountry = (
  product: Product,
  countries: {
    [key: string]: Country;
  }
) => {
  const countryPriceMap: { [key: string]: Promise<number | null> } = {};
  for (const [countryCode, country] of Object.entries(countries)) {
    const shopPath = getShopURL(product, country.path);
    const price = getPriceWithShopURL(shopPath).catch(() => {
      console.warn(`scrape price failed on ${product.name} in ${country.name}`);
      return null;
    });
    countryPriceMap[countryCode] = price;
  }
  return processObjectConcurrently(countryPriceMap);
};

const mapProductsToPrice = (
  products: Product[],
  countries: {
    [key: string]: Country;
  }
) => {
  return products.map((product) =>
    getProductPricesByCountry(product, countries).then((prices) => ({
      name: product.name,
      prices,
    }))
  );
};

export const getPrices = async (
  countries: {
    [key: string]: Country;
  },
  productCategories: Category[]
) => {
  const promises = productCategories.map((category) =>
    Promise.all(mapProductsToPrice(category.products, countries)).then(
      (products) => ({
        name: category.name,
        products,
      })
    )
  );
  const result = await Promise.all(promises);
  return result;
};
