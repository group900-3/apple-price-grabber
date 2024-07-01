import { PATH_PREFIX } from "./constants";
import { Category } from "./types";

export const products: Category[] = [
  {
    name: "iPhone/iPad",
    products: [
      {
        name: "iPad Pro",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-pro`,
        selector: "",
      },
      {
        name: "iPad Air",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-air`,
        selector: "",
      },
      {
        name: "iPad",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad`,
        selector: "",
      },
      {
        name: "iPad Mini",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-mini`,
        selector: "",
      },
      {
        name: "iPhone 15",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15`,
        selector: "",
      },
      {
        name: "iPhone 15 Pro",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15-pro`,
        selector: "",
      },
      {
        name: "iPhone SE",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-se`,
        selector: "",
      },
    ],
  },
  {
    name: "Macs",
    products: [
      {
        name: '13" MacBook Air M2',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/13-inch-m2`,
        config: "/13-inch-m2",
        selector: "",
      },
      {
        name: '13" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/13-inch-m3`,
        config: "/13-inch-m3",
        selector: "",
      },
      {
        name: '15" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/15-inch-m3`,
        config: "/15-inch-m3",
        selector: "",
      },
      {
        name: "iMac",
        appleComPath: `${PATH_PREFIX}/buy-mac/imac`,
        selector: "",
      },
      {
        name: '14" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro/14-inch`,
        config: "/14-inch",
        selector: "",
      },
      {
        name: '16" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro/16-inch`,
        config: "/16-inch",
        selector: "",
      },
      {
        name: "Mac Pro",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-pro`,
        selector: "",
      },
      {
        name: "Mac Studio",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-studio`,
        selector: "",
      },
      {
        name: "Mac Mini",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-mini`,
        selector: "",
      },
    ],
  },
  {
    name: "Music",
    products: [
      {
        name: "AirPods Pro 2",
        appleComRule: ["/airpods-pro", "a.ac-ln-button"],
        selector: "",
      },
      {
        name: "AirPods 3",
        appleComRule: ["/airpods-3rd-generation", "a.ac-ln-button"],
        selector: "",
      },
      {
        name: "AirPods 2",
        appleComRule: ["/airpods-2nd-generation", "a.ac-ln-button"],
        selector: "",
      },
      {
        name: "AirPods Max",
        appleComPath: `${PATH_PREFIX}/buy-airpods/airpods-max`,
        selector: "",
      },
      {
        name: "HomePod",
        appleComPath: `${PATH_PREFIX}/buy-homepod/homepod`,
        selector: "",
      },
      {
        name: "HomePod Mini",
        appleComPath: `${PATH_PREFIX}/buy-homepod/homepod-mini`,
        selector: "",
      },
    ],
  },
];
