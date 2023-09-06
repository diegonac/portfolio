import React from "react";

interface NavBarProps {
  isMobile?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isMobile = false }) => {

  const display = isMobile ? undefined : {display: "flex"};

  return (
    <nav id="nav-bar">
      <ul style={display}>
        <li>Inicio</li>
        <li>Sobre mí</li>
        <li>Proyectos</li>
      </ul>
    </nav>
  );
};

export default NavBar;
