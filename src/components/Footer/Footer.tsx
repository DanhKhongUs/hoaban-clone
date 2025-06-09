import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#fefaf1] max-w-screen-xl mx-auto border-t border-[#e5e5e5]">
      <div className="px-6 py-10 flex flex-col md:flex-row md:justify-between gap-10">
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-bold mb-2 text-[#4a4a4a]">
            LIÊN HỆ VỚI CHÚNG TÔI
          </h3>
          <hr className="w-8 border border-[#c0b49f] mb-4" />
          <p className="mb-2 text-base text-gray-900">
            <FontAwesomeIcon icon={faPhone} className="text-[#4a4a4a] mr-3" />
            <span className="text-[#4a4a4a] font-bold">
              0914.268.535 - 0966.031.270
            </span>
          </p>
          <p className="text-base text-gray-700">
            Giờ làm việc: Thứ 2 - Thứ 7 từ <strong>8:00</strong> đến{" "}
            <strong>21:30</strong>, Chủ Nhật <strong>8:30</strong> đến{" "}
            <strong>17:30</strong>
          </p>

          <div className="mt-4 text-gray-800">
            <p className="font-bold mb-1">
              <FontAwesomeIcon icon={faHouse} className="mr-2 text-[#4a4a4a]" />
              HOA BAN FOOD™
            </p>
            <p>
              Nhà số 7, Khu liền kề Minori, 67A Trương Định, Quận Hai Bà Trưng,
              Hà Nội
            </p>
          </div>
        </div>

        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-bold mb-2 text-[#4a4a4a]">FACEBOOK</h3>
          <hr className="w-8 border border-[#c0b49f] mb-4" />
          <div className="bg-gray-100 h-52 rounded-xl shadow-inner flex items-center justify-center text-gray-400 text-sm">
            Facebook Plugin (chèn sau)
          </div>
        </div>

        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-bold mb-2 text-[#4a4a4a]">YOUTUBE</h3>
          <hr className="w-8 border border-[#c0b49f] mb-4" />
          <div className="space-y-6">
            {[1, 2].map((_, index) => (
              <Link
                key={index}
                to="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-90 transition"
              >
                <img
                  src="https://yt3.ggpht.com/ytc/AIdro_nJm8tQFtYxW-vEA1LronkpQfqew5ei43QbBF1wyo0f8I8=s48-c-k-c0x00ffffff-no-rj"
                  alt="HOA BAN CAMP"
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    HOA BAN CAMP
                  </p>
                  <div className="bg-red-600 text-white text-xs px-2 py-1 rounded inline-flex items-center gap-1 mt-1">
                    <FontAwesomeIcon icon={faYoutube} />
                    <span>YouTube</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#4a4a4a] text-white text-center text-sm py-4">
        © 2025 HOA BAN FOOD™. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
