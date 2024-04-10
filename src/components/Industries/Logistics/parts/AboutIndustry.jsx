import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import logisticImg from "../../../../assests/Logistics-and-Immigration.jpg";
const Culture = [
  {
    title: "Market Analysis and Strategy",
    description:
      "We conduct in-depth market analyses, focusing on trends, customer behaviors, and competitors in both the logistics and immigration sectors.",
  },
  {
    title: "SEO for Enhanced Visibility",
    description:
      "Our SEO tactics are designed to boost your online presence, attracting the right audience and generating more leads and conversions for both logistics and immigration services.",
  },
  {
    title: "Content Marketing with Purpose",
    description:
      "We craft and distribute engaging content, from informative blog posts to detailed whitepapers, tailored to resonate with your target audience in logistics and immigration, thereby building credibility and trust.",
  },
  {
    title: "SMM for Community Building",
    description:
      "Our team expertly manages your social media profiles, fostering vibrant online communities. This approach not only boosts brand awareness but also cultivates customer loyalty in both the logistics and immigration sectors.",
  },
  {
    title: "PPC Campaigns",
    description:
      "We create and optimize PPC and social media ad campaigns to ensure maximum ROI, propelling your business forward in the fast-paced world of logistics and immigration.",
  },
  {
    title: "Performance Monitoring and Insights",
    description:
      "With continuous monitoring and analytics, we provide actionable insights, empowering you to make informed decisions and adapt strategies for sustained success in the dynamic fields of logistics and immigration.",
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
                Our expertise lies in transforming both logistics and
                immigration services with cutting-edge digital marketing
                strategies. Our team, equipped with specialized knowledge in
                these sectors, leads the way in offering comprehensive digital
                solutions. We aim to not only increase visibility but also to
                streamline operations and accelerate growth in the logistics and
                immigration landscapes.
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
              src={logisticImg}
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
            Digital Transformation in Logistics and Immigration
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
                  <Stack padding={4} pt={5} gap={2}>
                    <Typography
                      textAlign={"center"}
                      fontSize={"22px"}
                      fontWeight={"bold"}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      textAlign={"left"}
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
