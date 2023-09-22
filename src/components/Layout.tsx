import React, { useState, CSSProperties } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Contact from "./Contact";
import Header from "./header/Header";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Splash from "./Splash";
import "../assets/Layout.css";

AOS.init({
  duration: 500,
  once: true,
});

const Layout: React.FC = () => {
  const [displaySplash, setDisplaySplash] = useState<CSSProperties>({display: "block"});
  const [position, setPosition] = useState<CSSProperties>({position: "fixed"});

  setTimeout(() => {
    setDisplaySplash({display: "none"});
    setPosition({position: "relative"});
  }, 2500);
  return (
    <>
      <Header />
      <main style={position}>
        <Presentation />
        <Projects />
        <Contact />
      </main>
      <Splash display={displaySplash} />
    </>
  );
};

export default Layout;
