import { Stack } from "@mui/material";
import React from "react";
import TabLineSection from "./parts/TabLineSection";
import AboutIndustry from "./parts/AboutIndustry";
import Footer from "../../../utils/Footer";
import GoToTop from "../../../utils/GoToTop";
import WantToMake from "./parts/WantToMake";
const Ecomerce = () => {
  return (
    <>
      <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
        <TabLineSection />
        <AboutIndustry />
        <WantToMake />
        <Footer />
        <GoToTop />
      </Stack>
    </>
  );
};

export default Ecomerce;
