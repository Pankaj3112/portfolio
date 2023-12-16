import React from "react";
import { Home, ProjectDetails } from "../pages";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Toaster key={'toaster'} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer key={'footer'} />
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
