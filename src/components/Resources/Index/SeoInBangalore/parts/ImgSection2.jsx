import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img2 from "../../../../../assests/seo_page_img_2.jpeg";
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
              src={img2}
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
              Top SEO Company Providing Guaranteed Results
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
              As a leading SEO company in Bangalore, Mobyink offers highly
              effective services tailored to ensure your business secures top
              positions in search engine rankings. Our innovative approach to
              search engine optimization not only promotes your business
              effectively but also drives guaranteed results, ultimately
              boosting your sales. With over 7+ years of experience, Mobyink has
              established itself as the best SEO company in Bangalore, boasting
              a track record of achieving top search engine rankings for clients
              across various sectors. Our unique link-building strategies
              guarantee improved digital footprint for your website in search
              engine results pages. Whether you’re a startup or an established
              enterprise, our solutions have helped numerous businesses
              establish a strong online presence, drive sales, and generate
              leads. By partnering with Mobyink, you can expect enhanced
              conversion rates and a significant return on investment (ROI).
              With us, elevate the visibility and propel your business to the
              forefront of search engine results.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
