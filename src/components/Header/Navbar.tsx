import { NavLink } from "react-router-dom";
import {
  faGift,
  faHome,
  faInfoCircle,
  faPhone,
  faBoxOpen,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import routes from "~/routes/routes";

const navItems = [
  { to: routes.home, label: "TRANG CHỦ", icon: faHome },
  { to: routes.product, label: "SẢN PHẨM", icon: faBoxOpen },
  { to: routes.combo, label: "COMBO", icon: faGift },
  { to: routes.introduce, label: "GIỚI THIỆU", icon: faInfoCircle },
  { to: routes.contact, label: "LIÊN HỆ", icon: faPhone },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const baseClass = "flex items-center gap-1 px-3 py-2 rounded-md min-w-fit";
  const activeClass = "bg-[#e7e2d3] font-semibold text-[#4a4a4a]";

  return (
    <div className="bg-[#fdfbf5] text-[#4a4a4a] w-full border-t border-[#e0dacb]">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12 py-2">
        {/* Mobile/Tablet Toggle Button */}
        <div className="lg:hidden flex items-center justify-between">
          <span className="font-semibold">MENU</span>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-[#4a4a4a] focus:outline-none"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-wrap justify-center gap-2 lg:gap-3 text-sm lg:text-base mt-2 lg:mt-0 w-full overflow-x-auto">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : "hover:bg-[#f1ece0]"}`
              }
            >
              <FontAwesomeIcon icon={icon} /> {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile/Tablet Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 flex flex-col gap-2">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `${baseClass} ${
                    isActive ? activeClass : "hover:bg-[#f1ece0]"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={icon} /> {label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
