import { Stack } from "@mui/material";
import React from "react";
import ParallaxBackground from "./AppBring";
import ServiceType from "./LeftSide";

const ScrollingSection = () => {
  return (
    <Stack
      position={"relative"}
      zIndex={11}
      height={"300vh"}
      width={"100%"}
      margin={"0 auto"}
      bgcolor={"black"}
    >
      <Stack p={3} boxSizing={"border-box"}>
        <ParallaxBackground />
      </Stack>
    </Stack>
  );
};

export default ScrollingSection;
