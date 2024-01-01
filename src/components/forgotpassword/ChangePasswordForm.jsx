import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import eye from "../../assets/eye.svg";
import eyeOff from "../../assets/eye-off.svg";
import Button1 from "../shared/Button1";

const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const changePassword = async (userData) => {
    try {
      const response = await axios.post(
        "http://assessmentapi-001-site1.htempurl.com/api/v1/User/ChangePassword",
        userData
      );

      console.log("Change Password successful:", response.data);
    } catch (error) {
      console.error("Change Password error:", error.message);
    }
  };

  // Formik and Yup setup
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string().required("New Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      changePassword(values);
    },
  });

  const togglePasswordVisibility = (inputName) => {
    if (inputName === "password") {
      setShowPassword(!showPassword);
    } else if (inputName === "confirmPassword") {
      setShowPassword2(!showPassword2);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <div className="flex flex-col gap-[23.67px] mt-[23.67px]">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your New Password"
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-[7.899px] p-[17.751px] w-full md:w-[358.968px] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
          />
          <img
            src={showPassword ? eye : eyeOff}
            alt="Toggle Password Visibility"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => togglePasswordVisibility("password")}
          />
        </div>
        {formik.touched.newPassword && formik.errors.newPassword && (
          <div className="text-red-500 mx-auto px-[17.751px] w-full md:w-[358.968px] mt-[-20px]">
            {formik.errors.newPassword}
          </div>
        )}
        <div className="relative">
          <input
            type={showPassword2 ? "text" : "password"}
            placeholder="Confirm New Password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-[7.899px] p-[17.751px] w-full md:w-[358.968px] mx-auto placeholder-[#BEBEBE] border border-1 border-[#BEBEBE]"
          />
          <img
            src={showPassword2 ? eye : eyeOff}
            alt="Toggle Password Visibility"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => togglePasswordVisibility("confirmPassword")}
          />
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="text-red-500 mx-auto px-[17.751px] w-full md:w-[358.968px] mt-[-20px]">
            {formik.errors.confirmPassword}
          </div>
        )}
      </div>

      {/* Done button */}
      <div className="mt-[49px]">
        <Button1 title="Done" />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
