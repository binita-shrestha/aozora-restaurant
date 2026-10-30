
import type { MenuItem } from "@/types/menu";

// Temporary sample data for testing the menu.
export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Gyouza",
    category: "Lunch/Dinner",
    description: "Japanese-style pan-fried dumplings.",
    only: 390,
    set: 690,
  },
  {
    id: 2,
    name: "Chicken Donburi",
    category: "Donburi",
    price: 550,
  },
  {
    id: 3,
    name: "Vegetable Sushi Roll",
    category: "Sushi",
    vegetarian: true,
    price: 450,
  },
  {
    id: 4,
    name: "Chicken Ramen",
    category: "Ramen",
    price: 650,
  },
  {
    id: 5,
    name: "Vegetable Bento",
    category: "Bento Box",
    vegetarian: true,
    price: 700,
  },
  {
    id: 6,
    name: "Japanese Curry Rice",
    category: "Curry Rice",
    price: 500,
  },
  {
    id: 7,
    name: "Vegetable Udon",
    category: "Udon/Soba",
    vegetarian: true,
    price: 550,
  },
  {
    id: 8,
    name: "Fried Rice",
    category: "Rice",
    price: 400,
  },
  {
    id: 9,
    name: "Green Salad",
    category: "Salad",
    vegetarian: true,
    price: 300,
  },
  {
    id: 10,
    name: "Ice Cream",
    category: "Dessert",
    vegetarian: true,
    price: 250,
  },
  {
    id: 11,
    name: "House Lemonade",
    category: "Drinks",
    subcategory: "House Special",
    price: 250,
  },
  {
    id: 12,
    name: "Cola",
    category: "Drinks",
    subcategory: "Soft Drinks",
    price: 120,
  },
  {
    id: 13,
    name: "Green Tea",
    category: "Drinks",
    subcategory: "Hot",
    price: 150,
  },
  {
    id: 14,
    name: "Beer",
    category: "Drinks",
    subcategory: "Beer",
    price: 450,
  },
  {
    id: 15,
    name: "Whisky",
    category: "Drinks",
    subcategory: "Hard Drinks",
    price60ml: 300,
    price180ml: 900,
  },
];
