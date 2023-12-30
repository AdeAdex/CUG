import React from "react";
import SignWith from "../../components/base/SignWith";
import RegistrationForm1 from "../../components/registration/RegistrationForm1";
import LogoAndTitle from "../../components/shared/LogoAndTitle";

const Registration1 = () => {
  return (
    <>
      {/* Main container */}
      <div className="pt-[63px] lg:px-[34.52px] gap-[23.67px]">
        {/* Logo and title section */}
        <div className="flex flex-col max-w-[359px] mx-auto">
          <LogoAndTitle title="register"/>
          {/* Signup form */}
          <RegistrationForm1 />
          {/* Or sign up with separator */}
          <SignWith content="or Signup with" />
        </div>
      </div>
    </>
  );
};

export default Registration1;
