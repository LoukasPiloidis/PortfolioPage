import { createContext } from "react";
import { Paths } from "../types";

export type ContextProps = {
  language: "eng" | "gr";
  activePath: Paths;
  setLanguage?: React.Dispatch<React.SetStateAction<"eng" | "gr">>;
  setActivePath?: React.Dispatch<React.SetStateAction<Paths>>;
};

export const Context = createContext<ContextProps>({
  language: "eng",
  activePath: "/",
});
