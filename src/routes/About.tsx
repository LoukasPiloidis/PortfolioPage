import { useContext, useEffect } from "react";
import styled from "styled-components";
import { copies } from "../utils/copies";
import { Context } from "../context/ContextCreator";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import ActionButton from "../components/ActionButton";

const Wrapper = styled.div`
  width: 90%;
  max-height: 80%;
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

const {
  aboutPage: {
    TITLE,
    ACADEMIC_BACKGROUND,
    PROGRAMMING_BACKGROUND,
    CURRENT_ROLE,
    HOBBIES,
  },
} = copies;

const About = () => {
  const { activePath, setActivePath } = useContext(Context);

  useEffect(() => {
    if (activePath !== "/about") {
      setActivePath?.("/about");
    }
  }, [activePath, setActivePath]);

  return (
    <ActionButton>
      <Wrapper>
        <Title>{TITLE}</Title>
        <Subtitle>{ACADEMIC_BACKGROUND}</Subtitle>
        <Subtitle>{PROGRAMMING_BACKGROUND}</Subtitle>
        <Subtitle>{CURRENT_ROLE}</Subtitle>
        <Subtitle>{HOBBIES}</Subtitle>
      </Wrapper>
    </ActionButton>
  );
};

export default About;
