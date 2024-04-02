import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import bannerVideo from "../../../assests/VideoBanner.mp4";
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
            margin={"0 97px"}
            width={"57%"}
            height={"90vh"}
            gap={3}
            justifyContent={"center"}
          >
            <Typography variant="h3" fontWeight={"bold"} color={"white"}>
              Pioneering The Digital Frontier For Market Leaders
            </Typography>
            <Typography variant="h6" color={"white"}>
              Where advanced technology meets rapid innovation, transforming
              challenges into strategic masterpieces.
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
