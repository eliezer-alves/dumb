import { useContext } from "react";
import { RoomContext } from "../contexts/RoomContext";

export function useRoom() {
  return useContext(RoomContext)
}