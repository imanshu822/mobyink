import React, { useState, useEffect, useRef } from "react";
import { Box, Stack } from "@mui/material";
import { Parallax } from "react-parallax";
import Woman from "../../../assests/nasa.jpg";
import City from "../../../assests/satellite.jpeg";
import Fly from "../../../assests/spaceStation.jpeg";
import "./ParallaxEffect.css"; // Import CSS file for styling

const ParallaxEffect = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageHeights, setImageHeights] = useState({
    woman: 500,
    city: 500,
    fly: 500,
  });

  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        // Adjust image heights based on scroll position
        const newImageHeights = {
          woman: Math.max(0, 500 - position),
          city: Math.max(0, 500 - position),
          fly: Math.max(0, 500 - position),
        };
        setImageHeights(newImageHeights);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isVisible]);

  return (
    <div ref={componentRef}>
      <Stack
        width={"100%"}
        margin={"0 auto"}
        mt={10}
        mb={10}
        height={"100vh"}
        boxSizing={"border-box"}
        position="relative"
      >
        <Stack
          width={"90%"}
          margin={"0 auto"}
          bgcolor={"black"}
          borderRadius={"25px"}
          height={"600px"}
          position={"sticky"}
          top={0}
          zIndex={0}
        >
          <Stack p={5} boxSizing={"border-box"} direction={"row"}>
            <Stack width={"50%"} color={"white"}>
              1
            </Stack>
            <Stack
              width={"50%"}
              color={"white"}
              position={"relative"}
              height={"500px"}
            ></Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default ParallaxEffect;
