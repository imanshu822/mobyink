import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import portfolioLadyImg from "../../../../assests/portfolioLadyImg.png";
import { Link } from "react-router-dom";

const WantToMake = () => {
  return (
    <Stack width={"100%"} mt={15} boxSizing={"border-box"}>
      <Stack width={"95%"} margin={"0 auto"} boxSizing={"border-box"}>
        <Stack
          width={"95%"}
          bgcolor={"#0D6EFD"}
          height={"300px"}
          margin={"0 auto"}
          borderRadius={"10px"}
          justifyContent={"center"}
          direction={"row"}
        >
          <Stack
            p={{
              xs: 2,
              lg: 4,
            }}
            width={"50%"}
            gap={3}
          >
            <Typography
              fontSize={{
                xs: "20px",
                lg: "30px",
              }}
              fontWeight={"500"}
              color={"white"}
            >
              Create Jaw-Dropping Website Today!
            </Typography>
            <Link
              to="/get-in-touch/"
              style={{
                textDecoration: "none",
              }}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Stack
                border={"2px solid white"}
                borderRadius={"8px"}
                width={{
                  xs: "150px",
                  lg: "250px",
                }}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    opacity: 0.8,
                  },
                }}
              >
                <Typography
                  color={"white"}
                  fontSize={{
                    xs: "15px",
                    lg: "20px",
                  }}
                  padding={"10px 5px"}
                  boxSizing={"border-box"}
                >
                  Book A Free Call Now
                </Typography>
              </Stack>
            </Link>
          </Stack>
          <Stack width={"60%"} position={"relative"}>
            <Box
              pr={3}
              position={"absolute"}
              right={-15}
              top={-35}
              component="img"
              src={portfolioLadyImg}
              width={"200px"}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WantToMake;
