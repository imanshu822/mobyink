import React from "react";
import { Stack } from "@mui/material";
import TabLineSection from "./parts/TabLineSection";
import Section1 from "./parts/Section1";
import Footer from "../../../utils/Footer";
import GoToTop from "../../../utils/GoToTop";
const FaQ = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <TabLineSection />
      <Section1 />
      <Footer />
      <GoToTop />
    </Stack>
  );
};

export default FaQ;
