import { useContext, useEffect } from "react";
import ActionButton from "../components/ActionButton";
import { Context } from "../context/ContextCreator";
import ContactCard from "../components/ContactCard";
import Title from "../components/Title";
import { copies } from "../utils/copies";

const { TITLE } = copies.contactPage;

const Contact = () => {
  const { activePath, setActivePath } = useContext(Context);

  useEffect(() => {
    if (activePath !== "/contact") {
      setActivePath?.("/contact");
    }
  }, [activePath, setActivePath]);
  return (
    <ActionButton>
      <Title>{TITLE}</Title>
      <ContactCard></ContactCard>
    </ActionButton>
  );
};

export default Contact;
