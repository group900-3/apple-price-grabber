export interface Country {
  name: string;
  currencyCode: string;
  path: string;
}

/**
 * for match price data to macrumors buyers guide.
 * the category following to macrumors buyers guide category.
 */
export interface Category {
  name: string;
  products: Product[];
}

/**
 * just append this to products when new apple thing released.
 */
export interface Product {
  name: string;
  /** path for scrape content on apple.com */
  appleComPath: string;
  config?: string;
}
