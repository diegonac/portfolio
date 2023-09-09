import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import Projects from "./Projects";
import "../assets/Layout.css";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
