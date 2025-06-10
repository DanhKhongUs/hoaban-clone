import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import HeadlessTippy from "@tippyjs/react/headless";

import {
  faFacebookF,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCartShopping,
  faRightFromBracket,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Search from "../Search/Search";
import routes from "~/routes/routes";
import Navbar from "./Navbar";
import NavbarToggle from "./NavbarToggle";
import { useCart } from "~/context/CartContext";

const currentUser = true;
const MENU_ITEMS = [
  {
    title: "Đơn hàng",
    to: "",
  },
  {
    title: "Tải xuống",
    to: "",
  },
  {
    title: "Địa chỉ",
    to: "",
  },
  {
    title: "Tài khoản",
    to: "",
  },
];

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 856);

  const { cart, removeFromCart } = useCart();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 856);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <>
      {/* Top bar */}
      <div className="max-w-screen-xl mx-auto bg-[#f7f5ef] text-[#4a4a4a] text-xs sm:text-sm border-b border-[#e0dacb]">
        <div className="flex flex-col sm:flex-row justify-between items-center py-1.5 md:py-2 px-3 md:px-4 gap-1.5 text-center sm:text-left">
          <div>
            HOTLINE: <strong className="text-[#1d1d1d]">0914.268.535</strong>
          </div>
          <div className="flex items-center justify-center gap-2">
            <a href="#" className="text-base hover:text-[#c0b49f]">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-base hover:text-[#c0b49f]">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" className="text-base hover:text-[#c0b49f]">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <span className="ml-2 font-semibold hidden md:inline">
              + HOA BAN CAMP™
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#fdfbf5] shadow-md max-w-screen-xl mx-auto">
        <div className="border-b border-[#e0dacb] px-3 md:px-4 py-2 md:py-3 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          {/* Mobile view: Logo + Menu + Cart */}
          <div className="flex items-center justify-between w-full md:hidden ">
            <button
              onClick={() => setIsNavbarOpen(true)}
              className="text-[#4a4a4a] focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} size="xl" />
            </button>

            <Link
              to={routes.home}
              onClick={() => window.scrollTo(0, 0)}
              className="flex flex-col items-center"
            >
              <img
                src="/logo.png"
                alt="logo"
                className="h-20 w-20 object-contain"
              />
              <p className="text-[10px] leading-relaxed text-gray-800 hidden sm:block  font-semibold">
                SẠCH - NGON - CHẤT LƯỢNG
              </p>
            </Link>

            <Link
              to={routes.cart}
              className="text-[#4a4a4a] hover:text-[#c0b49f]"
            >
              <FontAwesomeIcon icon={faCartShopping} size="xl" />
            </Link>
          </div>

          {/* Logo  */}
          <div className="hidden md:flex justify-center md:w-28">
            <Link to={routes.home} onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/logo.png"
                alt="logo"
                className="h-16 w-16 md:h-28 md:w-28 object-contain"
              />
            </Link>
          </div>

          {/* Search  */}
          <div className="hidden md:block md:flex-1 max-w-[600px]">
            <Search />
          </div>

          {/* Login + Cart  */}
          <div className="hidden md:flex items-center gap-4 text-sm md:text-base text-[#4a4a4a] ">
            {currentUser ? (
              <div>
                <HeadlessTippy
                  interactive
                  offset={[-50, 6]}
                  placement="bottom"
                  render={() => (
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-56 pt-4">
                      <div className="border-b px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link
                          to=""
                          className="w-full text-left font-medium text-gray-800"
                        >
                          UserName
                        </Link>
                      </div>
                      <div>
                        {MENU_ITEMS.map((item, index) => (
                          <Link
                            key={index}
                            to={item.to}
                            className="flex items-center gap-2 border-b px-4 py-2 hover:bg-gray-100 text-gray-800"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                      <div className="px-4 py-4 font-semibold hover:bg-gray-100 rounded-lg cursor-pointer">
                        <button className="w-full text-left text-gray-800">
                          <FontAwesomeIcon
                            icon={faRightFromBracket}
                            className="pr-2"
                          />
                          <span>Thoát</span>
                        </button>
                      </div>
                    </div>
                  )}
                >
                  <div className="flex items-center cursor-pointer">
                    <span className="font-semibold text-gray-700">
                      Tài khoản
                    </span>
                    <img
                      src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                      alt="User"
                      className="w-10 h-10 border rounded-full object-cover ml-2 mr-2 md:mr-4"
                    />
                  </div>
                </HeadlessTippy>
              </div>
            ) : (
              <>
                <Link to={routes.login} className="font-semibold ">
                  Đăng nhập / Đăng ký
                </Link>
              </>
            )}

            <div>
              <HeadlessTippy
                interactive
                placement="bottom"
                offset={[-85, 12]}
                render={() => (
                  <div>
                    {cart.length > 0 ? (
                      <div className="bg-white rounded-lg shadow-xl border w-80 p-5">
                        <div className="max-h-80 overflow-y-auto space-y-4">
                          {cart.map((item) => (
                            <div
                              key={item.product.id}
                              className="flex items-start gap-4 border-b pb-4 "
                            >
                              <img
                                src={item.product.img}
                                alt={item.product.name}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                              <div className="flex-1 space-y-1">
                                <h4 className=" font-semibold text-gray-800">
                                  {item.product.name}
                                </h4>
                                <p className=" text-gray-500">
                                  {item.quantity} ×{" "}
                                  {item.product.price.toLocaleString()}₫
                                </p>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-gray-400 hover:text-gray-500 transition"
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-center border-b-2 py-4">
                          <p className=" font-semibold text-gray-700">
                            Tổng cộng:
                            <span className="ml-1 text-base text-black">
                              {total.toLocaleString()}₫
                            </span>
                          </p>
                        </div>

                        <div className="mt-4 flex flex-col gap-2">
                          <Link to={routes.cart}>
                            <button className="w-full bg-pink-600 text-white py-2 font-semibold hover:bg-pink-700 transition rounded">
                              XEM GIỎ HÀNG
                            </button>
                          </Link>
                          <Link to={routes.checkout}>
                            <button className="w-full bg-pink-600 text-white py-2 font-semibold hover:bg-pink-700 transition rounded">
                              THANH TOÁN
                            </button>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white rounded-lg border shadow-xl w-80 p-6 text-center">
                        <p className="text-gray-500">Giỏ hàng đang trống</p>
                      </div>
                    )}
                  </div>
                )}
              >
                <div className="inline-flex items-center cursor-pointer">
                  <Link
                    to={routes.cart}
                    className="flex items-center gap-2 font-semibold text-gray-700  transition"
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>Giỏ hàng / {total.toLocaleString()}₫</span>
                  </Link>
                </div>
              </HeadlessTippy>
            </div>
          </div>
        </div>

        {/* Navbar render theo màn hình */}
        {isDesktop ? (
          <Navbar />
        ) : (
          <NavbarToggle isOpen={isNavbarOpen} setIsOpen={setIsNavbarOpen} />
        )}
      </div>
    </>
  );
}

export default Header;
