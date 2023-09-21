import React from "react";

interface NavBarProps {
  isMobile?: boolean;
  handleDrawer?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isMobile = false, handleDrawer = () => {}, }) => {
  const display = isMobile ? undefined : { display: "flex" };

  const updateScrollFocus = (id: string) => {
    const container = document.getElementById(id);
    const yOffset = -75;
    if(container) {
      const y = container.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handlePresentation = () => {
    handleDrawer();
    updateScrollFocus("section-presentation");
  }

  const handleProject = () => {
    handleDrawer();
    updateScrollFocus("section-projects");
  };

  const handleContact = () => {
    handleDrawer();
    updateScrollFocus("section-contact");
  };

  return (
    <nav id="nav-bar">
      <div style={display}>
          <p onClick={handlePresentation}>Sobre mí</p>
          <p onClick={handleProject}>Proyectos</p>
          <p onClick={handleContact}>Contacto</p>
      </div>
    </nav>
  );
};

export default NavBar;
