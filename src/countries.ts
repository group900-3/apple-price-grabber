import { Country } from "./types";

export const countries: {
  [key: string]: Country;
} = {
  US: { name: "United States", currencyCode: "USD", path: "/us" },
  AU: { name: "Australia", currencyCode: "AUD", path: "/au" },
  AT: { name: "Austria", currencyCode: "EUR", path: "/at" },
  BE: { name: "Belgium", currencyCode: "EUR", path: "/befr" },
  BR: { name: "Brazil", currencyCode: "BRL", path: "/br" },
  CA: { name: "Canada", currencyCode: "CAD", path: "/ca" },
  CN: {
    name: "China mainland",
    currencyCode: "CNY",
    path: "cn",
  },
  FR: { name: "France", currencyCode: "EUR", path: "/fr" },
  DE: { name: "Germany", currencyCode: "EUR", path: "/de" },
  HK: { name: "Hong Kong", currencyCode: "HKD", path: "/hk" },
  IN: { name: "India", currencyCode: "INR", path: "/in" },
  IT: { name: "Italy", currencyCode: "EUR", path: "/it" },
  JP: { name: "Japan", currencyCode: "JPY", path: "/jp" },
  MO: { name: "Macao", currencyCode: "MOP", path: "/mo" },
  MY: { name: "Malaysia", currencyCode: "MYR", path: "/my" },
  MX: { name: "Mexico", currencyCode: "MXN", path: "/mx" },
  NL: { name: "Netherlands", currencyCode: "EUR", path: "/nl" },
  SG: { name: "Singapore", currencyCode: "SGD", path: "/sg" },
  KR: { name: "South Korea", currencyCode: "KRW", path: "/kr" },
  ES: { name: "Spain", currencyCode: "EUR", path: "/es" },
  SE: { name: "Sweden", currencyCode: "SEK", path: "/se" },
  CH: { name: "Switzerland", currencyCode: "CHF", path: "/chfr" },
  TW: { name: "Taiwan", currencyCode: "TWD", path: "/tw" },
  TH: { name: "Thailand", currencyCode: "THB", path: "/th" },
  TR: { name: "Turkey", currencyCode: "TRY", path: "/tr" },
  AE: {
    name: "United Arab Emirates",
    currencyCode: "AED",
    path: "/ae",
  },
  UK: { name: "United Kingdom", currencyCode: "GBP", path: "/uk" },
  // countries without a apple store
  PH: { name: "Philippines", currencyCode: "PHP", path: "/ph" },
  VN: { name: "Vietnam", currencyCode: "VND", path: "/vn" },
};
