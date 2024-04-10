import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import service1 from "../../../assests/service1.webp";
import service2 from "../../../assests/service2.webp";
import service3 from "../../../assests/service3.webp";
import service4 from "../../../assests/service4.webp";
import service5 from "../../../assests/service5.webp";
import service6 from "../../../assests/service6.webp";
import { Link } from "react-router-dom";

const services = [
  {
    image: service1,
    title: "E-commerce",
    to: "/industries/ecomerce",
    description:
      "Mobyink Is your strategic partner in navigating the dynamic landscape of e-commerce. Our digital marketing agency is dedicated to propelling e-commerce businesses to new heights through a specialized and results-driven approach",
  },
  {
    image: service2,
    title: "Logistics and Immigration",
    to: "/industries/logistics",
    description:
      "Our expertise lies in transforming both logistics and immigration services with cutting-edge digital marketing strategies. Our team, equipped with specialized knowledge in these sectors, leads the way in offering comprehensive digital solutions.",
  },
  {
    image: service3,
    title: "IT and Healthcare",
    to: "/industries/it-healthcare",
    description:
      "Mobyink stands at the forefront of digital innovation, blending technological excellence with strategic marketing expertise. As a leading digital marketing agency, we specialize in elevating businesses within the IT and Healthcare sectors.",
  },
  {
    image: service4,
    title: "Real Estate and Interior Designing",
    to: "/industries/real-estate",
    description:
      "At Mobyink, we blend the art of real estate with the creativity of interior design, all powered by digital marketing expertise. Our approach goes beyond mere property listings; we tell captivating stories that highlight the unique charm of each home and its interior potential.",
  },
  {
    image: service5,
    title: "Finance",
    to: "/industries/finance",
    description:
      "We are your trusted partner in revolutionizing the way financial institutions navigate the digital landscape. In an era where the financial industry is rapidly evolving, our digital marketing expertise ensures that your brand stays ahead.",
  },
  {
    image: service6,
    title: "Others",
    to: "/industries/others",
    description:
      "We take pride in being the driving force behind businesses in every sector, utilizing our cutting-edge digital marketing solutions to propel brands to unprecedented success. Our journey is defined by a commitment to excellence, a passion for results.",
  },
];

const IndustriesWeServe = () => {
  return (
    <Stack
      width={"100%"}
      mt={{
        xs: 5,
        lg: 10,
      }}
      boxSizing={"border-box"}
    >
      <Stack
        width={{
          xs: "90%",
          lg: "87%",
        }}
        margin={"0 auto"}
      >
        <Stack
          justifyContent={"center"}
          gap={1}
          mb={7}
          boxSizing={"border-box"}
        >
          <Typography
            fontSize={{
              xs: "28px",
              lg: "36px",
            }}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Industries We Serve
          </Typography>
          <Typography
            margin={"0 auto"}
            width={{
              xs: "100%",
              lg: "70%",
            }}
            textAlign={"center"}
            color={"#767a86"}
            fontSize={"21px"}
          >
            Driving efficiency to your marketing with versatile industry
            experts. From SEO Sorcery to Social Media Wizardry, We Craft
            Tailored Strategies that Ignite Your Brand
          </Typography>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            md: "row",
            lg: "row",
          }}
          justifyContent="space-between"
          flexWrap={"wrap"}
        >
          {services.map((service, index) => (
            <Stack
              key={index}
              width={{
                xs: "100%",
                md: "48%",
                lg: "30%",
              }}
              padding={2}
              boxSizing={"border-box"}
            >
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={service.to}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                key={index}
              >
                <Stack gap={2}>
                  <Stack
                    sx={{
                      width: "100%",
                      height: "300px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      position: "relative",
                      backgroundColor: "#222",
                      backgroundBlendMode: "hard-light",
                      transition: "all 1s ease-in-out",
                      cursor: "pointer",
                      "&:hover": {
                        "& img": {
                          filter: "brightness(100%)", // change brightness to 100% on hover
                          transform: "scale(1.1)",
                          transition: "all 0.5s",
                        },
                      },
                    }}
                  >
                    <Box
                      borderRadius={"10px"}
                      width={"100%"}
                      height={"100%"}
                      component="img"
                      src={service.image}
                      sx={{
                        transition: "all 0.5s",
                        filter: "brightness(70%)", // set initial brightness to 20%
                      }}
                    />
                  </Stack>

                  <Typography fontSize={"28px"} fontWeight={"bold"}>
                    {service.title}
                  </Typography>
                  <Typography
                    fontSize={"18px"}
                    fontWeight={"300"}
                    lineHeight={"1.8"}
                  >
                    {service.description}
                  </Typography>
                </Stack>
              </Link>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default IndustriesWeServe;
