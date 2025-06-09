import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  return (
    <div className="bg-[#fdfbf5] pb-10 px-4 sm:px-6 lg:px-8 text-[#4a4a4a] max-w-screen-xl mx-auto">
      {/* Facebook Login */}
      <div className="flex justify-center py-8 gap-4">
        <button className="bg-[#3b5998] text-white font-semibold py-2 px-4 rounded-2xl flex items-center gap-2 transform hover:scale-110 transition-all duration-300">
          <FontAwesomeIcon icon={faFacebookF} /> LOGIN WITH FACEBOOK
        </button>
        <button className="bg-white border border-gray-300 text-[#4a4a4a] font-semibold py-2 px-4 rounded-2xl flex items-center gap-3 shadow-sm hover:bg-gray-50 transform hover:scale-110 transition-all duration-300">
          <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-lg" />
          LOGIN WITH GOOGLE
        </button>
      </div>

      {/* Main form container */}
      <div className="bg-white shadow-md rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10 border border-[#eee]">
        {/* Login Form */}
        <div>
          <h2 className="text-2xl font-bold text-[#b00058] mb-4">ĐĂNG NHẬP</h2>
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Tên tài khoản hoặc địa chỉ email{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-[#dcdcdc] px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#c30069]"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Mật khẩu <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full border border-[#dcdcdc] px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#c30069]"
            />
          </div>
          <div className="mb-4 flex items-center space-x-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="font-medium">
              Ghi nhớ mật khẩu
            </label>
          </div>
          <button className="bg-[#c30069] text-white px-6 py-2 rounded font-semibold hover:bg-[#a20057] transition">
            ĐĂNG NHẬP
          </button>
          <div className="mt-4">
            <a href="#" className="text-[#c30069] font-medium hover:underline">
              Quên mật khẩu?
            </a>
          </div>
        </div>

        {/* Register Form */}
        <div>
          <h2 className="text-2xl font-bold text-[#b00058] mb-4">ĐĂNG KÝ</h2>
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Địa chỉ email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-[#dcdcdc] px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#c30069]"
            />
          </div>
          <p className="text-gray-700 mb-4">
            Mật khẩu sẽ được gửi đến email của bạn.
          </p>
          <button className="bg-[#c30069] text-white px-6 py-2 rounded font-semibold hover:bg-[#a20057] transition">
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
