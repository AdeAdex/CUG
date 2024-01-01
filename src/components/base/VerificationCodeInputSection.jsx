// import React from "react";

// const VerificationCodeInputSection = () => {
//   return (
//     <>
//       <div className="gap-[21.23px] flex">
//         <input
//           type="tel"
//           className="border border-1 border-[#0F515F] py-[16px] px-[16px] w-[25%] rounded-[8px] text-[22px] font-[700] font-inter text-[#898989] text-center"
//           maxLength={1}
//         />
//         <input
//           type="tel"
//           className="border border-1 border-[#0F515F] py-[16px] px-[16px] w-[25%] rounded-[8px] text-[22px] font-[700] font-inter text-[#898989] text-center"
//           maxLength={1}
//         />
//         <input
//           type="tel"
//           className="border border-1 border-[#0F515F] py-[16px] px-[16px] w-[25%] rounded-[8px] text-[22px] font-[700] font-inter text-[#898989] text-center"
//           maxLength={1}
//         />
//         <input
//           type="tel"
//           className="border border-1 border-[#0F515F] py-[16px] px-[16px] w-[25%] rounded-[8px] text-[22px] font-[700] font-inter text-[#898989] text-center"
//           maxLength={1}
//         />
//       </div>
//     </>
//   );
// };

// export default VerificationCodeInputSection;

import React from "react";

const VerificationCodeInputSection = ({codes, setCodes}) => {
  

  const handleInputChange = (index, value) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);

    if (index < newCodes.length - 1 && value !== "") {
      document.getElementById(`codeInput${index + 1}`).focus();
    }
  };

  return (
    <>
      <div className="gap-[21.23px] flex">
        {codes.map((code, index) => (
          <input
            key={index}
            id={`codeInput${index}`}
            type="tel"
            className="border border-1 border-[#0F515F] py-[10px] md:py-[16px] md:px-[16px] w-[25%] rounded-[8px] text-[22px] font-[700] font-inter text-[#898989] text-center"
            maxLength={1}
            value={code}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
    </>
  );
};

export default VerificationCodeInputSection;
