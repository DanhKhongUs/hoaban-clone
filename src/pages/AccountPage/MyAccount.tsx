import { Outlet, useLocation } from "react-router-dom";
import AccountSidebar from "~/components/AccountSidebar";
const MyAccount = () => {
  const username = "username";
  const userId = "#12345";
  const img =
    "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";

  const location = useLocation();
  const getCurrentLabel = (pathname: string) => {
    if (pathname.endsWith("/myaccount")) return "TRANG TÀI KHOẢN";
    if (pathname.endsWith("/orders")) return "ĐƠN HÀNG";
    if (pathname.endsWith("/downloads")) return "TẢI XUỐNG";
    if (pathname.endsWith("/address")) return "ĐỊA CHỈ";
    if (pathname.endsWith("/profile")) return "TÀI KHOẢN";
  };

  const currentLabel = getCurrentLabel(location.pathname);

  return (
    <div className="max-w-screen-xl mx-auto bg-[#fdfbf5]">
      <div className="border-b px-8 py-6 bg-[#f7f7f7]">
        <h1 className="text-pink-600 text-3xl font-bold mb-2">MY ACCOUNT</h1>
        <h2 className="uppercase text-sm text-gray-700 tracking-wider">
          {currentLabel}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="w-full md:w-[350px]">
          <AccountSidebar username={username} userId={userId} img={img} />
        </div>

        <div className="w-full space-y-6">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
