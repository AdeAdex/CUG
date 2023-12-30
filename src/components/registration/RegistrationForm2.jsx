import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AccountLinks from "../shared/AccountLinks";
import Button1 from "../shared/Button1";

// axios.defaults.headers.common["Content-Type"] = "application/json";

const RegistrationForm2 = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  const signup = async (userData) => {
    try {
      const response = await axios.post(
        "http://assessmentapi-001-site1.htempurl.com/api/v1/User/Register2",
        userData
      );

      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  // Formik and Yup setup
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      ...formData,
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string().required("Phone Number is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      await signup(values);
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {/* Input fields */}
        <div className="flex flex-col gap-[23.67px] mt-[23.67px]">
          {/* Phone Number */}
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter your Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-[7.899px] p-[17.751px] w-[100%] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="text-red-500 mx-auto px-[17.751px] w-[100%] mt-[-20px]">
              {formik.errors.phoneNumber}
            </div>
          )}
          {/* Pasword */}
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-[7.899px] p-[17.751px] w-[100%] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500  mx-auto px-[17.751px] w-[100%] mt-[-20px]">
              {formik.errors.password}
            </div>
          )}
          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-[7.899px] p-[17.751px] w-[100%] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500  mx-auto px-[17.751px] w-[100%] mt-[-20px]">
              {formik.errors.confirmPassword}
            </div>
          )}
        </div>
        {/* Forgot password and sign-up section */}
        <AccountLinks text1="Forgot Password?" text2="Have an Account?"  link1="/forgotpassword/verify_account"
          link2="/login"/>
        {/* Done button */}
        <div className="mx-auto w-[100%] mt-[23.67px]">
          <Button1 title="Done"/>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm2;
