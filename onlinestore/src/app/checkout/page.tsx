import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex gap-3 px-5 justify-center flex-col items-center">
      <h2 className="font-semibold text-xl">
        Sorry, Checkout feature is not available right now!!{" "}
      </h2>
      <Link href="/">
        <button
          type="button"
          className=" px-3 py-2 bg-black text-white rounded-md hover:text-black hover:bg-white"
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default page;
