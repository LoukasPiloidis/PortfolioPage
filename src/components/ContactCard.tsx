import styled from "styled-components";
import { typography, palette, screenSize } from "../utils/variables";
import { copies } from "../utils/copies";
import messenger from "../assets/messenger.svg";
import linkedin from "../assets/linkedin.svg";
import viber from "../assets/viber.svg";
import whatsapp from "../assets/whatsapp.svg";

const { medium, placeholder, mobileSmall } = typography.size;
const { white, blue } = palette;
const { EMAIL_BUTTON, EMAIL_TITLE } = copies.contactPage;
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

const EmailForm = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 66px;
  gap: 24px;

  @media (max-width: ${mobile}) {
    width: auto;
    padding: 24px;
  }
`;

const EmailTitle = styled.span`
  font-size: ${medium};
  color: ${white};
`;

const EmailBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const EmailInput = styled.input`
  height: 34px;
  background-color: ${white};
  font-size: ${placeholder};

  &::placeholder {
    font-size: ${placeholder};
    text-align: center;
  }
`;

const EmailTextArea = styled.textarea`
  height: 200px;
  font-family: "Alice", serif;
  font-size: ${placeholder};
  background-color: ${white};

  &::placeholder {
    font-size: ${placeholder};
    text-align: center;
  }
`;

const EmailButton = styled.input`
  width: 112px;
  height: 56px;
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
    width: auto;
    height: auto;
    font-size: ${mobileSmall};
    padding: 8px;
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
      <EmailForm
        action="mailto:loukasmalias@hotmail.com"
        method="post"
        encType="text/plain"
      >
        <EmailTitle>{EMAIL_TITLE}</EmailTitle>
        <EmailBody>
          <EmailInput placeholder="Your name"></EmailInput>
          <EmailInput placeholder="Your email address"></EmailInput>
          <EmailTextArea placeholder="Your inquiry"></EmailTextArea>
        </EmailBody>
        <EmailButton type="submit" value={EMAIL_BUTTON} />
      </EmailForm>
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
