import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className=" px-5 py-2 rounded-full border border-white bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC] text-[#008080] font-boldhover:bg-hoverColor transition duration-300 ease-in-out">
        {title}
      </button>
    </div>
  );
};

export default Button;
