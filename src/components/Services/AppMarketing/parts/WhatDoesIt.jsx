import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import lock from "../../../../assests/lock.svg";
import video from "../../../../assests/video.svg";
import bulb from "../../../../assests/bulg.svg";
import hand from "../../../../assests/hand.svg";

const WhatDoesIt = () => {
  const stackData = [
    { title: "Private Marketplace", image: lock },
    { title: "In-App Video Platform", image: video },
    { title: "Data Solution", image: bulb },
    { title: "Agency Partnerships", image: hand, fontWeight: "500" }, // Adding fontWeight for the last item
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
            lg: "28px",
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
            What Does it bring to your app?
          </Typography>
          <Typography textAlign={"center"} variant={"body1"}>
            Mobile App marketing brings maximum ROI for your applications. Our
            Marketing campaigns will help you reach a quality audience with
            Engaging creatives and activities.
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
