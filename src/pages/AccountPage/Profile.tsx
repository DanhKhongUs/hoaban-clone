import SectionTitle from "~/components/SectionTitle";

function Profile() {
  return (
    <div className=" p-4">
      <SectionTitle title="TÀI KHOẢN" />

      <form className="space-y-6 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Tên *</label>
            <input
              type="text"
              name="firstName"
              autoComplete="given-name"
              className="w-full border p-2 rounded focus:outline-none  focus:shadow-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Họ *</label>
            <input
              type="text"
              name="lastName"
              autoComplete="family-name"
              className="w-full border p-2 rounded focus:outline-none  focus:shadow-md"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Tên hiển thị *</label>
          <input
            type="text"
            name="displayName"
            autoComplete="nickname"
            className="w-full border p-2 rounded focus:outline-none  focus:shadow-md"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Tên này sẽ được hiển thị trong phần đánh giá và tài khoản.
          </p>
        </div>

        <div>
          <label className="block font-medium mb-1">Địa chỉ email *</label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="w-full border p-2 rounded focus:outline-none  focus:shadow-md"
            required
          />
        </div>

        {/* Đổi mật khẩu */}
        <div className="pt-6 border-t">
          <h2 className="font-bold text-lg mb-4">THAY ĐỔI MẬT KHẨU</h2>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">
                Mật khẩu hiện tại (bỏ trống nếu không đổi)
              </label>
              <input
                type="password"
                name="currentPassword"
                className="w-full border p-2 rounded focus:outline-none  focus:shadow-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Mật khẩu mới (bỏ trống nếu không đổi)
              </label>
              <input
                type="password"
                name="newPassword"
                className="w-full border p-2 rounded focus:outline-none  focus:shadow-md"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Xác nhận mật khẩu mới
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full border p-2 rounded focus:outline-none  focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-pink-600 text-white font-semibold px-6 py-2 rounded hover:bg-pink-700 transition"
          >
            LƯU THAY ĐỔI
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
