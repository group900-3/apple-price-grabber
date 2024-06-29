import { PATH_PREFIX } from "./constants";
import { Category } from "./types";

export const products: Category[] = [
  {
    name: "iPhone/iPad",
    products: [
      {
        name: "iPad Pro",
        appleComPath: `${PATH_PREFIX}${"/buy-ipad/ipad-pro"}`,
      },
      {
        name: "iPad Air",
        appleComPath: `${PATH_PREFIX}${"/buy-ipad/ipad-air"}`,
      },
      { name: "iPad", appleComPath: `${PATH_PREFIX}${"/buy-ipad/ipad"}` },
      {
        name: "iPad Mini",
        appleComPath: `${PATH_PREFIX}${"/buy-ipad/ipad-mini"}`,
      },
      {
        name: "iPhone 15",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15`,
      },
      {
        name: "iPhone 15 Pro",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15-pro`,
      },
      {
        name: "iPhone SE",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-se`,
      },
    ],
  },
  {
    name: "Macs",
    products: [
      {
        name: '13" MacBook Air M2',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/13-inch-m2`,
      },
      {
        name: '13" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/13-inch-m3`,
      },
      {
        name: '15" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/15-inch-m3`,
      },
      {
        name: "iMac",
        appleComPath: `${PATH_PREFIX}/buy-mac/imac`,
      },
      {
        name: '14" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro/14-inch`,
      },
      {
        name: '16" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro/16-inch`,
      },
      {
        name: "Mac Pro",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-pro/tower`,
      },
      { name: "Mac Studio", appleComPath: `${PATH_PREFIX}/buy-mac/mac-studio` },
      { name: "Mac Mini", appleComPath: `${PATH_PREFIX}/buy-mac/mac-mini` },
    ],
  },
  {
    name: "Music",
    products: [
      {
        name: "AirPods Pro 2",
        appleComRule: ["/airpods-pro", "a.ac-ln-button"],
      },
      {
        name: "AirPods 3",
        appleComRule: ["/airpods-3rd-generation", "a.ac-ln-button"],
      },
      {
        name: "AirPods 2",
        appleComRule: ["/airpods-2nd-generation", "a.ac-ln-button"],
      },
      {
        name: "AirPods Max",
        appleComPath: `${PATH_PREFIX}/buy-airpods/airpods-max`,
      },
      { name: "HomePod", appleComPath: `${PATH_PREFIX}/buy-homepod/homepod` },
      {
        name: "HomePod Mini",
        appleComPath: `${PATH_PREFIX}/buy-homepod/homepod-mini`,
      },
    ],
  },
  {
    name: "Other",
    products: [
      {
        name: "Vision Pro",
        appleComPath: `${PATH_PREFIX}/buy-vision/apple-vision-pro`,
      },
      {
        name: "Apple Watch Ultra",
        appleComPath: `${PATH_PREFIX}/buy-watch/apple-watch-ultra`,
      },
      {
        name: "Apple Watch",
        appleComPath: `${PATH_PREFIX}/buy-watch/apple-watch`,
      },
      {
        name: "Apple Watch SE",
        appleComPath: `${PATH_PREFIX}/buy-watch/apple-watch-se`,
      },
      {
        name: "Apple TV 4K",
        appleComPath: `${PATH_PREFIX}/buy-tv/apple-tv-4k`,
      },
    ],
  },
];
