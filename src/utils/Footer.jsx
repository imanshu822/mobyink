import { Box, Stack, Typography } from "@mui/material";

import React from "react";
import indiaHqImg from "../assests/hq-india.svg";
import canadaImg from "../assests/asset 20.svg";
import dubaiImg from "../assests/hq-uae.svg";
import usaImg from "../assests/hq-usa.svg";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const footerData1 = [
  {
    title: "HQ INDIA",
    address:
      "Above HDFC bank, opposite Nelam Multi Specialty Hospital, Sheer Sagar, Patrakar Colony, Jaipur",
    img: indiaHqImg,
  },
  {
    title: "CANADA",
    address: "177 Jameson avenue Toronto Ontario, m6k2y7 Canada",
    img: canadaImg,
  },
  {
    title: "DUBAI",
    address: "Dubai ,Bur Dubai, Shamma JUMA building office number 105 ,UAE",
    img: dubaiImg,
  },
  {
    title: "USA",
    address: "New Jersey, United States of America",
    img: usaImg,
  },
];

const services = [
  { text: "Services", to: "#" },
  { text: "UI/UX Design", to: "/ui-ux-design-prototype/" },
  {
    text: "Search Engine Optimization",
    to: "/search-engine-optimization/",
  },
  { text: "App Marketing", to: "/app-marketing/" },
  { text: "Website Development", to: "/website-development/" },
  { text: "Social Media Management", to: "/social-media-management/" },
  { text: "More......", to: "#" },
];

const technologies = [
  { text: "Technologies", to: "/technologies" },
  { text: "Blockchain", to: "/blockchain" },
  { text: "Artificial intelligence", to: "/artificial-intelligence" },
  { text: "AR and VR", to: "/ar-and-vr" },
  { text: "Cloud Computing", to: "/cloud-computing" },
  { text: "Internet of Things", to: "/internet-of-things" },
  { text: "More......", to: "#" },
];

const industries = [
  { text: "Industries", to: "#" },
  { text: "E-commerce", to: "/e-commerce/" },
  { text: "Logistics and Immigration", to: "/logistics-and-immigration/" },
  { text: "IT and Healthcare", to: "/it-and-healthcare/" },
  {
    text: "Real Estate and Interior Designing",
    to: "/real-estate-and-interior-designing/",
  },
  { text: "Finance", to: "/finance/" },
  { text: "More......", to: "/others/" },
];

const portfolio = [
  { text: "Portfolio", to: "/portfolio/" },
  { text: "Dharan Jaipur", to: "/dharan-jaipur/" },
  { text: "Wooden Owl Design", to: "/wooden-owl-design/" },
  { text: "Silent Alley", to: "/silent-alley/" },
  { text: "Sanatan Seva Sansthan", to: "/sanatan-seva-sansthan/" },
  { text: "Northpark Florist", to: "/northpark-florist/" },
  { text: "Porter", to: "/porter/" },
  { text: "More......", to: "/more/" },
];

const links = [
  { to: "", text: "Services" },
  { to: "/about-us/", text: "About Us" },
  { to: "/industries/", text: "Industries" },
  { to: "/case-studies/", text: "Case Studies" },
  { to: "/careers/", text: "Career" },
];

