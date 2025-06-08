import { useParams } from "react-router-dom";
import { useState } from "react";
import { allProducts } from "~/data/allProduct";

function ProductDetail() {
  const { id } = useParams();
  const productId = Number(id);
  const product = allProducts.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        Sản phẩm không tồn tại.
      </div>
    );
  }

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="max-w-7xl bg-[#fdfbf5] text-[#4a4a4a] mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      {/* Hình ảnh + Tag */}
      <div className="space-y-4">
        <div className="relative">
          <img
            src={product.img}
            alt={product.name}
            className="rounded-xl w-full h-auto object-cover"
          />
          {product.tag && (
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded shadow">
              {product.tag}
            </div>
          )}
        </div>
      </div>

      {/* Thông tin chi tiết */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-pink-800">{product.name}</h1>
        <p className="text-xl text-red-600 font-semibold">
          {parseInt(product.price.toString()).toLocaleString()}đ
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {product.description || "Đây là mô tả sản phẩm..."}
        </p>

        <div>
          <label className="font-medium">Số lượng:</label>
          <div className="flex items-center space-x-2 mt-1">
            <button
              onClick={decreaseQuantity}
              className="border px-3 py-1 rounded hover:bg-gray-100 cursor-pointer"
            >
              -
            </button>
            <span className="min-w-[24px] text-center">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="border px-3 py-1 rounded hover:bg-gray-100 cursor-pointer"
            >
              +
            </button>
          </div>
        </div>

        <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded shadow cursor-pointer">
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
