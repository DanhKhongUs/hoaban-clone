import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import routes from "~/routes/routes";

function LostPassword() {
  return (
    <div className="bg-[#fdfbf5] py-10 px-4 sm:px-6 lg:px-8 text-[#4a4a4a] max-w-screen-xl mx-auto">
      <div className="max-w-3xl mx-auto">
        {/* Facebook Login */}
        <div className="flex justify-center mb-8">
          <button className="bg-[#3b5998] text-white font-semibold py-3 px-6 rounded-full flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-md">
            <FontAwesomeIcon icon={faFacebookF} />
            <span className="uppercase text-sm">Login with Facebook</span>
          </button>
        </div>

        {/* Main form container */}
        <div className="bg-white border border-[#e7e7e7] rounded-xl p-6 sm:p-10 shadow-sm">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-6">
            Quên mật khẩu?
          </h2>

          {/* Description */}
          <p className="text-center text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            Vui lòng nhập tên đăng nhập hoặc địa chỉ email. Bạn sẽ nhận được một
            liên kết tạo mật khẩu mới qua email.
          </p>

          {/* Input Field */}
          <div className="mb-5">
            <label className="block font-medium mb-2 text-sm sm:text-base">
              Tên đăng nhập hoặc email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-[#dcdcdc] px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#3c3c3c] text-sm sm:text-base"
              placeholder="Nhập tên đăng nhập hoặc email của bạn"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row-reverse sm:justify-between items-center gap-4 mt-6">
            <button className="bg-blue-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-600 transition w-full sm:w-auto">
              ĐẶT LẠI MẬT KHẨU
            </button>
            <Link
              to={routes.login}
              className="text-blue-500 hover:underline sm:text-base"
            >
              ← Trở về đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LostPassword;
