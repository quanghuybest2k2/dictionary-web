import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../Pages/Admin/Layout";
import AdminIndex from "../Pages/Admin/Index";
import Specialize from "../Pages/Admin/specialize/Specialize";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminIndex />} />
        <Route path="specialize" element={<Specialize />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
