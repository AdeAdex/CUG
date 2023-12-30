import React from "react";
import LogoAndTitle from "../shared/LogoAndTitle";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePassword = () => {
  return (
    <>
      {/* Main container */}
      <div className="mt-[150px] lg:px-[34.52px] gap-[23.67px]">
        {/* Logo and title section */}
        <div className="flex flex-col max-w-[359px] mx-auto">
          <LogoAndTitle title="Change Password" />
          <span className="mt-[16px] text-center text-gray-400 font-inter text-sm font-medium leading-6">
            Set a New Password
          </span>

          {/* Input fields */}
          <ChangePasswordForm />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
