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
          In today’s digital world, being visible online is crucial for
          businesses. A company helps improve visibility and drive organic
          traffic by optimizing content and keywords. In Noida, Mobyink stands
          out as a leading company, known for its expertise in search engine
          optimization.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BottomResult;
