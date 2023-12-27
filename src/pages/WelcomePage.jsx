import React from "react";
import { Link } from "react-router-dom";


const WelcomePage = () => {
  const backgroundImageUrl = 'url("images/Frame 1686551101.png")';
  return (
    <div
      className="px-[32px] pt-[480px]"
      style={{
        backgroundImage: backgroundImageUrl,
        backgroundSize: "cover",
        backgroundPosition: "100% 20%",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="w-[100%]  flex flex-col  gap-[26px] bg-white lg:bg-transparent">
        <div className="w-[70px] h-[72px] flex flex-col items-center  mx-auto font-inter font-[700] text-[16px] ">
          <img
            src="images/bluelogo.png"
            alt="bluelogo"
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-[26px] w-[364px] mx-auto">
        <Link to="/login">
        <button className="bg-[#0F515F] py-[19px] px-[147px] text-center rounded-[10px] text-white w-[100%]">
            Login
          </button>
        </Link>
          
          <button className="bg-white py-[19px] px-[147px] text-center rounded-[10px] text-[#0F515F] border border-1 border-solid border-[#0F515F]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
