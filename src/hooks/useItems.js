// useItems.js
import { useContext } from "react";
import {ItemsContext} from "../ItemsContext";

export default function useItems() {
  return useContext(ItemsContext);
}