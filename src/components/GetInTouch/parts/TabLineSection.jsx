import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../utils/Navbar/Nav";
import CaseStudiesImg from "../../../assests/Case-Study-Banner.jpg";

const TabLineSection = () => {
  return (
    <>
      <Stack
        sx={{
          bgcolor: "#172063",
          width: "100%",
          height: "70vh",
        }}
      >
        <Nav />
        <Stack zIndex={1}>
          <Stack
            margin={{
              xs: "0 auto",
              lg: "0 110px",
            }}
            ml={20}
            width={{
              xs: "90%",
              lg: "60%",
            }}
            height={"60vh"}
            gap={3}
            justifyContent={"center"}
          >
            <Typography
              fontSize={{
                xs: "2rem",
                lg: "3rem",
              }}
              fontWeight={"bold"}
              color={"white"}
            >
              Get In Touch With Us Today!
            </Typography>
            <Typography variant="h6" color={"white"}>
              Have questions or need assistance? We’re here to help. Reach out
              to our team for prompt and personalized support
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
