import React from "react";

const SectionLabel = ({ text, icon }) => {
  return (
    <div className="flex gap-2 justify-center items-center px-2 py-1   uppercase border border-[#f9f9f9] rounded-xl object-contain text-md max-sm:text-xs">
      <span>
        <img src={icon} width="" alt="" />{" "}
      </span>
      <span className="text-[#ffffff]">{text}</span>
    </div>
  );
};

export default SectionLabel;
