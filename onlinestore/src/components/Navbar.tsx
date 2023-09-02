"use client";
import React from "react";
import SearchBar from "./SearchBar";
import {
  StoreIcon,
  ShoppingBasket,
  ShoppingCartIcon,
  UserCircle2Icon,
} from "lucide-react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full  items-center space-y-3 px-3 py-5 bg-[#FFFAFA] flex-row ">
      <div className="flex w-full justify-between">
        <Link href="/">
          <h1 className="flex">
            <StoreIcon size={25} />
            <span className="ml-1 font-sans font-bold text-lg md:text-xl">
              |OnlineStore
            </span>
          </h1>
        </Link>
        <div className="flex gap-5">
          <div className="-mt-3 cursor-pointer">
            <div className="relative h-4 w-4 text-center rounded-full text-xs bg-red-500 text-white  left-5 top-3">
              3
            </div>
            <ShoppingCartIcon className="relative" size={25} />
          </div>{" "}
          <div title="user" className="cursor-pointer">
            {" "}
            <UserCircle2Icon size={25} />
          </div>{" "}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
