import React from "react";
import FacebookIcon from "../../assets/facebook.svg";
import GoogleIcon from "../../assets/google.svg";
import AppleIcon from "../../assets/apple.svg";

const SocialMedia = () => {
  return (
    <>
      <div className="w-full md:w-[358.968px] mx-auto flex gap-[8.69px] mt-[23.67px]">
        <div className="w-[33%] md:w-[113.87px] h-[55.226px] rounded-[7.899px] border border-[#E8ECF4] flex justify-center">
          <img
            src={FacebookIcon}
            alt="Facebook Icon"
            className="w-[28px] h-[25.641px] my-auto"
          />
        </div>
        <div className="w-[33%] md:w-[113.87px] h-[55.226px] rounded-[7.899px] border border-[#E8ECF4] flex justify-center">
          <img
            src={GoogleIcon}
            alt="Facebook Icon"
            className="w-[28px] h-[25.641px] my-auto"
          />
        </div>
        <div className="w-[33%] md:w-[113.87px] h-[55.226px] rounded-[7.899px] border border-[#E8ECF4] flex justify-center">
          <img
            src={AppleIcon}
            alt="Facebook Icon"
            className="w-[28px] h-[25.641px] my-auto"
          />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
