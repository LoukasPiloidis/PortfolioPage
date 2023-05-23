import styled from "styled-components";
import { typography, palette, screenSize } from "../utils/variables";
import messenger from "../assets/messenger.svg";
import linkedin from "../assets/linkedin.svg";
import viber from "../assets/viber.svg";
import whatsapp from "../assets/whatsapp.svg";
import EmailForm from "./EmailForm";

const { mobileSmall } = typography.size;
const { white } = palette;

const { mobile } = screenSize;

const Wrapper = styled.div`
  height: 512px;
  margin: auto;
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;

  @media (max-width: ${mobile}) {
    height: auto;
    width: 350px;
    flex-direction: column;
  }
`;

const SocialWrapper = styled.div`
  width: 64px;
  height: 100%;
  background: ${white};
  border-radius: 0 4px 4px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${mobile}) {
    width: calc(100% - 16px);
    font-size: ${mobileSmall};
    padding: 8px;
    border-radius: 0 0 4px 4px;
    flex-direction: row;
  }
`;

const SocialIconWrapper = styled.a``;

const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const ContactCard = () => {
  return (
    <Wrapper>
      <EmailForm />
      <SocialWrapper>
        <SocialIconWrapper href="http://m.me/loukas.piloidis" target="_blank">
          <SocialIcon src={messenger} />
        </SocialIconWrapper>
        <SocialIconWrapper
          href="https://www.linkedin.com/in/loukaspiloidis/"
          target="_blank"
        >
          <SocialIcon src={linkedin} />
        </SocialIconWrapper>
        <SocialIconWrapper
          href="whatsapp:contact=%2B46736873803@s.whatsapp.com"
          target="_blank"
        >
          <SocialIcon src={whatsapp} />
        </SocialIconWrapper>
        <SocialIconWrapper
          href="viber://contact?number=%2B46736873803"
          target="_blank"
        >
          <SocialIcon src={viber} />
        </SocialIconWrapper>
      </SocialWrapper>
    </Wrapper>
  );
};

export default ContactCard;
