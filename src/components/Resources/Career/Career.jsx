import { Stack } from "@mui/material";
import React from "react";
import TabLineSection from "./parts/TabLineSection";
import MobyinkIsPlace from "./parts/MobyinkIsPlace";
import Benefits from "./parts/Benefits";
import Footer from "../../../utils/Footer";
import HopAboard from "./parts/HopAboard";
import GoToTop from "../../../utils/GoToTop";
const Careers = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <TabLineSection />
      <MobyinkIsPlace />
      <Benefits />
      <HopAboard />
      <Footer />
      <GoToTop />
    </Stack>
  );
};

export default Careers;
