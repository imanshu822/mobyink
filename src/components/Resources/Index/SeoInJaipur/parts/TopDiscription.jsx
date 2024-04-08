import { Stack, Typography } from "@mui/material";
import React from "react";

const TopDiscription = () => {
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
        <Typography textAlign={"center"} fontWeight={"300"} fontSize={"40px"}>
          Mobyink: Maximize Website Traffic with Seo Agency In Jaipur
        </Typography>
        <Typography textAlign={"justify"} fontWeight={"300"} fontSize={"19px"}>
          At Mobyink, the goal is to maximize the website traffic, which would
          bring more online sales. Our SEO services in Jaipur ensure
          comprehensive strategies such as audit, keyword research, competitor
          analysis, on-page optimization, and link building. Our SEO experts in
          Jaipur study data to craft strategies that boost natural website
          traffic and profitability for our clients.
        </Typography>
        <Typography textAlign={"justify"} fontWeight={"300"} fontSize={"19px"}>
          We boost your website’s credibility and reputation, making your brand
          a leader in the field. Our dedication and hard work ensure your brand
          is easy to find, instilling trust in your audience. We study markets
          and understand your audience to tailor our SEO strategies. This helps
          your brand connect with people who are genuinely interested in what
          you offer. This engagement improves relevance and leads to long-term
          business growth.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TopDiscription;
