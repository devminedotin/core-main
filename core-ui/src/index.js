import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/profile-page/contact-us" element={<ProfilePage scrollToDivComponent="contact-us" />} />
      <Route path="/profile-page/reviews" element={<ProfilePage scrollToDivComponent="reviews" />} />
      <Route path="/help" element={<Index />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
