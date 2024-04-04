import { Stack, Typography } from "@mui/material";
import React from "react";

const PortfoliosHeadingSection = () => {
  return (
    <Stack width={"100%"} mt={10} boxSizing={"border-box"}>
      <Stack width={"90%"} margin={"0 auto"}>
        <Stack
          justifyContent={"center"}
          gap={1}
          mb={7}
          boxSizing={"border-box"}
        >
          <Typography variant="h3" fontWeight={"bold"} textAlign={"center"}>
            Portfolios
          </Typography>
          <Typography
            width={"80%"}
            margin={"0 auto"}
            textAlign={"center"}
            color={"#767a86"}
            fontSize={"21px"}
          >
            Discover where cutting-edge technology intertwines with creative
            marketing genius. Our portfolio showcases a spectrum of success:
            from AI-driven analytics to trendsetting social media campaigns and
            SEO mastery. Each project is a digital revolution, transforming
            brands with innovation and insight. Embark on a journey where your
            brand’s potential is amplified by tech-powered strategies.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PortfoliosHeadingSection;
