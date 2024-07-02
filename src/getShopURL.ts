import { APPLE } from "./constants";
import { Country, Product } from "./types";

export const getShopURL = async (productInfo: Product, { path }: Country) => {
  let url = `${APPLE}${path}${productInfo.appleComPath}`;
  if (productInfo.config) url += productInfo.config;
  return url;
};
