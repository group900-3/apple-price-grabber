import * as cheerio from "cheerio";
import { APPLE } from "./constants";
import { Country, Product } from "./types";
import { loadContents } from "./utils";

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

export const getShopURL = async (productInfo: Product, { path }: Country) => {
  if ("appleComPath" in productInfo)
    return `${APPLE}${path}${productInfo.appleComPath}`;

  const shopPath = await getPathByRule(
    productInfo.appleComRule,
    `${APPLE}${path}`
  );
  return `${APPLE}${shopPath}`;
};