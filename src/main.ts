import { products } from "./AppleProducts";
import { countries } from "./countries";
import { getPrices } from "./getProductPrices";
import { writeFileSync } from "fs";

const scrape = async () => {
  const res = await getPrices(countries, products);
  writeFileSync("output.json", JSON.stringify(res, null, 2));
};

scrape();
