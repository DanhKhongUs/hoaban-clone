import FoodSlider from "~/components/FoodSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHouse } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "~/components/SectionTitle";
import { Connect } from "~/data/connectItem";
import { useState } from "react";

interface ContactProps {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [form, setForm] = useState<ContactProps>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-[#fdfbf5] min-h-screen pb-10 px-4 sm:px-6 lg:px-8 text-[#4a4a4a] max-w-screen-xl mx-auto">
      <div className="w-full mb-10">
        <FoodSlider />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10">
        {/* === MAIN CONTENT === */}
        <div>
          <div className="space-y-6 text-base leading-relaxed text-gray-800 mb-10">
            <p>
              Kính mời quý anh chị ghé thăm{" "}
              <span className="text-pink-700 font-semibold">HOA BAN FOOD™</span>{" "}
              để được tư vấn, lựa chọn các sản phẩm chất lượng cao mà chúng tôi
              cùng anh chị em đồng bào Tây Bắc khai thác & cung cấp! Và tất
              nhiên, chúng tôi phục vụ giao hàng tận nhà trong nội thành Hà Nội!
            </p>
            <p>
              Còn đối với Quý anh chị chưa tiện để ghé thăm. Xin vui lòng đặt
              hàng trực tiếp trên website này, hoặc gọi trực tiếp đến hotline{" "}
              <span className="text-pink-700 font-semibold">0914.268.535</span>{" "}
              để được tư vấn & đặt hàng. Chúng tôi giao hàng tận nơi, thanh toán
              khi nhận hàng!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#4a4a4a]">
                LIÊN HỆ VỚI CHÚNG TÔI
                <hr className="w-8 border border-[#c0b49f]" />
              </h3>
              <p className="text-base text-gray-900">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#4a4a4a] mr-3"
                />
                <span className="font-bold">0914.268.535 - 0966.031.270</span>
              </p>
              <p className="text-gray-700">
                Giờ làm việc: Thứ 2 - Thứ 7 từ <strong>8:00</strong> đến{" "}
                <strong>21:30</strong>, Chủ Nhật <strong>8:30</strong> đến{" "}
                <strong>17:30</strong>
              </p>
              <div className="mt-4 text-gray-800">
                <p className="font-bold mb-1">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="mr-2 text-[#4a4a4a]"
                  />
                  HOA BAN FOOD™
                </p>
                <p>
                  Nhà số 7, Khu liền kề Minori, 67A Trương Định, Quận Hai Bà
                  Trưng, Hà Nội
                </p>
              </div>
              <div>
                <iframe
                  width="420"
                  height="280"
                  src="//maps.google.com/maps?q=HOA%20BAN%20FOOD&amp;output=embed"
                  title="HOA BAN FOOD"
                ></iframe>
              </div>
            </div>

            <div className="md:w-full">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#4a4a4a]">
                TRẢ LỜI
              </h3>
              <hr className="w-12 border-none rounded mb-6 bg-[#c0b49f] h-[3px]" />
              <form className="flex flex-col gap-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="p-3 rounded text-gray-900 bg-white outline-none border border-gray-300"
                  required
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="p-3 rounded text-gray-900 bg-white outline-none border border-gray-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="p-3 rounded text-gray-900 bg-white outline-none border border-gray-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#ff4d4d] text-white py-3 px-6 rounded hover:bg-[#ff3333] transition duration-300 self-start sm:self-end"
                >
                  PHẢN HỒI
                </button>
              </form>
            </div>
          </div>

          <SectionTitle title="≡ KẾT NỐI VỚI CHÚNG TÔI TRÊN..." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 mb-12">
            {Connect.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white shadow-md p-4 text-center space-y-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[#c10058] text-lg font-bold uppercase">
                  {item.name}
                </h3>
                <p className="text-[#c10058] text-sm uppercase tracking-wide opacity-70">
                  {item.title}
                </p>
              </a>
            ))}
          </div>

