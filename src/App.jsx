import { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/registration/RegisterPage";
import Registration1 from "./pages/registration/Registration1";
import Registration2 from "./pages/registration/Registration2";
import Verify from "./components/forgotpassword/Verify";
import ChangePassword from "./components/forgotpassword/ChangePassword";
import ResetPassword from "./components/forgotpassword/ResetPassword";

function App() {
  let shouldRedirect = true;


  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/*">
            <Route index element={<Navigate to="1" />} />
            <Route index element={<RegisterPage />} />
            <Route path="1" element={<Registration1 />} />
            <Route path="2" element={<Registration2 />} />
          </Route>
          <Route path="/forgotpassword/*">
            <Route index element={<Navigate to="verify_account" />} />
            {/* <Route index element={<RegisterPage />} /> */}
            <Route path="verify_account" element={<Verify />} />
            <Route path="change_password" element={<ChangePassword />} />
            <Route path="reset_password" element={<ResetPassword />} />
          </Route>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
