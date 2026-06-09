import React, { useState } from "react";
import ProgressSec from "./ComponentJSX/ProgressSec";
import Navbar from "./ComponentJSX/Navbar";
import Hero from "./ComponentJSX/Hero";
import About from "./ComponentJSX/About";
import Projects from "./ComponentJSX/Projects";
import Services from "./ComponentJSX/Services";
import Contact from "./ComponentJSX/Contact";
import Cursor from "./ComponentJSX/Cursor";

function App() {
  const [showProgress, setShowProgress] = useState(true);

  return (
    <>

      <Cursor />

      {showProgress ? (
        <ProgressSec onFinish={() => setShowProgress(false)} />
      ) : (
        // Your whole main portfolio page goes here
        <>
          <Navbar />

          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </>
      )}
    </>
  );
}

export default App;