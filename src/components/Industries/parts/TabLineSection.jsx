import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import bannerVideo from "../../../assests/industriesBanner.mp4";
import Nav from "../../../utils/Navbar/Nav";

const TabLineSection = () => {
  return (
    <>
      <Stack>
        <video
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "1",
          }}
          autoPlay
          loop
          muted
        >
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <Nav />
        <Stack zIndex={1}>
          <Stack
            margin={{
              xs: "0 auto",
              lg: "0 97px",
            }}
            width={{
              xs: "90%",
              lg: "57%",
            }}
            height={"90vh"}
            gap={3}
            justifyContent={"center"}
          >
            <Typography variant="h3" fontWeight={"bold"} color={"white"}>
              Growth Done Right
            </Typography>
            <Typography variant="h6" color={"white"}>
              Conquer the first ranking on Google by redefining your User
              experience.
            </Typography>
            <Link
              to="/get-in-touch"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <Stack
                mt={2}
                justifyContent={"center"}
                alignItems={"center"}
                width={"140px"}
                height={"40px"}
                border={"2px solid white"}
                backgroundColor={"#0D6EFD"}
                sx={{
                  "&:hover": {
                    color: "white",
                    opacity: 0.8,
                    fontWeight: "bold",
                  },
                }}
              >
                <Typography color={"white"}>Get In Touch</Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
