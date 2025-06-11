function CreateAddress() {
  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-semibold text-pink-700  mb-6">
        Địa chỉ giao hàng
      </h2>

      <form className="space-y-5">
        <div>
          <label className="block  font-medium text-gray-700 mb-1">
            Họ và tên *
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded "
            placeholder="Họ tên của bạn"
            required
          />
        </div>

        <div>
          <label className="block  font-medium text-gray-700 mb-1">
            Tên công ty (tùy chọn)
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded "
            placeholder=""
          />
        </div>
        <div>
          <label className="block  font-medium text-gray-700 mb-1">
            Quốc gia/Khu vực *
          </label>
          <div className="p-2 border border-gray-300 rounded bg-gray-100  text-gray-700">
            Việt Nam
          </div>
        </div>

        <div>
          <label className="block  font-medium text-gray-700 mb-1">
            Tỉnh/Thành phố *
          </label>
          <select className="w-full border border-gray-300 p-2 rounded ">
            <option>Chọn một tuỳ chọn...</option>
            <option>Hà Nội</option>
            <option>TP. HCM</option>
          </select>
        </div>

        <div>
          <label className="block  font-medium text-gray-700 mb-1">
            Quận/Huyện *
          </label>
          <select className="w-full border border-gray-300 p-2 rounded ">
            <option>Chọn quận huyện</option>
          </select>
        </div>

        <div>
          <label className="block  font-medium text-gray-700 mb-1">
            Xã/Phường *
          </label>
          <select className="w-full border border-gray-300 p-2 rounded ">
            <option>Chọn xã/phường</option>
          </select>
        </div>

        <div>
          <label className="block  font-medium text-gray-700 mb-1">
            Địa chỉ *
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded "
            placeholder="Địa chỉ"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-pink-700 text-white  font-semibold px-5 py-2 rounded hover:bg-pink-800 transition uppercase"
          >
            Lưu địa chỉ
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAddress;
