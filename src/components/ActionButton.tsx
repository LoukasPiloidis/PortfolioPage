import { Link } from "react-router-dom";
import styled from "styled-components";
import { palette, typography, screenSize } from "../utils/variables";
import { useContext, useMemo } from "react";
import { Context } from "../context/ContextCreator";

const { blue, white } = palette;
const {
  size: { medium, small },
} = typography;
const { mobile } = screenSize;

const ButtonWrapper = styled.div`
  min-height: calc(100vh - 104px);
  padding: 0 5% 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled(Link)`
  width: 180px;
  height: 80px;
  align-self: flex-end;
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

  @media (max-width: ${mobile}) {
    width: 120px;
    height: 54px;
    left: 0;
    right: 0;
    bottom: 40px;
    margin: auto;
    font-size: ${small};
  }
`;

const buttonText = {
  "/": "About",
  "/about": "Portfolio",
  "/portfolio": "Contact",
  "/contact": "Home",
};

const ActionButton: React.FC<React.PropsWithChildren> = ({ children }) => {
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

  return (
    <ButtonWrapper>
      {children}
      <Button to={getRedirectPath}>{buttonText[activePath]}</Button>
    </ButtonWrapper>
  );
};

export default ActionButton;
