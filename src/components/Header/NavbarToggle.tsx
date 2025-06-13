import { Link, NavLink } from "react-router-dom";
import {
  faGift,
  faHome,
  faInfoCircle,
  faPhone,
  faBoxOpen,
  faXmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "~/routes/routes";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: boolean;
}

const NAV_ITEMS = [
  { to: routes.home, title: "TRANG CHỦ", icon: faHome },
  { to: routes.product, title: "SẢN PHẨM", icon: faBoxOpen },
  { to: routes.combo, title: "COMBO", icon: faGift },
  { to: routes.introduce, title: "GIỚI THIỆU", icon: faInfoCircle },
  { to: routes.contact, title: "LIÊN HỆ", icon: faPhone },
];

function NavbarToggle({ isOpen, setIsOpen, currentUser }: NavbarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

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
          {currentUser ? (
            <>
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="block border-b py-3 hover:bg-gray-100"
                >
                  {item.title}
                </NavLink>
              ))}

              <Link
                to={routes.myaccount}
                className="block border-b py-3 hover:bg-gray-100"
              >
                TÀI KHOẢN
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("currentUser");
                  window.location.reload();
                }}
                className="flex items-center py-4 font-semibold text-gray-700 hover:text-red-600"
              >
                <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                Đăng xuất
              </button>
            </>
          ) : (
            <div>
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="block border-b py-3 hover:bg-gray-100"
                >
                  {item.title}
                </NavLink>
              ))}
              <NavLink
                to={routes.login}
                className="block text-base font-semibold text-gray-800  py-4"
              >
                Đăng nhập
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavbarToggle;
