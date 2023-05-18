import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../context/ContextCreator";
import { copies } from "../utils/copies.ts";
import Title from "../components/Title.tsx";
import Subtitle from "../components/Subtitle.tsx";
import { screenSize } from "../utils/variables.ts";
import ActionButton from "../components/ActionButton.tsx";

const {
  homePage: { FULL_NAME, JOB_TITLE, MOTO },
} = copies;
const { mobile } = screenSize;

const Wrapper = styled.div`
  max-width: 570px;
  margin-top: 15%;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 56px;
  text-align: center;

  @media (max-width: ${mobile}) {
    width: 90%;
    margin: 35% auto 100px;
  }
`;

const NameAndJobTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Home = () => {
  const { activePath, setActivePath } = useContext(Context);

  useEffect(() => {
    if (activePath !== "/") {
      setActivePath?.("/");
    }
  }, [activePath, setActivePath]);

  return (
    <ActionButton>
      <Wrapper>
        <NameAndJobTitleWrapper>
          <Title>{FULL_NAME}</Title>
          <Subtitle>{JOB_TITLE}</Subtitle>
        </NameAndJobTitleWrapper>
        <Subtitle>{MOTO}</Subtitle>
      </Wrapper>
    </ActionButton>
  );
};

export default Home;
