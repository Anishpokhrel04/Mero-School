import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import HomePage from "../starter/HomePage";
import MainLayout from "../layout/main/MainLayout";
import Student from "../pages/Student";
import Teacher from "../pages/Teacher";

const RouterSetup = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login/:role" element={<LoginPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/dashboard/" element={<Dashboard />} />
            <Route path="/students/" element={<Student />} />
            <Route path="/teachers/" element={<Teacher />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterSetup;
