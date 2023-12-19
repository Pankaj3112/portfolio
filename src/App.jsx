import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { AnimatedRoutes, Navbar } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter> 
  );
};

export default App;
