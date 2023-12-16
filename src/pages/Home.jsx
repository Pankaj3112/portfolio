import React, { useEffect, useRef } from "react";
import { Hero, Projects, Navbar, Skills } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
