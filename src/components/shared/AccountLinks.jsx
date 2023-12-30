import React from "react";
import { Link } from "react-router-dom";

const AccountLinks = ({ text1, text2, link1, link2 }) => {
  return (
    <>
      <div className="w-[100%] justify-between flex mx-auto mt-[23.67px] text-[13.806px] font-inter font-[600] text-[#404040]">
        <Link to={link1}>
          <span>{text1}</span>
        </Link>
        <Link to={link2}>
          <span>{text2}</span>
        </Link>
      </div>
    </>
  );
};

export default AccountLinks;
