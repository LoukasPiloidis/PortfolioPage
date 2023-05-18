import ActionButton from "../components/ActionButton";
import styled from "styled-components";
import { copies } from "../utils/copies";
import Title from "../components/Title";
import artemisTours from "../assets/artemisTours.png";
import danaeDorothea from "../assets/danaeDorothea.png";
import { screenSize } from "../utils/variables";
import { useContext, useEffect } from "react";
import { Context } from "../context/ContextCreator";

const {
  portfolioPage: { TITLE },
} = copies;
const { mobile } = screenSize;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const ImageWrapper = styled.a`
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
  }
`;

const Portfolio = () => {
  const { activePath, setActivePath } = useContext(Context);

  useEffect(() => {
    if (activePath !== "/portfolio") {
      setActivePath?.("/portfolio");
    }
  }, [activePath, setActivePath]);
  return (
    <ActionButton>
      <Title>{TITLE}</Title>
      <Wrapper>
        <ImageWrapper href="https://artemis-tours.com" target="_blank">
          <Image src={artemisTours}></Image>
        </ImageWrapper>
        <ImageWrapper href="https://danaedorothea.com" target="_blank">
          <Image src={danaeDorothea}></Image>
        </ImageWrapper>
      </Wrapper>
    </ActionButton>
  );
};

export default Portfolio;
