import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import bannerVideo from "../../../assests/VideoBanner.mp4";
import Nav from "../../../utils/Navbar/Nav";
import aboutBannerImg from "../../../assests/aboutBanner.webp";

const TabLineSection = () => {
  return (
    <>
      <Stack
        display={{
          xs: "none",
          lg: "flex",
        }}
        sx={{
          backgroundImage: `url(${aboutBannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "87vh",
        }}
      >
        <Nav />
        <Stack zIndex={1}>
          <Stack
            margin={"0 110px"}
            ml={20}
            width={{
              xs: "100%",
              lg: "57%",
            }}
            height={"65vh"}
            gap={3}
            justifyContent={"center"}
          >
            <Typography variant="h3" fontWeight={"bold"} color={"white"}>
              Your Digital Growth Partner
            </Typography>
            <Typography variant="h6" color={"white"}>
              We are a team of digital marketing experts dedicated to driving
              your business forward online.
            </Typography>
            <Link
              to="/get-in-touch"
              onClick={() => {
                window.scroll(0, 0);
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"140px"}
                height={"40px"}
                border={"2px solid white"}
                backgroundColor={"#0D6EFD"}
                sx={{
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <Typography color={"white"}>Get In Touch</Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        display={{
          xs: "flex",
          lg: "none",
        }}
        sx={{
          bgcolor: "#172063",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
        height={{
          xs: "100%",
        }}
      >
        <Nav />

        <Stack zIndex={1}>
          <Stack
            margin={{
              xs: "70px auto",
              lg: "0 0 0 10%",
            }}
            ml={20}
            width={{
              xs: "90%",
              lg: "57%",
            }}
            gap={4}
            justifyContent={"center"}
          >
            <Typography variant="h3" fontWeight={"bold"} color={"white"}>
              Your Digital Growth Partner
            </Typography>
            <Typography variant="h6" color={"white"}>
              We are a team of digital marketing experts dedicated to driving
              your business forward online.
            </Typography>
            <Link
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"140px"}
                height={"40px"}
                border={"2px solid white"}
                backgroundColor={"transparent"}
                sx={{
                  "&:hover": {
                    color: "white",
                    opacity: 0.8,
                    fontWeight: "bold",
                    backgroundColor: "#0D6EFD",
                    transform: "translateY(-5px)",
                    transition: "all 0.7s ease",
                  },
                }}
              >
                <Typography color={"white"}>Get In Touch</Typography>
              </Stack>
            </Link>
          </Stack>
          <Box
            component="img"
            src={aboutBannerImg}
            width={"100%"}
            height={"100%"}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
