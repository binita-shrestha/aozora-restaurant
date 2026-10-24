export type MenuItem = {
  id: number;
  name: string;
  category: string;
  description?: string;
  image?: string;
} & (
  | { price: number; only?: never; set?: never }
  | { price?: never; only: number; set: number }
);