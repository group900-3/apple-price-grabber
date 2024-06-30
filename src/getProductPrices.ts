import { Country, Product } from "./types";
import * as cheerio from "cheerio";
import { APPLE } from "./constants";

const loadContents = (url: string) => fetch(url).then((r) => r.text());

const getPathByRule = async (
  [path, selector]: [string, string],
  site: string
) => {
  const res = await loadContents(`${site}${path}`);
  const $ = cheerio.load(res);
  const href = $(selector).attr("href");
  if (!href) throw new Error(`No shop path found`);
  return href;
};

const getFullURL = async (productInfo: Product, { path }: Country) => {
  if ("appleComPath" in productInfo)
    return `${APPLE}${path}${productInfo.appleComPath}`;

  const shopPath = await getPathByRule(
    productInfo.appleComRule,
    `${APPLE}${path}`
  );
  return `${APPLE}${shopPath}`;
};

export const getProductPrices = async (
  productInfo: Product,
  countryInfo: Country
) => {
  const url = await getFullURL(productInfo, countryInfo);
  return url;
};
