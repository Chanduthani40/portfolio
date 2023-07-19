import React from "react";
import ResponsiveAppBar from "./components/Header/Header";
import IntroDiv from "./components/body/IntroDiv";
import AboutMe from "./components/body/AboutMe";
import Skills from "./components/body/Skills";
import Service from "./components/body/Service";
import { useState } from "react";
import Forms from "./components/common/Form";
import Footer from "./components/body/footer/footer";

function App() {

  const [showPrompt,setPrompt] = useState(false);

  return (
    <>
      <div>
        <header>
          <ResponsiveAppBar />
        </header>

        <IntroDiv
          showPrompt={showPrompt}
          setPrompt={setPrompt}
        />

        <AboutMe />
        <Skills />
        <Service />
        {/* <Forms /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
