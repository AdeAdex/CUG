import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegistrationForm1 = () => {
  const navigate = useNavigate();

  // Formik and Yup setup
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      middleName: Yup.string().required("Middle Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      navigate("/register/2", { state: { formData: values } });
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="">
        {/* Input fields */}
        <div className="flex flex-col gap-[23.67px] mt-[23.67px]">
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-[7.899px] p-[17.751px] w-[100%] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 mx-auto px-[17.751px] w-[100%] mt-[-20px]">
              {formik.errors.firstName}
            </div>
          )}
          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-[7.899px] p-[17.751px] w-[100%] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500  mx-auto px-[17.751px] w-[100%] mt-[-20px]">
              {formik.errors.lastName}
            </div>
          )}
          {/* Middle Name */}
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={formik.values.middleName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-[7.899px] p-[17.751px] w-[100%] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
          />
          {formik.touched.middleName && formik.errors.middleName && (
            <div className="text-red-500  mx-auto px-[17.751px] w-[100%] mt-[-20px]">
              {formik.errors.middleName}
            </div>
          )}
          {/* Email */}
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-[7.899px] p-[17.751px] w-[100%] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500  mx-auto px-[17.751px] w-[100%] mt-[-20px]">
              {formik.errors.email}
            </div>
          )}
        </div>
        {/* Checkbox and text */}
        <div className="w-[359px] justify-between flex mx-auto mt-[23.67px] text-[10px] font-inter font-[500] text-[#404040] leading-[17px]">
          <label className="flex items-center">
            {/* Checkbox input */}
            <input type="checkbox" className="mr-2" />I have read and accepted
            the{" "}
            <Link>
              <span className="text-[#0F515F]">
                {" "}
                Privacy Policy & Terms of Use
              </span>
            </Link>
          </label>
        </div>
        {/* Forgot password and sign-up section */}
        <div className="w-[359px] justify-between flex mx-auto mt-[23.67px] text-[13.806px] font-inter font-[600] text-[#404040]">
          <Link to="/forgotpassword/verify_account">
            <span>Forgot Password?</span>
          </Link>
          <Link to="/login">
            <span>Have an Account?</span>
          </Link>
        </div>
        {/* Signup button */}
        <div className="mx-auto w-[100%] mt-[23.67px]">
          <button
            type="submit"
            className="bg-[#0F515F] py-[18.737px] px-[145.954px] text-[15.779px] font-[700] font-inter mx-auto text-center rounded-[10px] text-white w-full"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm1;
