import React from "react";
import { Link } from "react-router-dom";
import HomeIndicator from "../components/shared/HomeIndicator";

const WelcomePage = () => {
  const backgroundImageUrl = 'url("images/Frame 1686551101.png")';
  return (
    <div
      // Styling for the main container
      className="px-[unset] md:px-[32px] flex flex-col"
      style={{
        backgroundImage: backgroundImageUrl,
        backgroundSize: "cover",
        backgroundPosition: "100% 20%",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {/* Content container */}
      <div className="px-[10px] mt-auto gap-y-[100px] flex flex-col bg-[#FBFAFB] md:bg-transparent">
        <div className="w-[100%] flex flex-col gap-[26px]  md:mt-[unset]">
          {/* Logo section */}
          <div className="w-[70px] h-[72px] flex flex-col items-center mx-auto font-inter font-[700] text-[16px]">
            <img src="images/bluelogo.png" alt="bluelogo" className="w-full" />
          </div>

          {/* Buttons section */}
          <div className="flex flex-col gap-[26px] md:max-w-[364px]  md:mx-auto">
            {/* Login button */}
            <Link to="/login">
              <button className="bg-[#0F515F] py-[19px] px-[147px] text-center rounded-[10px] text-white w-[100%]">
                Login
              </button>
            </Link>

            {/* Register button */}
            <Link to="/register">
              <button className="bg-white py-[19px] px-[147px] text-center rounded-[10px] text-[#0F515F] border border-1 border-solid border-[#0F515F] w-[100%]">
                Register
              </button>
            </Link>
          </div>
        </div>
        <HomeIndicator />
      </div>
    </div>
  );
};

export default WelcomePage;
