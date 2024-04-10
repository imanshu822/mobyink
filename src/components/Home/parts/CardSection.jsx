import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import backgroundImg1 from "../../../assests/asset 23.webp";
import { Link } from "react-router-dom";

const cardContent1 = [
  {
    id:1,
    title: "Search Engine Optimization",
    Link: "/seo",
    features: [
      "E-commerce SEO",
      "Link building",
      "B2B SEO",
      "High DA",
      "Youtube SEO",
      "Mobile SEO",
    ],
  },
  {
    id:2,
    title: "Website Development",
    Link: "/webdev",
    features: ["HTML", "React", "Nodejs", "MongoDB", "Laravel"],
  },
];
const cardContent2 = [
  {
    id:1,
    title: "Social Media Marketing and Optimization",
    Link: "/smm",
    features: [
      "Instagram",
      "Twitter",
      "Youtube",
      "Facebook",
      "Reddit",
      "Pinterest",
      "LinkedIn",
    ],
  },
  {
    id:2,
    title: "Mobile App Marketing",
    Link: "/appmarketing",
    features: [
      "App Retention",
      "App Launch",
      "Growth Hacking",
      "A/B Testing",
      "Localization and Internationalisation",
    ],
  },
];
const CardSection = () => {
  return (
    <>
      <Stack
        pt={{
          xs: 3,
        }}
        width={"85%"}
        height={"100%"}
        direction={{
          xs: "column",
          lg: "row",
        }}
        gap={5}
        margin={"0 auto"}
        position={{
          xs: "flex",
          lg: "relative",
        }}
      >
        <Stack
          width={{
            xs: "100%",
            lg: "47%",
          }}
          gap={4}
        >
          {cardContent1.map((content) => (
            <Stack
              key={content.title} // Adding key prop to avoid react warning
              borderRadius={9}
              height={"100%"}
              width={"100%"}
              sx={{
                background:
                  "linear-gradient(90deg, rgba(41,78,163,1) 0%, rgba(7,7,75,1) 100%, rgba(0,212,255,1) 100%)",
              }}
            >
              <Stack p={"40px"} boxSizing={"border-box"} gap={10}>
                <Link to={cardContent1.Link} style={{ textDecoration: "none" }}>
                  <Typography
                    fontSize={{
                      xs: "36px",
                      lg: "42px",
                    }}
                    fontWeight={"bold"}
                    color={"white"}
                    sx={{
                      "&:hover": {
                        color: "white",
                        opacity: 0.8,
                        fontWeight: "bold",
                      },
                    }}
                    width={content.id === 2 ? "100px" : "none"}
                  >
                    {content.title}
                  </Typography>
                </Link>
                <Stack direction={"row"} flexWrap={"wrap"} gap={3}>
                  {content.features.map((feature, index) => (
                    <Stack key={index} bgcolor={"white"} borderRadius={"25px"}>
                      <Typography p={"10px 20px"} boxSizing={"border-box"}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>

        <Stack
          width={{
            xs: "100%",
            lg: "47%",
          }}
          gap={4}
          position={{
            xs: "flex",
            lg: "absolute",
          }}
          right={0}
          top={"25%"}
        >
          {cardContent2.map((content) => (
            <Stack
              key={content.title} // Adding key prop to avoid react warning
              borderRadius={9}
              height={"100%"}
              width={"100%"}
              sx={{
                background:
                  "linear-gradient(90deg, rgba(13,76,138,1) 0%, rgba(15,81,91,1) 100%)",
              }}
            >
              <Stack p={"40px"} boxSizing={"border-box"} gap={10} mt={3}>
                <Link to={cardContent2.Link} style={{ textDecoration: "none" }}>
                  <Typography
                    fontSize={{
                      xs: "36px",
                      lg: "42px",
                    }}
                    fontWeight={"bold"}
                    color={"white"}
                    sx={{
                      "&:hover": {
                        color: "white",
                        opacity: 0.8,
                        fontWeight: "bold",
                      },
                    }}
                    width={content.id === 2 ? "300px" : "none"}
                  >
                    {content.title}
                  </Typography>
                </Link>
                <Stack direction={"row"} flexWrap={"wrap"} gap={3}>
                  {content.features.map((feature, index) => (
                    <Stack key={index} bgcolor={"white"} borderRadius={"25px"}>
                      <Typography p={"10px 20px"} boxSizing={"border-box"}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Box
        width={"100%"}
        height={{
          xs: "80px",
          lg: "350px",
        }}
        bgcolor={"#F5F7FF"}
      />
    </>
  );
};

export default CardSection;
