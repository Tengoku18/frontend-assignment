"use client";

import axios from "axios";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/shop/shopSlice";
import Link from "next/link";

const Gallery = () => {
  const productList = useSelector((state: any) => state.allProducts.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products/");
        console.log("products lists are ", res.data);

        dispatch(setProducts(res.data));
      } catch (e) {
        console.log("Error occured!!");
      }
    };
    handleProducts();
  }, [dispatch]);

  return (
    <div className="min-h-screen  px-3 py-5  grid place-content-center grid-cols-auto md:grid-cols-3 gap-4">
      {productList.length > 0 &&
        productList.map((item: ProductDetail, i: number) => {
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
  );
};

export default Gallery;
