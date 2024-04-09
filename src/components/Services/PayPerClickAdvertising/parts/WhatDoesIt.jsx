import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import lock from "../../../../assests/pppc1.svg";
import video from "../../../../assests/pppc2.svg";
import bulb from "../../../../assests/pppc3.svg";
import hand from "../../../../assests/pppc4.svg";

const WhatDoesIt = () => {
  const stackData = [
    { title: "Immediate Results", image: lock },
    { title: "Highly Targeted", image: video },
    { title: "Measurable ROI", image: bulb },
    { title: "Competitive Advantage", image: hand },
  ];

  const stackComponents = stackData.map((item, index) => (
    <Stack
      key={index}
      bgcolor={"white"}
      width={{
        xs: "170px",
        lg: "250px",
      }}
      height={{
        xs: "170px",
        lg: "250px",
      }}
      sx={{
        borderWidth: "5px 0 0 0",
        borderStyle: "solid",
        borderColor: "#0d6efd",
        borderRadius: "10px",
      }}
    >
      <Stack
        p={3}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        height={"100%"}
      >
        <Box width={"40px"} height={"40px"} src={item.image} component="img" />{" "}
        <Typography
          textAlign={"center"}
          fontSize={{
            xs: "15px",
            lg: "25px",
          }}
          fontWeight={"normal"}
        >
          {item.title}
        </Typography>
      </Stack>
    </Stack>
  ));

  return (
    <Stack mt={10} boxSizing={"border-box"}>
      <Stack
        width={{
          xs: "95%",
          lg: "80%",
        }}
        margin={"0 auto"}
      >
        <Stack
          width={{
            xs: "90%",
            lg: "70%",
          }}
          margin={"0 auto"}
          gap={2}
        >
          <Typography
            textAlign={"center"}
            fontSize={{
              xs: "30px",
              lg: "45px",
            }}
            fontWeight={"bold"}
          >
            What Does it bring to your brand?
          </Typography>
          <Typography textAlign={"center"} variant={"body1"}>
            We help business and e-commerce brands to generate more revenue by
            launching result-oriented ads. Let’s take a look at what we have to
            offer.
          </Typography>
        </Stack>
        <Stack
          mt={7}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={3}
        >
          {stackComponents}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WhatDoesIt;
