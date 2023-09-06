import { gsap } from "gsap";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { SplashScreenProps } from "../../@types";

export default function SplashScreen(props: SplashScreenProps) {
  const { onSplashEnd, children } = props;

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".splash-text", {
      opacity: 0,
      duration: 1,
      y: -50,
      ease: "power2.out",
    })
      .to(".splash-text", {
        opacity: 0,
        duration: 0.5,
        delay: 1,
      })
      .to(".splash", {
        display: "none",
        duration: 0,
        onComplete: () => {
          onSplashEnd();
        },
      });
  }, []);

  return (
    <Box className="splash" sx={{ zIndex: 1101 }}>
      <Box className="splash-text">{children}</Box>
    </Box>
  );
}
