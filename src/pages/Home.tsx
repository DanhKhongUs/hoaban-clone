import FoodSlider from "~/components/FoodSlider";
import { souvenirItem } from "~/data/souvenir";
import ProductGrid from "~/components/ProductGrid";
import SectionTitle from "~/components/SectionTitle";
import { Product } from "~/types/Product";
import SouvenirCard from "~/components/SouvenirCard";
import { products } from "~/data/products";

function Home() {
  return (
    <div className="min-h-screen bg-[#fdfbf5] text-[#4a4a4a] flex flex-col items-center pb-4 max-w-screen-xl mx-auto">
      {/* Header Section */}
      <div className="relative w-full">
        <img
          src="https://hoabanfood.com/wp-content/uploads/Di-va-viet-3-1100x469.jpg"
          alt="Header"
          className="w-full  sm:h-[280px] md:h-[360px] lg:h-[480px] object-cover "
        />
      </div>

      {/* Slogan Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-screen-xl">
        <SectionTitle
          title="QUÀ ĐƯỢC CHỌN NHIỀU NHẤT"
          subtitle="Món ngon & dược liệu quý từ bản, thân mến gửi quý anh chị em ở khắp mọi miền Tổ Quốc!"
        />
      </div>

      {/* Gift Products Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-screen-xl">
        <ProductGrid products={products} />
      </div>

      {/* Banner Image Section */}
      <div className="w-full mt-6">
        <FoodSlider />
      </div>

      {/* Other Products Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-screen-xl mt-4">
        <SectionTitle title="CÁC SẢN PHẨM KHÁC" />
        <ProductGrid products={products} />
      </div>

      {/* Souvenir Products Section */}
      <div className="w-full bg-[#fdfbf5] py-4 px-4 sm:px-6 md:px-10">
        <SectionTitle title="QUÀ LƯU NIỆM" />
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {souvenirItem.map((item: Product) => (
            <SouvenirCard
              key={item.id}
              souvenir={{ ...item, type: "souvenir" }}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;
