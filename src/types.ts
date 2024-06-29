interface CountryInfoBase {
  name: string;
  currencyCode: string;
}

interface CountryInfoWithPath extends CountryInfoBase {
  path: string;
}

interface CountryInfoWithDomain extends CountryInfoBase {
  domain: string;
}

export type Country = CountryInfoWithPath | CountryInfoWithDomain;

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
interface ProductBase {
  name: string;
}

export interface ProductWithPath extends ProductBase {
  /** path for scrape content on apple.com */
  appleComPath: string;
}

export interface ProductWithRule extends ProductBase {
  /**
   * sometimes shop page is different in any country.
   * provide a rule to get shop page.
   * @type {[string, string]} [path,selector] get href from path by selector
   */
  appleComRule: [string, string];
}

export type Product = ProductWithPath | ProductWithRule;
