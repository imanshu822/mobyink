import { Box, Stack, Typography } from "@mui/material";
import React from "react";
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
              src={img3}
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
              Achieve More Traffic and Revenue with Our SEO Services in Gurgaon
            </Typography>
            <Typography
              fontSize={"18px"}
              fontWeight={"300"}
              pl={2}
              boxSizing={"border-box"}
            >
              In a competitive online landscape where countless websites offer
              similar products and services, getting your website to the top of
              search engine results can seem difficult. But fear not! At
              Mobyink, we specialize in making challenging tasks feel easy. As
              the fastest-growing SEO service provider in Gurgaon, we believe
              that while some things may be difficult but nothing is impossible.
              Our team is dedicated to securing the position in Google’s search
              results that your website truly deserves. So, while you focus on
              doing what you do best, our specialists will work behind the
              scenes to optimize and enhance your website, ensuring it ranks
              higher and attracts more potential customers.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
