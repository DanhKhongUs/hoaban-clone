import SectionTitle from "~/components/SectionTitle";
import { Link } from "react-router-dom";

function Address() {
  return (
    <div className="p-4">
      <SectionTitle title="ĐỊA CHỈ" />
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-pink-700 mb-2">
          Địa chỉ giao hàng
        </h1>

        <Link to="add" className="hover:underline">
          Thêm
        </Link>
        <span className="italic">Bạn vẫn chưa thêm địa chỉ nào.</span>
      </div>
    </div>
  );
}

export default Address;
