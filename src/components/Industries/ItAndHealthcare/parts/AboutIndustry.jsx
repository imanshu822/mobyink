import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import itAndHealthcareImg from "../../../../assests/IT-and-Healthcare.jpg";
const Culture = [
  {
    title: "Target Audience Analysis",
    description:
      "Our data-driven insights help in crafting strategies that resonate across both IT and healthcare landscapes.",
  },
  {
    title: "Brand Positioning and Messaging",
    description:
      "We focus on developing a cohesive brand identity that effectively communicates the value of tech-driven healthcare innovations.",
  },
  {
    title: "Content Marketing for Educational and Health Impact",
    description:
      "From in-depth articles on the latest healthcare technologies to explainer videos on IT solutions, our content strategy is designed to inform and influence a diverse audience.",
  },
  {
    title: "SEO for Enhanced Visibility",
    description:
      "This approach not only targets industry-specific platforms but also broader networks where potential users and decision-makers seek information.",
  },
  {
    title: "Data-Driven Performance Analysis",
    description:
      "Our focus on key performance indicators allows us to refine our approach continuously for maximum impact.",
  },
  {
    title: "Conversion-Optimized Landing Pages",
    description:
      "Whether it’s driving registrations for IT webinars, downloads of healthcare apps, or promoting telehealth services, our landing pages are designed to convert interest into action.",
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
                Mobyink stands at the forefront of digital innovation, blending
                technological excellence with strategic marketing expertise. As
                a leading digital marketing agency, we specialize in elevating
                businesses within the IT and Healthcare sectors, harnessing the
                power of digital tools to drive growth and impact. Our approach
                is tailored to meet the unique challenges and opportunities of
                these dynamic industries
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
              borderRadius={"25px"}
              src={itAndHealthcareImg}
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
            What comes under the IT and Consulting industry digital
            transformation
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
