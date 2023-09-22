import React, { CSSProperties } from "react";
import "../assets/Splash.css";

interface SplashProps {
  display: CSSProperties;
}

const Splash: React.FC<SplashProps> = ({ display }) => {
  return (
    <div style={display} className="container-splash">
      <div id="splash"></div>{" "}
    </div>
  );
};

export default Splash;
