import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import rightArrow from "../../../assests/asset 7.png";

const Steps = () => {
  return (
    <Stack margin={"0 auto"} pt={3} pb={3}>
      <Stack
        width={"95%"}
        margin={"0 auto"}
        direction={{
          xs: "column",
          lg: "row",
        }}
        height={"100%"}
        justifyContent={"center"}
        gap={3}
      >
        <Stack
          boxShadow={"0 0 10px 0 rgba(0,0,0,.15)"}
          width={{
            xs: "100%",
            lg: "25%",
          }}
          height={"100%"}
        >
          <Stack gap={3} p={2} boxSizing={"border-box"}>
            <Typography
              variant="h3"
              fontWeight={"bold"}
              textAlign={"center"}
              color={"#0D6EFD"}
            >
              01
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              Brand Analysis with AI & Analytics
            </Typography>
            <Typography
              variant="p"
              sx={{
                opacity: 0.7,
                lineHeight: 1.7,
              }}
              textAlign={"center"}
            >
              We harness the power of AI and data analytics to deeply understand
              your brand’s past performance and audience feedback. This approach
              provides a detailed market position and highlights areas for
              growth.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          height={"100%"}
          width={"50px"}
          alignSelf={"center"}
          sx={{
            transform: {
              xs: "rotate(90deg)",
              lg: "rotate(0deg)",
            },
          }}
        >
          <Box
            component="img"
            src={rightArrow}
            width={"50px"}
            height={"50px"}
          />
        </Stack>
        <Stack
          boxShadow={"0 0 10px 0 rgba(0,0,0,.15)"}
          width={{
            xs: "100%",
            lg: "25%",
          }}
          height={"100%"}
        >
          <Stack gap={3} p={2} boxSizing={"border-box"}>
            <Typography
              variant="h3"
              fontWeight={"bold"}
              textAlign={"center"}
              color={"#0D6EFD"}
            >
              02
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              Strategic Planning with Digital Tools​
            </Typography>
            <Typography
              variant="p"
              sx={{
                opacity: 0.7,
                lineHeight: 1.7,
              }}
              textAlign={"center"}
            >
              Our strategy development utilizes digital marketing and SEO tools
              to accurately target your audience, refine your messaging, and
              optimize your online presence for better reach and engagement.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          height={"100%"}
          width={"50px"}
          sx={{
            transform: {
              xs: "rotate(90deg)",
              lg: "rotate(0deg)",
            },
          }}
          alignSelf={"center"}
        >
          <Box
            component="img"
            src={rightArrow}
            width={"50px"}
            height={"50px"}
          />
        </Stack>
        <Stack
          boxShadow={"0 0 10px 0 rgba(0,0,0,.15)"}
          width={{
            xs: "100%",
            lg: "25%",
          }}
          height={"100%"}
        >
          <Stack gap={3} p={2} boxSizing={"border-box"}>
            <Typography
              variant="h3"
              fontWeight={"bold"}
              textAlign={"center"}
              color={"#0D6EFD"}
            >
              03
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              Feedback Tracking with Social Listening Software​
            </Typography>
            <Typography
              variant="p"
              sx={{
                opacity: 0.7,
                lineHeight: 1.7,
              }}
              textAlign={"center"}
            >
              We harness the power of AI and data analytics to deeply understand
              your brand’s past performance and audience feedback. This approach
              provides a detailed market position and highlights areas for
              growth.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Steps;
