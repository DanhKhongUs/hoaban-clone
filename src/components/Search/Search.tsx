import { useState, useEffect, useCallback, useRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import useDebounce from "~/hooks/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Product } from "~/types/Product";
import Spinner from "../Spinner";

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchSuggestions = useCallback(async () => {
    if (!search.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(
        `/api/search?q=${encodeURIComponent(search)}`
      );
      const raw = response.data;
      const data: Product[] = Array.isArray(raw) ? raw : raw?.results || [];
      setResults(data);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  const { debounced, cancel } = useDebounce(fetchSuggestions, 500);

  useEffect(() => {
    debounced();
    return () => cancel();
  }, [search, debounced, cancel]);

  const highlight = (text: string, keyword: string) => {
    const parts = text.split(new RegExp(`(${keyword})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span key={i} className="bg-yellow-100 font-semibold">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <Tippy
      visible={showSuggestions && (results.length > 0 || isLoading)}
      interactive={true}
      placement="bottom-start"
      onClickOutside={() => setShowSuggestions(false)}
      render={() => (
        <div className="bg-white text-black w-full sm:w-[350px] rounded-md shadow-lg overflow-auto max-h-96 border border-gray-200">
          {isLoading ? (
            <Spinner />
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 px-4 py-2 border-b hover:bg-gray-100 cursor-pointer transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    {highlight(item.name, search)}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Giá từ: {item.price}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    >
      <div
        className="flex rounded-full bg-[#f7f5ef] border border-[#e0dacb] w-full "
        onClick={() => inputRef.current?.focus()}
      >
        <input
          ref={inputRef}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggestions(true);
          }}
          className="flex-1 py-2 pl-5 pr-2 rounded-l-full bg-[#f7f5ef] text-[#333] placeholder-gray-500 focus:outline-none text-sm sm:text-base"
          spellCheck={false}
          type="text"
          placeholder="Tìm sản phẩm..."
        />
        <button className="w-12 sm:w-14 text-lg sm:text-xl bg-[#c7aa62] hover:bg-[#b89550] text-white rounded-r-full transition duration-300 flex items-center justify-center cursor-pointer">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
