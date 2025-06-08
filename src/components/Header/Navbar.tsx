import { NavLink } from "react-router-dom";
import {
  faGift,
  faHome,
  faInfoCircle,
  faPhone,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "~/routes/routes";

const navItems = [
  { to: routes.home, label: "TRANG CHỦ", icon: faHome },
  { to: routes.product, label: "SẢN PHẨM", icon: faBoxOpen },
  { to: routes.combo, label: "COMBO", icon: faGift },
  { to: routes.introduce, label: "GIỚI THIỆU", icon: faInfoCircle },
  { to: routes.contact, label: "LIÊN HỆ", icon: faPhone },
];

function Navbar() {
  const baseClass = "flex items-center gap-1 px-3 py-2 rounded-md min-w-fit";
  const activeClass = "bg-[#e7e2d3] font-semibold text-[#4a4a4a]";

  return (
    <div className="bg-[#fdfbf5] text-[#4a4a4a] w-full border-t border-[#e0dacb]">
      <div className="max-w-screen-xl mx-auto px-4 py-2">
        <nav className="flex flex-wrap justify-center gap-2 text-sm sm:text-base w-full overflow-x-auto">
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
      </div>
    </div>
  );
}

export default Navbar;
