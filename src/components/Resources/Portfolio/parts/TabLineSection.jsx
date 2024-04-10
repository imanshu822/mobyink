import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import portfolioBanner from "../../../../assests/Portfolio_Banner.svg";
import Nav from "../../../../utils/Navbar/Nav";

const TabLineSection = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundImage: `url(${portfolioBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Nav />
      </Stack>
    </>
  );
};

export default TabLineSection;
