import { useContext, useEffect } from "react";
import { Context } from "../context/ContextCreator";

const Home = () => {
  const { activePath, setActivePath } = useContext(Context);

  useEffect(() => {
    if (activePath !== "/") {
      setActivePath?.("/");
    }
  }, [activePath, setActivePath]);

  return (
    <>
      <span>Hello World</span>
    </>
  );
};

export default Home;
