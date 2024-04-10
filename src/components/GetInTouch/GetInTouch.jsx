import React from "react";
import { Stack } from "@mui/material";
import TabLineSection from "./parts/TabLineSection";
import ContactForm from "./parts/ContactForm";
import Footer from "../../utils/Footer";
const GetInTouch = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <TabLineSection />
      <ContactForm />
      <Footer />
    </Stack>
  );
};

export default GetInTouch;
