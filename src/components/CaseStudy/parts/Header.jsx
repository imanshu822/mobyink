import { Stack, Typography } from "@mui/material";
import React from "react";

import Nav from "../../../utils/Navbar/Nav";
const Header = ({ data }) => {
  return (
    <Stack bgcolor={"#172063"} height={"300px"}>
      <Nav />
      <Stack>
        <Stack width={"80%"} margin={"0 auto"}>
          <Stack mt={"60px"}>
            <Typography
              variant="h3"
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
