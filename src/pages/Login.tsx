import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import routes from "~/routes/routes";

function Login() {
  return (
    <div className="bg-[#fdfbf5] pb-10 px-4 sm:px-6 lg:px-8 text-[#4a4a4a] max-w-screen-xl mx-auto">
      {/* Facebook Login */}
      <div className="flex justify-center py-8 gap-4">
        <button className="bg-[#3b5998] text-white font-semibold py-3 px-6 rounded-full flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-md">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="uppercase text-sm">Login with Facebook</span>
        </button>
      </div>

      {/* Main form container */}
      <div className="bg-white border border-[#e7e7e7] rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10">
        {/* Login Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#3c3c3c]">ĐĂNG NHẬP</h2>
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Tên tài khoản hoặc địa chỉ email{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-[#dcdcdc] px-3 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#3c3c3c]"
              placeholder="Nhập tên tài khoản..."
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Mật khẩu <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full border border-[#dcdcdc] px-3 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#3c3c3c]"
              placeholder="Nhập mật khẩu..."
            />
          </div>
          <div className="mb-4 flex items-center space-x-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="font-medium text-[#3c3c3c]">
              Ghi nhớ mật khẩu
            </label>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition">
            ĐĂNG NHẬP
          </button>
          <div className="mt-4">
            <Link
              to={routes.lostpassword}
              className="text-blue-500 font-medium hover:underline"
            >
              Quên mật khẩu?
            </Link>
          </div>
        </div>

        {/* Register Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#3c3c3c]">ĐĂNG KÝ</h2>
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Địa chỉ email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-[#dcdcdc] px-3 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#3c3c3c]"
              placeholder="Nhập email..."
            />
          </div>
          <p className="text-sm text-[#4a4a4a] mb-4">
            Mật khẩu sẽ được gửi đến email của bạn.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition">
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
