import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { copies } from "../utils/copies";
import { typography, palette, screenSize } from "../utils/variables";
import { FormValues } from "../types";

const { EMAIL_BUTTON, EMAIL_TITLE } = copies.contactPage;
const { medium, placeholder, mobileSmall } = typography.size;
const { white, blue } = palette;
const { mobile } = screenSize;

const Wrapper = styled.form`
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

const EmailForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [{ name, email, inquiry }, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    inquiry: "",
  });
  const [submitButtonText, setSubmitButtonText] = useState(EMAIL_BUTTON);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues((prev) => ({ ...prev, name: e.target.value }));

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues((prev) => ({ ...prev, email: e.target.value }));

  const handleInquiryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setFormValues((prev) => ({ ...prev, inquiry: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dfhab09",
        "template_ppgjjpc",
        { from_name: name, reply_to: email, message: inquiry },
        "NxA57hAsQmTI_74Rq"
      )
      .then(
        (result) => {
          setSubmitButtonText(result.text);
          setFormValues({ name: "", email: "", inquiry: "" });
        },
        (error) => {
          setSubmitButtonText(error.text);
        }
      );
  };
  return (
    <Wrapper ref={ref} onSubmit={handleSubmit}>
      <EmailTitle>{EMAIL_TITLE}</EmailTitle>
      <EmailBody>
        <EmailInput
          placeholder="Your name"
          onChange={handleNameChange}
          value={name}
        ></EmailInput>
        <EmailInput
          placeholder="Your email address"
          onChange={handleEmailChange}
          value={email}
        ></EmailInput>
        <EmailTextArea
          placeholder="Your inquiry"
          onChange={handleInquiryChange}
          value={inquiry}
        ></EmailTextArea>
      </EmailBody>
      <EmailButton type="submit" value={submitButtonText} />
    </Wrapper>
  );
};

export default EmailForm;
