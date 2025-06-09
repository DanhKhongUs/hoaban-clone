import { Product } from "~/types/Product";
import { products } from "./products";
import { souvenirItem } from "./souvenir";
import { CatalogItem } from "./productCatalog";

export const allProducts: (Product & { type: string })[] = [
  ...products.map((p) => ({ ...p, type: "product" })),
  ...souvenirItem.map((p) => ({ ...p, type: "souvenir" })),
  ...CatalogItem.map((p) => ({ ...p, type: "catalog" })),
];
