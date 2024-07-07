import { getShopURL } from "./getShopURL";
import {
  Category,
  Country,
  Metrics,
  Product,
  ProductSelectionBootstrap,
  ScrapeRule,
} from "./types";
import {
  loadContents,
  looseJSONParse,
  processObjectConcurrently,
} from "./utils";
import * as cheerio from "cheerio";

export const getPriceFromProductSelectionBootstrap = (
  $: cheerio.CheerioAPI,
  target: string
) => {
  const targetScript = $("script")
    .map((_, el) => $(el).html())
    .toArray()
    .find((v) => v.includes("PRODUCT_SELECTION_BOOTSTRAP"));

  if (!targetScript)
    throw new Error("No product bootstrap script on this page");
  const trimed = targetScript.trim();
  const objectStr = (trimed.endsWith(";") ? trimed.slice(0, -1) : trimed)
    .replace(/\\\"/g, "")
    .replace("window.PRODUCT_SELECTION_BOOTSTRAP = ", "");
  const obj = looseJSONParse<ProductSelectionBootstrap>(objectStr);
  const product = obj?.productSelectionData.displayValues.prices[target];
  if (!product) throw new Error("can not locate product in product bootstrap");
  const price = product.amount;
  return price;
};

export const getPriceFromMetrics = ($: cheerio.CheerioAPI, name: string) => {
  const metricsScript = $("#metrics").html();
  if (!metricsScript) throw new Error("No metrics on this page");
  const metrics = JSON.parse(metricsScript) as Metrics;
  const matchedProducts = metrics.data.products.filter((p) => {
    return p.name.replace(/\s/g, "") === name.replace(/\s/g, "");
  });
  if (!matchedProducts.length)
    throw new Error("can not locate product in metrics");
  if (matchedProducts.length === 1) return matchedProducts[0]!.price.fullPrice;
  const prices = matchedProducts.map((p) => p.price.fullPrice);
  return Math.min(...prices);
};

export const getPriceWithShopURL = async (
  shopURL: string,
  product: Product
) => {
  const res = await loadContents(shopURL);
  const $ = cheerio.load(res);
  return product.rule === ScrapeRule.Metric
    ? getPriceFromMetrics($, product.key)
    : getPriceFromProductSelectionBootstrap($, product.key);
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
    const price = getPriceWithShopURL(shopPath, product).catch(() => {
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
