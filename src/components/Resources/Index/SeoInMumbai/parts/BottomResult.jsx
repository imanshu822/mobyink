import { Stack, Typography } from "@mui/material";
import React from "react";

const BottomResult = () => {
  return (
    <Stack width={"100%"} mt={10} mb={10} boxSizing={"border-box"}>
      <Stack width={"80%"} margin={"0 auto"} gap={3}>
        <Typography textAlign={"center"} fontWeight={"500"} fontSize={"40px"}>
          100% Result aligned SEO services​
        </Typography>
        <Typography textAlign={"center"} fontWeight={"300"} fontSize={"19px"}>
          Experience is crucial when selecting a consultant. You’ll want to
          choose a consultant who knows search engine optimization inside and
          out. Mobyink stands out as the best SEO company in Mumbai. Our experts
          have a deep understanding of techniques and strategies, honed through
          years of experience in the industry.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BottomResult;
