import React from "react";
import SocialMedia from "./SocialMedia";

const SignWith = ({ content }) => {
  return (
    <>
      <div className="flex mt-[23.67px] w-full md:w-[358.968px] mx-auto justify-around">
        <hr className="border border-[#E8ECF4] w-[30%] my-auto" />
        <span className="text-[13.806px] font-inter font-[600] text-[#6A707C]">
          {content}
        </span>
        <hr className="border border-[#E8ECF4] w-[30%] my-auto" />
      </div>
     <SocialMedia/>
    </>
  );
};

export default SignWith;
