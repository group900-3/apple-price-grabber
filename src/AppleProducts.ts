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
        key: "11-inch iPad Pro Wi‑Fi 256GB with standard glass - Silver",
      },
      {
        name: "iPad Air",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-air`,
        rule: ScrapeRule.Metric,
        key: "11-inch iPad Air Wi-Fi 128GB - Blue",
      },
      {
        name: "iPad",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad`,
        rule: ScrapeRule.Metric,
        key: "10.9-inch iPad Wi‑Fi 64GB - Blue",
      },
      {
        name: "iPad Mini",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-mini`,
        rule: ScrapeRule.Metric,
        key: "iPad mini Wi‑Fi 64GB - Starlight",
      },
      {
        name: "iPhone 15",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15`,
        rule: ScrapeRule.Metric,
        key: "iPhone 15 128GB Green",
      },
      {
        name: "iPhone 15 Pro",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15-pro`,
        rule: ScrapeRule.Metric,
        key: "iPhone 15 Pro 128GB Natural Titanium",
      },
      {
        name: "iPhone SE",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-se`,
        rule: ScrapeRule.Metric,
        key: "iPhone SE 64GB Starlight",
      },
    ],
  },
  {
    name: "Macs",
    products: [
      {
        name: '13" MacBook Air M2',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air`,
        rule: ScrapeRule.Metric,
        key: "13-inch MacBook Air with M2 chip - Midnight",
      },
      {
        name: '13" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air`,
        rule: ScrapeRule.Metric,
        key: "13-inch MacBook Air with M3 chip - Midnight",
      },
      {
        name: '15" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air`,
        rule: ScrapeRule.Metric,
        key: "15-inch MacBook Air with M3 chip - Midnight",
      },
      {
        name: "iMac",
        appleComPath: `${PATH_PREFIX}/buy-mac/imac`,
        rule: ScrapeRule.Metric,
        key: "Orange iMac",
      },
      {
        name: '14" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro`,
        rule: ScrapeRule.Metric,
        key: "14-inch MacBook Pro - Silver",
      },
      {
        name: '16" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro`,
        rule: ScrapeRule.Metric,
        key: "16-inch MacBook Pro - Silver",
      },
      {
        name: "Mac Pro",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-pro`,
        rule: ScrapeRule.Metric,
        key: "Mac Pro",
      },
      {
        name: "Mac Studio",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-studio`,
        rule: ScrapeRule.Metric,
        key: "Mac Studio",
      },
      {
        name: "Mac Mini",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-mini`,
        rule: ScrapeRule.Metric,
        key: "Mac mini",
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
        key: "AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)",
      },
      {
        name: "AirPods 3",
        appleComPath: `${PATH_PREFIX}/product/MPNY3`,
        rule: ScrapeRule.Metric,
        key: "AirPods (3rd generation) with Lightning Charging Case",
      },
      {
        name: "AirPods 2",
        appleComPath: `${PATH_PREFIX}/product/MV7N2`,
        rule: ScrapeRule.Metric,
        key: "AirPods (2nd generation)",
      },
      {
        name: "AirPods Max",
        appleComPath: `${PATH_PREFIX}/buy-airpods/airpods-max`,
        rule: ScrapeRule.Metric,
        key: "AirPods Max - Silver",
      },
      {
        name: "HomePod",
        appleComPath: `${PATH_PREFIX}/buy-homepod/homepod`,
        rule: ScrapeRule.Metric,
        key: "HomePod - Midnight",
      },
      {
        name: "HomePod Mini",
        appleComPath: `${PATH_PREFIX}/buy-homepod/homepod-mini`,
        rule: ScrapeRule.Metric,
        key: "HomePod mini - Blue",
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
        key: "Apple TV 4K Wi‑Fi with 64GB storage",
      },
    ],
  },
];
