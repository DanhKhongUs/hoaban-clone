import { useNavigate } from "react-router-dom";
import { Product } from "~/types/Product";
import { productCardConfig } from "~/config/productCardConfig";

export default function SouvenirCard({
  souvenir,
}: {
  souvenir: Product & { type?: string };
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cart/${souvenir.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
    >
      <div className="relative">
        <img
          src={souvenir.img}
          alt={souvenir.name}
          className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-300"
        />

        {souvenir.tag && (
          <div
            className={`absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full shadow-sm z-10
            ${productCardConfig.tagStyles.bgColor} ${productCardConfig.tagStyles.textColor}`}
          >
            {souvenir.tag}
          </div>
        )}

        {souvenir.soldOut && (
          <div
            className={`absolute inset-0 flex items-center justify-center text-xl font-bold
            ${productCardConfig.soldOutOverlay.bgColor} ${productCardConfig.soldOutOverlay.textColor} backdrop-contrast-200`}
          >
            {productCardConfig.soldOutLabel}
          </div>
        )}
      </div>

      <div className="p-4 space-y-1">
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
          {souvenir.name}
        </h3>
        <p className="text-sm text-gray-600">
          {productCardConfig.pricePrefix}{" "}
          <span className="text-red-600 font-bold">
            {parseInt(souvenir.price.toString()).toLocaleString()}đ
          </span>
        </p>
      </div>
    </div>
  );
}
