import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Pages/Layout";
import Index from "../Pages/Index";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
