import "./App.css";
import { useState } from "react";
import { Container, CssBaseline, Typography } from "@mui/material";
import Lottie from "react-lottie-player";
import animationData from "./utils/lottie-animation.json";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  const [isSplashEnd, setIsSplashEnd] = useState(false);

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
        }}
      >
        <About />

        <Skills />

        <Projects />
      </Container>
    </>
  );
}

export default App;
