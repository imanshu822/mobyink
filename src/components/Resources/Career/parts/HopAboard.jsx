import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const HopAboard = () => {
  return (
    <Stack>
      <Stack
        width={{
          xs: "100%",
          sm: "80%",
        }}
        margin={"0 auto"}
        mt={{
          xs: 5,
          lg: 10,
        }}
        boxSizing={"border-box"}
      >
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          boxSizing={"border-box"}
          gap={3}
        >
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
            gap={3}
            pl={{
              xs: 0,
              lg: 5,
            }}
          >
            <Typography
              fontSize={{
                xs: "35px",
                lg: "48px",
              }}
              fontWeight={"bold"}
            >
              Hop Aboard the Digital Wave! Dive into the World of Mobylnk
              Innovations-
            </Typography>
            <Typography fontWeight={"300"} fontSize={"14px"}>
              A Global Digital Solutions Hub for Fortune 100+Titans and Thriving
              Enterprises. Uncover the Magic That Sets Us Apart. Ready to Ride
              the Innovation Rollercoaster? Let's Make Waves Together!"
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
                width={"250px"}
                height={"40px"}
                border={"2px solid white"}
                borderRadius={"5px"}
                backgroundColor={"#0D6EFD"}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: "white",
                    opacity: "0.8",
                  },
                }}
              >
                <Typography color={"white"}>
                  Learn More about Company
                </Typography>
              </Stack>
            </Link>
          </Stack>
          <Stack
            width={{
              xs: "80%",
              lg: "50%",
            }}
            justifyContent={"center"}
            alignItems={"center"}
            margin={"0 auto"}
          >
            <Stack
              width={{
                xs: "100%",
                lg: "80%",
              }}
              height={{
                xs: "100%",
              }}
            >
              <Box
                component="img"
                width={"100%"}
                height={"100%"}
                src="	https://via.placeholder.com/150"
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HopAboard;
