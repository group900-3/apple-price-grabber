interface CountryInfoBase {
  name: string;
  currencyCode: string;
  emoji: string;
}

type CountryInfoWithPath = CountryInfoBase & { path: string };
type CountryInfoWithDomain = CountryInfoBase & { domain: string };

export const countries: {
  [key: string]: CountryInfoWithPath | CountryInfoWithDomain;
} = {
  US: { name: "United States", currencyCode: "USD", emoji: "🇺🇸", path: "/us" },
  AU: { name: "Australia", currencyCode: "AUD", emoji: "🇦🇺", path: "/au" },
  AT: { name: "Austria", currencyCode: "EUR", emoji: "🇦🇹", path: "/at" },
  BE: { name: "Belgium", currencyCode: "EUR", emoji: "🇧🇪", path: "/befr" },
  BR: { name: "Brazil", currencyCode: "BRL", emoji: "🇧🇷", path: "/br" },
  CA: { name: "Canada", currencyCode: "CAD", emoji: "🇨🇦", path: "/ca" },
  CN: {
    name: "China mainland",
    currencyCode: "CNY",
    emoji: "🇨🇳",
    domain: "https://www.apple.com.cn/",
  },
  FR: { name: "France", currencyCode: "EUR", emoji: "🇫🇷", path: "/fr" },
  DE: { name: "Germany", currencyCode: "EUR", emoji: "🇩🇪", path: "/de" },
  HK: { name: "Hong Kong", currencyCode: "HKD", emoji: "🇭🇰", path: "/hk" },
  IN: { name: "India", currencyCode: "INR", emoji: "🇮🇳", path: "/in" },
  IT: { name: "Italy", currencyCode: "EUR", emoji: "🇮🇹", path: "/it" },
  JP: { name: "Japan", currencyCode: "JPY", emoji: "🇯🇵", path: "/jp" },
  MO: { name: "Macao", currencyCode: "MOP", emoji: "🇲🇴", path: "/mo" },
  MY: { name: "Malaysia", currencyCode: "MYR", emoji: "🇲🇾", path: "/my" },
  MX: { name: "Mexico", currencyCode: "MXN", emoji: "🇲🇽", path: "/mx" },
  NL: { name: "Netherlands", currencyCode: "EUR", emoji: "🇳🇱", path: "/nl" },
  SG: { name: "Singapore", currencyCode: "SGD", emoji: "🇸🇬", path: "/sg" },
  KR: { name: "South Korea", currencyCode: "KRW", emoji: "🇰🇷", path: "/kr" },
  ES: { name: "Spain", currencyCode: "EUR", emoji: "🇪🇸", path: "/es" },
  SE: { name: "Sweden", currencyCode: "SEK", emoji: "🇸🇪", path: "/se" },
  CH: { name: "Switzerland", currencyCode: "CHF", emoji: "🇨🇭", path: "/chfr" },
  TW: { name: "Taiwan", currencyCode: "TWD", emoji: "🇹🇼", path: "/tw" },
  TH: { name: "Thailand", currencyCode: "THB", emoji: "🇹🇭", path: "/th" },
  TR: { name: "Turkey", currencyCode: "TRY", emoji: "🇹🇷", path: "/tr" },
  AE: {
    name: "United Arab Emirates",
    currencyCode: "AED",
    emoji: "🇦🇪",
    path: "/ae",
  },
  UK: { name: "United Kingdom", currencyCode: "GBP", emoji: "🇬🇧", path: "/uk" },
  // countries without a apple store
  PH: { name: "Philippines", currencyCode: "PHP", emoji: "🇵🇭", path: "/ph" },
  VN: { name: "Vietnam", currencyCode: "VND", emoji: "🇻🇳", path: "/vn" },
};
