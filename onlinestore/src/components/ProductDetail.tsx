import Image from "next/image";
import React from "react";

const ProductDetail = ({
  title,
  price,
  description,
  category,
  image,
  rating,
}: ProductDetail) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:flex-row">
      <div className="h-96 w-full md:w-1/2 bg-white flex  justify-center items-center rounded-md">
        <Image
          height={300}
          width={400}
          className="p-4 rounded-t-lg object-fit h-80 w-1/2"
          src={image}
          alt="product image"
        />
      </div>
      <div className="flex space-y-2 w-3/4 md:w-1/2 justify-center text-left md:px-10 lg:px-20 items-left flex-col">
        <div className=" text-xl font-semibold ">
          Category :{" "}
          <span className="text-[16px] font-medium">{category} </span>{" "}
        </div>
        <div className="text-xl font-semibold">
          Name : <span className="text-[16px] font-medium">{title} </span>
        </div>
        <div className="text-xl font-semibold">
          Price : <span className="text-[16px] font-medium">{price} </span>
        </div>
        <div className="text-xl font-semibold">
          Description :{" "}
          <span className="text-[16px] font-medium">{description} </span>
        </div>
        <div className="text-xl font-semibold">
          Ratings :{" "}
          <span className="text-[16px] font-medium">{rating?.rate} </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
