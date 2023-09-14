import React from "react";
import NavBar from "./NavBar";

interface DrawerProps {
  containerDrawer: React.RefObject<HTMLDivElement>;
  handleDrawer: () => void;
  
}

const Drawer: React.FC<DrawerProps> = ({ containerDrawer, handleDrawer }) => {

  return (
    <div id="drawer" ref={containerDrawer}>
      <NavBar isMobile={true} handleDrawer={handleDrawer} />
    </div>
  );
};

export default Drawer;
