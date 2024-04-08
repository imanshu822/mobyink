import { Stack, Typography } from "@mui/material";
import React from "react";

const BottomResult = () => {
  return (
    <Stack
      width={"100%"}
      mt={{
        xs: 5,
        lg: 10,
      }}
      mb={{
        xs: 5,
        lg: 10,
      }}
      boxSizing={"border-box"}
    >
      <Stack
        width={{
          xs: "90%",
          lg: "80%",
        }}
        margin={"0 auto"}
        gap={3}
      >
        <Typography textAlign={"center"} fontWeight={"500"} fontSize={"40px"}>
          100% Result aligned SEO services​
        </Typography>
        <Typography textAlign={"justify"} fontWeight={"300"} fontSize={"19px"}>
          At Mobyink, the leading SEO company in Surat, we put your business
          goals first. Our strategies are tailored to fit your specific needs
          and objectives. With our search engine optimization campaigns in
          Surat, you’ll receive detailed reports and analytics, including key
          metrics like website traffic, keyword rankings, and conversion rates.
          This transparency ensures you understand how our efforts are
          performing, empowering you to make data-driven decisions to improve
          your online strategy. We believe in keeping you informed every step of
          the way. so you can see the impact of our work and achieve your goals
          with confidence.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BottomResult;
