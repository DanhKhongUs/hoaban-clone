import SectionTitle from "~/components/SectionTitle";
import { Connect } from "~/data/connectItem";

function Introduce() {
  return (
    <div className="bg-[#fdfbf5] min-h-screen pb-10 px-4 sm:px-6 lg:px-8 text-[#4a4a4a] max-w-screen-xl mx-auto">
      {/* Tiêu đề */}
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle title=" GIỚI THIỆU" />
        <h2 className="text-2xl font-semibold mb-3">Thư ngỏ...</h2>
        <p className="text-base leading-relaxed text-gray-800 mb-8">
          Các bác thân mến! Thành lập và hoạt động từ 2012,
          <span className="text-pink-700 font-semibold"> HOA BAN FOOD™ </span>là
          đại diện tập thể anh chị em chúng tôi, từ các bản làng Tây Bắc xa xôi,
          cùng khai thác, chế biến các sản phẩm, đặc sản Tây Bắc chất lượng cao,
          an toàn & tốt cho sức khỏe để gửi tới tất cả Quý anh chị khách hàng ở
          khắp mọi miền Tổ Quốc.
        </p>

        <div className="w-full overflow-hidden shadow mb-10 rounded-xl">
          <img
            src="https://hoabanfood.com/wp-content/uploads/Di-va-viet-3-1100x469.jpg"
            alt="Header"
            className="w-full h-auto sm:h-[280px] md:h-[360px] lg:h-[480px] object-cover"
          />
        </div>

        <p className="text-base leading-relaxed text-gray-800 mb-8">
          <span className="text-pink-700 font-semibold"> HOA BAN FOOD™ </span>{" "}
          không đơn thuần chỉ là kinh doanh các sản vật Tây Bắc, mà còn mong
          muốn gắn kết, giới thiệu văn hóa, ẩm thực và cuộc sống đơn giản của bà
          con đồng bào Tây Bắc...
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          CHÚNG TÔI LÀM VIỆC VỚI AI?!
        </h2>

        <p className="text-base leading-relaxed text-gray-800 mb-8">
          Đối tác & Cộng sự của
          <span className="text-pink-700 font-semibold"> HOA BAN FOOD™ </span>
          không có trụ sở công ty hoành tráng...
        </p>

        <p className="text-base leading-relaxed text-gray-800 mb-8">
          Những anh em dân bản chúng tôi, am hiểu sông, suối, rừng núi như lòng
          bàn tay...
        </p>

        <div className="w-full overflow-hidden shadow mb-10 rounded-xl">
          <img
            src="https://hoabanfood.com/wp-content/uploads/Di-va-viet-3-1100x469.jpg"
            alt="Header"
            className="w-full h-auto sm:h-[280px] md:h-[360px] lg:h-[480px] object-cover"
          />
        </div>

        <p className="text-base leading-relaxed text-gray-800 mb-8">
          Chị em phụ nữ nơi những bản làng Tây Bắc...
        </p>

        <div className="w-full overflow-hidden shadow mb-10 rounded-xl">
          <img
            src="https://hoabanfood.com/wp-content/uploads/Di-va-viet-3-1100x469.jpg"
            alt="Header"
            className="w-full h-auto sm:h-[280px] md:h-[360px] lg:h-[480px] object-cover"
          />
        </div>

        {/* Chữ ký & liên hệ */}
        <div className="text-right mb-4">
          <p className="italic">Trân Trọng</p>
          <p className="font-bold text-pink-700">Tập thể HOA BAN FOOD™</p>
          <div className="text-base mt-2">
            <p>
              <strong>Facebook:</strong>{" "}
              <a
                href="https://www.facebook.com/HOABANFOOD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 underline"
              >
                www.facebook.com/HOABANFOOD
              </a>{" "}
              | <strong>Email:</strong>{" "}
              <a
                href="mailto:tan@hoabanfood.com"
                className="text-gray-600 underline"
              >
                tan@hoabanfood.com
              </a>
            </p>
          </div>
        </div>

        {/* Section cuối */}
        <SectionTitle title="≡ KẾT NỐI VỚI CHÚNG TÔI TRÊN..." />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {Connect.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white shadow-md p-4 text-center space-y-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#c10058] text-lg font-bold uppercase">
                {item.name}
              </h3>
              <p className="text-[#c10058] text-sm uppercase tracking-wide opacity-70">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Introduce;
