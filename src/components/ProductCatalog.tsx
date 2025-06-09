import { Link, useNavigate } from "react-router-dom";
import { CatalogItem } from "~/data/productCatalog";
import { productCardConfig } from "~/config/productCardConfig";

const catalogList = [
  { id: 0, name: "MẬT ONG & TAM THẤT", link: "dink" },
  { id: 1, name: "THỰC PHẨM & GIA VỊ", link: "food" },
  { id: 2, name: "RƯỢU & ĐỒ NGÂM RƯỢU", link: "herb" },
];

function ProductCatalog() {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/cart/${id}`);
  };

  return (
    <aside className="space-y-8">
      <div>
        <h3 className="font-bold text-lg mb-4 pb-2">
          DANH MỤC SP
          <hr className="w-8 border border-[#c0b49f]" />
        </h3>
        <ul className="space-y-2 text-sm text-[#444]">
          {catalogList.map((item) => (
            <li key={item.id} className="w-full border-b pb-2 text-lg">
              <Link
                to={`/product/${item.link}`}
                className="hover:text-yellow-700"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <img
          src="https://hoabanfood.com/wp-content/uploads/Mat-Ong-Rung-Song-Da-2022-banner-1.jpg"
          alt="Banner"
          className="w-full rounded shadow"
        />
      </div>

      <div>
        <div>
          <img
            src="https://hoabanfood.com/wp-content/uploads/Mat-Ong-Rung-Song-Da-2022-banner-1.jpg"
            alt="Banner"
            className="w-full rounded shadow"
          />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-base mb-4">
          SẢN PHẨM NỔI BẬT
          <hr className="w-8 border border-[#c0b49f]" />
        </h4>

        {CatalogItem.map((item) => (
          <div
            onClick={() => handleClick(item.id)}
            key={item.id}
            className="flex items-center space-x-3 w-full border-b py-2 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-12 h-12 object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-[#222]">{item.name}</p>
              <p className="text-sm text-[#555] font-semibold">
                {productCardConfig.pricePrefix}{" "}
                {parseInt(item.price.toString()).toLocaleString()}đ
              </p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h4 className="font-bold text-base pb-2">
          ĐỒ CẮM TRẠI DÃ NGOẠI
          <hr className="w-8 border border-[#c0b49f]" />
        </h4>
      </div>
      <div>
        <img
          src="https://hoabanfood.com/wp-content/uploads/hoabancamp-icon-2.jpg"
          alt="Banner"
          className="w-full rounded shadow"
        />
      </div>
    </aside>
  );
}

export default ProductCatalog;
