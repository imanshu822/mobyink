import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img1 from "../../../../../assests/seo_page_img_1.jpeg";
import img2 from "../../../../../assests/seo_page_img_2.jpeg";
import img3 from "../../../../../assests/seo_page_img_3.jpeg";
const ImgSection = () => {
  return (
    <Stack width={"100%"} bgcolor={"#EBF9FD"}>
      <Stack
        width={{
          xs: "95%",
          lg: "80%",
        }}
        margin={"0 auto"}
      >
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          p={4}
          margin={"0 auto"}
          boxSizing={"border-box"}
          gap={5}
        >
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
            margin={"0 auto"}
          >
            <Box
              component="img"
              width={"100%"}
              height={"100%"}
              src={img1}
              borderRadius={"8px"}
              boxShadow={"7px -11px 25px 10px #FFF"}
            />
          </Stack>
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
          >
            <Typography
              textAlign={"justify"}
              fontSize={"18px"}
              fontWeight={"300"}
              pl={{
                xs: 0,
                lg: 2,
              }}
              boxSizing={"border-box"}
            >
              Mobyink is a top SEO service provider with experienced experts who
              understand the constantly changing world of marketing in Mumbai.
              We use the latest tools to help businesses improve their online
              presence. Mobyink, the best agency in Mumbai, boasts experts who
              meticulously analyze your website and craft a tailored
              optimization strategy. With us, you’re not just receiving
              services; you’re gaining a strategic partner dedicated to
              enhancing your online visibility. Our diverse portfolio of
              services is tailored to meet the unique needs of businesses in
              Mumbai, ensuring guaranteed results. Count on us to be your
              guiding light in the digital realm, leading your brand towards
              unprecedented visibility and success. We carefully analyze your
              main challenges and work smoothly to help you achieve your
              business goals. Our experienced team handles your project and
              develops effective strategie. Whatever your objectives, we make it
              simple for you to succeed. Specializing in providing top-notch
              Ecommerce SEO services in Mumbai, Mobyink ensures your online
              store stands out and attracts the right audience, driving
              increased visibility and sales.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
