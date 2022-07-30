import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Design/Footer";
import { Header } from "../components/Design/Header";
import { LoginScreen } from "../components/Auth/LoginScreen";
import './AuthRouter.scss'
import { Register } from "../components/Auth/Register";

export const AuthRouter = () => {
  return (
    <div className="routerAuth">
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
