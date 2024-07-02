import { APPLE } from "./constants";
import { Product } from "./types";

export const getShopURL = (productInfo: Product, countryPath: string) => {
  let url = `${APPLE}${countryPath}${productInfo.appleComPath}`;
  if (productInfo.config) url += productInfo.config;
  return url;
};
