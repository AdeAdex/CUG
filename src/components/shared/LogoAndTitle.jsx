import React from "react";
import logo from "/images/bluelogo.png"

const LogoAndTitle = ({ title }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[70px] h-[72px] flex flex-col items-center mx-auto font-inter font-[700] text-[16px]">
          {/* Logo */}
          <img src={logo} alt="bluelogo" className="w-full" />
        </div>
        {/* Title */}
        <h2 className="text-[29px] font-inter font-[700] text-center text-[#0F515F] mt-[23.67px] capitalize">
          {title}
        </h2>
      </div>
    </>
  );
};

export default LogoAndTitle;
