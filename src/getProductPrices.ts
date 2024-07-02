import { Metrics } from "./types";
import { loadContents } from "./utils";
import * as cheerio from "cheerio";

export const getProductPrices = async (shopUrl: string) => {
  const res = await loadContents(shopUrl);
  const $ = cheerio.load(res);
  const metricsScript = $("#metrics").html();
  if (!metricsScript) throw new Error("No metrics on this page");
  const metrics = JSON.parse(metricsScript) as Metrics;
  return metrics.data.products[0]?.price.fullPrice;
};
