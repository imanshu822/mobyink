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
          During these tough times when we are stepping towards digitalization,
          everyone should be informed of the affairs and should get the
          outcomes. Every company wants its site to rank well on crucial search
          engines like Google, Yahoo, and Bing but each has a different web
          listing and ranking set of rules. But for a platform to get top ranks
          of them all, it is quite difficult. At SEO company in Jaipur, we are
          promising our customers predicted outcomes to be compared to the
          actual results. We operate very transparently and frequently give our
          customers visions.
        </Typography>
        <Typography textAlign={"justiy"} fontWeight={"300"} fontSize={"19px"}>
          Right now all the business industry is facing critical times and there
          is a crucial need to get the best results so that they can come on
          track and reincarnate their businesses and in this, we in Jaipur give
          our full with our expert team to give you the expected outcomes.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BottomResult;
