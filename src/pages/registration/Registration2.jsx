import React from "react";
import RegistrationForm2 from "../../components/registration/RegistrationForm2";
import LogoAndTitle from "../../components/shared/LogoAndTitle";

const Registration2 = () => {
  return (
    <>
      {/* Main container */}
      <div className="pt-[190px] lg:px-[34.52px] gap-[23.67px]">
        {/* Logo and title section */}
        <div className="flex flex-col  max-w-[359px] mx-auto">
         <LogoAndTitle title="register"/>
          {/* Signup form */}
         <RegistrationForm2/>
        </div>
      </div>
    </>
  );
};

export default Registration2;
