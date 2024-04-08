import React from "react";
import AppMarketingBanner from "./parts/AppMarketingBanner";
import AppServices from "./parts/AppServices";
import { Stack } from "@mui/material";
import Footer from "../../../utils/Footer";
import GoToTop from "../../../utils/GoToTop";
import WhatDoesIt from "./parts/WhatDoesIt";
import WantToMake from "./parts/WantToMake";
const WebsiteDevelopment = () => {
  return (
    <Stack bgcolor={"#F5F7FF"}>
      <AppMarketingBanner />
      <AppServices />
      <WhatDoesIt />
      <WantToMake />
      <Footer />
      <GoToTop />
    </Stack>
  );
};

export default WebsiteDevelopment;
