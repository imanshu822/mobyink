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
              We have a team of experienced professionals and dedicated experts
              in Gurgaon who help businesses grow online, increase sales, and
              boost brand recognition. Our committed team employs cutting-edge
              strategies to boost your website’s ranking and foster brand value
              online. We’re always improving our skills in every industry and
              offer our services at the best prices. By the end of our campaign,
              you’ll have
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
