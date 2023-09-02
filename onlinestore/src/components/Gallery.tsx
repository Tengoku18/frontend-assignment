"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/shop/shopSlice";

type Props = {};

const Gallery = (props: Props) => {
  const [data, setData] = useState(null);
  const productList = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  const handleProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/");
      console.log("products lists are ", res.data);
      setData(res.data);
      dispatch(setProducts(res.data));
    } catch (e) {
      console.log("Error occured!!");
    }
  };
  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div className="min-h-screen  px-3 py-5  grid place-content-center grid-cols-auto md:grid-cols-3 gap-4">
      {productList.length > 0 &&
        productList.map((item: any, i: any) => {
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