const socialMediaIcons = [
  {
    icon: <LinkedInIcon />,
    to: "https://www.linkedin.com/company/mobyink/mycompany/",
  },
  { icon: <FacebookIcon />, to: "https://www.facebook.com/OfficialMobyink" },
  { icon: <TwitterIcon />, to: "https://twitter.com/Mobyink_" },
  { icon: <InstagramIcon />, to: "https://www.instagram.com/mobyink_/" },
];
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleClick = (e) => {
    window.scrollTo(0, 0, "smooth");
  };
  return (
    <Stack
      mt={{
        xs: 3,
        lg: 10,
      }}
    >
      <Stack width={"90%"} margin={"0 auto"}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          gap={{
            xs: 2,
            lg: 4,
          }}
        >
          {footerData1.map((item, index) => (
            <Stack
              key={index}
              boxSizing={"border-box"}
              p={2}
              margin={"0 auto"}
              width={{
                xs: "90%",
                md: "25%",
                lg: "20%",
              }}
              gap={1}
            >
              <Stack p={1} width={"80%"} m={"0 auto"} boxSizing={"border-box"}>
                <Box
                  margin={"0 auto"}
                  color={"black"}
                  component="img"
                  width={"160px"}
                  height={"110px"}
                  src={item.img}
                  alt={item.title}
                  style={{ filter: "grayscale(100%)" }}
                />
              </Stack>
              <Typography textAlign={"center"} fontSize={"23px"}>
                {item.title}
              </Typography>
              <Typography
                textAlign={"center"}
                color={"#606060"}
                fontSize={"16px"}
              >
                {item.address}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Box width={"100%"} height={"2px"} bgcolor={"#BCBCBC"} />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          gap={{
            xs: 2,
            lg: 5,
          }}
          p={2}
          pl={2}
          pr={2}
          boxSizing={"border-box"}
          flexWrap={"wrap"}
        >
          {[services].map((category, index) => (
            <Stack
              key={index}
              width={{
                xs: "100%",
                md: "45%",
                lg: "17%",
              }}
            >
              <Stack
                fontSize={"25px"}
                fontWeight={"600"}
                pt={2}
                pb={2}
                boxSizing={"border-box"}
              >
                {category[0].text}
              </Stack>
              {category.slice(1).map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  style={{
                    textDecoration: "none",
                    color: "#55595E",
                  }}
                >
                  <Typography
                    onClick={handleClick}
                    pt={1}
                    pb={1}
                    boxSizing={"border-box"}
                    sx={{
                      fontSize: "16px",
                      "&:hover": {
                        color: "#0D6EFD",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Link>
              ))}
            </Stack>
          ))}

          {[technologies].map((category, index) => (
            <Stack
              key={index}
              width={{
                xs: "100%",
                md: "45%",
                lg: "17%",
              }}
            >
              <Stack
                fontSize={"25px"}
                fontWeight={"600"}
                pt={2}
                pb={2}
                boxSizing={"border-box"}
              >
                {category[0].text}
              </Stack>
              {category.slice(1).map((item, idx) => (
                <Typography
                  pt={1}
                  pb={1}
                  boxSizing={"border-box"}
                  sx={{
                    fontSize: "16px",
                    "&:hover": {
                      color: "#0D6EFD",
                    },
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Stack>
          ))}
          {[industries].map((category, index) => (
            <Stack
              key={index}
              width={{
                xs: "100%",
                md: "45%",
                lg: "17%",
              }}
            >
              <Stack
                fontSize={"25px"}
                fontWeight={"600"}
                pt={2}
                pb={2}
                boxSizing={"border-box"}
              >
                {category[0].text}
              </Stack>
              {category.slice(1).map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  style={{
                    textDecoration: "none",
                    color: "#55595E",
                  }}
                >
                  <Typography
                    onClick={handleClick}
                    pt={1}
                    pb={1}
                    boxSizing={"border-box"}
                    sx={{
                      fontSize: "16px",
                      "&:hover": {
                        color: "#0D6EFD",
                      },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Link>
              ))}
            </Stack>
          ))}
          {[portfolio].map((category, index) => (
            <Stack
              key={index}
              width={{
                xs: "100%",
                md: "45%",
                lg: "17%",
              }}
            >
              <Stack
                fontSize={"25px"}
                fontWeight={"600"}
                pt={2}
                pb={2}
                boxSizing={"border-box"}
              >
                {category[0].text}
              </Stack>
              {category.slice(1).map((item, idx) => (
                <Typography
                  pt={1}
                  pb={1}
                  boxSizing={"border-box"}
                  sx={{
                    fontSize: "16px",
                    "&:hover": {
                      color: "#0D6EFD",
                    },
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Stack>
          ))}

          <Stack
            width={{
              xs: "100%",
              md: "45%",
              lg: "18%",
            }}
          >
            <Stack
              fontSize={"25px"}
              fontWeight={"600"}
              pt={2}
              pb={2}
              boxSizing={"border-box"}
            >
              Resources
            </Stack>
            <Link
              to="/blog/"
              style={{
                textDecoration: "none",
                color: "#55595E",
              }}
            >
              <Typography
                onClick={handleClick}
                pt={1}
                pb={1}
                boxSizing={"border-box"}
                sx={{
                  fontSize: "16px",
                  "&:hover": {
                    color: "#0D6EFD",
                  },
                }}
              >
                Blog
              </Typography>
            </Link>
            <Link
              to="/faq/"
              style={{
                textDecoration: "none",
                color: "#55595E",
              }}
            >
              <Typography
                onClick={handleClick}
                pt={1}
                pb={1}
                boxSizing={"border-box"}
                sx={{
                  fontSize: "16px",
                  "&:hover": {
                    color: "#0D6EFD",
                  },
                }}
              >
                FAQ's
              </Typography>
            </Link>
            <Link
              to="/we-are-hiring"
              style={{
                textDecoration: "none",
                color: "#55595E",
              }}
            >
              <Stack
                width={"150px"}
                bgcolor={"#0D6EFD"}
                borderRadius={"5px"}
                sx={{
                  "&:hover": {
                    backgroundColor: "#0D6EFD",
                    color: "white",
                    opacity: "0.8",
                  },
                }}
              >
                <Typography
                  textAlign={"center"}
                  color={"white"}
                  p={1}
                  fontWeight={"bold"}
                  boxSizing={"border-box"}
                >
                  We Are Hiring
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
        <Box width={"100%"} height={"2px"} bgcolor={"#BCBCBC"} />
        <Stack>
          <Stack
            direction={{
              xs: "column",
              lg: "row",
            }}
            justifyContent={"space-between"}
            pt={2}
            pb={2}
            boxSizing={"border-box"}
            gap={{
              xs: 4,
              lg: "",
            }}
          >
            <Stack
              direction={{
                xs: "column",
                lg: "row",
              }}
              gap={{
                xs: 2,
                lg: 4,
              }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography>
                ©{" "}
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {currentYear}
                </span>{" "}
                <span
                  style={{
                    color: "#0D6EFD",
                    fontWeight: "bold",
                  }}
                >
                  Mobyink
                </span>
              </Typography>
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  style={{
                    textDecoration: "none",
                    color: "#55595E",
                    textAlign: "center",
                  }}
                >
                  <Typography onClick={handleClick}>{link.text}</Typography>
                </Link>
              ))}
            </Stack>
            <Stack
              direction={"row"}
              gap={3}
              mr={{
                xs: 0,
                lg: 7,
              }}
              alignItems={"center"}
              justifyContent={{
                xs: "center",
                lg: "flex-end",
              }}
            >
              {socialMediaIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  <Stack
                    bgcolor={"#e4e7e9"}
                    width={"40px"}
                    height={"40px"}
                    borderRadius={"51%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    color={"#0D6EFD"}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#0D6EFD",
                        color: "white",
                        transform: "translateY(-8px)",
                        transition: "0.4s ease-out",
                      },
                    }}
                  >
                    <Stack
                      width={"22px"}
                      height={"22px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {item.icon}
                    </Stack>
                  </Stack>
                </a>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
