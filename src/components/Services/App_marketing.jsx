import React from "react";
import AppMarketingBanner from "./AppMarketingBanner";
import AppServices from "./AppServices";
import { Stack } from "@mui/material";
import Footer from "../../utils/Footer";

const App_marketing = () => {
  return (
    <Stack bgcolor={"#F5F7FF"}>
      <AppMarketingBanner />
      <AppServices />
      <Footer />
    </Stack>
  );
};

export default App_marketing;
