import { Stack, Typography } from "@mui/material";
import React from "react";
import App_marketing_banner from "../../../../assests/av.webp";
import Nav from "../../../../utils/Navbar/Nav";
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
          We Made It Easy For You
        </Typography>
        <Typography color={"white"}>
          Make an Authentic Video that Speaks Your Brand Value
        </Typography>
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
      </Stack>
    </Stack>
  );
};

export default AppMarketingBanner;