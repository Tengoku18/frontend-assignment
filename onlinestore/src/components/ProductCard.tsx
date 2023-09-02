
import React from "react";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

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
  return (
    <div className="w-full max-w-sm  cursor-pointer   bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        height={300}
        width={400}
        className="p-4 rounded-t-lg object-scale-down h-80"
        src={image}
        alt="product image"
      />

      <div className="px-5 pb-5 w-full max-w-sm">
        <div className="flex flex-col gap-3 justify-between">
          <div className="flex">
            <h3 className="text-md text-center font-semibold"> {title} </h3>
          </div>

          <div className="flex justify-between">
            <h3 className="text-xl font-bold cursor-pointer">$ {price} </h3>
            <div className="text-black bg-white cursor-pointer  hover:bg-black hover:text-white text-center  rounded-full h-10 w-10">
              <ShoppingCartIcon className="ml-2 mt-2" size={23} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
