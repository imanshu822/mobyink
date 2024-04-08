import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img1 from "../../../../../assests/seo_page_img_1.jpeg";
import img2 from "../../../../../assests/seo_page_img_2.jpeg";
import img3 from "../../../../../assests/seo_page_img_3.jpeg";
const ImgSection = () => {
  return (
    <Stack width={"100%"} bgcolor={"#EBF9FD"}>
      <Stack width={"80%"} margin={"0 auto"}>
        <Stack direction={"row"} p={4} boxSizing={"border-box"} gap={5}>
          <Stack width={"50%"}>
            <Box
              component="img"
              width={"100%"}
              height={"100%"}
              src={img1}
              borderRadius={"8px"}
              boxShadow={"7px -11px 25px 10px #FFF"}
            />
          </Stack>
          <Stack width={"50%"}>
            <Typography
              fontSize={"18px"}
              fontWeight={"300"}
              pl={2}
              boxSizing={"border-box"}
            >
              Our services prioritize optimizing your content for maximum
              effectiveness, aiming to improve its ranking in search engine
              results. We remain abreast of the latest search engine algorithms
              to ensure optimal outcomes. Tailoring our strategies to your
              unique goals, we employ various techniques, including on-page SEO
              like keyword research and content creation, as well as off-page
              strategies such as link building and press releases, to enhance
              your website’s visibility and performance.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
