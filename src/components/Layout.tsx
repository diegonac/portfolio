import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Contact from "./Contact";
import Header from "./header/Header";
import Presentation from "./Presentation";
import Projects from "./Projects";
import "../assets/Layout.css";

AOS.init({
  duration: 500,
  once: true,
});

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Layout;
