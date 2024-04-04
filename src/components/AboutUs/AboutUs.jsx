import { Stack, Tab } from "@mui/material";
import React from "react";
import Nav from "../../utils/Navbar/Nav";
import TabLineSection from "../AboutUs/parts/TabLineSection";
import WhoWeAre from "./parts/WhoWeAre";
import OurCulture from "./parts/OurCulture";
import MeetOurFounder from "./parts/MeetOurFounder";
import EmpoweringDigital from "./parts/EmpoweringDigital";
import Footer from "../../utils/Footer";
import ProductSlider from "./parts/ProductSlider";
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
      </Stack>
    </>
  );
};

export default AboutUs;
