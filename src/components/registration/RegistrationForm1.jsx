import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AccountLinks from "../shared/AccountLinks";
import Button1 from "../shared/Button1";

const RegistrationForm1 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const signup = async (userData) => {
    try {
      setLoading(true);
      let endpoint =
        "http://assessmentapi-001-site1.htempurl.com/api/v1/User/Register1";
      const response = await axios.post(endpoint, userData, {
        withCredentials: true,
        timeout: 5000,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      if (response) {
        navigate("/register/2", { state: { formData: formik.values } });
        console.log("Signup successful:", response.data);
      }
    } catch (error) {
      setLoading(false);
      console.error("Signup error:", error.message);
      console.log("Error details:", error);
    }
  };

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
      await signup(values);
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
        <AccountLinks
          text1="Forgot Password?"
          text2="Have an Account?"
          link1="/forgotpassword/verify_account"
          link2="/login"
        />
        {/* Signup button */}
        <div className="mx-auto w-[100%] mt-[23.67px]">
          <Button1 title="Next" loading={loading} />
        </div>
      </form>
    </>
  );
};

export default RegistrationForm1;
