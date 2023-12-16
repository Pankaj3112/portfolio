import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { AnimatedRoutes, Navbar } from "./components";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
