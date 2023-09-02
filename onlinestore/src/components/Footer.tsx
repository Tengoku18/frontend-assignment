import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col px-5 gap-5 bg-slate-100 py-5 ">
      <div className="flex gap-5 justify-around flex-wrap">
        <div className="">
          <h1 className="text-md font-semibold ">Categories</h1>
          <ul className="list-disc text-sm ">
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Women&apos;s clothing</li>
            <li>Men&apos;s clothing</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-md font-semibold ">Top Searches</h1>
          <ul className="list-disc text-sm ">
            <li>Jacket</li>
            <li>Acer</li>
            <li>Hard Drive</li>
            <li>Gold</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-md font-semibold">Contact us</h1>
          <ul className="list-disc text-sm ">
            <li>9832374322</li>
            <li>Onlineshop@gmail.com</li>
            <li>OnlineShop/tiktok.com</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center font-sans cursor-pointer">
        <div className="text-xs font-semibold">
          copyright&copy;2023|onlinestore.com
        </div>
        <div className=" text-sm font-semibold ">
          {" "}
          Legal stuff &nbsp; | Privacy policy | &nbsp; Security{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
