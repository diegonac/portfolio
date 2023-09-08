import React, { useState } from "react";
import HeaderMobile from "./HeaderMobile";
import NavBar from "./NavBar";
import "../../assets/Header.css";

const screenMobile = window.innerWidth <= 712 || window.innerHeight <= 575;

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(screenMobile);

  addEventListener("resize", () => {
    const mobile = window.innerWidth <= 712 || window.innerHeight <= 575;
    setIsMobile(mobile);
  });

  return (
    <header>
      <div id="div-logo"></div>
      {isMobile ? <HeaderMobile /> : <NavBar />}
    </header>
  );
};

export default Header;
