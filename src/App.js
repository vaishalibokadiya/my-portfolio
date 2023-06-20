import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
