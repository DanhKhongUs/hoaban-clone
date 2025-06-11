import { NavLink } from "react-router-dom";
interface Props {
  username: string;
  userId: string;
  img: string;
}

const menuItems = [
  { id: 0, label: "TRANG TÀI KHOẢN", to: "." },
  { id: 1, label: "ĐƠN HÀNG", to: "orders" },
  { id: 2, label: "TẢI XUỐNG", to: "downloads" },
  { id: 3, label: "ĐỊA CHỈ", to: "address" },
  { id: 4, label: "TÀI KHOẢN", to: "profile" },
  { id: 5, label: "THOÁT", to: "logout" },
];

const AccountSidebar = ({ username, userId, img }: Props) => {
  return (
    <div className="p-4 w-full border-r">
      {/* Avatar + Name */}
      <div className="flex flex-row  items-center text-center mb-4 gap-2 pb-4">
        <img src={img} alt="user" className="w-16 h-16 rounded-full" />
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-gray-800 font-semibold break-words max-w-[150px]">
            {username}
          </p>
          <span className="text-sm text-gray-400">{userId}</span>
        </div>
      </div>

      {/* Menu */}
      <nav className="space-y-4 font-semibold">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            end={item.to === "."}
            className={({ isActive }) =>
              `block border-b pb-2 ${
                isActive ? "text-pink-600" : "text-gray-600"
              } hover:text-pink-600`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AccountSidebar;
