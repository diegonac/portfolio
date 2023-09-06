import ReactDOM from "react-dom";
import { ReactNode } from "react";

const ModalDrawer = ({ children }: { children: ReactNode }) => (
  ReactDOM.createPortal(children, document.getElementById("modal-drawer")!)
);

export default ModalDrawer;