import React from "react";

const footerData = [
  {
    id: 1,
    title: "Categories",
    itemOne: "Electronics",
    itemTwo: "Jewelery",
    itemThree: "Women's clothing",
    itemFour: "Men's clothing",
  },
  {
    id: 2,
    title: "Top Searches",
    itemOne: "Jacket",
    itemTwo: "Acer",
    itemThree: "Hard Drive",
    itemFour: "Gold",
  },
  {
    id: 3,
    title: "Contact us",
    itemOne: "9832374322",
    itemTwo: "Onlineshop@gmail.com",
    itemThree: "OnlineShop/tiktok.com",
    itemFour: "instagram/Onlineshop12",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col px-5 gap-5 bg-slate-100 py-8 ">
      <div className="flex gap-5 flex-col md:flex-row px-5 col-1 md:justify-around md:flex-wrap">
        {footerData.map((item) => {
          return (
            <div key={item.id}>
              <h1 className="text-md font-semibold mb-1"> {item.title} </h1>
              <ul className=" text-sm ">
                <li>{item.itemOne}</li>
                <li>{item.itemTwo}</li>
                <li>{item.itemThree}</li>
                <li>{item.itemFour} </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center flex-col-reverse mt-2 gap-1 ml-5  md:items-center font-sans cursor-pointer">
        <div className="text-sm font-semibold">
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
