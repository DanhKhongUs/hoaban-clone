import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { allProducts } from "~/data/allProduct";
import { productCardConfig } from "~/config/productCardConfig";
import ProductCatalog from "~/components/ProductCatalog";
import { useCart } from "~/context/CartContext";
import FeedbackForm from "~/components/FeedbackForm";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const productId = Number(id);
  const product = allProducts.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"mota" | "bosung" | "danhgia">(
    "mota"
  );

  if (!product) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        Sản phẩm không tồn tại.
      </div>
    );
  }

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10 bg-[#fdfbf5] text-[#4a4a4a]">
      {/* Left - Chi tiết sản phẩm */}
      <div className="md:pr-6 md:border-r md:border-gray-300">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Hình ảnh sản phẩm */}
          <div className="relative md:w-[60%]">
            <img
              src={product.img}
              alt={product.name}
              className="rounded-xl w-full h-[340px] object-cover"
            />
            {product.tag && (
              <div
                className={`absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full shadow-sm z-10
                ${productCardConfig.tagStyles.bgColor} ${productCardConfig.tagStyles.textColor}`}
              >
                {product.tag}
              </div>
            )}
            {product.soldOut && (
              <div
                className={`absolute inset-0 flex items-center justify-center text-xl font-bold
                ${productCardConfig.soldOutOverlay.bgColor} ${productCardConfig.soldOutOverlay.textColor}`}
              >
                {productCardConfig.soldOutLabel}
              </div>
            )}
          </div>

          {/* Thông tin sản phẩm */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-pink-800">{product.name}</h1>
            <p className="text-xl text-[#222] font-semibold">
              {productCardConfig.pricePrefix}{" "}
              {parseInt(product.price.toString()).toLocaleString()}đ
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              {product.description || "Đây là mô tả sản phẩm..."}
            </p>

            {/* Số lượng */}
            <div>
              <label className="font-medium">Số lượng:</label>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={decreaseQuantity}
                  className="border px-3 py-1 rounded bg-white hover:bg-gray-100 cursor-pointer"
                >
                  -
                </button>
                <span className="min-w-[24px] text-center">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="border px-3 py-1 rounded bg-white hover:bg-gray-100 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Nút thêm giỏ hàng */}
            <button
              onClick={handleAddToCart}
              className="mt-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded shadow cursor-pointer"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>

        {/* Tabs mô tả / bổ sung / đánh giá */}
        <div className="col-span-full mt-12 px-8">
          {/* Tab chọn */}
          <div className="border-b border-gray-300 mb-4">
            <ul className="flex space-x-6 text-sm font-semibold text-gray-600">
              {[
                { key: "mota", label: "MÔ TẢ" },
                { key: "bosung", label: "THÔNG TIN BỔ SUNG" },
                { key: "danhgia", label: "ĐÁNH GIÁ (0)" },
              ].map(({ key, label }) => (
                <li
                  key={key}
                  onClick={() => setActiveTab(key as typeof activeTab)}
                  className={`cursor-pointer pb-2 ${
                    activeTab === key
                      ? "border-b-2 border-pink-600 text-pink-700"
                      : ""
                  }`}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Nội dung từng tab */}
          <div className="text-[15px] text-gray-800 leading-relaxed space-y-4">
            {activeTab === "mota" && (
              <>
                <h2 className="text-2xl font-bold text-pink-800">
                  MẬT ONG RỪNG SÔNG ĐÀ
                </h2>
                <p className="text-blue-700 font-semibold">
                  Đang Khai Thác Mùa 2025 – Sẵn sàng giao hàng!
                </p>
                <p>
                  Mật Ong Rừng nguyên chất xịn 100% là phải đi tìm & trèo khai
                  thác từ các tổ ong rừng trong rừng già!...
                </p>
                <p>
                  Suốt 12 năm qua, Mật Ong Rừng của chúng tôi được quý anh chị
                  gần xa tin tưởng & ủng hộ, và là sản phẩm tạo nên uy tín &
                  thương hiệu cho
                  <strong className="text-pink-700 ml-1">HOA BAN FOOD™</strong>.
                </p>
                <p>
                  Chúng tôi khuyến khích các anh chị hãy tìm hiểu kỹ thông tin
                  về sản phẩm ở trang này...
                </p>
                <img
                  src="https://hoabanfood.com/wp-content/uploads/MOR-2024-end-season-banner-mobile-3.jpg"
                  alt="Hình ảnh người dân khai thác mật ong"
                  className="mt-6 w-full object-cover max-h-[500px]"
                />
              </>
            )}

            {activeTab === "bosung" && (
              <div>
                <h2 className="font-bold text-lg mb-4">
                  CÓ THỂ BẠN THÍCH
                  <hr className="w-8 border border-[#c0b49f]" />
                </h2>
              </div>
            )}

            {activeTab === "danhgia" && (
              <div>
                <h3 className="sm:text-lg md:text-2xl font-bold mb-2 text-[#4a4a4a]">
                  ĐÁNH GIÁ
                </h3>
                <hr className="w-12 border-none rounded mb-6 bg-[#c0b49f] h-[3px]" />
                <FeedbackForm />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right - Danh mục sản phẩm */}
      <div>
        <ProductCatalog />
      </div>
    </div>
  );
}

export default ProductDetail;
