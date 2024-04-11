import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import bannerVideo from "../../../assests/VideoBanner.mp4";
import Nav from "../../../utils/Navbar/Nav";

const TabLineSection = () => {
  return (
    <>
      <Stack position="relative">
        {/* Blue overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(13, 110, 253, 0.5)", // Semi-transparent blue
            zIndex: 2, // Ensure it's above the video
          }}
        ></div>

        {/* Video */}
        <video
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1, // Ensure video is below the overlay
          }}
          autoPlay
          loop
          muted
          controls={false}
        >
          <source src={bannerVideo} type="video/mp4" />
        </video>

        <Nav />

        <Stack zIndex={3}>
          <Stack
            zIndex={3}
            margin={{
              xxl: "0 97px",
              xl: "0 97px",

              md: "0 97px",
              xs: "0 auto",
            }}
            width={{
              xxl: "60%",
              xl: "60%",
              lg: "60%",
              sm: "80%",
            }}
            height={"90vh"}
            gap={3}
            justifyContent={"center"}
          >
            <Typography
              textAlign={{
                xs: "center",
                sm: "center",
                md: "left",
              }}
              fontSize={{
                xxl: "48px",
                xl: "36px",
                sm: "24px",
              }}
              fontWeight={"bold"}
              color={"white"}
            >
              Pioneering The Digital Frontier For Market Leaders
            </Typography>
            <Typography
              textAlign={{
                xs: "center",
                sm: "center",
                md: "left",
              }}
              variant="h6"
              color={"white"}
            >
              Where advanced technology meets rapid innovation, transforming
              challenges into strategic masterpieces.
            </Typography>
            <Stack
              alignItems={{
                xs: "center",
                md: "flex-start",
              }}
            >
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
      </Stack>
    </>
  );
};

export default TabLineSection;
