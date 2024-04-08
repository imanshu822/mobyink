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
              Your Trusted SEO Services Company in Noida for Online Visibility &
              Growth
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
              Embarking on the journey to achieve top ranks in Google search
              results may seem daunting, but with Mobyink by your side, success
              becomes attainable. We are dedicated to enhancing online
              visibility and fostering growth for your business. With a proven
              track record of success and a commitment to excellence, we
              specialize in delivering tailored solutions that drive results.
              Our dedication to refining SEO services in Noida ensures timely
              goal attainment. Having completed numerous projects globally
              across diverse industries, our comprehensive 360-degree approach
              propels businesses to new heights. Mobyink’s experienced team
              employs cutting-edge strategies to elevate your brand’s presence
              on the digital landscape, ensuring that you stand out from the
              competition and achieve your goals efficiently. Whether it’s
              realizing your dream of securing the top rank on SERPs or
              enhancing online visibility, Mobyink is your trusted partner for
              sustainable growth.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
