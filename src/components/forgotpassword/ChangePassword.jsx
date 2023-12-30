import React from "react";
import LogoAndTitle from "../shared/LogoAndTitle";
import ChangePasswordForm from "./ChangePasswordForm";
import HomeIndicator from "../shared/HomeIndicator";

const ChangePassword = () => {
  return (
    <>
      {/* Main container */}
      <div className="lg:px-[34.52px] gap-[23.67px] h-screen flex flex-col">
        {/* Logo and title section */}
        <div className="flex flex-col max-w-[359px] mx-auto mt-auto">
          <LogoAndTitle title="Change Password" />
          <span className="mt-[16px] text-center text-gray-400 font-inter text-sm font-medium leading-6">
            Set a New Password
          </span>

          {/* Input fields */}
          <ChangePasswordForm />
        </div>
        <HomeIndicator/>
      </div>
    </>
  );
};

export default ChangePassword;
