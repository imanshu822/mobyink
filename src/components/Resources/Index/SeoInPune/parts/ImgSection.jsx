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
              Looking to improve your organic search rankings? Look no further
              than our premium services! As a top SEO company in Pune, Mobyink
              specializes in proven strategies to drive quality traffic to your
              website. With our extensive experience in digital marketing, we
              know the most effective tactics to help your business succeed
              online.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
