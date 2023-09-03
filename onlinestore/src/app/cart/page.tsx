"use client";
import CartItem from "@/components/CartItem";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const cartList = useSelector((state: any) => state.allProducts.cart);

  return (
    <div className="min-h-screen py-5 w-full  flex  flex-col gap-5 items-center  ">
      {cartList.length > 0 ? (
        <div className=" flex w-full  flex-col gap-5 items-center">
          {cartList.map((item: ProductDetail) => {
            return (
              <CartItem
                key={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                id={item.id}
              />
            );
          })}
        </div>
      ) : (
        <div className="w-full min-h-screen flex flex-col gap-3 justify-center items-center">
          <h3 className="text-xl font-semibold"> No items on cart. </h3>
          <Link href="/">
            <button
              type="button"
              className=" px-3 py-2 bg-black text-white rounded-md hover:text-black hover:bg-white"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;
