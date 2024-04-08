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
              Why Work with Mobyink Over Other SEO Companies in Noida?
            </Typography>
            <Typography
              fontSize={"18px"}
              fontWeight={"300"}
              pl={2}
              boxSizing={"border-box"}
            >
              Mobyink shines as a top SEO company in Noida because of its mix of
              industry knowledge, customer focused approach, and focus on
              delivering real outcomes. Our company makes sure to keep up with
              the latest trends to provide cutting edge solutions for clients.
              Our commitment to clear communication, broad expertise across
              different fields, and reliance on data-driven methods make us a
              trustworthy choice for businesses looking to grow online with
              effective strategies. <br /> – We use cutting edge white hat
              methods.
              <br /> – We assure first-page ranking for keywords.
              <br /> – Mobyink provides a free website analysis.
              <br /> – There are no hidden and extra fees in our services.
              <br /> – Our packages are highly cost-effective.
              <br /> – We assure return on investment based on proven results.
              <br /> – Our experts are well-versed in the digital landscape.
              <br /> – We have completed numerous projects across various
              industries with positive results
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
