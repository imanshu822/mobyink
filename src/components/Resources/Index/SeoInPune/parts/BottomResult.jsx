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
          Staying updated with search engine algorithm changes is crucial for
          effective practices, and we make sure that our strategies align with
          the latest algorithms. We follow rules and updates for maintaining
          website visibility in SERPs. We use white hat process to achieve
          long-lasting results. We focus on optimizing our client’s websites to
          build trust with both users and search engines.
        </Typography>
        <Typography textAlign={"justify"} fontWeight={"300"} fontSize={"19px"}>
          Furthermore, we utilize blogging and social media optimization to
          boost our client’s online presence. We aim to improve brand
          visibility, drive website traffic, and engage effectively with the
          target audience. By integrating these methods into our strategies, we
          provide comprehensive digital marketing solutions that enhance our
          website’s online performance.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BottomResult;