          <SectionTitle title="≡ TÀI KHOẢN NGÂN HÀNG..." />
          <div className="text-base leading-relaxed text-gray-800 space-y-4">
            <p>
              Đối với quý khách chuyển khoản thanh toán qua Ngân hàng, vui lòng
              thanh toán qua tài khoản dưới đây. Vui lòng ghi rõ ID đơn hàng,
              hoặc số điện thoại người thanh toán trong phần ghi chú của chuyển
              khoản.
            </p>
            <ul className="list-disc ml-6">
              <li>Ngân hàng gì gì đó</li>
              <li>Số tài khoản: xxx</li>
              <li>Chủ tài khoản</li>
            </ul>
            <div className="w-full flex justify-center">
              <img
                src="https://hoabanfood.com/wp-content/uploads/Vietcombank-QR-Code-2023-2.jpg"
                alt="Mã QR"
                className="w-96 mt-4"
              />
            </div>
          </div>
        </div>

        {/* === SIDE MENU === */}
        <aside className="space-y-8">
          <div>
            <h3 className="font-bold text-lg mb-2 border-b pb-2">
              DANH MỤC SP
              <hr className="w-8 border border-[#c0b49f]" />
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>
                <a href="#" className="hover:text-pink-700">
                  MẬT ONG & TAM THẤT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-700">
                  THỰC PHẨM & GIA VỊ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-700">
                  RƯỢU & ĐỒ NGÂM RƯỢU
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-700">
                  QUÀ LƯU NIỆM
                </a>
              </li>
            </ul>
          </div>

          <div>
            <img
              src="https://hoabanfood.com/wp-content/uploads/Mat-Ong-Rung-Song-Da-2022-banner-1.jpg"
              alt="Banner"
              className="w-full rounded shadow"
            />
          </div>

          <div>
            <h4 className="font-bold text-base border-b pb-2 mb-2">
              SẢN PHẨM VỪA XEM
              <hr className="w-8 border border-[#c0b49f]" />
            </h4>
            <div className="flex items-center space-x-3">
              <img
                src="https://hoabanfood.com/wp-content/uploads/2019/07/Ruou-Cu-Tam-That.jpg"
                alt="Rượu củ tam thất"
                className="w-12 h-12 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-[#222]">
                  RƯỢU CỦ TAM THẤT
                </p>
                <p className="text-sm text-[#444]">
                  Giá từ: <strong>890,000₫</strong>
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://hoabanfood.com/wp-content/uploads/Mat-Ong-Rung-Song-Da-2022-banner-1.jpg"
                alt="Banner"
                className="w-full rounded shadow"
              />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-base border-b pb-2 mb-2">
              SẢN PHẨM NỔI BẬT
              <hr className="w-8 border border-[#c0b49f]" />
            </h4>
            <div className="flex items-center space-x-3">
              <img
                src="https://hoabanfood.com/wp-content/uploads/2019/07/Ruou-Cu-Tam-That.jpg"
                alt="Rượu củ tam thất"
                className="w-12 h-12 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-[#222]">
                  RƯỢU CỦ TAM THẤT
                </p>
                <p className="text-sm text-[#444]">
                  Giá từ: <strong>890,000₫</strong>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src="https://hoabanfood.com/wp-content/uploads/2019/07/Ruou-Cu-Tam-That.jpg"
                alt="Rượu củ tam thất"
                className="w-12 h-12 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-[#222]">
                  RƯỢU CỦ TAM THẤT
                </p>
                <p className="text-sm text-[#444]">
                  Giá từ: <strong>890,000₫</strong>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src="https://hoabanfood.com/wp-content/uploads/2019/07/Ruou-Cu-Tam-That.jpg"
                alt="Rượu củ tam thất"
                className="w-12 h-12 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-[#222]">
                  RƯỢU CỦ TAM THẤT
                </p>
                <p className="text-sm text-[#444]">
                  Giá từ: <strong>890,000₫</strong>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base border-b pb-2 mb-2">
              ĐỒ CẮM TRẠI DÃ NGOẠI
              <hr className="w-8 border border-[#c0b49f]" />
            </h4>
          </div>
          <div>
            <img
              src="https://hoabanfood.com/wp-content/uploads/Mat-Ong-Rung-Song-Da-2022-banner-1.jpg"
              alt="Banner"
              className="w-full rounded shadow"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
