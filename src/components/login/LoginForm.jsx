import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import eye from "../../assets/eye.svg";
import eyeOff from "../../assets/eye-off.svg";
import AccountLinks from "../shared/AccountLinks";
import Button1 from "../shared/Button1";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const login = async (userData) => {
    try {
      const response = await axios.post(
        "http://assessmentapi-001-site1.htempurl.com/api/v1/User/Login",
        userData
      );

      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  // Formik and Yup setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      login(values);
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="">
        <div className="flex flex-col gap-[23.67px] mt-[23.67px]">
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-[7.899px] p-[17.751px] w-[358.968px] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
          />

          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 mx-auto px-[17.751px] w-[358.968px] mt-[-20px]">
              {formik.errors.email}
            </div>
          )}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rounded-[7.899px] p-[17.751px] w-[358.968px] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
            />
            <img
              src={showPassword ? eye : eyeOff}
              alt="Toggle Password Visibility"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => togglePasswordVisibility("confirmPassword")}
            />
          </div>

          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 mx-auto px-[17.751px] w-[358.968px] mt-[-20px]">
              {formik.errors.password}
            </div>
          )}
        </div>
        {/* Forgot password and sign-up section */}
        <AccountLinks
          text1="Forgot Password?"
          text2="Don’t have an Account?"
          link1="/forgotpassword/verify_account"
          link2="/register"
        />
        {/* Login button */}
        <div className="mx-auto w-[100%] mt-[23.67px]">
          <Button1 title="Login" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
