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
          Utilizing innovative methods, we guide your audience in uncovering
          your brand. Through meticulous analysis of your brand’s challenges and
          special qualities, we figure out the best strategies to use. Mobyink,
          the best SEO services company in Gurgaon creates and changes plans to
          fit exactly what your brand needs, making sure you see real results.
          Our gurus have many different tactics, and they use them carefully to
          make sure more people see your brand. We can easily make your brand
          more noticeable, all of these things make us the best SEO company in
          Gurgaon.
        </Typography>
        <Typography textAlign={"justify"} fontWeight={"300"} fontSize={"19px"}>
          Your business needs more people to visit your website. The more
          traffic you have, the more chances you have to make money. As a
          business owner, you want to get as many people as possible to visit
          your website. That’s where our SEO agency in Gurgaon comes in, we work
          hard to make sure your website shows up near the top search results.
          With a team full of experienced professionals, we are confident that
          we can help your business grow
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BottomResult;
