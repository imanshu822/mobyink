import React from "react";
import { Stack, Typography, Box } from "@mui/material";
const Post1 = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <Stack width={"80%"} margin={"0 auto"} bgcolor={"white"}>
        <Stack>
          <Typography>
            Segmenting Your Customers for Greater Digital Marketing
          </Typography>
          <Typography>By mobyink / December 12, 2023</Typography>
        </Stack>
        <Stack>
          <Stack>
            <Stack width={"50%"}>
              <Box />
            </Stack>
            <Stack p={2} boxSizing={"border-box"}>
              <Typography>
                Segmenting Your Customers for Greater Digital Marketing Success​
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Post1;
