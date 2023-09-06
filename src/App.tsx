import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Container, CssBaseline, Typography } from "@mui/material";
import Lottie from "react-lottie-player";
import animationData from "./utils/lottie-animation.json";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isSplashEnd, setIsSplashEnd] = useState(false);

  const elements = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    elements.forEach((element, index) => {
      const direction = index % 2 === 0 ? -1 : 1;
      const distance = 100;

      gsap.from(element.current, {
        x: direction * distance,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element.current,
          start: "top center",
          end: "center center",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  const onSplashEnd = () => setIsSplashEnd(true);
  return (
    <>
      <CssBaseline />

      <SplashScreen onSplashEnd={onSplashEnd}>
        <Typography variant="h1" textAlign="center">
          Mechanical Michael H.
        </Typography>

        <Lottie loop animationData={animationData} play />

        <Typography variant="h2" textAlign="center">
          The grind never ends.
        </Typography>
      </SplashScreen>

      <Navbar isSplashEnd={isSplashEnd} />

      <Container
        component="main"
        sx={{
          opacity: isSplashEnd ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          display: "flex",
          flexDirection: "column",
          gap: "500px",
          my: 10,
        }}
      >
        <div ref={elements[0]}>
          <About />
        </div>

        <div ref={elements[1]}>
          <Skills />
        </div>

        <div ref={elements[2]}>
          <Projects />
        </div>
      </Container>
    </>
  );
}

export default App;
