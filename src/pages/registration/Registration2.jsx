import React from "react";
import RegistrationForm2 from "../../components/registration/RegistrationForm2";
import LogoAndTitle from "../../components/shared/LogoAndTitle";
import HomeIndicator from "../../components/shared/HomeIndicator";

const Registration2 = () => {
  return (
    <>
      {/* Main container */}
      <div className="lg:px-[34.52px] gap-[23.67px] flex flex-col h-screen">
        {/* Logo and title section */}
        <div className="flex flex-col  max-w-[359px] mx-auto mb-[0px] mt-auto">
         <LogoAndTitle title="register"/>
          {/* Signup form */}
         <RegistrationForm2/>
        </div>
        <HomeIndicator/>
      </div>
    </>
  );
};

export default Registration2;
