import Image from "next/image";
import React from "react";
import { Trash2Icon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "@/redux/shop/shopSlice";

const CartItem = ({ id, title, price, image }: ProductDetail) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between h-fit w-4/5">
      <div className=" flex gap-8">
        <div className=" w-1/2 bg-white">
          <Image
            height={300}
            width={400}
            className="p-4 rounded-t-lg object-scale-down h-52"
            src={image}
            alt="product image"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-md text-left w-44 font-semibold  line-clamp-3 ">
            {title}{" "}
          </h3>
          <h3 className="text-xl font-bold cursor-pointer">$ {price} </h3>
        </div>
      </div>
      <div
        className="cursor-pointer "
        title=" delete"
        onClick={() => {
          dispatch(deleteItem(id));
        }}
      >
        <Trash2Icon size={25} />
      </div>
    </div>
  );
};

export default CartItem;
