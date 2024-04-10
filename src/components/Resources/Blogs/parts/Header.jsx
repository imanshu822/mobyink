import { Stack, Typography } from "@mui/material";
import React from "react";

import Nav from "../../../../utils/Navbar/Nav";
const Header = ({ data }) => {
  return (
    <Stack bgcolor={"#172063"} height={"300px"}>
      <Nav />
      <Stack>
        <Stack width={"80%"} margin={"0 auto"}>
          <Stack
            mt={{
              xs: "30px",
              lg: "60px",
            }}
          >
            <Typography
              fontSize={{
                xs: "30px",
                lg: "48px",
              }}
              color={"white"}
              textAlign={"center"}
              justifyContent={"center"}
              fontWeight={"bold"}
            >
              {data.BlogContent.heading}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
