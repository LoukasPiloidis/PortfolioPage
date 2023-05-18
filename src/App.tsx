import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Background } from "./components/BackgroundImage";
import Burger from "./components/Burger";
import About from "./routes/About";
import Home from "./routes/Home";
import ActionButton from "./components/ActionButton";

const App = () => {
  return (
    <>
      <Background src="/backgroundImage.png" />
      <BrowserRouter>
        <Burger />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <ActionButton /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
