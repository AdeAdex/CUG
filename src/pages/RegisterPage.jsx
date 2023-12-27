import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../assets/facebook.svg";
import GoogleIcon from "../assets/google.svg";
import AppleIcon from "../assets/apple.svg";

const RegisterPage = () => {
  return (
    <>
      {/* Main container */}
      <div className="pt-[63px] px-[34.52px] gap-[23.67px]">
        {/* Logo and title section */}
        <div className="flex flex-col min-w-[359px]">
          <div className="w-[70px] h-[72px] flex flex-col items-center mx-auto font-inter font-[700] text-[16px]">
            {/* Logo */}
            <img
              src="images/bluelogo.png"
              alt="bluelogo"
              className="w-full"
            />
          </div>
          {/* Title */}
          <h2 className="text-[29px] font-inter font-[700] text-center text-[#0F515F]  mt-[23.67px]">
            Register
          </h2>
          {/* Input fields */}
          <div className="flex flex-col gap-[23.67px] mt-[23.67px]">
            <input
              type="text"
              placeholder="First Name"
              className="rounded-[7.899px] p-[17.751px] w-[358.968px] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="rounded-[7.899px] p-[17.751px] w-[358.968px] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="rounded-[7.899px] p-[17.751px] w-[358.968px] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
            />
            <input
              type="text"
              placeholder="Email"
              className="rounded-[7.899px] p-[17.751px] w-[358.968px] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
            />
          </div>
          <div className="w-[359px] justify-between flex mx-auto mt-[23.67px] text-[10px] font-inter font-[500] text-[#404040] leading-[17px]">
            <label className="flex items-center">
              {/* Checkbox input */}
              <input type="checkbox" className="mr-2" />
              {/* Text */}I have read and accepted the{" "}
              <span className="text-[#0F515F]">
                Privacy Policy & Terms of Use
              </span>
            </label>
          </div>
          {/* Forgot password and sign-up section */}
          <div className="w-[359px] justify-between flex mx-auto mt-[23.67px] text-[13.806px] font-inter font-[600] text-[#404040]">
            <span>Forgot Password?</span>
            <Link to="register"></Link>
            <span>Have an Account?</span>
          </div>
          {/* Login button */}
          <Link to="/login" className="mx-auto">
            <button className="bg-[#0F515F] py-[18.737px] px-[145.954px] text-[15.779px] font-[700] font-inter mx-auto text-center rounded-[10px] text-white w-[358.968px] mt-[23.67px]">
              Next
            </button>
          </Link>
          {/* Or sign in with separator */}
          <div className="flex mt-[23.67px] w-[358.968px] mx-auto justify-around">
            <hr className="border border-[#E8ECF4] w-[30%] my-auto" />
            <span className="text-[13.806px] font-inter font-[600] text-[#6A707C]">
              Or SignIn With
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
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
