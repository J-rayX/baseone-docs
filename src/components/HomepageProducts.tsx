import Link from "@docusaurus/Link";
import React from "react";

const HomepageProducts = ({ title, copyText, productIcon, href }) => {
  return (
    <Link
      href={href}
      className="product-card  block max-md:w-full p-6 w-[25%] bg-[#F4F5F6] rounded-lg hover:bg-[#E8E9EA] hover:border hover:border-[#165FFF] shadow-sm hover:shadow-lg transition-all"
    >
      <div className=" max-md:w-full p- rounded-lg">
        <img
          src={productIcon}
          alt=""
          className="h-8 bg-[#f6fafe]  rounded-sm p-1.5 "
        />
        <p className="font-semibold text-base text-[#0b37a5] pb-3 pt-2">
          {title}
        </p>
        <p className="font-normal text-base text-[#165FFF] w-full leading-6">
          {copyText}
        </p>
      </div>
    </Link>
  );
};

export default HomepageProducts;
