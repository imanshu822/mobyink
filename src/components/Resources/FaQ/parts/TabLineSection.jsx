import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../../utils/Navbar/Nav";
import careerPageImg from "../../../../assests/careerPageImg.webp";

const TabLineSection = () => {
  return (
    <>
      <Stack
        sx={{
          bgcolor: "#88B8FE",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "50vh",
        }}
      >
        <Nav />
        <Stack zIndex={1}>
          <Stack
            margin={" 0 auto"}
            width={{
              xs: "90%",
            }}
            gap={3}
            height={"35vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              textAlign={"center"}
              fontSize={{
                xs: "1.5rem",
                sm: "3rem",
              }}
              fontWeight={"bold"}
              color={"white"}
            >
              Frequently Asked Questions​
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
