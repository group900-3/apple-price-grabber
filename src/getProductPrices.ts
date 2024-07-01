import { loadContents } from "./utils";
import * as cheerio from "cheerio";

export const getProductPrices = async (shopUrl: string, selector: string) => {
  const res = await loadContents(shopUrl);
  const $ = cheerio.load(res);
  const text = $(selector).text();
  const price = text.replace(/[^0-9.]/g, "");
  return Math.floor(+price);
};
