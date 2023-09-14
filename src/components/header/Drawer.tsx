import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "./NavBar";

interface DrawerProps {
  containerDrawer: React.RefObject<HTMLDivElement>;
  handleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ containerDrawer, handleDrawer }) => {
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

      <NavBar isMobile={true} handleDrawer={handleDrawer} />
    </div>
  );
};

export default Drawer;
