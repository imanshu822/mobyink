import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../assests/logo1.webp";
import logo2 from "../assests/logo2.webp";
import logo3 from "../assests/logo3.webp";
import logo4 from "../assests/logo4.webp";
import { Box, Stack } from "@mui/material";
const Slider = () => {
  const features = [
    {
      src: logo1,
    },
    {
      src: logo2,
    },
    {
      src: logo3,
    },
    {
      src: logo4,
    },
    {
      src: logo1,
    },
    {
      src: logo2,
    },
    {
      src: logo3,
    },
    {
      src: logo4,
    },
    {
      src: logo1,
    },
    {
      src: logo2,
    },
    {
      src: logo3,
    },
    {
      src: logo4,
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 765, min: 0 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Stack margin={"0 auto"} pt={8} pb={8} bgcolor={"#F5F7FF"}>
      <Box
        sx={{
          width: {
            xs: "200px",
            sm: "315px ",
            md: "600px",
            lg: "1018px",
            xl: "1200px",
          },
          top: {
            xs: "3%",
            sm: "8%",
            md: "27%",
          },
          left: {
            xs: "4%",
            sm: "4%",
            md: "4%",
            lg: "4%",
            xl: "4%",
          },
        }}
        top={"27%"}
        left={"4%"}
      >
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          autoPlaySpeed={1500}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          {features.map((d, index) => (
            <Box
              key={index}
              gap={2}
              sx={{
                width: {
                  xs: "60px",
                  sm: "90px",
                  md: "160px",
                },
                height: {
                  xs: "25px",
                  sm: "35px",
                  md: "40px",
                },
              }}
            >
              <img
                src={d.src}
                alt={`Logo ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Slider;
