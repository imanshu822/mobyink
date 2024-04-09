import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import lock from "../../../../assests/uui1.svg";
import video from "../../../../assests/uui2.svg";
import bulb from "../../../../assests/uui3.svg";
import hand from "../../../../assests/uui4.svg";

const WhatDoesIt = () => {
  const stackData = [
    { title: "User-Centric", image: lock },
    { title: "Brand Image", image: video },
    { title: "Mobile Responsive", image: bulb },
    { title: "Reduced Support Costs", image: hand },
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
            They put users first, ensuring products are intuitive, engaging, and
            efficient. A stellar UI creates love at first sight, while a superb
            UX keeps users loyal.
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
