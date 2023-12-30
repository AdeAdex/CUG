import React from "react";
import FacebookIcon from "../../assets/facebook.svg";
import GoogleIcon from "../../assets/google.svg";
import AppleIcon from "../../assets/apple.svg";

const SignWith = ({ content }) => {
  return (
    <>
      <div className="flex mt-[23.67px] w-[358.968px] mx-auto justify-around">
        <hr className="border border-[#E8ECF4] w-[30%] my-auto" />
        <span className="text-[13.806px] font-inter font-[600] text-[#6A707C]">
          {content}
        </span>
        <hr className="border border-[#E8ECF4] w-[30%] my-auto" />
      </div>
      <div className=" w-[358.968px] mx-auto flex gap-[8.69px] mt-[23.67px]">
        <div className="w-[113.87px] h-[55.226px] rounded-[7.899px] border border-[#E8ECF4] flex justify-center">
          <img
            src={FacebookIcon}
            alt="Facebook Icon"
            className="w-[28px] h-[25.641px] my-auto"
          />
        </div>
        <div className="w-[113.87px] h-[55.226px] rounded-[7.899px] border border-[#E8ECF4] flex justify-center">
          <img
            src={GoogleIcon}
            alt="Facebook Icon"
            className="w-[28px] h-[25.641px] my-auto"
          />
        </div>
        <div className="w-[113.87px] h-[55.226px] rounded-[7.899px] border border-[#E8ECF4] flex justify-center">
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

export default SignWith;
