import React from "react";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import Content from "./components/templates/Content";
import SizeTool from "./components/molecule/SizeTool";
import "./App.css";

function App() {
  return (
    <>
      <SizeTool />
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
