import { Stack } from "@mui/material";
import React from "react";
import TabLineSection from "./parts/TabLineSection";
import CardSection from "./parts/CardSection";
import Footer from "../../../utils/Footer";
import GoToTop from "../../../utils/GoToTop";
const Blogs = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <TabLineSection />
      <CardSection />
      <Footer />
      <GoToTop />
    </Stack>
  );
};

export default Blogs;
