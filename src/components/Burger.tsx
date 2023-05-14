import { useContext, useEffect, useState } from "react";
import { BurgerItem } from "./BurgerItem";
import styled, { keyframes, css } from "styled-components";
import { palette, screenSize } from "../utils/variables";
import { Context } from "../context/ContextCreator";
import { burgerValues } from "../utils/burgerValues";

const { blue, white } = palette;
const { mobile } = screenSize;

const Wrapper = styled.div`
  width: 3rem;
  height: 100%;
  padding-left: 0.5rem;
  display: flex;
  z-index: 1000;
`;

const BurgerIcon = styled.div`
  border-radius: 2px;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  z-index: 1000;
  position: relative;
  top: 0;
`;

const BurgerIconButton = styled.div<{ active?: boolean }>`
  width: 2rem;
  cursor: pointer;

  ${({ active }) => {
    if (active) {
      return css`
        span:nth-child(1) {
          animation: ease 0.7s ${IconButtonAnimationTop} forwards;
        }
        span:nth-child(2) {
          animation: ease 0.7s ${IconButtonAnimationScaled} forwards;
        }
        span:nth-child(3) {
          animation: ease 0.7s ${IconButtonAnimationBottom} forwards;
        }
      `;
    }
    return css`
      span:nth-child(1) {
        animation: ease 0.7s ${IconButtonAnimationTop2} forwards;
      }
      span:nth-child(2) {
        animation: ease 0.7s ${IconButtonAnimationScaled2} forwards;
      }
      span:nth-child(3) {
        animation: ease 0.7s ${IconButtonAnimationBottom2} forwards;
      }
    `;
  }}
`;

const ButtonLine = styled.span<{ extraMarginTop?: boolean }>`
  display: block;
  width: 100%;
  box-shadow: 0 1px 15px 0 rgb(251, 251, 251);
  border-radius: 3px;
  height: 4px;
  background-color: ${white};
  transition: all 0.3s;
  position: relative;
  ${({ extraMarginTop }) => extraMarginTop && ` margin-top: 7px;`}
`;

const BurgerMenu = styled.div<{ isMounted?: boolean; displayMenu?: boolean }>`
  z-index: 10;
  position: fixed;
  background-color: ${blue};
  opacity: 90%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 4px 4px;
  width: 280px;
  padding: 4rem 0 0;
  top: 0;
  left: 0;
  overflow: scroll;

  ${({ isMounted }) => isMounted && `display: none;`}
  ${({ displayMenu }) =>
    css`
      animation: ease 0.7s
        ${displayMenu ? BurgerMenuAnimationShow : BurgerMenuAnimationHide}
        forwards;
    `}}

    @media(max-width: ${mobile}) {
      width: 200px;
    }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
  list-style: none;
`;

const IconButtonAnimationTop = keyframes`
0% {
  top: 0;
  transform: rotate(0);
}
50% {
  top: 11px;
  transform: rotate(0);
}
100% {
  top: 11px;
  transform: rotate(45deg);
}
`;

const IconButtonAnimationTop2 = keyframes`
0% {
  top: 11px;
  transform: rotate(45deg);
}
50% {
  top: 11px;
  transform: rotate(0deg);
}
100% {
  top: 0;
  transform: rotate(0deg);
}
`;

const IconButtonAnimationBottom = keyframes`
0% {
  bottom: 0;
  transform: rotate(0);
}
50% {
  bottom: 11px;
  transform: rotate(0);
}
100% {
  bottom: 11px;
  transform: rotate(135deg);
}
`;

const IconButtonAnimationBottom2 = keyframes`
0% {
  bottom: 11px;
  transform: rotate(135deg);
}
50% {
  bottom: 11px;
  transform: rotate(0);
}
100% {
  bottom: 0;
  transform: rotate(0);
}
`;

const IconButtonAnimationScaled = keyframes`
50% {
  transform: scale(0);
}
100% {
  transform: scale(0);
}
`;

const IconButtonAnimationScaled2 = keyframes`
0% {
  transform: scale(0);
}
50% {
  transform: scale(0);
}
100% {
  transform: scale(1);
}
`;

const BurgerMenuAnimationShow = keyframes`
0% {
  transform: translateX(-280px);
}
100% {
  transform: translateX(0px);
}
`;

const BurgerMenuAnimationHide = keyframes`
0% {
  transform: translateX(0px);
}
100% {
  transform: translateX(-280px);
  display: none;
}
`;

const Burger = () => {
  const [isMounted, setMounted] = useState<boolean>(false);
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  const { language, activePath } = useContext(Context);

  const items = burgerValues[language];

  const toggleBurger = () => {
    setMounted(true);
    setBurgerOpen(!burgerOpen);
    setDisplayMenu(!displayMenu);
  };

  useEffect(() => {
    !displayMenu && setTimeout(() => setMounted(false), 500);
  }, [displayMenu]);

  return (
    <Wrapper>
      <BurgerIcon onClick={toggleBurger}>
        <BurgerIconButton active={isMounted && burgerOpen}>
          <ButtonLine></ButtonLine>
          <ButtonLine extraMarginTop></ButtonLine>
          <ButtonLine extraMarginTop></ButtonLine>
        </BurgerIconButton>
      </BurgerIcon>
      <BurgerMenu isMounted={!isMounted} displayMenu={displayMenu}>
        <MenuList>
          {items.map((item, index) => (
            <BurgerItem
              key={index}
              {...item}
              active={item.url === activePath}
              setDisplayMenu={setDisplayMenu}
            />
          ))}
        </MenuList>
      </BurgerMenu>
    </Wrapper>
  );
};

export default Burger;
