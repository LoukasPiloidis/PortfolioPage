import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Background } from "./components/BackgroundImage";
import Burger from "./components/Burger";
import About from "./routes/About";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";

const App = () => {
  return (
    <>
      <Background src="/backgroundImage.png" />
      <BrowserRouter>
        <Burger />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
