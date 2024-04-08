import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import lock from "../../../../assests/aad1.svg";
import video from "../../../../assests/aad2.svg";
import bulb from "../../../../assests/aad3.svg";
import hand from "../../../../assests/aad4.svg";

const WhatDoesIt = () => {
  const stackData = [
    { title: "Revenue Generation", image: lock },
    { title: "Innovative Brand Image", image: video },
    { title: "Customer Loyalty and retention", image: bulb },
    { title: "Competitiveness", image: hand },
  ];

  const stackComponents = stackData.map((item, index) => (
    <Stack
      key={index}
      bgcolor={"white"}
      width={"250px"}
      height={"250px"}
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
        <Typography textAlign={"center"} variant={"h5"} fontWeight={"normal"}>
          {item.title}
        </Typography>
      </Stack>
    </Stack>
  ));

  return (
    <Stack mt={10} boxSizing={"border-box"}>
      <Stack width={"80%"} margin={"0 auto"}>
        <Stack width={"70%"} margin={"0 auto"} gap={2}>
          <Typography textAlign={"center"} variant={"h3"} fontWeight={"bold"}>
            What Does it bring to your app?
          </Typography>
          <Typography textAlign={"center"} variant={"body1"}>
            App development amplifies brand effectiveness by offering a
            seamless, engaging user experience, fostering brand loyalty, and
            extending reach through digital innovation.
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
