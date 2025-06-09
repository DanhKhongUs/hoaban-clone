import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCart } from "~/context/CartContext";
import routes from "~/routes/routes";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-10 bg-[#fdfbf5] px-4 sm:px-6 lg:px-8 text-[#4a4a4a] max-w-screen-xl mx-auto">
        <p className="text-base leading-relaxed mb-6 sm:mb-8">
          Cám ơn Quý Khách đã tin dùng & ủng hộ các sản phẩm do anh chị em chúng
          tôi khai thác & chế biến. Xin vui lòng điền các thông tin cần thiết ở
          bước kế tiếp để đặt hàng. Cần tư vấn thêm, xin vui lòng gọi hotline:
          <span className="text-[#c30069] font-semibold">
            {" "}
            0914.268.535{" "}
          </span>{" "}
          (Thứ 2 - thứ 7 từ 8:00 đến 21:30 |{" "}
          <span className="text-blue-600 italic">
            Chủ Nhật từ 8:30 đến 17:30
          </span>
          )
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Chưa có sản phẩm nào trong giỏ hàng.
        </h2>
        <Link
          to={routes.home}
          className="bg-[#4a4a4a] text-white px-6 py-2 rounded hover:bg-[#434343]"
        >
          QUAY TRỞ LẠI CỬA HÀNG
        </Link>
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#fdfbf5] px-4 sm:px-6 lg:px-8 py-10 text-[#4a4a4a] max-w-screen-xl mx-auto">
      <p className="text-base text-center leading-relaxed mb-6 sm:mb-8 ">
        Cám ơn Quý Khách đã tin dùng & ủng hộ các sản phẩm do anh chị em chúng
        tôi khai thác & chế biến. Xin vui lòng điền các thông tin cần thiết ở
        bước kế tiếp để đặt hàng. Cần tư vấn thêm, xin vui lòng gọi hotline:
        <span className="text-[#c30069] font-semibold"> 0914.268.535 </span>
        (Thứ 2 - thứ 7 từ 8:00 đến 21:30 |{" "}
        <span className="text-blue-600 italic">Chủ Nhật từ 8:30 đến 17:30</span>
        )
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Sản phẩm */}
        <div className="md:col-span-2 bg-white border border-gray-500 p-6 rounded">
          <h2 className="font-bold text-lg mb-4">
            SẢN PHẨM
            <hr className="w-8 border border-[#c0b49f]" />
          </h2>
          <div>
            <div className="grid grid-cols-6 font-bold text-sm uppercase text-[#4a4a4a] border-b py-2">
              <div className="col-span-1 text-center"></div>
              <div className="col-span-2">Sản phẩm</div>
              <div className="col-span-1 text-center">Giá</div>
              <div className="col-span-1 text-center">Số lượng</div>
              <div className="col-span-1 text-right pr-2">Tạm tính</div>
            </div>
            {cart.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="grid grid-cols-6 items-center py-4 border-b text-[#4a4a4a]"
              >
                <div className="col-span-1 flex justify-center">
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-gray-500 hover:text-gray-600 text-xl"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>

                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-20 h-16 object-cover"
                  />
                  <p className="font-semibold uppercase text-sm">
                    {product.name}
                  </p>
                </div>

                <div className="col-span-1 text-center font-medium">
                  {product.price.toLocaleString()}₫
                </div>

                <div className="col-span-1 flex justify-center">
                  <div className="flex border border-gray-300 rounded text-base">
                    <span className="px-3">{quantity}</span>
                  </div>
                </div>

                <div className="col-span-1 text-right font-medium">
                  {(product.price * quantity).toLocaleString()}₫
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to={routes.product}
              className="inline-block border-2 border-[#c30069] text-[#c30069] font-semibold px-4 py-2 rounded hover:bg-[#c30069] hover:text-white transition"
            >
              ← TIẾP TỤC XEM SẢN PHẨM
            </Link>
          </div>
        </div>

        {/* Cộng giỏ hàng */}
        <div className="bg-white border border-gray-500 p-6 rounded">
          <h3 className="font-bold text-lg mb-4">CỘNG GIỎ HÀNG</h3>
          <div className="space-y-2">
            <div className="flex justify-between font-semibold border-b pb-2">
              <span>Tạm tính</span>
              <span>{total.toLocaleString()}đ</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Tổng</span>
              <span>{total.toLocaleString()}đ</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="mt-6 block text-center bg-[#c30069] text-white py-3 rounded font-semibold hover:bg-[#a10056] transition"
          >
            TIẾN HÀNH THANH TOÁN
          </Link>

          <div className="mt-6">
            <p className="flex items-center text-[#c30069] font-semibold mb-2">
              <span className="mr-2">🏷️</span> Phiếu ưu đãi
            </p>
            <input
              type="text"
              placeholder="Mã ưu đãi"
              className="w-full border border-gray-300 px-3 py-2 rounded mb-2"
            />
            <button className="w-full bg-[#c30069] border border-[#4a4a4a] text-white py-2 rounded hover:bg-[#a10056] transition">
              Áp dụng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
