import SectionTitle from "~/components/SectionTitle";
import { Connect } from "~/data/connectItem";

function Introduce() {
  return (
    <div className="bg-[#fdfbf5] min-h-screen pb-8 px-3 sm:px-5 lg:px-8 text-[#4a4a4a] max-w-screen-xl mx-auto">
      {/* Tiêu đề */}
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle title=" GIỚI THIỆU" />
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold mb-3">THƯ NGỎ...</h2>
          <p className="text-base leading-relaxed text-gray-800 mb-6 sm:mb-8">
            Các bác thân mến! Thành lập và hoạt động từ 2012,
            <span className="text-[#c7aa62] font-semibold">
              {" "}
              HOA BAN FOOD™{" "}
            </span>
            là đại diện tập thể anh chị em chúng tôi, từ các bản làng Tây Bắc xa
            xôi, cùng khai thác, chế biến các sản phẩm, đặc sản Tây Bắc chất
            lượng cao, an toàn & tốt cho sức khỏe để gửi tới tất cả Quý anh chị
            khách hàng ở khắp mọi miền Tổ Quốc.
          </p>
        </div>

        <div className="w-full overflow-hidden shadow mb-10 rounded-xl">
          <img
            src="https://hoabanfood.com/wp-content/uploads/Di-va-viet-3-1100x469.jpg"
            alt="Header"
            className="w-full h-[200px] sm:h-[280px] md:h-[360px] lg:h-[480px] object-cover"
          />
        </div>

        <p className="text-base leading-relaxed text-gray-800 mb-6 sm:mb-8">
          <span className="text-[#c7aa62] font-semibold"> HOA BAN FOOD™ </span>{" "}
          không đơn thuần chỉ là kinh doanh các sản vật Tây Bắc, mà còn mong
          muốn gắn kết, giới thiệu văn hóa, ẩm thực và cuộc sống đơn giản của bà
          con đồng bào Tây Bắc, cuộc sống đơn giản, nhưng thật, thật giàu tình
          cảm từ các bản làng xa xôi tới tất cả anh chị em cô chú ở mọi miền Tổ
          Quốc dành mến thương cho Tây Bắc xa xôi Tây Bắc!
        </p>

        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold mb-3">
            CHÚNG TÔI LÀM VIỆC VỚI AI?!
          </h2>

          <p className="text-base leading-relaxed text-gray-800 mb-6 sm:mb-8">
            Đối tác & Cộng sự của
            <span className="text-[#c7aa62] font-semibold">
              {" "}
              HOA BAN FOOD™{" "}
            </span>
            không có trụ sở công ty hoành tráng, không biết mặc Com Lê và chả
            biết sử dụng máy vi tính. Chúng tôi đơn giản chỉ là những người phụ
            nữ đồng bào dân tộc giản dị, chăm chỉ, chịu khó! Những anh em đồng
            bào dân tộc khỏe mạnh, tháo vát, nhiệt tình! Những người già khéo
            tay, tỉ mỉ ở những bản làng xa xôi tít mù nơi rừng núi Tây Bắc.
            Chúng tôi tìm kiếm & cung cấp sản phẩm, và tất nhiên theo các yêu
            cầu về chất lượng của
            <span className="text-[#c7aa62] font-semibold">
              {" "}
              HOA BAN FOOD™{" "}
            </span>
            quy định. Đơn giản thế thôi…..
          </p>

          <p className="text-base leading-relaxed text-gray-800 mb-6 sm:mb-8">
            Những anh em dân bản chúng tôi, am hiểu sông, suối, rừng núi như
            lòng bàn tay. Khỏe mạnh – tháo vát – nhiệt tình và trung thực là
            người mà chúng tôi mạn phép gọi là “Thợ Săn – Hunters”. Những đêm
            băng rừng đi tìm mật ong, cho đến những chuyến đi săn bắt cá
            sông/suối kéo dài nhiều ngày. Đi cùng anh em, ăn cùng 1 nồi, ngủ
            cùng 1 tấm vải bạt. Chúng tôi quá hiểu & tôn trọng, và tin tưởng lẫn
            nhau.
          </p>
        </div>

        <div className="w-full overflow-hidden shadow mb-10 rounded-xl">
          <img
            src="https://hoabanfood.com/wp-content/uploads/Di-va-viet-3-1100x469.jpg"
            alt="Header"
            className="w-full h-[200px] sm:h-[280px] md:h-[360px] lg:h-[480px] object-cover"
          />
        </div>

        <p className="text-base leading-relaxed text-gray-800 mb-6 sm:mb-8">
          Chị em phụ nữ nơi những bản làng Tây Bắc, thương con, chiều chồng, mến
          khách và cực kì chịu khó. Là hậu phương vững, làm tất cả những công
          việc hoàn thiện sản phẩm mà anh em chúng tôi khai thác được! Từ những
          giọt mật ong rừng thơm lừng, cho đến những hạt gia vị bé li ti…đã được
          các chị em, cô, bà làm, dưới sự yêu cầu – giám sát chặt chẽ về quy
          trình, phương thức khai thác, chế biến. Chính là cam kết đảm bảo nhất
          để quý khách hàng gần xa đã tin dùng & tín nhiệm trong 7 năm qua.
        </p>

        <div className="w-full overflow-hidden shadow mb-10 rounded-xl">
          <img
            src="https://hoabanfood.com/wp-content/uploads/Di-va-viet-3-1100x469.jpg"
            alt="Header"
            className="w-full h-[200px] sm:h-[280px] md:h-[360px] lg:h-[480px] object-cover"
          />
        </div>

        {/* Chữ ký & liên hệ */}
        <div className="text-right mb-6 sm:mb-8">
          <p className="italic">Trân Trọng</p>
          <p className="font-bold text-[#c7aa62]">Tập thể HOA BAN FOOD™</p>
          <div className="text-base mt-2">
            <p>
              <strong>Facebook:</strong>{" "}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 underline"
              >
                www.facebook.com/HOABANFOOD
              </a>
            </p>

            {/* Email sẽ luôn xuống hàng ở tablet */}
            <p className="mt-1 lg:mt-0">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:example@gmail.com"
                className="text-gray-600 underline"
              >
                example@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Section cuối */}
        <SectionTitle title="KẾT NỐI VỚI CHÚNG TÔI TRÊN" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 max-w-[320px] sm:max-w-none mx-auto">
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
