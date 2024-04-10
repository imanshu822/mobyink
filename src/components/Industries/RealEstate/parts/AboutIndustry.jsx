import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import realEstateImg from "../../../../assests/Real-Estate-and-Interior-Designing.jpg";
const Culture = [
  {
    title: "SEO Mastery for Property and Design Prominence",
    description:
      "Our SEO strategies are designed to make your properties and design portfolios stand out in the digital world.",
  },
  {
    title: "Compelling Narratives",
    description:
      "We create narratives that not only showcase properties but also the potential of their interiors. Our vivid descriptions and stunning visuals turn spaces into stories of possibility.",
  },
  {
    title: "Social Showcase",
    description:
      "Our campaigns on platforms like Instagram and Facebook highlight the beauty and functionality of your spaces, creating immersive experiences.",
  },
  {
    title: "Precision PPC for Targeted Reach",
    description:
      "Our PPC campaigns are fine-tuned to attract serious clients interested in both real estate investments and interior design services, ensuring every click has the potential to convert into a client.",
  },
  {
    title: "Email Journeys for Engaging Prospects",
    description:
      "Foster lasting relationships with clients interested in real estate and design. Our email marketing strategies deliver personalized content, from property insights to the latest in interior design trends.",
  },
  {
    title: "Insights for Strategic Decisions",
    description:
      "Our analytics provide valuable insights, helping you make informed decisions in a dynamic market environment.",
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
                At Mobyink, we blend the art of real estate with the creativity
                of interior design, all powered by digital marketing expertise.
                Our approach goes beyond mere property listings; we tell
                captivating stories that highlight the unique charm of each home
                and its interior potential. Join us as we infuse digital
                innovation into the realms of real estate and interior design.
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
              src={realEstateImg}
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
            What comes under the Real Estate and Interior Designing digital
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
