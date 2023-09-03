"use client";

import axios from "axios";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/shop/shopSlice";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const Gallery = () => {
  const productList = useSelector((state: any) => state.allProducts.products);

  const handleProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/");
      console.log("products lists are ", res.data);

      dispatch(setProducts(res.data));
      return res.data;
    } catch (e) {
      console.log("Error occured!!");
    }
  };
  const dispatch = useDispatch();

  const { data, isLoading, error } = useQuery(["allProducts"], handleProducts);

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
        Error Fetching Products.
      </div>
    );
  }

  return (
    <div className="min-h-screen  px-3 py-5  grid place-content-center grid-cols-auto md:grid-cols-3 gap-4">
      {productList.length > 0 &&
        productList.map((item: ProductDetail, i: number) => {
          return (
            <ProductCard
              key={i}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          );
        })}
    </div>
  );
};

export default Gallery;
