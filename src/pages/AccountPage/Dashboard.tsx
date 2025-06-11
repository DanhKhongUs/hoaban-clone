import { NavLink } from "react-router-dom";
const Dashboard = () => {
  const username = "username";
  const navItems = [
    { label: "Đơn hàng", path: "orders" },
    { label: "Tải xuống", path: "downloads" },
    { label: "Địa chỉ", path: "address" },
    { label: "Tài khoản", path: "details" },
  ];

  return (
    <div className=" text-gray-800 w-full">
      <div className="mb-8">
        <p>
          Xin chào <strong>{username}</strong> (không phải tài khoản{" "}
          <strong>{username}</strong>?{" "}
          <span className="text-pink-600 cursor-pointer hover:underline">
            Hãy thoát ra
          </span>{" "}
          và đăng nhập vào tài khoản của bạn)
        </p>
        <p className="mt-2">
          Từ trang quản lý tài khoản bạn có thể xem đơn hàng mới, quản lý địa
          chỉ giao hàng và thanh toán, và sửa mật khẩu và thông tin tài khoản.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-stretch">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="w-full h-full border px-6 py-4 rounded-md text-lg text-center hover:shadow-md"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
