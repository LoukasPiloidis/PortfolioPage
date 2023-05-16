import styled from "styled-components";
import { palette, typography } from "../utils/variables";
import { useContext, useMemo } from "react";
import { Context } from "../context/ContextCreator";
import { Link } from "react-router-dom";

const { blue, white } = palette;
const {
  size: { medium },
} = typography;

const Button = styled(Link)`
  width: 180px;
  height: 80px;
  position: absolute;
  bottom: 10%;
  right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${blue};
  color: ${white};
  font-size: ${medium};
  box-shadow: 4px 4px 2px rgba(255, 255, 255, 0.08);
  transition: all 0.3s;

  &:hover {
    transform: scale(0.98);
  }
`;

const buttonText = {
  "/": "About",
  "/about": "Portfolio",
  "/portfolio": "Contact",
  "/contact": "Home",
};

const ActionButton = () => {
  const { activePath } = useContext(Context);

  const getRedirectPath = useMemo(() => {
    if (activePath === "/") {
      return "/about";
    }
    if (activePath === "/about") {
      return "/portfolio";
    }
    if (activePath === "/portfolio") {
      return "/contact";
    }
    return "/";
  }, [activePath]);

  return <Button to={getRedirectPath}>{buttonText[activePath]}</Button>;
};

export default ActionButton;
