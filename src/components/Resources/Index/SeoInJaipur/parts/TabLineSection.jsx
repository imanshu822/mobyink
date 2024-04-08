import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../../../utils/Navbar/Nav";
const TabLineSection = () => {
  return (
    <>
      <Stack bgcolor={"#172063"}>
        <Nav />
        <Stack zIndex={1}>
          <Stack
            margin={"0 auto"}
            width={{
              xs: "95%",
              lg: "80%",
            }}
            height={"50vh"}
            gap={3}
            justifyContent={"center"}
          >
            <Typography
              textAlign={"center"}
              fontSize={{
                xs: "30px",
                lg: "35px",
              }}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              color={"white"}
            >
              UNLOCK DIGITAL SUCCESS WITH THE BEST SEO COMPANY IN JAIPUR
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
