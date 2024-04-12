import { Stack, Typography } from "@mui/material";
import React from "react";
import Insights1 from "../../../assests/Insights1.webp";
import Insights2 from "../../../assests/Insights2.webp";
import Insights3 from "../../../assests/Insights3.webp";
import { Link } from "react-router-dom";
const LatestInsights = () => {
  const lists = [
    {
      src: Insights1,
      to: "/segmenting-your-customers-for-greater-digital-marketing-success/",
      title: "Segmenting Your Customers for Greater Digital Marketing",
      Des: "Having a large number of customers feels good right? But sometimes we miss our mark and so on…",
    },
    {
      src: Insights2,
      to: "/how-to-improve-your-site-seo-rankings/",
      title: "How to Improve Your Site SEO Rankings",
      Des: "There are many things you can do to improve your site’s SEO ranking. Some are easier than others.",
    },
    {
      src: Insights3,
      to: "/how-to-secure-and-optimize-your-apps-online-visibility/",
      title: "How to Secure and Optimize Your App’s Online Visibility",
      Des: "One of the most important aspects of app development is ensuring that your app is accessible online.",
    },
  ];
  return (
    <Stack
      alignItems={"center"}
      pt={{
        xs: 3,
        lg: 10,
      }}
      gap={3}
    >
      <Stack
        alignItems={"center"}
        width={{
          xs: "90%",
          lg: "50%",
        }}
      >
        <Typography
          fontFamily={"Monstrate,sans-serif"}
          letterSpacing={2}
          color={"black"}
          fontSize={{
            xs: "30px",
            sm: "30px",
            lg: "50px",
          }}
          fontWeight={"bold"}
        >
          Latest <span style={{ color: "#0d6efd" }}>Insight</span>
        </Typography>
      </Stack>
      <Stack
        direction={{
          xs: "column",
          lg: "row",
        }}
        width={"83%"}
        gap={"24px"}
        pt={2}
      >
        {lists.map((d, index) => (
          <Link
            onClick={() => {
              window.scroll(0, 0);
            }}
            to={d.to}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Stack
              bgcolor={"#0D6EFD"}
              alignItems={"center"}
              pb={3}
              borderRadius={2}
            >
              <Stack
                width={"90%"}
                p={"24px 0"}
                sx={{
                  transform: "rotate(0deg)",

                  "&:hover": {
                    transform: "rotate(-2deg)",
                    transition: "all 0.5s ease-in-out",
                  },
                }}
              >
                <img
                  src={d.src}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Stack>
              <Stack width={"90%"} gap={3}>
                <Typography fontWeight={"bold"} color={"white"} height={"48px"}>
                  {d.title}
                </Typography>
                <Typography color={"lightgrey"}>{d.Des}</Typography>
                <Link
                  to="/get-in-touch"
                  onClick={() => {
                    window.scroll(0, 0);
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
          </Link>
        ))}
      </Stack>
      <Typography
        variant="p"
        fontWeight={"bold"}
        fontSize={"16px"}
        lineHeight={"1.9"}
        color={"#0D6EFD"}
        sx={{
          textDecoration: "underline",
        }}
        mt={4}
        mb={4}
        textAlign={"center"}
      >
        View All
      </Typography>
    </Stack>
  );
};

export default LatestInsights;
