import SectionTitle from "~/components/SectionTitle";

const orders = [
  {
    id: "#HBF-39077",
    date: "Tháng Sáu 8, 2025",
    status: "Tạm giữ",
    total: "850,000₫",
    items: 1,
  },
];

const Orders = () => {
  return (
    <div className="p-4 ">
      <SectionTitle title="ĐƠN HÀNG" />

      <div className="overflow-x-auto">
        <table className="w-full  text-left">
          <thead className="border-b border-gray-300">
            <tr className="text-gray-700 uppercase">
              <th className="py-2 pr-4">Đơn hàng</th>
              <th className="py-2 pr-4">Ngày</th>
              <th className="py-2 pr-4">Tình trạng</th>
              <th className="py-2 pr-4">Tổng</th>
              <th className="py-2 pr-4">Các thao tác</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-3 pr-4 text-pink-800 font-medium">
                  {order.id}
                </td>
                <td className="py-3 pr-4 text-gray-700">{order.date}</td>
                <td className="py-3 pr-4 text-gray-700">{order.status}</td>
                <td className="py-3 pr-4 text-gray-900 font-bold">
                  {order.total}{" "}
                  <span className="font-normal  text-gray-500">
                    cho {order.items} mục
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <button className="bg-pink-700 text-white px-4 py-2  rounded hover:bg-pink-800">
                    XEM
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
