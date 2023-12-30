import React from 'react'
import LogoAndTitle from '../shared/LogoAndTitle'

const Verify = () => {
  return (
    <>
        <div className="pt-[105px] lg:px-[34.52px] gap-[23.67px]">
        {/* Logo and title section */}
        <div className="flex flex-col max-w-[359px] mx-auto">
          <LogoAndTitle title="Verrify Account" />
          <span className="mt-[16px] text-center text-gray-400 font-inter text-sm font-medium leading-6">
          Enter the verification code that was sent to ki****@***.com
          </span>
        </div>
      </div>
    </>
  )
}

export default Verify