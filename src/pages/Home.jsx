import React, { useEffect, useRef } from "react";
import { Hero, Projects, Navbar, Skills, ScrollToTop } from "../components";
import Transition from "../components/Transition";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
};

const WithTransition = Transition(Home);
export default WithTransition;
