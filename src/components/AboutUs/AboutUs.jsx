import { Stack } from "@mui/material";
import React from "react";
import TabLineSection from "../AboutUs/parts/TabLineSection";
import WhoWeAre from "./parts/WhoWeAre";
import OurCulture from "./parts/OurCulture";
import MeetOurFounder from "./parts/MeetOurFounder";
import EmpoweringDigital from "./parts/EmpoweringDigital";
import Footer from "../../utils/Footer";
import ProductSlider from "./parts/ProductSlider";
import GoToTop from "../../utils/GoToTop";
const AboutUs = () => {
  return (
    <>
      <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
        <TabLineSection />
        <WhoWeAre />
        <OurCulture />
        <MeetOurFounder />
        <EmpoweringDigital />
        <ProductSlider />
        <Footer />
        <GoToTop />
      </Stack>
    </>
  );
};

export default AboutUs;
