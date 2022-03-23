import { useContext } from "react";
import { ModalContext } from "../contexts/ModalsContext";

export function useModals() {
  return useContext(ModalContext)
}