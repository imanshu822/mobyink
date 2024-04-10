import React, { useEffect, useState } from "react";
// import log from "../assets/log.png"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import logoLight from "../assets/logoLight.svg";
import { Stack } from "@mui/material";
import "./navlight.css";
import Button from "../utils/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { RxCross2 } from "react-icons/rx";
import { CgMenuRight } from "react-icons/cg";
const NavLight = () => {
  const [popoverState, setPopoverState] = useState({});
  const [subLinks, setSubLinks] = useState(false);
  const [menuClick, setMenuClick] = useState(false);

  const handleClick = () => {
    setMenuClick(!menuClick);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuContainer = document.getElementById("menu-container");
      if (menuContainer && !menuContainer.contains(event.target)) {
        setMenuClick(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <Stack
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
        }}
        direction={"row"}
        justifyContent={"space-between"}
        p={"20px 90px"}
        alignItems={"center"}
        zIndex={13}
      >
        <Stack width={{ xl: "16%", md: "25%", sm: "35%" }}>
          <Link to={"/"}>
            <img
              src={logoLight}
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
              className="navlinkli-box"
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Link to="/Features" className="navlinkli-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      fontFamily={"Work Sans"}
                      className="navlinkli"
                      sx={{
                        transition: "all 0.4s ease-in",
                        //   color: isPopoverOpen(1) ? "white" : "black",
                      }}
                    >
                      Features
                    </Typography>
                    <ArrowDropDownIcon
                      className="navlinkli-link-downarrow"
                      sx={{
                        fontSize: 25,
                        transition: "all 0.3s ease-in",
                        color: isPopoverOpen(1) ? "#818181" : "#818181",
                        transform: isPopoverOpen(1)
                          ? "rotate(180deg)"
                          : "rotate(0)",
                      }}
                    />
                  </Box>
                </Link>

                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    height: isPopoverOpen(1) ? 190 : 0,
                    opacity: isPopoverOpen(1) ? 1 : 0,
                    transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                    position: "absolute",
                    top: 47,
                    overflow: "hidden",
                    backgroundColor: "white",
                    zIndex: 1,
                  }}
                >
                  <Stack
                    justifyContent={"center"}
                    gap={1}
                    sx={{ p: 2, width: 140 }}
                  >
                    <Link to="/Features/Billing" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        Billing Management
                      </Typography>
                    </Link>
                    <Link to="/Features/Billing" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        Billing Management
                      </Typography>
                    </Link>
                    <Link to="/Features/Billing" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        Billing Management
                      </Typography>
                    </Link>
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
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Link to="/Solutions" className="navlinkli-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontFamily={"Work Sans"}
                      fontSize={20}
                      sx={{
                        transition: "all 0.4s ease-in",
                        //   color: isPopoverOpen(2) ? "white" : "black",
                      }}
                    >
                      Solutions
                    </Typography>
                    <ArrowDropDownIcon
                      className="navlinkli-link-downarrow"
                      sx={{
                        fontSize: 25,
                        transition: "all 0.3s ease-in",
                        color: isPopoverOpen(2) ? "#818181" : "#818181",
                        transform: isPopoverOpen(2)
                          ? "rotate(180deg)"
                          : "rotate(0)",
                      }}
                    />
                  </Box>
                </Link>

                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    height: isPopoverOpen(2) ? 160 : 0,
                    opacity: isPopoverOpen(2) ? 1 : 0,
                    transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                    position: "absolute",
                    top: 40,
                    overflow: "hidden",
                    backgroundColor: "white",
                    zIndex: 1,
                  }}
                >
                  <Stack
                    justifyContent={"center"}
                    gap={1}
                    sx={{ p: 2, width: 140 }}
                    position={"relative"}
                  >
                    <Link to="/Solutions/By-Industries" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        By Industries
                      </Typography>
                    </Link>
                    <Link to="/Solutions/By-Size" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        By Size
                      </Typography>
                    </Link>
                    <Link to="/Solutions/By-role" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        By Role
                      </Typography>
                    </Link>
                    <Link to="/Solutions/By-usecases" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        By use cases
                      </Typography>
                    </Link>
                  </Stack>
                  <Stack position={"absolute"} className="popover-link-popover">
                    <Typography sx={{ color: "red", display: "none" }}>
                      hello
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Link to="/Resources" className="navlinkli-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontFamily={"Work Sans"}
                      fontSize={20}
                      sx={{
                        transition: "all 0.4s ease-in",
                        //   color: isPopoverOpen(3) ? "white" : "black",
                      }}
                    >
                      Resources
                    </Typography>
                    <ArrowDropDownIcon
                      className="navlinkli-link-downarrow"
                      sx={{
                        fontSize: 25,
                        transition: "all 0.3s ease-in",
                        color: isPopoverOpen(3) ? "#818181" : "#818181",
                        transform: isPopoverOpen(3)
                          ? "rotate(180deg)"
                          : "rotate(0)",
                      }}
                    />
                  </Box>
                </Link>

                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    height: isPopoverOpen(3) ? 250 : 0,
                    opacity: isPopoverOpen(3) ? 1 : 0,
                    transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                    position: "absolute",
                    top: 40,
                    overflow: "hidden",
                    backgroundColor: "white",
                    zIndex: 1,
                  }}
                >
                  <Stack
                    justifyContent={"center"}
                    border={"1px solid black"}
                    gap={1}
                    sx={{ p: 2, width: 140 }}
                  >
                    <Link
                      to="/Resources/BecomeAPartner"
                      className="popperLinks"
                    >
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        Become A Partner
                      </Typography>
                    </Link>{" "}
                    <Link to={"/Resources/careers"} className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        Career
                      </Typography>
                    </Link>{" "}
                    <Link to="/Resources/Blog" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        Blog
                      </Typography>
                    </Link>
                    <Link to="/Resources/CaseStudy" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        Case Study
                      </Typography>
                    </Link>
                    <Link to="/Resources/Testimonials" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        Testimonials
                      </Typography>
                    </Link>
                    <Link to="/Resources/Videos" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        Videos
                      </Typography>
                    </Link>
                    <Link to="/Resources/faq" className="popperLinks">
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "#F15B25",
                          },
                        }}
                      >
                        Faq
                      </Typography>
                    </Link>{" "}
                  </Stack>
                </Stack>
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
                <Link to="/Pricing" className="navlinkli-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontFamily={"Work Sans"}
                      fontSize={20}
                      sx={{
                        transition: "all 0.4s ease-in",
                        //   color: isPopoverOpen(4) ? "white" : "black",
                      }}
                    >
                      Pricing
                    </Typography>
                  </Box>
                </Link>

                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    height: isPopoverOpen(4) ? 400 : 0,
                    opacity: isPopoverOpen(4) ? 1 : 0,
                    transition: "height 0.2s ease-in, opacity 0.2s ease-in-out",
                    position: "absolute",
                    top: 47,
                    left: 40,
                    overflow: "hidden",
                    backgroundColor: "white",
                    zIndex: 1,
                  }}
                ></Stack>
              </Box>
            </div>
          </Stack>
        </Stack>
        <Link to={"/Login"}>
          <Button
            sx={{
              height: "5vh",
              "&:hover": {
                backgroundColor: "#F15B25",
                color: "white",
              },
            }}
          >
            Login
          </Button>
        </Link>
      </Stack>
      {/* mobile view */}
      <Stack
        alignItems={"end"}
        width={"100%"}
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },
        }}
      >
        <Stack
          zIndex={1000}
          width={"90%"}
          direction={"row"}
          alignSelf={"center"}
          justifyContent={"space-between"}
          alignItems={"center"}
          margin={"0 auto"}
          padding={"20px 0px"}
        >
          <Stack width={{ xs: "45%", md: "30%" }}>
            <Link to={"/"}>
              <img src={logoLight} alt="" width={"100%"} height={"100%"} />
            </Link>
          </Stack>

          <Stack
            onClick={handleClick}
            width={"23px"}
            height={"23px"}
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

        <Stack
          id="menu-container"
          height={"100dvh"}
          width={"100%"}
          position={"fixed"}
          gap={2}
          sx={{
            top: 0,
            // bottom: 0,
            left: menuClick ? "0" : "-100%",
            // right: menuClick ? "0" : "-100%",

            transition: "all 0.2s ease-in",
            backgroundColor: "white",
            zIndex: "1000001",
          }}
        >
          <Stack
            margin={"10px auto"}
            width={"100%"}
            height={"40px"}
            direction={"row"}
            justifyContent={"end"}
          >
            <Stack
              onClick={handleClick}
              width={"32px"}
              height={"32px"}
              marginRight={"20px"}
              marginTop={"15px"}
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
                  style={{ color: "#052973", width: "32px", height: "32px" }}
                />
              ) : (
                <CgMenuRight
                  style={{ color: "#052973", width: "32px", height: "32px" }}
                />
              )}
            </Stack>
          </Stack>
          <Accordion
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              <Typography>
                {" "}
                <Link to="/Features" className="navlink-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      fontFamily={"Work Sans"}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      Features
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack justifyContent={"center"} gap={1} marginLeft={"20px"}>
                <Link to="/Features/Billing" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Billing Management
                  </Typography>
                </Link>
                <Link to="/Features/Billing" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Billing Management
                  </Typography>
                </Link>
                <Link to="/Features/Billing" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Billing Management
                  </Typography>
                </Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                {" "}
                <Link to="/Solutions" className="navlink-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      fontFamily={"Work Sans"}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      Solutions
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack justifyContent={"center"} gap={1} marginLeft={"20px"}>
                <Link to="/Solutions/By-Industries" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    By Industries
                  </Typography>
                </Link>
                <Link to="/Solutions/By-Size" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    By Size
                  </Typography>
                </Link>
                <Link to="/Solutions/By-role" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    By Role
                  </Typography>
                </Link>
                <Link to="/Solutions/By-usecases" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    By use cases
                  </Typography>
                </Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                {" "}
                <Link to="/Resources" className="navlink-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      fontFamily={"Work Sans"}
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
              <Stack justifyContent={"center"} gap={1} marginLeft={"20px"}>
                <Link to="/Resources/BecomeAPartner" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Become A Partner
                  </Typography>
                </Link>
                <Link to="/Resources/careers" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Career
                  </Typography>
                </Link>
                <Link to="/Resources/Blog" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Blogs
                  </Typography>
                </Link>
                <Link to="/Resources/CaseStudy" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Case Study
                  </Typography>
                </Link>
                <Link to="/Resources/Testimonials" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Testimonials
                  </Typography>
                </Link>
                <Link to="/Resources/Videos" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Videos
                  </Typography>
                </Link>
                <Link to="/Resources/faq" className="popperLinks">
                  <Typography fontFamily={"Work Sans"} sx={{}}>
                    Faq
                  </Typography>
                </Link>
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              border: "none",
              boxShadow: "none",
            }}
          >
            <AccordionSummary aria-controls="panel2-content" id="panel2-header">
              <Typography>
                {" "}
                <Link to="/Pricing" className="navlink-link">
                  <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                  >
                    <Typography
                      alignSelf="center"
                      display="inline-block"
                      fontSize={20}
                      fontFamily={"Work Sans"}
                      className="navlink"
                      sx={{
                        transition: "all 0.4s ease-in",
                      }}
                    >
                      Pricing
                    </Typography>
                  </Box>
                </Link>
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Stack alignItems={"center"} margin={"10px auto"}>
            <Link to={"/Login"}>
              <Button
                sx={{
                  width: "120px",
                  borderRadius: "10px",
                  height: "5vh",
                  "&:hover": {
                    backgroundColor: "#F15B25",
                    color: "white",
                  },
                }}
              >
                Login
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default NavLight;
