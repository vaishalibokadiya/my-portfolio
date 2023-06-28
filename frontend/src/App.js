import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
