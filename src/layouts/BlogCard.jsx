import React from "react";

const BlogCard = ({ img, headlines, link }) => {
  return (
    <div className="w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out bg-gradient-to-b from-[#48CCCC] to-[#246666] flex flex-col items-center justify-between">
      <img
        className="h-64 md:h-96 lg:h-40 w-full rounded-lg"
        src={img}
        alt="img"
      />
      <h2 className="text-lg text-center font-semibold">{headlines}</h2>
      {/* Use flexbox to center the button in the middle of the card */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <a href={link} className="w-full flex justify-center">
          <button className="px-5 py-2 rounded-full border border-white bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC] text-[#008080] font-bold">
            Read More
          </button>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
