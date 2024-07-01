import { PATH_PREFIX } from "./constants";
import {
  mac_pro,
  mac_studio,
  macbook_pro,
  macbook_air,
  mac_mini,
  airpods,
  airpods_max,
  homepod,
  homepod_mini,
  ipad_pro,
  ipad_air,
  ipad,
  ipad_mini,
  iphone_15,
  iphone_15_pro,
  iphone_se,
} from "./selectors";
import { Category } from "./types";

export const products: Category[] = [
  {
    name: "iPhone/iPad",
    products: [
      {
        name: "iPad Pro",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-pro`,
        selector: ipad_pro,
      },
      {
        name: "iPad Air",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-air`,
        selector: ipad_air,
      },
      {
        name: "iPad",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad`,
        selector: ipad,
      },
      {
        name: "iPad Mini",
        appleComPath: `${PATH_PREFIX}/buy-ipad/ipad-mini`,
        selector: ipad_mini,
      },
      {
        name: "iPhone 15",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15`,
        selector: iphone_15,
      },
      {
        name: "iPhone 15 Pro",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-15-pro`,
        selector: iphone_15_pro,
      },
      {
        name: "iPhone SE",
        appleComPath: `${PATH_PREFIX}/buy-iphone/iphone-se`,
        selector: iphone_se,
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
        selector: macbook_air,
      },
      {
        name: '13" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/13-inch-m3`,
        config: "/13-inch-m3",
        selector: macbook_air,
      },
      {
        name: '15" MacBook Air M3',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-air/15-inch-m3`,
        config: "/15-inch-m3",
        selector: macbook_air,
      },
      {
        name: "iMac",
        appleComPath: `${PATH_PREFIX}/buy-mac/imac`,
        selector: "imac",
      },
      {
        name: '14" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro/14-inch`,
        config: "/14-inch",
        selector: macbook_pro,
      },
      {
        name: '16" MacBook Pro',
        appleComPath: `${PATH_PREFIX}/buy-mac/macbook-pro/16-inch`,
        config: "/16-inch",
        selector: macbook_pro,
      },
      {
        name: "Mac Pro",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-pro`,
        selector: mac_pro,
      },
      {
        name: "Mac Studio",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-studio`,
        selector: mac_studio,
      },
      {
        name: "Mac Mini",
        appleComPath: `${PATH_PREFIX}/buy-mac/mac-mini`,
        selector: mac_mini,
      },
    ],
  },
  {
    name: "Music",
    products: [
      {
        name: "AirPods Pro 2",
        appleComRule: ["/airpods-pro", "a.ac-ln-button"],
        selector: airpods,
      },
      {
        name: "AirPods 3",
        appleComRule: ["/airpods-3rd-generation", "a.ac-ln-button"],
        selector: airpods,
      },
      {
        name: "AirPods 2",
        appleComRule: ["/airpods-2nd-generation", "a.ac-ln-button"],
        selector: airpods,
      },
      {
        name: "AirPods Max",
        appleComPath: `${PATH_PREFIX}/buy-airpods/airpods-max`,
        selector: airpods_max,
      },
      {
        name: "HomePod",
        appleComPath: `${PATH_PREFIX}/buy-homepod/homepod`,
        selector: homepod,
      },
      {
        name: "HomePod Mini",
        appleComPath: `${PATH_PREFIX}/buy-homepod/homepod-mini`,
        selector: homepod_mini,
      },
    ],
  },
];
