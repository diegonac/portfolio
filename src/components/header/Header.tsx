import React, { useState } from "react";
import HeaderMobile from "./HeaderMobile";
import { HeaderProps } from "../../types/types";
import NavBar from "./NavBar";
import "../../assets/css/Header.css";

const screenMobile = window.innerWidth <= 712 || window.innerHeight <= 575;

const Header: React.FC<HeaderProps> = ({ language, changeLanguage }) => {
  const [isMobile, setIsMobile] = useState(screenMobile);

  addEventListener("resize", () => {
    const mobile = window.innerWidth <= 712 || window.innerHeight <= 575;
    setIsMobile(mobile);
  });

  const redirectHome = () => {
    window.location.href = "";
  };

  return (
    <header>
      <div id="div-logo" onClick={redirectHome}></div>
      {isMobile ? (
        <HeaderMobile language={language} changeLanguage={changeLanguage} />
      ) : (
        <NavBar language={language} changeLanguage={changeLanguage} />
      )}
    </header>
  );
};

export default Header;
