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
        key: "MVV93",
      },
      {
        name: "iPad Air",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-air`,
        rule: ScrapeRule.Metric,
        key: "MUWD3",
      },
      {
        name: "iPad",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad`,
        rule: ScrapeRule.Metric,
        key: "MPQ13",
      },
      {
        name: "iPad Mini",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-mini`,
        rule: ScrapeRule.Metric,
        key: "MK7P3",
      },
      {
        name: "iPhone 15",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15`,
        rule: ScrapeRule.Metric,
        key: "MTM23",
      },
      {
        name: "iPhone 15 Pro",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15-pro`,
        rule: ScrapeRule.Metric,
        key: "MTQP3",
      },
      {
        name: "iPhone SE",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-se`,
        rule: ScrapeRule.Metric,
        key: "MMX63",
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
        key: "MLY33",
      },
      {
        name: '13" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/13-inch-m3`,
        rule: ScrapeRule.Metric,
        key: "MRXV3",
      },
      {
        name: '15" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/15-inch-m3`,
        rule: ScrapeRule.Metric,
        key: "MRYU3",
      },
      {
        name: "iMac",
        appleComPath: `${PATH_PREFIX}/buy-mac/imac`,
        rule: ScrapeRule.Metric,
        key: "MQRD3",
      },
      {
        name: '14" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro/14-inch`,
        rule: ScrapeRule.Metric,
        key: "MR7J3",
      },
      {
        name: '16" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro/16-inch`,
        rule: ScrapeRule.Metric,
        key: "MRW43",
      },
      {
        name: "Mac Pro",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-pro`,
        rule: ScrapeRule.Metric,
        key: "Z171",
      },
      {
        name: "Mac Studio",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-studio`,
        rule: ScrapeRule.Metric,
        key: "MQH73",
      },
      {
        name: "Mac Mini",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-mini`,
        rule: ScrapeRule.Metric,
        key: "MMFJ3",
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
        key: "MTJV3",
      },
      {
        name: "AirPods 3",
        appleComPath: `${PATH_PREFIX}/product/MV7N2`,
        rule: ScrapeRule.Metric,
        key: "MV7N2",
      },
      {
        name: "AirPods 2",
        appleComPath: `${PATH_PREFIX}/product/MPNY3`,
        rule: ScrapeRule.Metric,
        key: "MPNY3",
      },
      {
        name: "AirPods Max",
        appleComPath: `${PATH_PREFIX}/buy-airpods/airpods-max`,
        rule: ScrapeRule.Metric,
        key: "MGYJ3",
      },
      {
        name: "HomePod",
        appleComPath: `${PATH_PREFIX}/buy-homepod/homepod`,
        rule: ScrapeRule.Metric,
        key: "MQJ73",
      },
      {
        name: "HomePod Mini",
        appleComPath: `${PATH_PREFIX}/buy-homepod/homepod-mini`,
        rule: ScrapeRule.Metric,
        key: "MJ2C3",
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
        key: "apple_vision_pro_2024-256gb",
      },
      {
        name: "Apple Watch",
        appleComPath: `${PATH_PREFIX}/buy-watch/apple-watch`,
        rule: ScrapeRule.ProductBootstrap,
        key: "watch_cases-aluminum-41mm-gps",
      },
      {
        name: "Apple Watch SE",
        appleComPath: `${PATH_PREFIX}/buy-watch/apple-watch-se`,
        rule: ScrapeRule.ProductBootstrap,
        key: "watch_cases-aluminum-40mm-gps",
      },
      {
        name: "Apple Watch Ultra",
        appleComPath: `${PATH_PREFIX}/buy-watch/apple-watch-ultra`,
        rule: ScrapeRule.ProductBootstrap,
        key: "watch_cases-titanium-49mm-gpscell",
      },
      {
        name: "Apple TV",
        appleComPath: `${PATH_PREFIX}/buy-tv/apple-tv-4k`,
        rule: ScrapeRule.Metric,
        key: "MN873",
      },
    ],
  },
];
