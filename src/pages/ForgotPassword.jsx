import React from 'react'
import LogoAndTitle from '../components/shared/LogoAndTitle'


const ForgotPassword = () => {
  return (
    <>
        {/* Main container */}
      <div className="pt-[105px] lg:px-[34.52px] gap-[23.67px]">
        {/* Logo and title section */}
        <div className="flex flex-col max-w-[359px] mx-auto">
          <LogoAndTitle title="welcome back" />
          {/* Input fields */}
          {/* Or sign in with separator */}
        </div>
      </div>
    </>
  )
}

export default ForgotPassword