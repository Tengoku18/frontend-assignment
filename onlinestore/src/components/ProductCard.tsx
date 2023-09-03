import React from "react";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shop/shopSlice";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

const ProductCard = ({ id, title, price, image }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-sm  cursor-pointer   bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/productdetails/${id}`}>
        <Image
          height={300}
          width={400}
          className="p-4 rounded-t-lg object-scale-down h-80"
          src={image}
          alt="product image"
        />
      </Link>

      <div className="px-5 pb-5 w-full max-w-sm">
        <div className="flex flex-col gap-3 justify-between">
          <div className="flex">
            <h3 className="text-md text-center font-semibold"> {title} </h3>
          </div>

          <div className="flex justify-between">
            <h3 className="text-xl font-bold cursor-pointer">$ {price} </h3>
            <div
              className="text-black bg-white cursor-pointer  hover:bg-black hover:text-white text-center  rounded-full h-10 w-10"
              onClick={() => {
                dispatch(addToCart(id));
              }}
            >
              <ShoppingCartIcon className="ml-2 mt-2" size={23} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
