"use client";
import ProductCard from "@/components/ProductCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const searchedProduct = useSelector(
    (state) => state.allProducts.searchProduct
  );
  return (
    <div className="min-h-screen px-3 py-5">
      {searchedProduct.length > 0 ? (
        <div className="grid content-center place-content-center grid-cols-auto md:grid-cols-3 gap-4">
          {searchedProduct.map((item: any, i: any) => {
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
      ) : (
        <div className=" text-center flex flex-col min-h-screen justify-center items-center">
          <h3 className="font-bold text-xl"> No match found.</h3>

          <h3 className="font-bold text-xl">
            {" "}
            Recommended : gold,laptop,shirt,drive{" "}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Index;
