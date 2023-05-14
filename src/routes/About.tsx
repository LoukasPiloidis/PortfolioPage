import { useContext, useEffect } from "react";
import { Context } from "../context/ContextCreator";

const About = () => {
  const { activePath, setActivePath } = useContext(Context);

  useEffect(() => {
    if (activePath !== "/about") {
      setActivePath?.("/about");
    }
  }, [activePath, setActivePath]);

  return (
    <>
      <span>Hello World About</span>
    </>
  );
};

export default About;
