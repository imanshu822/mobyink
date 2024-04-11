import React from "react";
import { Stack } from "@mui/material";
import TabLineSection from "./parts/TabLineSection";
import ContactForm from "./parts/ContactForm";
import Footer from "../../utils/Footer";
import GoToTop from "../../utils/GoToTop";
const GetInTouch = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <TabLineSection />
      <ContactForm />
      <Footer />
      <GoToTop />
    </Stack>
  );
};

export default GetInTouch;
