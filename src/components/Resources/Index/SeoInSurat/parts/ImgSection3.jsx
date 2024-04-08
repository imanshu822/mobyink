import { Box, Stack, Typography } from "@mui/material";
import React from "react";
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
          boxSizing={"border-box"}
          gap={5}
        >
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
          >
            <Box
              component="img"
              width={"100%"}
              height={"100%"}
              src={img3}
              borderRadius={"8px"}
              boxShadow={"2px 18px 25px 10px #E5E5E5"}
            />
          </Stack>
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
            gap={2}
          >
            <Typography
              fontSize={"20px"}
              fontWeight={"600"}
              pl={{
                xs: 0,
                lg: 2,
              }}
              boxSizing={"border-box"}
            >
              Why Choose us For SEO Services?
            </Typography>
            <Typography
              fontSize={"18px"}
              fontWeight={"300"}
              pl={{
                xs: 0,
                lg: 2,
              }}
              boxSizing={"border-box"}
              textAlign={"justify"}
            >
              At Mobyink, the leading SEO company in Surat, we put your business
              goals first. Our strategies are tailored to fit your specific
              needs and objectives. With our search engine optimization
              campaigns in Surat, you’ll receive detailed reports and analytics,
              including key metrics like website traffic, keyword rankings, and
              conversion rates. This transparency ensures you understand how our
              efforts are performing, empowering you to make data-driven
              decisions to improve your online strategy. We believe in keeping
              you informed every step of the way, so you can see the impact of
              our work and achieve your goals with confidence.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
