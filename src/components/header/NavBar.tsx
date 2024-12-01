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

  const handleWorkExperience = () => {
    handleDrawer();
    updateScrollFocus("section-work-experience");
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
      <div style={display} className="container-items-nav-bar">
        <p onClick={handlePresentation}>{sections.aboutMe}</p>
        <p onClick={handleWorkExperience}>{sections.workExperience}</p>
        <p onClick={handleProject}>{sections.projects}</p>
        <p onClick={handleContact}>{sections.contact}</p>
        <div className="container-select">
          <select
            className="select-language"
            value={language ? "spain" : "english"}
            onChange={changeLanguage}
            style={{ width: language ? "78px" : "72px" }}
          >
            <option value="spain">Español</option>
            <option value="english">English</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
