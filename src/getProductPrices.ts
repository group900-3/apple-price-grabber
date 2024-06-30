import { getShopURL } from "./getShopURL";
import { Country, Product } from "./types";

export const getProductPrices = async (
  productInfo: Product,
  countryInfo: Country
) => {
  const url = await getShopURL(productInfo, countryInfo);
  return url;
};
