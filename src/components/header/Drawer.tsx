import React from "react";
import NavBar from "./NavBar";

interface DrawerProps {
  containerDrawer: React.RefObject<HTMLDivElement>;
}

const Drawer: React.FC<DrawerProps> = ({ containerDrawer }) => {

  return (
    <div id="drawer" ref={containerDrawer}>
      <NavBar isMobile={true} />
    </div>
  );
};

export default Drawer;
