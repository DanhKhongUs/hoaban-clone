import {
  faFacebookF,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../Search/Search";
import Tippy from "@tippyjs/react";
import routes from "~/routes/routes";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      {/* Top bar */}
      <div className="max-w-screen-xl mx-auto bg-[#f7f5ef] text-[#4a4a4a] text-xs sm:text-sm border-b border-[#e0dacb]">
        <div className="flex flex-wrap justify-between items-center py-1.5 md:py-2 px-3 md:px-4 gap-1.5">
          <div className="text-center sm:text-left w-full sm:w-auto">
            HOTLINE: <strong>0914.268.535</strong>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
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

      {/* Sticky phần Logo + Navbar */}
      <div className="sticky top-0 z-50 bg-[#fdfbf5] shadow-md max-w-screen-xl mx-auto">
        <div className="border-b border-[#e0dacb] px-3 md:px-4 flex flex-wrap md:flex-nowrap justify-between items-center gap-3 md:gap-4">
          {/* Logo */}
          <div className="flex justify-center w-full md:w-28">
            <Link to={routes.home}>
              <img
                src="/logo.png"
                alt="logo"
                className="h-28 object-contain w-24 md:w-28"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="w-full hidden md:block md:flex-1 max-w-[600px] order-3 md:order-none">
            <Search />
          </div>

          {/* Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-8 text-sm md:text-base order-2 md:order-none text-[#4a4a4a] w-full md:w-auto">
            <Link
              to={routes.login}
              className="font-semibold hover:text-[#c0b49f] text-center"
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
                className="flex items-center gap-1.5 font-semibold hover:text-[#c0b49f] justify-center"
              >
                Giỏ hàng / 0{" "}
                <FontAwesomeIcon icon={faCartShopping} className="text-sm" />
              </Link>
            </Tippy>
          </div>
        </div>

        {/* Navbar */}
        <Navbar />
      </div>
    </>
  );
}

export default Header;
