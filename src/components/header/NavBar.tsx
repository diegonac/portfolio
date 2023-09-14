import React from "react";

interface NavBarProps {
  isMobile?: boolean;
  handleDrawer?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isMobile = false, handleDrawer = () => {} }) => {

  const display = isMobile ? undefined : {display: "flex"};

  return (
    <nav id="nav-bar">
      <ul style={display}>
        <li onClick={handleDrawer}><a href="#section-presentation">Sobre mí</a></li>
        <li onClick={handleDrawer}><a href="#section-projects">Proyectos</a></li>
        <li onClick={handleDrawer}><a href="#section-contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
