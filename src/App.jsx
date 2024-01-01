import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Footer,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Work,
  StarsCanvas,
  LogoAnimation,
} from "../components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <LogoAnimation />
      ) : (
        <BrowserRouter>
          <div className="relative z-1 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <div className="content-a">
                <Hero />
              </div>
            </div>
            <div className="content-b">
              <About />
              <Experience />
              <Tech />
              <Work />
              <Feedbacks />
            </div>
          </div>
          <div className="relative z-0 bg-primary">
            <div className="content-c">
              <Contact />
              {!isMobile && <StarsCanvas />}
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
