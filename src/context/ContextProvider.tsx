import { useState } from "react";
import { Context, ContextProps } from "./ContextCreator";

type ContextProviderProps = React.PropsWithChildren;

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<ContextProps["language"]>("eng");
  const [activePath, setActivePath] = useState<ContextProps["activePath"]>("/");

  const value = { language, setLanguage, activePath, setActivePath };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
