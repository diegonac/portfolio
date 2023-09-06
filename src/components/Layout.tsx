import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import "../assets/Layout.css";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>Hola mundo</main>
      <Footer />
    </>
  );
};

export default Layout;
