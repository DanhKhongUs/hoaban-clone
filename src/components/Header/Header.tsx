import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import {
  faFacebookF,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Search from "../Search/Search";
import routes from "~/routes/routes";
import Navbar from "./Navbar";
import NavbarToggle from "./NavbarToggle";

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 856);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 856);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <div className="hidden md:flex items-center gap-6 text-sm md:text-base text-[#4a4a4a]">
            <Link
              to={routes.login}
              className="font-semibold hover:text-[#c0b49f]"
            >
              Đăng nhập / Đăng ký
            </Link>

            <Tippy
              delay={[0, 200]}
              content="Chưa có sản phẩm trong giỏ hàng"
              placement="bottom"
            >
              <Link
                to={routes.cart}
                className="flex items-center gap-1 font-semibold hover:text-[#c0b49f]"
              >
                Giỏ hàng / 0 <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </Tippy>
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
