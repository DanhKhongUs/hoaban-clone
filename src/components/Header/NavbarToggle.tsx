import { NavLink } from "react-router-dom";
import {
  faGift,
  faHome,
  faInfoCircle,
  faPhone,
  faBoxOpen,
  faXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "~/routes/routes";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
  { to: routes.home, label: "TRANG CHỦ", icon: faHome },
  { to: routes.product, label: "SẢN PHẨM", icon: faBoxOpen },
  { to: routes.combo, label: "COMBO", icon: faGift },
  { to: routes.introduce, label: "GIỚI THIỆU", icon: faInfoCircle },
  { to: routes.contact, label: "LIÊN HỆ", icon: faPhone },
  { to: routes.login, label: "ĐĂNG NHẬP", icon: faUser },
];

function NavbarToggle({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <>
      {/* Overlay mờ nền */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side menu trượt từ trái */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#fdfbf5] z-50 shadow-md transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-[#e0dacb]">
          <span className="font-semibold">MENU</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#4a4a4a] focus:outline-none"
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-2">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 rounded-md text-[#4a4a4a] ${
                  isActive ? "bg-[#e7e2d3] font-semibold" : "hover:bg-[#f1ece0]"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={icon} /> {label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavbarToggle;
