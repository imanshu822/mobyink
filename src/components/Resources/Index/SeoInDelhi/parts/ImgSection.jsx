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
              Mobyink, your trusted SEO service provider in Delhi, understands
              how perfect you are at what you do, and it’s our mission to ensure
              everyone else knows it too. With our proven strategies, we’ll
              showcase your products and services to potential buyers in just 60
              days or less. With our expertise, we optimize your website’s
              search engine ranking, attracting more visitors and increasing the
              online visibility. Our team carefully selects keywords matching
              your target customers’ searches to make sure relevant traffic
              flows to your site and employ various on-page and off-page SEO
              tactics to enhance your website’s overall performance. From
              optimizing meta tags, improving website speed, implementing link
              building strategies, we leave no stone unturned in our efforts to
              drive organic traffic to your site. We aim to rank your website
              higher on SERPs means more people visit your site, ultimately
              you’ll get more organic traffic. Partner with Mobyink for
              achieving your digital marketing goals and reaching your target
              audience effectively.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
