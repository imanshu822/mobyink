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
              We are the best SEO Company in Jaipur with a team of SEO ninjas
              who perceive search engine specifications. iGlobe Solutions has
              got thorough experience in SEO Services. Our team has worked with
              multiple organizations, handled various projects, and does consult
              before deciding all digital marketing services and run their
              Campaigns. We have successfully led almost all the sectors such as
              travel, online branding, hotels, business services, online product
              sale projects. The best part of our SEO services is that we
              regularly focus on each and every SEO aspects and task with
              assured tools and leading technologies. Google search set of rules
              change timely so it’s really crucial to be updated with all the
              latest updates.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
