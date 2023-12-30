import React from "react";
import { Link } from "react-router-dom";
import HomeIndicator from "../components/shared/HomeIndicator";
import Button1 from "../components/shared/Button1";
import Button2 from "../components/shared/Button2";

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
              <Button1 title="Login"/>
            </Link>

            {/* Register button */}
            <Link to="/register">
              <Button2 title="Register"/>
            </Link>
          </div>
        </div>
        <HomeIndicator />
      </div>
    </div>
  );
};

export default WelcomePage;
