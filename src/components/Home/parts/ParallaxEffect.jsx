import React, { useEffect } from "react";
import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

// Registering only necessary GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function ServiceType() {
  useEffect(() => {
    gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

    const animation = gsap.to(".photo:not(:first-child)", {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 1,
    });

    return () => gsap.globalTimeline.clear();
  }, []);

  return (
    <>
      <Stack position={"relative"}>
        <Box
          className="gallery"
          sx={{ display: "flex", position: "relative" }} // Added position: relative
          position={"sticky"}
          top={0}
        >
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
          </Box>
          <Box
            className="rightblock"
            sx={{
              width: "50%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "40vw",
                height: "40vw",
                position: "relative",
                "& .photo": {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  transition: "z-index 0.5s", // Added transition
                  "& img": {
                    height: "100%",
                    width: "100%",
                  },
                },
              }}
            >
              <Box className="photo" style={{ zIndex: 2 }}>
                {" "}
                {/* Added style for z-index */}
                <img
                  src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
                  alt="img-1"
                />
              </Box>
              <Box className="photo" style={{ zIndex: 1 }}>
                {" "}
                {/* Added style for z-index */}
                <img
                  src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
                  alt="img-2"
                />
              </Box>
              <Box className="photo" style={{ zIndex: 0 }}>
                {" "}
                {/* Added style for z-index */}
                <img
                  src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
                  alt="img-3"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default ServiceType;
