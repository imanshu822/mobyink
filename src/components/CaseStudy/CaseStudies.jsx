import { Stack } from "@mui/material";
import React from "react";
import TabLineSection from "./parts/TabLineSection";
import CardSection from "./parts/CardSection";

const CaseStudies = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <TabLineSection />
      <CardSection />
    </Stack>
  );
};

export default CaseStudies;
