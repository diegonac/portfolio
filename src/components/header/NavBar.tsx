import React from "react";
import { HeaderProps } from "../../types/types";
import getLanguage from "../../utils/language";

interface NavBarProps extends HeaderProps {
  isMobile?: boolean;
  handleDrawer?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  isMobile = false,
  handleDrawer = () => {},
  language,
  changeLanguage,
}) => {
  const display = isMobile ? undefined : { display: "flex" };

  const updateScrollFocus = (id: string) => {
    const container = document.getElementById(id);
    const yOffset = -75;
    if (container) {
      const y =
        container.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handlePresentation = () => {
    handleDrawer();
    updateScrollFocus("section-presentation");
  };

  const handleProject = () => {
    handleDrawer();
    updateScrollFocus("section-projects");
  };

  const handleContact = () => {
    handleDrawer();
    updateScrollFocus("section-contact");
  };

  const sections = getLanguage(language).navBar;

  return (
    <nav id="nav-bar">
      <div style={display}>
        <p onClick={handlePresentation}>{sections[0]}</p>
        <p onClick={handleProject}>{sections[1]}</p>
        <p onClick={handleContact}>{sections[2]}</p>
        <select
          className="select-language"
          value={language ? "spain" : "english"}
          onChange={changeLanguage}
        >
          <option value="spain">Español</option>
          <option value="english">English</option>
        </select>
      </div>
    </nav>
  );
};

export default NavBar;
