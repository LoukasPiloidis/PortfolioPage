import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { typography, palette } from "../utils/variables";
import { Context } from "../context/ContextCreator";

type BurgerItemProps = {
  url?: string;
  name: string;
  active?: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const { size } = typography;
const { white } = palette;

const Item = styled.button<{ active?: boolean }>`
  font-size: ${size.small};
  color: ${white};
  padding: 16px 0;
  ${({ active }) => active && `text-decoration: underline;`}
`;

export const BurgerItem: React.FC<BurgerItemProps> = ({
  url,
  name,
  active,
  setDisplayMenu,
}) => {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(Context);

  const handleClick = () => {
    const updatedLanguage = language === "eng" ? "gr" : "eng";

    setDisplayMenu(false);
    if (url) {
      return navigate(url);
    }
    return setLanguage?.(updatedLanguage);
  };

  return (
    <Item active={active} onClick={handleClick}>
      {name}
    </Item>
  );
};
