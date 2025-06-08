import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faComment, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    icon: <FontAwesomeIcon icon={faComment} className="w-5 h-5" />,
    bg: "bg-[#00588a]",
    href: "#",
    label: "Chat",
  },
  {
    icon: <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />,
    bg: "bg-red-600",
    href: "#",
    label: "YouTube",
  },
  {
    icon: <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />,
    bg: "bg-[#3b5998]",
    href: "#",
    label: "Facebook",
  },
];

export default function CallNowButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed right-4 md:right-8 bottom-4 md:bottom-8 flex flex-col items-center space-y-3 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Các icon hiển thị khi hover */}
      <div
        className={`flex flex-col items-center space-y-3 transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {menuItems.map((btn, index) => (
          <Link
            key={index}
            to={btn.href}
            aria-label={btn.label}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn.bg} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
          >
            {btn.icon}
          </Link>
        ))}
      </div>

      {/* Nút chính - điện thoại */}
      <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ">
        <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
      </div>
    </div>
  );
}
