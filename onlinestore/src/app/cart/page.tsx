"use client";
import CartItem from "@/components/CartItem";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const cartList = useSelector((state: any) => state.allProducts.cart);

  var totalPrice = 0;
  for (const item of cartList) {
    totalPrice += item.price;
  }

  const shippingCost = totalPrice * 0.01;
  const grandTotal = shippingCost + totalPrice;

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

          <div className="border-black border-t-2  py-5  justify-center w-4/5 flex flex-col">
            <div className="flex w-full justify-between px-5">
              <h3 className="text-xl font-semibold"> Total </h3>
              <p className="font-semibold"> {totalPrice} </p>
            </div>
            <div className="flex w-full justify-between px-5">
              <h3 className="text-xl font-semibold"> Shipping Cost </h3>
              <p className="font-semibold"> {shippingCost.toFixed(2)} </p>
            </div>
            <div className="flex w-full justify-between px-5">
              <h3 className="text-xl font-semibold"> Grand Total </h3>
              <p className="font-semibold"> {grandTotal.toFixed(2)} </p>
            </div>
            <Link href="/checkout">
              <div className="flex justify-end mt-5  w-full  px-5">
                <button className=" px-3  py-2  rounded-md bg-gray-800 hover:bg-gray-900 font-semibold text-white  ">
                  Proceed to checkout
                </button>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen flex flex-col gap-3 justify-center items-center">
          <h3 className="text-xl font-semibold"> No items on cart. </h3>
          <Link href="/checkout">
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
