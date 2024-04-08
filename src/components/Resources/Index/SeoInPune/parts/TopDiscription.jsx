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
          Mobyink: Get Assured Results from Our Best SEO Company In Pune
        </Typography>
        <Typography textAlign={"justify"} fontWeight={"300"} fontSize={"19px"}>
          Mobyink is a SEO company in Pune full of dedicated experts. Our
          primary objective is to devise impactful digital marketing campaigns
          suitable for businesses of all scales. With a core expertise in search
          engine optimization, we prioritize elevating brand website rankings
          through inventive strategies and artistic designs. Understanding the
          distinct hurdles of the competitive digital world, we customize
          solutions to align with your precise objectives and requirements.
        </Typography>
        <Typography textAlign={"justify"} fontWeight={"300"} fontSize={"19px"}>
          We aim for real outcomes by using advanced methods to increase your
          online presence and attract natural traffic to your site. Through a
          combination of innovation, creativity, and tailored approaches, we
          strive to ensure that your brand stands out amidst the digital
          clutter, driving sustained growth and success.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TopDiscription;
