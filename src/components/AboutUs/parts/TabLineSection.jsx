import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import bannerVideo from "../../../assests/VideoBanner.mp4";
import Nav from "../../../utils/Navbar/Nav";
import aboutBannerImg from "../../../assests/aboutBanner.webp";

const TabLineSection = () => {
  return (
    <>
      <Stack
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
            width={"57%"}
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
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
