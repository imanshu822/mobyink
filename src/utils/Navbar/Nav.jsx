import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import lo from "../../assests/LogoBlue.svg";
import logoDarkImg from "../../assests/logo_dark.svg";
import { Stack } from "@mui/material";
import "./nav.css";
import Button from "../Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { RxCross2 } from "react-icons/rx";
import { CgMenuRight } from "react-icons/cg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const services = [
  {
    link: "/app-marketing/",

    title: "App Marketing",
    features: [
      {
        name: "App Store Optimization",
        to: "/App-Store-Optimization",
        windowScrollAmount: 0,
      },
      {
        name: "Creatives & CVR Optimization",
        to: "/Creatives & CVR Optimization",
        windowScrollAmount: 100,
      },
      {
        name: "User Acquisition & Media",
        to: "/User Acquisition & Media",
        windowScrollAmount: 200,
      },
      { name: "Retention", to: "/Retention", windowScrollAmount: 300 },
    ],
  },
  {
    title: "App Development",
    link: "/app-development/",
    features: [
      {
        name: "iOS App Development Services",
        to: "/iOS App Development Services",
        windowScrollAmount: 0,
      },
      {
        name: "Android App Development Services",
        to: "/Android App Development Services",
        windowScrollAmount: 100,
      },
      {
        name: "Flutter App Development Services",
        to: "/Flutter App Development Services",
        windowScrollAmount: 200,
      },
      {
        name: "React App Development Services",
        to: "/React App Development Services",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Graphic Designing",
    link: "/graphic-designing/",
    features: [
      {
        name: "Banner Design and Logo Design",
        to: "/Banner Design and Logo Design",
        windowScrollAmount: 0,
      },
      {
        name: "Illustration Design",
        to: "/Illustration Design",
        windowScrollAmount: 100,
      },
      {
        name: "3D Design",
        to: "/3D Design",
        windowScrollAmount: 200,
      },
      {
        name: "Advertising Design",
        to: "/Advertising Design",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Website Development",
    link: "/website-development/",
    features: [
      {
        name: "CMS development using WordPress, Shopify, and Wix",
        to: "/CMS development using WordPress, Shopify, and Wix",
        windowScrollAmount: 0,
      },
      {
        name: "React js development",
        to: "/React js development",
        windowScrollAmount: 100,
      },
      {
        name: "Full Stack Development",
        to: "/Full Stack Development",
        windowScrollAmount: 200,
      },
      {
        name: "Php/node js development",
        to: "/Php/node js development",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Pay Per Click Advertising",
    link: "/pay-per-click-advertising/",
    features: [
      {
        name: "Google Ads",
        to: "/Google Ads",
        windowScrollAmount: 0,
      },
      {
        name: "Meta Ads",
        to: "/Meta Ads",
        windowScrollAmount: 100,
      },
      {
        name: "E-commerce Ads",
        to: "/E-commerce Ads",
        windowScrollAmount: 200,
      },
      {
        name: "Remarketing Ads",
        to: "/Remarketing Ads",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "UI/UX Design & Prototype",
    link: "/ui-ux-design-prototype/",
    features: [
      {
        name: "Custom Web Design",
        to: "/Custom Web Design",
        windowScrollAmount: 0,
      },
      {
        name: "Mobile App Design",
        to: "/Mobile App Design",
        windowScrollAmount: 100,
      },
      {
        name: "Product Design",
        to: "/Product Design",
        windowScrollAmount: 200,
      },
      {
        name: "Branding & Graphics",
        to: "/Branding & Graphics",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Social Media Management",
    link: "/social-media-management/",
    features: [
      {
        name: "Strategy with Content Creation",
        to: "/Strategy with Content Creation",
        windowScrollAmount: 0,
      },
      {
        name: "Social Media posting",
        to: "/Social Media posting",
        windowScrollAmount: 100,
      },
      {
        name: "Community Management",
        to: "/Community Management",
        windowScrollAmount: 200,
      },
      {
        name: "Performance Optimization",
        to: "/Performance Optimization",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Animation & Video Editing",
    link: "/animation-video-editing/",
    features: [
      {
        name: "2D Animation",
        to: "/2D Animation",
        windowScrollAmount: 0,
      },
      {
        name: "3D Animation",
        to: "/3D Animation",
        windowScrollAmount: 100,
      },
      {
        name: "E-learning Animation",
        to: "/E-learning Animation",
        windowScrollAmount: 200,
      },
      {
        name: "Corporate Video Editing",
        to: "/Corporate Video Editing",
        windowScrollAmount: 300,
      },
    ],
  },
  {
    title: "Search Engine Optimization",
    link: "/search-engine-optimization/",
    features: [
      {
        name: "CMS development using WordPress, Shopify, and Wix",
        to: "/CMS development using WordPress, Shopify, and Wix",
        windowScrollAmount: 0,
      },
      {
        name: "React js development",
        to: "/React js development",
        windowScrollAmount: 100,
      },
      {
        name: "Full Stack Development",
        to: "/Full Stack Development",
        windowScrollAmount: 200,
      },
      {
        name: "Php/node js development",
        to: "/Php/node js development",
        windowScrollAmount: 300,
      },
    ],
  },
];
const resources = [
  {
    title: "Portfolio",
    to: "/portfolio/",
    windowScrollAmount: 100,
  },
  {
    title: "Careers",
    to: "/careers/",
    windowScrollAmount: 200,
  },
  {
    title: "Blog",
    to: "/blog/",
    windowScrollAmount: 300,
  },
  {
    title: "Faq",
    to: "/Faq/",
    windowScrollAmount: 400,
  },
];
const index = [
  {
    title: "SEO Company INDIA",
    to: "/seo-company-india/",
    windowScrollAmount: 100,
  },
  {
    title: "SEO Company Jaipur",
    to: "/seo-company-in-jaipur/",
    windowScrollAmount: 200,
  },
  {
    title: "SEO Company Delhi",
    to: "/seo-company-in-delhi/",
    windowScrollAmount: 300,
  },
  {
    title: "SEO Company Bangalore",
    to: "/seo-company-in-bangalore/",
    windowScrollAmount: 400,
  },
  {
    title: "SEO Company Gurgaon",
    to: "/seo-company-in-gurgaon/",
    windowScrollAmount: 500,
  },
  {
    title: "SEO Company Mumbai",
    to: "/seo-company-in-mumbai/",
    windowScrollAmount: 600,
  },
  {
    title: "SEO Company Noida",
    to: "/seo-company-in-noida/",
    windowScrollAmount: 700,
  },
  {
    title: "SEO Company Pune",
    to: "/seo-company-in-pune/",
    windowScrollAmount: 800,
  },
  {
    title: "SEO Company Surat",
    to: "/seo-company-in-surat/",
    windowScrollAmount: 900,
  },
];
const Nav = () => {
  const phoneNumber = "+91-9001386001";

  const email = "info@mobyink.com";

  const [hoveredTitle, setHoveredTitle] = useState(null);
  useEffect(() => {
    setHoveredTitle(services[0]?.title);
  }, []);
  const [popoverState, setPopoverState] = useState({});
  const [menuClick, setMenuClick] = useState(false);

  const handleClick = () => {
    setMenuClick(!menuClick);
  };

  useEffect(() => {
    if (menuClick) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuClick]);

  const [showNavbar, setShowNavbar] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (
        currentScrollPosition > 1000 &&
        currentScrollPosition < prevScrollPosition
      ) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  const handleMouseEnter = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: true,
    }));
  };

  const handleMouseLeave = (linkId) => {
    setPopoverState((prevState) => ({
      ...prevState,
      [linkId]: false,
    }));
  };
  const isPopoverOpen = (linkId) => Boolean(popoverState[linkId]);
  return (
    <>
      {/* for Desktop view */}

      <Stack
        position={"relative"}
        p={"0px 90px"}
        zIndex={5}
        backgroundColor={"transparent"}
      >
        <Stack
          mt={1}
          height={"80px"}
          zIndex={11}
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
          }}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          backgroundColor={"transparent"}
        >
          <Stack width={{ xxl: "10%", xl: "13%", md: "20%", sm: "25%" }}>
            <Link
              to={"/"}
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <img src={lo} alt="" style={{ width: "100%", height: "100%" }} />
            </Link>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            alignSelf={"center"}
            height={"100%"}
          >
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignContent="center"
              gap={5}
              pl={3}
              sx={{ color: "white", height: "100%", paddingRight: 4 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
                className="navlink-box"
              >
                <Box>
                  <Link to="#" className="navlink-link">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        color={"white"}
                        alignSelf="center"
                        display="inline-block"
                        className="navlink"
                        height={"100%"}
                        fontSize={"18px"}
                        sx={{
                          transition: "all 0.4s ease-in",
                          "&:hover": {
                            color: "#0D6EFD",
                          },
                          //   color: isPopoverOpen(1) ? "white" : "black",
                        }}
                      >
                        Services
                      </Typography>
                      <ArrowDropDownIcon
                        className="navlink-link-downarrow"
                        sx={{
                          fontSize: 25,
                          transition: "all 0.3s ease-in",
                          color: "white",
                          transform: isPopoverOpen(1)
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        }}
                      />
                    </Box>
                  </Link>
                  <Stack
                    color={"black"}
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                    sx={{
                      width: isPopoverOpen(1) ? "100%" : 0,
                      opacity: isPopoverOpen(1) ? 1 : 0,
                      transition:
                        "height 0.2s ease-in, opacity 0.2s ease-in-out",
                      overflow: "hidden",
                      position: "absolute",
                      backgroundColor: "transparent",
                      left: 0,
                      top: "92%",
                      zIndex: 1,
                    }}
                  >
                    <Stack direction={"row"} width={"100%"}>
                      <Stack
                        color={"lightpurple"}
                        width={"75%"}
                        backgroundColor={"#DEE0FE"}
                        alignItems={"center"}
                      >
                        <Stack
                          direction={"row"}
                          gap={3}
                          justifyContent={"center"}
                        >
                          <Stack width={"25%"} pl={"5%"} pb={3}>
                            <Typography pt={3} pb={1} fontWeight={"bold"}>
                              Solutions
                            </Typography>
                            <Stack>
                              {services.map((service, index) => (
                                <Link
                                  to={service.link}
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                >
                                  <Typography
                                    pt={1}
                                    pb={1}
                                    key={index}
                                    sx={{
                                      "&:hover": {
                                        color: "#0D6EFD",
                                        cursor: "pointer",
                                      },
                                    }}
                                    onMouseEnter={() =>
                                      setHoveredTitle(service.title)
                                    }
                                  >
                                    {service.title}
                                  </Typography>
                                </Link>
                              ))}
                            </Stack>
                          </Stack>
                          <Stack width={"50%"}>
                            <Typography pt={3} fontWeight={"bold"}>
                              Industry Focus
                            </Typography>
                            <Stack
                              direction={"row"}
                              flexWrap={"wrap"}
                              justifyContent={"center"}
                              gap={3}
                              p={4}
                              height={"100%"}
                            >
                              {/* Render features based on hoveredTitle */}
                              {hoveredTitle &&
                                services
                                  .find(
                                    (service) => service.title === hoveredTitle
                                  )
                                  ?.features.map((feature, index) => (
                                    <Stack
                                      key={index}
                                      width={"170px"}
                                      height={"100px"}
                                      p={2}
                                      alignItems={"center"}
                                      justifyContent={"center"}
                                      borderRadius={3}
                                      backgroundColor={"white"}
                                      border={"2px solid gray"}
                                    >
                                      <Typography textAlign={"center"}>
                                        {feature.name}
                                      </Typography>
                                    </Stack>
                                  ))}
                            </Stack>
                          </Stack>
                        </Stack>
                      </Stack>
                      <Stack width={"25%"} bgcolor={"white"}>
                        <Stack
                          p={3}
                          boxSizing={"border-box"}
                          gap={3}
                          width={"80%"}
                        >
                          <Typography fontWeight={"bold"}>
                            Featured Case Studies
                          </Typography>
                          <Stack>
                            <Link
                              onClick={() => {
                                window.scroll(0, 0);
                              }}
                              to="/segmenting-your-customers-for-greater-digital-marketing-success/"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              <Typography>
                                Segmenting Your Customers for Greater Digital
                                Marketing
                              </Typography>
                            </Link>
                            <Box
                              mt={1}
                              width={"100%"}
                              height={"1px"}
                              backgroundColor={"lightgray"}
                            />
                          </Stack>
                          <Stack>
                            <Link
                              onClick={() => {
                                window.scroll(0, 0);
                              }}
                              to="/how-to-improve-your-site-seo-rankings/"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              <Typography>
                                How to Improve Your Site SEO Rankings
                              </Typography>
                            </Link>
                            <Box
                              mt={1}
                              width={"100%"}
                              height={"1px"}
                              backgroundColor={"lightgray"}
                            />
                          </Stack>
                          <Stack>
                            <Link
                              onClick={() => {
                                window.scroll(0, 0);
                              }}
                              to="/how-to-secure-and-optimize-your-apps-online-visibility/"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              <Typography>
                                How to Secure and Optimize Your App’s Online
                                Visibility
                              </Typography>
                            </Link>
                            <Box
                              mt={1}
                              width={"100%"}
                              height={"1px"}
                              backgroundColor={"lightgray"}
                            />
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </div>
              {/* //!our Story */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Link to="/about-us/" className="navlink-link">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        alignSelf="center"
                        display="inline-block"
                        fontSize={"18px"}
                        color={"white"}
                        sx={{
                          transition: "all 0.4s ease-in",
                          "&:hover": {
                            color: "#0D6EFD",
                          },
                          //   color: isPopoverOpen(2) ? "white" : "black",
                        }}
                      >
                        About Us
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </div>

              {/* //!Industries */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <Link to="/industries/" className="navlink-link">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        alignSelf="center"
                        display="inline-block"
                        fontSize={"18px"}
                        color={"white"}
                        sx={{
                          transition: "all 0.4s ease-in",
                          "&:hover": {
                            color: "#0D6EFD",
                          },
                          //   color: isPopoverOpen(3) ? "white" : "black",
                        }}
                      >
                        Industries
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Link to="/case-studies/" className="navlink-link">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        alignSelf="center"
                        display="inline-block"
                        fontSize={"18px"}
                        color={"white"}
                        sx={{
                          transition: "all 0.4s ease-in",
                          "&:hover": {
                            color: "#0D6EFD",
                          },
                        }}
                      >
                        Case Studies
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={() => handleMouseLeave(4)}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Link to="#" className="navlink-link">
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Typography
                        alignSelf="center"
                        display="inline-block"
                        fontSize={"18px"}
                        color={"white"}
                        sx={{
                          transition: "all 0.4s ease-in",
                          "&:hover": {
                            color: "#0D6EFD",
                          },
                        }}
                      >
                        Resources
                      </Typography>
                      <ArrowDropDownIcon
                        className="navlink-link-downarrow"
                        sx={{
                          fontSize: 25,
                          transition: "all 0.3s ease-in",
                          color: "white",
                          transform: isPopoverOpen(4)
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        }}
                      />
                    </Box>
                  </Link>

                  <Stack
                    flexDirection={"row"}
                    justifyContent={"start"}
                    alignItems={"start"}
                    backgroundColor={"transparent"}
                    sx={{
                      height: isPopoverOpen(4) ? 470 : 0,
                      opacity: isPopoverOpen(4) ? 1 : 0,
                      transition:
                        "height 0.2s ease-in, opacity 0.2s ease-in-out",
                      position: "absolute",
                      overflow: "hidden",
                      zIndex: 1,
                      left: 0,
                    }}
                  >
                    <Stack width={"420px"} position={"relative"}>
                      <Stack
                        width={"200px"}
                        backgroundColor={"#F4F4F4"}
                        boxShadow={"0 10px 30px 0 rgba(45,45,45,.2)"}
                      >
                        <Link to="#" style={{ textDecoration: "none" }}>
                          <Stack
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={() => handleMouseLeave(5)}
                          >
                            <Typography
                              color={"black"}
                              padding={"10px 20px"}
                              mt={"10px"}
                              position={"relative"}
                              sx={{
                                "&:hover": {
                                  cursor: "pointer",
                                  backgroundColor: "white",
                                },
                              }}
                              fontSize={"14px"}
                            >
                              Index
                              <KeyboardArrowDownIcon
                                style={{
                                  position: "absolute",
                                  right: "20px",
                                }}
                              />
                            </Typography>
                          </Stack>

                          <Stack
                            flexDirection={"row"}
                            justifyContent={"center"}
                            alignItems={"start"}
                            onMouseEnter={() => handleMouseEnter(5)}
                            onMouseLeave={() => handleMouseLeave(5)}
                            backgroundColor={"#F4F4F4"}
                            boxShadow={"0 10px 30px 0 rgba(45,45,45,.2)"}
                            sx={{
                              // height: isPopoverOpen(5) ? 400 : 0,
                              height: isPopoverOpen(5) ? "700px" : 0,
                              width: isPopoverOpen(5) ? 220 : 0,
                              opacity: isPopoverOpen(5) ? 1 : 0,
                              // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                              transition:
                                "height 0.2s ease-in, opacity 0.2s ease-in-out",
                              position: "absolute",
                              overflow: "hidden",
                              zIndex: 1,
                              right: 0,
                              top: 0,
                            }}
                          >
                            <Stack>
                              {index.map((resource, index) => (
                                <Link
                                  key={index}
                                  to={resource.to}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Typography
                                    fontSize={"14px"}
                                    color={"black"}
                                    padding={"10px 20px"}
                                    mt={"10px"}
                                    sx={{
                                      "&:hover": {
                                        cursor: "pointer",
                                        backgroundColor: "white",
                                      },
                                    }}
                                  >
                                    {resource.title}
                                  </Typography>
                                </Link>
                              ))}
                            </Stack>
                          </Stack>
                        </Link>
                        {resources.map((resource, index) => (
                          <Link
                            key={index}
                            to={resource.to}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography
                              fontSize={"14px"}
                              color={"black"}
                              padding={"10px 20px"}
                              mt={"10px"}
                              sx={{
                                "&:hover": {
                                  cursor: "pointer",
                                  backgroundColor: "white",
                                },
                              }}
                            >
                              {resource.title}
                            </Typography>
                          </Link>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </div>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Stack direction={"row"} gap={1}>
              <Link
                style={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.href = `mailto:${email}?subject=${"Company Inquiry"}&body=${"Hello, I am interested in your services. Please contact me at this email addres "}`;
                }}
              >
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={1.1}
                  pt={1.5}
                >
                  <EmailIcon
                    sx={{
                      color: "white",
                      "&:hover": {
                        transform: "scale(1.3)", // Scale the icon
                        transition: "all 0.3s ease", // Apply transition here
                      },
                    }}
                  />
                </Stack>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  window.scrollTo(0, 0);

                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={1.1}
                  pt={1.5}
                >
                  <PhoneIcon
                    sx={{
                      color: "white",
                      "&:hover": {
                        transform: "scale(1.3)", // Scale the icon
                        transition: "all 0.3s ease", // Apply transition here
                      },
                    }}
                  />
                </Stack>
              </Link>
            </Stack>
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
                justifyContent={"center"}
                alignItems={"center"}
                width={"140px"}
                height={"40px"}
                border={"2px solid white"}
                backgroundColor={"#0D6EFD"}
                sx={{
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <Typography color={"white"}>Get In Touch</Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Stack>

      {/* when desktop is scroll downward then the navbar should be fixed at the top of the page and the background color should be white and the text color should be black */}
      {showNavbar && (
        <Stack
          position={"fixed"}
          p={"0px 90px"}
          left={0}
          right={0}
          zIndex={5}
          backgroundColor={"#0D6EFD"}
          top={0}
          transition={"all 0.3s ease-in-out"} // Apply transition here
        >
          <Stack
            mt={1}
            height={"60px"}
            zIndex={11}
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            backgroundColor={"transparent"}
          >
            <Stack width={{ xxl: "10%", xl: "13%", md: "20%", sm: "25%" }}>
              <Link to={"/"}>
                <img
                  src={logoDarkImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              alignSelf={"center"}
              height={"100%"}
            >
              <Stack
                direction="row"
                justifyContent="space-evenly"
                alignContent="center"
                gap={5}
                pl={3}
                sx={{ color: "white", height: "100%", paddingRight: 4 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                  className="navlink-box"
                >
                  <Box>
                    <Link to="#" className="navlink-link">
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        alignItems={"center"}
                        onClick={() => {
                          window.scroll(0, 0);
                        }}
                      >
                        <Typography
                          color={"white"}
                          alignSelf="center"
                          display="inline-block"
                          className="navlink"
                          height={"100%"}
                          fontSize={"18px"}
                          sx={{
                            transition: "all 0.4s ease-in",
                            "&:hover": {
                              color: "#0D6EFD",
                            },
                            //   color: isPopoverOpen(1) ? "white" : "black",
                          }}
                        >
                          Services
                        </Typography>
                        <ArrowDropDownIcon
                          className="navlink-link-downarrow"
                          sx={{
                            fontSize: 25,
                            transition: "all 0.3s ease-in",
                            color: "white",
                            transform: isPopoverOpen(1)
                              ? "rotate(180deg)"
                              : "rotate(0)",
                          }}
                        />
                      </Box>
                    </Link>
                    <Stack
                      color={"black"}
                      flexDirection={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={() => handleMouseLeave(1)}
                      sx={{
                        width: isPopoverOpen(1) ? "100%" : 0,
                        opacity: isPopoverOpen(1) ? 1 : 0,
                        transition:
                          "height 0.2s ease-in, opacity 0.2s ease-in-out",
                        overflow: "hidden",
                        position: "absolute",
                        backgroundColor: "transparent",
                        left: 0,
                        top: "92%",
                        zIndex: 1,
                      }}
                    >
                      <Stack direction={"row"} width={"100%"}>
                        <Stack
                          color={"lightpurple"}
                          width={"75%"}
                          backgroundColor={"#DEE0FE"}
                          alignItems={"center"}
                        >
                          <Stack
                            direction={"row"}
                            gap={3}
                            justifyContent={"center"}
                          >
                            <Stack width={"25%"} pl={"5%"} pb={3}>
                              <Typography pt={3} pb={1} fontWeight={"bold"}>
                                Solutions
                              </Typography>
                              <Stack>
                                {services.map((service, index) => (
                                  <Link
                                    to={service.link}
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    onClick={() => {
                                      window.scroll(0, 0);
                                    }}
                                  >
                                    <Typography
                                      pt={1}
                                      pb={1}
                                      key={index}
                                      sx={{
                                        "&:hover": {
                                          color: "#0D6EFD",
                                          cursor: "pointer",
                                        },
                                      }}
                                      onMouseEnter={() =>
                                        setHoveredTitle(service.title)
                                      }
                                    >
                                      {service.title}
                                    </Typography>
                                  </Link>
                                ))}
                              </Stack>
                            </Stack>
                            <Stack width={"50%"}>
                              <Typography pt={3} fontWeight={"bold"}>
                                Industry Focus
                              </Typography>
                              <Stack
                                direction={"row"}
                                flexWrap={"wrap"}
                                justifyContent={"center"}
                                gap={3}
                                p={4}
                                height={"100%"}
                              >
                                {/* Render features based on hoveredTitle */}
                                {hoveredTitle &&
                                  services
                                    .find(
                                      (service) =>
                                        service.title === hoveredTitle
                                    )
                                    ?.features.map((feature, index) => (
                                      <Stack
                                        key={index}
                                        width={"170px"}
                                        height={"100px"}
                                        p={2}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        borderRadius={3}
                                        backgroundColor={"white"}
                                        border={"2px solid gray"}
                                      >
                                        <Typography textAlign={"center"}>
                                          {feature.name}
                                        </Typography>
                                      </Stack>
                                    ))}
                              </Stack>
                            </Stack>
                          </Stack>
                        </Stack>
                        <Stack width={"25%"} bgcolor={"white"}>
                          <Stack
                            p={3}
                            boxSizing={"border-box"}
                            gap={3}
                            width={"80%"}
                          >
                            <Typography fontWeight={"bold"}>
                              Featured Case Studies
                            </Typography>
                            <Stack>
                              <Link
                                onClick={() => {
                                  window.scroll(0, 0);
                                }}
                                to="/segmenting-your-customers-for-greater-digital-marketing-success"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <Typography>
                                  Segmenting Your Customers for Greater Digital
                                  Marketing
                                </Typography>
                              </Link>
                              <Box
                                mt={1}
                                width={"100%"}
                                height={"1px"}
                                backgroundColor={"lightgray"}
                              />
                            </Stack>
                            <Stack>
                              <Link
                                onClick={() => {
                                  window.scroll(0, 0);
                                }}
                                to="/how-to-improve-your-site-seo-rankings/"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <Typography>
                                  How to Improve Your Site SEO Rankings
                                </Typography>
                              </Link>
                              <Box
                                mt={1}
                                width={"100%"}
                                height={"1px"}
                                backgroundColor={"lightgray"}
                              />
                            </Stack>
                            <Stack>
                              <Link
                                onClick={() => {
                                  window.scroll(0, 0);
                                }}
                                to="/how-to-secure-and-optimize-your-apps-online-visibility/"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <Typography>
                                  How to Secure and Optimize Your App’s Online
                                  Visibility
                                </Typography>
                              </Link>
                              <Box
                                mt={1}
                                width={"100%"}
                                height={"1px"}
                                backgroundColor={"lightgray"}
                              />
                            </Stack>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </div>
                {/* //!our Story */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Link
                      to="/about-us/"
                      className="navlink-link"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Typography
                          alignSelf="center"
                          display="inline-block"
                          fontSize={"18px"}
                          color={"white"}
                          sx={{
                            transition: "all 0.4s ease-in",
                            "&:hover": {
                              color: "#0D6EFD",
                            },
                            //   color: isPopoverOpen(2) ? "white" : "black",
                          }}
                        >
                          About Us
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                </div>

                {/* //!Industries */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Box>
                    <Link
                      to="/industries/"
                      className="navlink-link"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Typography
                          alignSelf="center"
                          display="inline-block"
                          fontSize={"18px"}
                          color={"white"}
                          sx={{
                            transition: "all 0.4s ease-in",
                            "&:hover": {
                              color: "#0D6EFD",
                            },
                            //   color: isPopoverOpen(3) ? "white" : "black",
                          }}
                        >
                          Industries
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Link
                      to="/case-studies/"
                      className="navlink-link"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Typography
                          alignSelf="center"
                          display="inline-block"
                          fontSize={"18px"}
                          color={"white"}
                          sx={{
                            transition: "all 0.4s ease-in",
                            "&:hover": {
                              color: "#0D6EFD",
                            },
                          }}
                        >
                          Case Studies
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={() => handleMouseLeave(4)}
                >
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Link
                      to="#"
                      className="navlink-link"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Typography
                          alignSelf="center"
                          display="inline-block"
                          fontSize={"18px"}
                          color={"white"}
                          sx={{
                            transition: "all 0.4s ease-in",
                            "&:hover": {
                              color: "#0D6EFD",
                            },
                          }}
                        >
                          Resources
                        </Typography>
                        <ArrowDropDownIcon
                          className="navlink-link-downarrow"
                          sx={{
                            fontSize: 25,
                            transition: "all 0.3s ease-in",
                            color: "white",
                            transform: isPopoverOpen(4)
                              ? "rotate(180deg)"
                              : "rotate(0)",
                          }}
                        />
                      </Box>
                    </Link>

                    <Stack
                      flexDirection={"row"}
                      justifyContent={"start"}
                      alignItems={"start"}
                      backgroundColor={"transparent"}
                      sx={{
                        height: isPopoverOpen(4) ? 470 : 0,
                        opacity: isPopoverOpen(4) ? 1 : 0,
                        transition:
                          "height 0.2s ease-in, opacity 0.2s ease-in-out",
                        position: "absolute",
                        overflow: "hidden",
                        zIndex: 1,
                        left: 0,
                      }}
                    >
                      <Stack width={"420px"} position={"relative"}>
                        <Stack
                          width={"200px"}
                          backgroundColor={"#F4F4F4"}
                          boxShadow={"0 10px 30px 0 rgba(45,45,45,.2)"}
                        >
                          <Link
                            to="#"
                            style={{ textDecoration: "none" }}
                            onClick={() => {
                              window.scroll(0, 0);
                            }}
                          >
                            <Stack
                              onMouseEnter={() => handleMouseEnter(5)}
                              onMouseLeave={() => handleMouseLeave(5)}
                            >
                              <Typography
                                color={"black"}
                                padding={"10px 20px"}
                                mt={"10px"}
                                position={"relative"}
                                sx={{
                                  "&:hover": {
                                    cursor: "pointer",
                                    backgroundColor: "white",
                                  },
                                }}
                                fontSize={"14px"}
                              >
                                Index
                                <KeyboardArrowDownIcon
                                  style={{
                                    position: "absolute",
                                    right: "20px",
                                  }}
                                />
                              </Typography>
                            </Stack>

                            <Stack
                              flexDirection={"row"}
                              justifyContent={"center"}
                              alignItems={"start"}
                              onMouseEnter={() => handleMouseEnter(5)}
                              onMouseLeave={() => handleMouseLeave(5)}
                              backgroundColor={"#F4F4F4"}
                              boxShadow={"0 10px 30px 0 rgba(45,45,45,.2)"}
                              sx={{
                                // height: isPopoverOpen(5) ? 400 : 0,
                                height: isPopoverOpen(5) ? "700px" : 0,
                                width: isPopoverOpen(5) ? 220 : 0,
                                opacity: isPopoverOpen(5) ? 1 : 0,
                                // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                                transition:
                                  "height 0.2s ease-in, opacity 0.2s ease-in-out",
                                position: "absolute",
                                overflow: "hidden",
                                zIndex: 1,
                                right: 0,
                                top: 0,
                              }}
                            >
                              <Stack>
                                {index.map((resource, index) => (
                                  <Link
                                    key={index}
                                    to={resource.to}
                                    style={{ textDecoration: "none" }}
                                    onClick={() => {
                                      window.scroll(0, 0);
                                    }}
                                  >
                                    <Typography
                                      fontSize={"14px"}
                                      color={"black"}
                                      padding={"10px 20px"}
                                      mt={"10px"}
                                      sx={{
                                        "&:hover": {
                                          cursor: "pointer",
                                          backgroundColor: "white",
                                        },
                                      }}
                                    >
                                      {resource.title}
                                    </Typography>
                                  </Link>
                                ))}
                              </Stack>
                            </Stack>
                          </Link>
                          {resources.map((resource, index) => (
                            <Link
                              key={index}
                              to={resource.to}
                              style={{ textDecoration: "none" }}
                              onClick={() => {
                                window.scroll(0, 0);
                              }}
                            >
                              <Typography
                                fontSize={"14px"}
                                color={"black"}
                                padding={"10px 20px"}
                                mt={"10px"}
                                sx={{
                                  "&:hover": {
                                    cursor: "pointer",
                                    backgroundColor: "white",
                                  },
                                }}
                              >
                                {resource.title}
                              </Typography>
                            </Link>
                          ))}
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </div>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={2}>
              <Stack direction={"row"} gap={1}>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    window.location.href = `mailto:${email}?subject=${"Company Inquiry"}&body=${"Hello, I am interested in your services. Please contact me at this email addres "}`;
                  }}
                >
                  <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={1.1}
                    pt={1.5}
                  >
                    <EmailIcon
                      sx={{
                        color: "white",
                        "&:hover": {
                          transform: "scale(1.3)", // Scale the icon
                          transition: "all 0.3s ease", // Apply transition here
                        },
                      }}
                    />
                  </Stack>
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    window.scrollTo(0, 0);

                    window.location.href = `tel:${phoneNumber}`;
                  }}
                >
                  <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={1.1}
                    pt={1.5}
                  >
                    <PhoneIcon
                      sx={{
                        color: "white",
                        "&:hover": {
                          transform: "scale(1.3)", // Scale the icon
                          transition: "all 0.3s ease", // Apply transition here
                        },
                      }}
                    />
                  </Stack>
                </Link>
              </Stack>
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
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={"140px"}
                  height={"40px"}
                  border={"2px solid white"}
                  backgroundColor={"#0D6EFD"}
                  sx={{
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <Typography color={"white"}>Get In Touch</Typography>
                </Stack>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      )}
      {/* for Mobile view */}
      <Stack
        m={"0 auto"}
        alignItems={"end"}
        width={"100%"}
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },
        }}
        zIndex={1000}
      >
        <Stack
          width={"90%"}
          direction={"row"}
          alignSelf={"center"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"20px 0px"}
          gap={{
            xs: 1,
            sm: 2,
          }}
        >
          <Stack
            width={{ xs: "100%", md: "100%" }}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Link
              to={"/"}
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <Stack width={{ xs: "70%", sm: "55%", md: "60%" }}>
                <img src={lo} alt="" width={"100%"} height={"100%"} />
              </Stack>
            </Link>
            <Stack direction={"row"} gap={1}>
              <Link
                to=""
                style={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.href = `mailto:${email}?subject=${"Company Inquiry"}&body=${"Hello, I am interested in your services. Please contact me at this email addres "}`;
                }}
              >
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={1.1}
                  pt={1.5}
                >
                  <EmailIcon
                    sx={{
                      fontSize: "25px",
                      color: "white",
                      "&:hover": {
                        transform: "scale(1.3)", // Scale the icon
                        transition: "all 0.3s ease", // Apply transition here
                      },
                    }}
                  />
                </Stack>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                }}
                onClick={() => {
                  window.scrollTo(0, 0);

                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={1.1}
                  pt={1.5}
                >
                  <PhoneIcon
                    sx={{
                      color: "white",
                      "&:hover": {
                        fontSize: "15px",
                        transform: "scale(1.3)", // Scale the icon
                        transition: "all 0.3s ease", // Apply transition here
                      },
                    }}
                  />
                </Stack>
              </Link>
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            onClick={handleClick}
            width={"32px"}
            height={"32px"}
            sx={{
              display: {
                xs: "block",
                lg: "none",
              },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            {menuClick ? (
              <>
                <CgMenuRight
                  style={{ color: "white", width: "32px", height: "32px" }}
                />
              </>
            ) : (
              <>
                <CgMenuRight
                  style={{ color: "white", width: "32px", height: "32px" }}
                />
              </>
            )}
          </Stack>
        </Stack>

        <Stack
          id="menu-container"
          height={"100dvh"}
          width={"100%"}
          position={"fixed"}
          overflow={"auto"}
          sx={{
            // bottom: 0,
            left: menuClick ? "0" : "-100%",
            // right: menuClick ? "0" : "-100%",

            transition: "all 0.2s ease-in",
            backgroundColor: "white",
            zIndex: "1000001",
          }}
        >
          <Stack width={"100%"} bgcolor={"#0D6EFD"}>
            <Stack
              width={"90%"}
              direction={"row"}
              alignSelf={"center"}
              justifyContent={"space-between"}
              alignItems={"center"}
              padding={"20px 0px"}
            >
              <Stack width={{ xs: "45%", md: "30%" }}>
                <Link
                  to={"/"}
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <img
                    src={logoDarkImg}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                  />
                </Link>
              </Stack>
              <Stack
                onClick={handleClick}
                width={"32px"}
                height={"32px"}
                sx={{
                  display: {
                    xs: "block",
                    lg: "none",
                  },
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                {menuClick ? (
                  <RxCross2
                    style={{ color: "white", width: "32px", height: "32px" }}
                  />
                ) : (
                  <CgMenuRight
                    style={{ color: "white", width: "32px", height: "32px" }}
                  />
                )}
              </Stack>
            </Stack>
          </Stack>
          <Accordion
            disableGutters
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              <Typography>
                {" "}
                <Link
                  to="/"
                  className="navlink-link"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      Services
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack gap={1}>
                {services.map((service, index) => (
                  <Stack justifyContent={"center"} gap={1} marginLeft={"20px"}>
                    <Link
                      to={service.link}
                      className="popperLinks"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <Typography className="popperLinks" sx={{}}>
                        {service.title}
                      </Typography>
                    </Link>
                  </Stack>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>

          <Accordion
            disableGutters
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary aria-controls="panel2-content" id="panel2-header">
              <Typography>
                {" "}
                <Link
                  to="/about-us/"
                  className="navlink-link"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      About Us
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
          </Accordion>

          <Accordion
            disableGutters
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary aria-controls="panel2-content" id="panel2-header">
              <Typography>
                {" "}
                <Link
                  to="/industries/"
                  className="navlink-link"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      Industries
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
          </Accordion>

          <Accordion
            disableGutters
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary aria-controls="panel2-content" id="panel2-header">
              <Typography>
                {" "}
                <Link
                  to="/case-studies/"
                  className="navlink-link"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      Case Studies
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
          </Accordion>

          <Accordion
            disableGutters
            sx={{
              border: "none",
              boxShadow: "none",
              mt: 0,
            }}
          >
            <AccordionSummary sx={{ mt: 0 }} expandIcon={<ArrowDropDownIcon />}>
              <Typography>
                {" "}
                <Link
                  to="/"
                  className="navlink-link"
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      Resources
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack gap={1}>
                <Accordion
                  disableGutters
                  sx={{
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    sx={{
                      padding: "0px",
                      pl: "15px",
                    }}
                    expandIcon={<ArrowDropDownIcon />}
                  >
                    <Typography>
                      {" "}
                      <Link
                        to="/"
                        className="navlink-link"
                        onClick={() => {
                          window.scroll(0, 0);
                        }}
                      >
                        <Box
                          display={"flex"}
                          justifyContent="center"
                          alignItems={"center"}
                        >
                          <Typography
                            alignSelf="center"
                            display="inline-block"
                            className="navlink"
                            marginLeft={"5px"}
                            sx={{
                              transition: "all 0.4s ease-in",
                            }}
                          >
                            Index
                          </Typography>
                        </Box>
                      </Link>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack gap={1}>
                      {index.map((service, index) => (
                        <Stack
                          justifyContent={"center"}
                          gap={1}
                          marginLeft={"20px"}
                        >
                          <Link
                            to={service.to}
                            className="popperLinks"
                            onClick={() => {
                              window.scroll(0, 0);
                            }}
                          >
                            <Typography className="popperLinks" sx={{}}>
                              {service.title}
                            </Typography>
                          </Link>
                        </Stack>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                {resources.map((resource, index) => (
                  <Stack justifyContent={"center"} gap={1} marginLeft={"20px"}>
                    <Link
                      to={resource.to}
                      className="popperLinks"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <Typography className="popperLinks" sx={{}}>
                        {resource.title}
                      </Typography>
                    </Link>
                  </Stack>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>

          <Stack alignItems={"center"} margin={"10px auto"}>
            <Link
              to={"/get-in-touch/"}
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <Button
                sx={{
                  width: "120px",
                  height: "5vh",

                  backgroundColor: "#0D6EFD",
                  "&:hover": {
                    color: "black",
                    border: "2px solid #0D6EFD",
                  },
                }}
              >
                Get in Touch
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Nav;
