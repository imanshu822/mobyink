import { Stack, Typography } from "@mui/material";
import React from "react";
import App_marketing_banner from "../../../../assests/sm.webp";
import Nav from "../../../../utils/Navbar/Nav";
import { Link } from "react-router-dom";
const AppMarketingBanner = () => {
  return (
    <Stack
      height={{
        xs: "80vh",
        lg: "100vh",
      }}
      sx={{
        backgroundImage: `url(${App_marketing_banner})`,
        backgroundSize: "cover",
      }}
    >
      <Nav />
      <Stack
        margin={{
          xs: "100px 20px",
          lg: "230px 96px",
        }}
        gap={"10px"}
      >
        <Typography
          color={"white"}
          fontWeight={"bold"}
          fontSize={{
            xs: "30px",
            lg: "40px",
          }}
        >
          Lets Spot-On Social Media
        </Typography>
        <Typography color={"white"}>
          Be Found and Become Memorable with SMM
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
  );
};

export default AppMarketingBanner;
