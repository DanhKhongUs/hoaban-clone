import { Product } from "~/types/Product";
import { Products } from "./products";
import { SouvenirItem } from "./souvenir";
import { CatalogItem } from "./productCatalog";

export const allProducts: (Product & { type: string })[] = [
  ...Products.map((p) => ({ ...p, type: "product" })),
  ...SouvenirItem.map((p) => ({ ...p, type: "souvenir" })),
  ...CatalogItem.map((p) => ({ ...p, type: "catalog" })),
];
