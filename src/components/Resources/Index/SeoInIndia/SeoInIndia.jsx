import { Stack } from "@mui/material";
import React from "react";
import TabLineSection from "./parts/TabLineSection";
import TopDiscription from "./parts/TopDiscription";
import ImgSection from "./parts/ImgSection";
import CardsSection from "./parts/CardsSection";
import ImgSection2 from "./parts/ImgSection2";
import BottomResult from "./parts/BottomResult";
import ImgSection3 from "./parts/ImgSection3";
import ContactFaq from "./parts/ContactFaq";
import Footer from "../../../../utils/Footer";
import GoToTop from "../../../../utils/GoToTop";
const SeoInIndia = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <TabLineSection />
      <TopDiscription />
      <ImgSection />
      <CardsSection />
      <ImgSection2 />
      <BottomResult />
      <ImgSection3 />
      <ContactFaq />
      <GoToTop />
      <Footer />
    </Stack>
  );
};

export default SeoInIndia;
