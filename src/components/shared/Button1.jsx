import React from "react";

const Button1 = ({ title, onClick, loading }) => {
  return (
    <>
      <button
        type="submit"
        className="bg-[#0F515F] py-[18.737px] md:px-[145.954px]  text-[15.779px] font-[700] font-inter mx-auto text-center rounded-[10px] text-white w-full"
        onClick={onClick}
        disabled={loading}
      >
         {loading ? "Loading" : title}
      </button>
    </>
  );
};

export default Button1;
