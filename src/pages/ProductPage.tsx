import { faClock, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { allProducts } from "~/data/allProduct";
import ProductCard from "~/components/ProductCard";
import Pagination from "~/components/PaginationProps";

function ProductPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProducts = allProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="bg-[#fdfbf5] min-h-screen pb-4 max-w-screen-xl mx-auto">
      {/* Header lọc và thông tin kết quả */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-semibold text-[#4a4a4a] mb-2 md:mb-0">
          SẢN PHẨM
          <hr className="w-12 border-none rounded mb-6 bg-[#c0b49f] h-[3px]" />
        </h2>
        <div className="text-sm text-gray-700">
          <span>
            Hiển thị {startIndex + 1}–
            {Math.min(startIndex + ITEMS_PER_PAGE, allProducts.length)} của{" "}
            <strong>{allProducts.length}</strong> kết quả
          </span>
          <select className="border border-gray-300 bg-white px-3 py-2 rounded text-sm ml-4 focus:outline-none focus:ring-1 focus:ring-gray-400">
            <option>Thứ tự theo mức độ phổ biến</option>
            <option>Mới nhất</option>
            <option>Giá: thấp đến cao</option>
            <option>Giá: cao xuống thấp</option>
          </select>
        </div>
      </div>

      {/* Hình ảnh cửa hàng */}
      <div className="w-full overflow-hidden shadow mb-6 max-w-7xl mx-auto">
        <img
          src="https://hoabanfood.com/wp-content/uploads/HTX-HBF-Gold-small.jpg"
          alt="Header"
          className="w-full sm:h-[280px] md:h-[360px] lg:h-[480px] object-cover "
        />
      </div>

      {/* Thông tin liên hệ */}
      <div className="bg-white p-6 rounded-2xl shadow max-w-7xl mx-auto space-y-6">
        <p className="text-base leading-relaxed text-gray-800">
          Tất cả các sản phẩm đều gửi qua các Công ty giao hàng tới tận địa chỉ
          quý anh chị trên cả nước, nhận hàng rồi thanh toán trực tiếp cho nhân
          viên giao hàng. Hoặc ở Hà Nội, mời Quý Anh Chị ghé thăm{" "}
          <span className="font-semibold text-pink-600">HOA BAN FOOD™</span> tại
          địa chỉ sau:
        </p>

        <div className="space-y-4 text-base text-gray-800">
          <div className="flex items-start">
            <FontAwesomeIcon
              icon={faHouse}
              className="text-pink-700 mt-1 mr-3 w-5 h-5"
            />
            <div>
              <div className="font-bold text-lg">HOA BAN FOOD™</div>
              <div>
                Nhà số 7, Khu liên kề Minori, 67A Trương Định, Quận Hai Bà
                Trưng, Hà Nội
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-pink-600 mt-1 mr-3 w-5 h-5"
            />
            <div>
              <div className="font-bold">
                Hotline: <span className="text-gray-900">0914.268.535</span> |{" "}
                <span className="text-gray-900">0966.031.270</span>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <FontAwesomeIcon
              icon={faClock}
              className="text-yellow-600 mt-1 mr-3 w-5 h-5"
            />
            <div>
              Giờ làm việc: Thứ 2 – Thứ 7 từ 8:00 đến 21:30 | Chủ Nhật từ 8:30
              đến 17:30
            </div>
          </div>
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="px-4">
        {visibleProducts.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">
            Không có sản phẩm nào.
          </p>
        ) : (
          <>
            <section className="w-full max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id + product.type}
                  product={product}
                />
              ))}
            </section>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
