import { useState, useEffect, useCallback, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import useDebounce from "~/hooks/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Product } from "~/types/Product";
import { allProducts } from "~/data/allProduct";

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const fetchSuggestions = useCallback(async () => {
    if (!search.trim()) {
      setResults([]);
      setLoading(false);
      setHasFetched(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `/api/search?q=${encodeURIComponent(search)}`,
        { timeout: 10000 }
      );
      const raw = response.data;
      const data: Product[] = Array.isArray(raw) ? raw : raw?.results || [];
      setResults(data);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setLoading(false);
      setHasFetched(true);
    }
  }, [search]);

  const { debounced, cancel } = useDebounce(fetchSuggestions, 500);

  useEffect(() => {
    if (search.trim()) {
      setShowSuggestions(true);
      debounced();
    } else {
      setShowSuggestions(false);
      setResults([]);
      setLoading(false);
      setHasFetched(false);
    }
    return () => cancel();
  }, [search, debounced, cancel]);

  const handleClear = () => {
    setSearch("");
    setResults([]);
    setShowSuggestions(false);
    setHasFetched(false);
    inputRef.current?.focus();
  };

  return (
    <div>
      <HeadlessTippy
        visible={showSuggestions && !!search.trim()}
        interactive
        offset={[-50, 8]}
        placement="bottom"
        onClickOutside={() => setShowSuggestions(false)}
        render={() => (
          <div className="bg-white w-[500px] text-black rounded-lg shadow-xl overflow-auto max-h-96 border border-gray-200">
            {allProducts.length > 0 ? (
              allProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center w-full gap-4 px-4 py-2 border-b hover:bg-gray-100 cursor-pointer transition"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm sm:text-base">
                      {item.name}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600">
                      Giá từ: {item.price}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full px-6 py-4 text-gray-600 text-sm sm:text-base text-center font-medium">
                {search.trim()
                  ? "Không tìm thấy kết quả"
                  : "Nhập từ khóa để tìm kiếm"}
              </div>
            )}
          </div>
        )}
      >
        <div
          className="relative flex w-full rounded-full border border-[#e0dacb] bg-[#f7f5ef] overflow-hidden"
          onClick={() => inputRef.current?.focus()}
        >
          <input
            ref={inputRef}
            value={search}
            onChange={(e) => {
              const value = e.target.value;
              if (!value.startsWith(" ")) {
                setSearch(value);
              }
              setShowSuggestions(true);
            }}
            className="flex-1 px-5 py-2 text-sm sm:text-base bg-transparent text-[#333] placeholder-gray-500 focus:outline-none"
            spellCheck={false}
            type="text"
            onFocus={() => {
              if (search.trim() && results.length > 0) setShowSuggestions(true);
            }}
            placeholder="Tìm sản phẩm..."
          />

          {!!search && !loading && hasFetched && (
            <button
              className="absolute right-16 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={handleClear}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon
              icon={faSpinner}
              className="absolute right-16 top-1/2  text-gray-400 animate-spinner"
            />
          )}

          <button className="w-12 sm:w-14 text-lg sm:text-xl bg-[#c7aa62] hover:bg-[#b89550] text-white flex items-center justify-center transition duration-300">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
