import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img2 from "../../../../../assests/seo_page_img_2.jpeg";
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
              src={img2}
              borderRadius={"8px"}
              boxShadow={"2px 18px 25px 10px #E5E5E5"}
            />
          </Stack>
          <Stack width={"50%"} gap={2}>
            <Typography
              fontSize={"20px"}
              fontWeight={"600"}
              pl={2}
              boxSizing={"border-box"}
            >
              Our Method for Optimising SEO
            </Typography>
            <Typography
              fontSize={"18px"}
              fontWeight={"300"}
              pl={2}
              boxSizing={"border-box"}
            >
              As a leading SEO services company in Pune, Mobyink prioritize
              comprehensive on-page optimization to enhance website performance.
              Our process begins with a thorough analysis of the website,
              identifying areas for improvement. Following this analysis, we
              implement necessary changes to attract organic traffic and improve
              search engine rankings. Additionally, we recognize the
              significance of high-quality content and collaborate closely with
              our content writing team to deliver relevant and engaging content
              tailored to the website’s target audience.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
