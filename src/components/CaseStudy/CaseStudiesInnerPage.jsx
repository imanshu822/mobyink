import { Stack } from "@mui/material";
import React from "react";

import Footer from "../../utils/Footer";
import GoToTop from "../../utils/GoToTop";
import Content from "./parts/Content";
import Header from "./parts/Header";
const CaseStudies = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <Header />

      <Content />
      <Footer />
      <GoToTop />
    </Stack>
  );
};

export default CaseStudies;
