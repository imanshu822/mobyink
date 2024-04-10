import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import othersImg from "../../../../assests/Others.jpg";

const Culture = [
  {
    title: "E-commerce SEO Mastery",
    description:
      "We optimize product listings, enhance category pages, and employ advanced SEO techniques to ensure your store not only ranks high on search engines but attracts motivated buyers ready to convert.",
  },
  {
    title: "Strategic Paid Advertising",
    description:
      "Our E-commerce-focused paid advertising campaigns leverage platforms like Google Shopping and social media channels to put your products in front of the right audience, maximizing your ROI.",
  },
  {
    title: "Product-Centric Content that Converts",
    description:
      "Our content marketing specialists create immersive product narratives, blog content, and multimedia experiences that captivate and convert, turning browsers into loyal customers.",
  },
  {
    title: "Social Commerce Amplification",
    description:
      "From visually stunning Instagram campaigns to engaging Facebook ad sequences, we tailor our approach to resonate with your audience, driving traffic and sales directly through your social channels.",
  },
  {
    title: "E-commerce Analytics",
    description:
      "Our analytics team dives deep into user behavior, conversion patterns, and market trends, providing actionable insights that steer your business toward sustained growth and profitability.",
  },
  {
    title: "Mobile-Optimized UX Design",
    description:
      "Our designers focus on mobile responsiveness, intuitive navigation, and streamlined checkout processes, creating a seamless path from product discovery to purchase.",
  },
];
const AboutIndustry = () => {
  return (
    <Stack
      width={"100%"}
      mt={{
        xs: 5,
        lg: 10,
      }}
    >
      <Stack width={"80%"} margin={"0 auto"}>
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          gap={{
            xs: 3,
            lg: 8,
          }}
        >
          <Stack
            width={{
              xs: "100%",
              lg: "60%",
            }}
            gap={{
              xs: 1,
              lg: 3,
            }}
          >
            <Typography
              fontSize={{
                xs: "1.5rem",
                lg: "2rem",
              }}
              fontWeight={"bold"}
            >
              About Industry
              <Box width={"31%"} height={"4px"} bgcolor={"#0D6EFD"} />
            </Typography>
            <Stack>
              <Typography textAlign={"justify"} color={"#7a7a7a"}>
                Mobyink Is your strategic partner in navigating the dynamic
                landscape of e-commerce. Our digital marketing agency is
                dedicated to propelling e-commerce businesses to new heights
                through a specialized and results-driven approach. Here’s an
                inside look at how we deliver unparalleled success in the
                e-commerce sector.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={{
              xs: "100%",
              lg: "40%",
            }}
          >
            <Box
              component="img"
              width={"100%"}
              height={"auto"}
              src={othersImg}
              borderRadius={"25px"}
              alt={"Ecommerce"}
            />
          </Stack>
        </Stack>
        <Stack
          margin={"0 auto"}
          mt={{
            xs: 5,
            lg: 10,
          }}
        >
          <Typography
            fontSize={{
              xs: "1.5rem",
              lg: "2.5rem",
            }}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            What comes under the E-commerce digital transformation
          </Typography>
          <Stack>
            <Stack
              mt={3}
              gap={3}
              direction={{
                xs: "column",
                lg: "row",
              }}
              flexWrap={"wrap"}
              justifyContent={"center"}
            >
              {Culture.map((benefit, index) => (
                <Stack
                  key={index}
                  width={{
                    xs: "100%",
                    lg: "30%",
                  }}
                  height={{
                    xs: "auto",
                  }}
                  boxShadow={"rgba(0, 0, 0, 0.15) 0px 0px 10px 0px"}
                >
                  <Stack padding={2} pt={5} gap={2}>
                    <Typography
                      textAlign={"center"}
                      fontSize={"22px"}
                      fontWeight={"bold"}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"400"}
                      color={"#7a7a7a"}
                    >
                      {benefit.description}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutIndustry;
