// Header.tsx
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

const MENU_ITEMS = [
  { title: "Đơn hàng", to: "/myaccount/orders" },
  { title: "Tải xuống", to: "/myaccount/downloads" },
  { title: "Địa chỉ", to: "/myaccount/address" },
  { title: "Tài khoản", to: "/myaccount/profile" },
];

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 856);
  const { cart, removeFromCart } = useCart();

  const currentUser = false;

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

  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Top bar */}
      <div className="max-w-screen-xl mx-auto bg-[#f7f5ef] text-[#4a4a4a] text-xs sm:text-sm border-b border-[#e0dacb]">
        <div className="flex flex-col sm:flex-row justify-between items-center py-1.5 md:py-2 px-3 md:px-4 gap-1.5 text-center sm:text-left">
          <div>
            HOTLINE: <strong className="text-[#1d1d1d]">0914.268.535</strong>
          </div>
          <div className="flex items-center gap-2">
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
        <div className="border-b border-[#e0dacb] px-3 md:px-4  flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Mobile: Logo + Menu + Cart */}
          <div className="flex items-center justify-between w-full md:hidden">
            <button
              onClick={() => setIsNavbarOpen(true)}
              className="text-[#4a4a4a]"
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
                className="w-20 h-20 object-contain"
              />
            </Link>

            <Link
              to={routes.cart}
              className="text-[#4a4a4a] hover:text-[#c0b49f]"
            >
              <button className="relative w-8 h-8 flex items-center justify-center text-[20px] text-gray-800">
                <FontAwesomeIcon icon={faCartShopping} size="xl" />
                {quantity > 0 && (
                  <span className="absolute top-[-8px] right-[-8px] bg-pink-700 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                    {quantity}
                  </span>
                )}
              </button>
            </Link>
          </div>

          {/* Search mobile */}
          {!isDesktop && (
            <div className="w-full px-2 pb-2">
              <Search />
            </div>
          )}

          {/* Desktop: Logo */}
          <div className="hidden md:flex justify-center md:w-28">
            <Link to={routes.home} onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/logo.png"
                alt="logo"
                className="h-28 w-28 object-contain"
              />
            </Link>
          </div>

          {/* Search desktop */}
          <div className="hidden md:flex md:flex-1 justify-center px-4">
            <div className="w-full max-w-[600px]">
              <Search />
            </div>
          </div>

          {/* Account + Cart desktop */}
          <div className="hidden md:flex items-center gap-4 text-sm md:text-base text-[#4a4a4a] pr-4">
            {currentUser ? (
              <div>
                <HeadlessTippy
                  interactive
                  offset={[-50, 6]}
                  placement="bottom"
                  render={() => (
                    <div className="bg-white rounded-lg shadow-lg border w-56 pt-4">
                      <Link to={routes.myaccount} className="font-medium ">
                        <div className="border-b px-4 py-3 hover:bg-gray-100">
                          UserName
                        </div>
                      </Link>
                      {MENU_ITEMS.map((item, index) => (
                        <Link
                          key={index}
                          to={item.to}
                          className="block border-b px-4 py-3 hover:bg-gray-100"
                        >
                          {item.title}
                        </Link>
                      ))}
                      <div className="px-4 py-4 font-semibold hover:bg-gray-100">
                        <button className="w-full text-left text-gray-800">
                          <FontAwesomeIcon
                            icon={faRightFromBracket}
                            className="pr-2"
                          />
                          Thoát
                        </button>
                      </div>
                    </div>
                  )}
                >
                  <Link
                    to={routes.myaccount}
                    className="flex items-center cursor-pointer"
                  >
                    <span className="font-semibold text-gray-700">
                      Tài khoản
                    </span>
                    <img
                      src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                      alt="User"
                      className="w-10 h-10 border rounded-full object-cover ml-2"
                    />
                  </Link>
                </HeadlessTippy>
              </div>
            ) : (
              <Link to={routes.login} className="font-semibold">
                Đăng nhập / Đăng ký
              </Link>
            )}

            <HeadlessTippy
              interactive
              placement="bottom"
              offset={[-80, 12]}
              render={() => (
                <div className="bg-white rounded-lg shadow-xl border w-80 p-5">
                  {cart.length > 0 ? (
                    <>
                      <div className="max-h-80 overflow-y-auto space-y-4">
                        {cart.map((item) => (
                          <div key={item.product.id}>
                            <div className="flex items-start gap-4 border-b pb-4">
                              <Link to={`cart/${item.product.id}`}>
                                <img
                                  src={item.product.img}
                                  alt={item.product.name}
                                  className="w-16 h-16 object-cover rounded-lg"
                                />
                              </Link>
                              <div className="flex-1 space-y-1">
                                <Link to={`cart/${item.product.id}`}>
                                  <h4 className="font-semibold text-gray-700 hover:text-gray-900">
                                    {item.product.name}
                                  </h4>
                                  <p className="text-gray-500">
                                    {item.quantity} ×{" "}
                                    {item.product.price.toLocaleString()}₫
                                  </p>
                                </Link>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between border-t pt-4 font-semibold">
                        <span>Tổng cộng:</span>
                        <span className="text-black">
                          {total.toLocaleString()}₫
                        </span>
                      </div>
                      <div className="mt-4 flex flex-col gap-2">
                        <Link to={routes.cart}>
                          <button className="w-full bg-pink-600 text-white py-2 font-semibold hover:bg-pink-700 rounded">
                            XEM GIỎ HÀNG
                          </button>
                        </Link>
                        <Link to={routes.checkout}>
                          <button className="w-full bg-pink-600 text-white py-2 font-semibold hover:bg-pink-700 rounded">
                            THANH TOÁN
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <p className="text-center text-gray-500">
                      Giỏ hàng đang trống
                    </p>
                  )}
                </div>
              )}
            >
              <div className="flex items-center cursor-pointer">
                <button className="relative w-10 h-10 flex items-center justify-center text-[20px] text-gray-800">
                  <FontAwesomeIcon icon={faCartShopping} />
                  {quantity > 0 && (
                    <span className="absolute top-0 right-[-2px] bg-pink-700 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                      {quantity}
                    </span>
                  )}
                </button>
                <span className=" font-semibold text-gray-700">
                  Giỏ hàng / {total.toLocaleString()}₫
                </span>
              </div>
            </HeadlessTippy>
          </div>
        </div>

        {/* Navbar */}
        {isDesktop ? (
          <Navbar />
        ) : (
          <NavbarToggle
            isOpen={isNavbarOpen}
            setIsOpen={setIsNavbarOpen}
            currentUser={currentUser}
          />
        )}
      </div>
    </>
  );
}

export default Header;
