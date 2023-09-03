import { searchProducts } from "@/redux/shop/shopSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  return (
    <form className=" w-full md:w-1/2 ">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          id="default-search"
          className="block w-full h-12 pl-10 text-sm focus:outline-none text-gray-900 border border-gray-300 rounded-full bg-gray-50   dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white "
          placeholder="Search Products"
        />
        <Link href="/searchresult">
          <button
            onClick={(e) => {
              // e.preventDefault();
              //@ts-ignore
              dispatch(searchProducts(query));
            }}
            type="submit"
            className="text-white absolute right-1.5 bottom-1.5 bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-full text-sm px-4 py-2 "
          >
            Search
          </button>
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
