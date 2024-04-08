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
              As a well-known SEO company in Surat, we provide personalized
              strategies to meet your business achievements, ensuring an
              exceptional client experience. Our effective tactics aim to
              surpass competitors on Google and other search engines. We conduct
              thorough competitor analysis to identify areas for improvement and
              excel in keyword rankings. Count on us, a trusted digital partner
              for businesses, to elevate your online presence. With our SEO
              services in Surat, a website can attract a lot of traffic without
              needing to advertise on other sites. Instead, the website’s
              content can draw in visitors naturally.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
