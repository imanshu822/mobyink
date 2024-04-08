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
          Unlock Your Brand's Maximum Potential with Our Innovative Digital
          Marketing Agency in Bangalore
        </Typography>
        <Typography textAlign={"justify"} fontWeight={"300"} fontSize={"19px"}>
          In today’s competitive market, seizing opportunities and attracting
          new customers quickly is essential for brand success. Partnering with
          the best Ecommerce SEO Company in Bangalore is crucial. They identify
          growth avenues and provide revenue-generating leads. With their
          assistance, achieving unparalleled ROI becomes possible, setting your
          brand apart from the competition and ensuring sustainable growth in
          the digital landscape.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TopDiscription;
