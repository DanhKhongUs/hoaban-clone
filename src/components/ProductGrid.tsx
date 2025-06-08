import { Product } from "~/types/Product";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  CardComponent?: React.FC<{ product: Product }>;
};

export default function ProductGrid({
  products,
  CardComponent = ProductCard,
}: ProductGridProps) {
  return (
    <section className="w-full bg-[#fdfbf5] py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
