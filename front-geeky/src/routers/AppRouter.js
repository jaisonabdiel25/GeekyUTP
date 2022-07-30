import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { GeekyRouter } from "./GeekyRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<GeekyRouter />} />
        <Route path="auth/*" element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
};