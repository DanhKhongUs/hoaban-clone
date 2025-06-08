import FoodSlider from "~/components/FoodSlider";
import ProductGrid from "~/components/ProductGrid";
import SectionTitle from "~/components/SectionTitle";
import { products } from "~/data/products";

function Combo() {
  return (
    <div className="min-h-screen bg-[#fdfbf5] text-[#4a4a4a] flex flex-col items-center pb-8 max-w-screen-xl mx-auto">
      {/* Banner Image Section */}
      <div className="w-full">
        <FoodSlider />
      </div>

      {/* Combo Section Title */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mt-6">
        <SectionTitle
          title="≡ COMBO SẢN PHẨM"
          subtitle="Các sản phẩm combo – nhiều hơn, tiết kiệm & tiện lợi hơn cho Quý anh chị lựa chọn và sử dụng cho Gia Đình mình!"
        />
      </div>

      {/* Combo Products */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mt-4">
        <ProductGrid products={products} />
      </div>

      {/* Single Product Section Title */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mt-10">
        <SectionTitle
          title="≡ SẢN PHẨM RIÊNG LẺ"
          subtitle="Hoặc chọn cho gia đình mình từng sản phẩm riêng lẻ phù hợp nhất như dưới đây!"
        />
      </div>

      {/* Single Products */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mt-4">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default Combo;
