export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  soldOut?: boolean;
  tag?: string;
  description?: string;
  quantity?: number;
}
