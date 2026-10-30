import { menuCategories, drinkSubcategories } from "@/data/menuCategories";


export type MenuItem = {
  id: number;
  name: string;
  category: (typeof menuCategories)[number];
  subcategory?: (typeof drinkSubcategories)[number];
  description?: string;
  vegetarian?: boolean;
  image?: string;
} & (
  | {
      price: number;
      only?: never;
      set?: never;
      price60ml?: never;
      price180ml?: never;
    }
  | {
      price?: never;
      only: number;
      set: number;
      price60ml?: never;
      price180ml?: never;
    }
  | {
      price?: never;
      only?: never;
      set?: never;
      price60ml: number;
      price180ml: number;
    }
);
