import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import Presentation from "./Presentation";
import Projects from "./Projects";
import "../assets/Layout.css";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
