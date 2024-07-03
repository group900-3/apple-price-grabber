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

export enum ScrapeRule {
  /**
   * get price from metric json
   */
  Metric,
  /**
   * get price from product bootstrap object in script tag
   */
  ProductBootstrap,
}

/**
 * just append this to products when new apple thing released.
 */
export interface Product {
  name: string;
  /** path for scrape content on apple.com */
  appleComPath: string;
  config?: string;
  rule: ScrapeRule;
}

export interface Metrics {
  data: {
    products: {
      name: string;
      price: {
        fullPrice: number;
      };
    }[];
  };
}

export interface ProductSelectionBootstrap {
  productSelectionData: {
    displayValues: {
      prices: {
        [type: string]: {
          amount: number;
        };
      };
    };
  };
}
