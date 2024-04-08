import { Stack } from "@mui/material";
import React from "react";
import ParallaxBackground from "../../Services/AppMarketing/parts/AppBring";
import ServiceType from "../../Services/AppMarketing/parts/LeftSide";

const ScrollingSection = () => {
  return (
    <Stack
      position={"relative"}
      zIndex={11}
      height={"300vh"}
      width={"100%"}
      bosSizing={"border-box"}
      margin={"0 auto"}
      bgcolor={"black"}
      display={{
        xs: "none",
        lg: "block",
      }}
    >
      <Stack p={3} boxSizing={"border-box"}>
        <ParallaxBackground />
      </Stack>
    </Stack>
  );
};

export default ScrollingSection;
