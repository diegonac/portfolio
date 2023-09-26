import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HeaderProps } from "../../types/types";
import NavBar from "./NavBar";

interface DrawerProps extends HeaderProps {
  containerDrawer: React.RefObject<HTMLDivElement>;
  handleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({
  containerDrawer,
  handleDrawer,
  language,
  changeLanguage,
}) => {
  return (
    <div id="drawer" ref={containerDrawer}>
      <div className="container-button-drawer">
        <button
          type="button"
          title="Abrir cajón"
          onClick={handleDrawer}
          className="button-drawer"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <NavBar
        language={language}
        changeLanguage={changeLanguage}
        isMobile={true}
        handleDrawer={handleDrawer}
      />
    </div>
  );
};

export default Drawer;
