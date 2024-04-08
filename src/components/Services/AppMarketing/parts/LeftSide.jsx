import React from "react";
// import { TweenMax, Power3, Power4 } from "gsap";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import ParallaxBackground from "./AppBring";
import { Stack } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

function ServiceType() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        markers: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <React.Fragment>
      <Stack direction={"row"}>
        <Box className="gallery" sx={{ display: "flex" }}>
          <Box
            className="left"
            sx={{
              width: "50%",
              marginLeft: "auto",
              "& .details": {
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "40vw",
                marginLeft: "auto",
                color: "#000",
                fontSize: "3rem",
                fontWeight: 900,
              },
            }}
          >
            <Box className="details">BRAND PRODUCT</Box>
            <Box className="details">PRODUCT DETAILS</Box>
            <Box className="details">DESIGN AGENCY</Box>
          </Box>
        </Box>
        <ParallaxBackground />
      </Stack>
    </React.Fragment>
  );
}

export default ServiceType;
