import React, { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "./Drawer";
import ModalDrawer from "../../modals/ModalDrawer";

const modalDrawer = document.getElementById("modal-drawer");

const HeaderMobile: React.FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const containerDrawer = useRef<HTMLDivElement>(null);

  const handleDrawer = () => {
    setIsOpenDrawer((prev) => !prev);
    if (isOpenDrawer) {
      containerDrawer.current?.removeAttribute("style");
      modalDrawer?.removeAttribute("style");
    } else {
      containerDrawer.current?.setAttribute("style", "width: 150px;");
      modalDrawer?.setAttribute("style", "width: 100vw;");
    }
  };

  const handleStuffedModal = () => {
    setIsOpenDrawer((prev) => !prev);
    containerDrawer.current?.removeAttribute("style");
    modalDrawer?.removeAttribute("style");
  };

  return (
    <>
      <button
        type="button"
        title="Abrir cajón"
        onClick={handleDrawer}
        id="button-drawer"
      >
        <GiHamburgerMenu />
      </button>
      <ModalDrawer>
        <div className="stuffed-modal" onClick={handleStuffedModal}></div>
        <Drawer containerDrawer={containerDrawer} />
      </ModalDrawer>
    </>
  );
};

export default HeaderMobile;
