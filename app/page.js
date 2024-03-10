import React from "react";
import Nav from "./components/nav";
import Main from "./components/main";
import Skills from "./components/skills";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <Nav />
      <Main />
      <Skills />
      <About />
    </>
  );
}
