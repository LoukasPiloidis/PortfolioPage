import { createContext } from "react";

export type ContextProps = {
  language: "eng" | "gr";
  activePath: string;
  setLanguage?: React.Dispatch<React.SetStateAction<"eng" | "gr">>;
  setActivePath?: React.Dispatch<React.SetStateAction<string>>;
};

export const Context = createContext<ContextProps>({
  language: "eng",
  activePath: "/",
});
