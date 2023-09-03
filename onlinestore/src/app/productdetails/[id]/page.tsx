"use client";

import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner";
import ProductDetail from "@/components/ProductDetail";

const Page = ({ params }: any) => {
  const getProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      return res.data;
    } catch (e) {
      console.log("Error occured!!");
    }
  };

  const {
    data: product,
    isLoading,
    error,
  } = useQuery(["productdetail"], getProduct);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center ">
        {" "}
        <Spinner />
      </div>
    );
  } else if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center font-semibold text-xl">
        Error Loading Details.
      </div>
    );
  }

  return (
    <div className="min-h-[600px] flex justify-center py-28">
      <ProductDetail
        id={product.id}
        image={product.image}
        category={product.category}
        rating={product.rating}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    </div>
  );
};

export default Page;
