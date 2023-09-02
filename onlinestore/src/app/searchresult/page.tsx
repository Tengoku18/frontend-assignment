"use client";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const searchedProduct = useSelector(
    (state: any) => state.allProducts.searchProduct
  );
  return (
    <div className="min-h-screen px-3 py-5">
      {searchedProduct.length > 0 ? (
        <div className="grid content-center place-content-center grid-cols-auto md:grid-cols-3 gap-4">
          {searchedProduct.map((item: any, i: any) => {
            return (
              <Link key={i} href={`/productdetails/${item.id}`}>
                <ProductCard
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className=" text-center flex flex-col min-h-screen justify-center items-center">
          <h3 className="font-bold text-xl"> No match found.</h3>

          <h3 className="font-bold text-xl">
            {" "}
            Recommended Search : gold,laptop,shirt,drive{" "}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Index;
