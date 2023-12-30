import React from "react";
import SignWith from "../components/base/SignWith";
import LoginForm from "../components/login/LoginForm";
import LogoAndTitle from "../components/shared/LogoAndTitle";
import HomeIndicator from "../components/shared/HomeIndicator";

const LoginPage = () => {
  return (
    <>
      {/* Main container */}
      <div className="lg:px-[34.52px] gap-[23.67px] h-screen flex flex-col">
        {/* Logo and title section */}
        <div className="flex flex-col max-w-[359px] mx-auto mt-auto">
          <LogoAndTitle title="welcome back" />
          {/* Input fields */}
          <LoginForm />
          {/* Or sign in with separator */}
          <SignWith content="or Signin with" />
        </div>
          <HomeIndicator/>
      </div>
    </>
  );
};

export default LoginPage;
