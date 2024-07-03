import { PATH_PREFIX } from "./constants";
import { Category, ScrapeRule } from "./types";

export const products: Category[] = [
  {
    name: "iPhone/iPad",
    products: [
      {
        name: "iPad Pro",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-pro`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "iPad Air",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-air`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "iPad",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "iPad Mini",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-mini`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "iPhone 15",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "iPhone 15 Pro",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15-pro`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "iPhone SE",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-se`,
        rule: ScrapeRule.Metric,
      },
    ],
  },
  {
    name: "Macs",
    products: [
      {
        name: '13" MacBook Air M2',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/13-inch-m2`,
        rule: ScrapeRule.Metric,
      },
      {
        name: '13" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/13-inch-m3`,
        rule: ScrapeRule.Metric,
      },
      {
        name: '15" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/15-inch-m3`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "iMac",
        appleComPath: `${PATH_PREFIX}/buy-mac/imac`,
        rule: ScrapeRule.Metric,
      },
      {
        name: '14" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro/14-inch`,
        rule: ScrapeRule.Metric,
      },
      {
        name: '16" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro/16-inch`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "Mac Pro",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-pro`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "Mac Studio",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-studio`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "Mac Mini",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-mini`,
        rule: ScrapeRule.Metric,
      },
    ],
  },
  {
    name: "Music",
    products: [
      {
        name: "AirPods Pro 2",
        appleComPath: `${PATH_PREFIX}/product/MTJV3`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "AirPods 3",
        appleComPath: `${PATH_PREFIX}/product/MV7N2`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "AirPods 2",
        appleComPath: `${PATH_PREFIX}/product/MME73`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "AirPods Max",
        appleComPath: `${PATH_PREFIX}/buy-airpods/airpods-max`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "HomePod",
        appleComPath: `${PATH_PREFIX}/buy-homepod/homepod`,
        rule: ScrapeRule.Metric,
      },
      {
        name: "HomePod Mini",
        appleComPath: `${PATH_PREFIX}/buy-homepod/homepod-mini`,
        rule: ScrapeRule.Metric,
      },
    ],
  },
  {
    name: "Watch/Other",
    products: [
      {
        name: "Vision Pro",
        appleComPath: `${PATH_PREFIX}/buy-vision/apple-vision-pro`,
        rule: ScrapeRule.ProductBootstrap,
      },
      {
        name: "Apple Watch",
        appleComPath: `${PATH_PREFIX}/buy-watch/apple-watch`,
        rule: ScrapeRule.ProductBootstrap,
      },
      {
        name: "Apple Watch SE",
        appleComPath: `${PATH_PREFIX}/buy-watch/apple-watch-se`,
        rule: ScrapeRule.ProductBootstrap,
      },
      {
        name: "Apple Watch Ultra",
        appleComPath: `${PATH_PREFIX}/buy-watch/apple-watch-ultra`,
        rule: ScrapeRule.ProductBootstrap,
      },
      {
        name: "Apple TV",
        appleComPath: `${PATH_PREFIX}/buy-tv/apple-tv-4k`,
        rule: ScrapeRule.Metric,
      },
    ],
  },
];

        appleComPath: `${PATH
