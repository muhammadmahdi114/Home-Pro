import React, { useRef, useState, useEffect } from "react";
import Baselayout from "./Components/Baselayout";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/about";
import Blog from "./Components/Blog/blog";
import Contact from "./Components/Contact/contact";
import Services from "./Components/Services/services";

function App() {
  const [active, setActive] = useState();
  const HeroRef = useRef(null);
  const AboutRef = useRef(null);
  const ServicesRef = useRef(null);
  const BlogRef = useRef(null);
  const ContactRef = useRef(null);

  useEffect(() => {
    document.title = "Home Pro";
  }, []);

  return (
    <div className="w-full h-full font-jakarta text-white">
      <Baselayout
        active={active}
        setActive={setActive}
        HeroRef={HeroRef}
        AboutRef={AboutRef}
        ServicesRef={ServicesRef}
        BlogRef={BlogRef}
        ContactRef={ContactRef}
      >
        <Hero ref={HeroRef}/>
        <About ref={AboutRef}/>
        <Services ref={ServicesRef} />
        <Blog ref={BlogRef}/>
        <Contact ref={ContactRef}/>
      </Baselayout>
    </div>
  );
}

export default App;