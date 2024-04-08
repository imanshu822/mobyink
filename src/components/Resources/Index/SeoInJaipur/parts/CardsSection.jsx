import { Stack, Typography } from "@mui/material";
import React from "react";

const cardsDetails = [
  {
    title: "Creating Website Content Efficiently",
    description:
      "Creating content is a great way to keep people interested. Our team makes sure to write content that’s user friendly and matches what your audience wants. This helps your website stay interesting and important to both people and search engines.",
  },
  {
    title: "Whole Website Analysis for Improved Performance",
    description:
      "We look closely at your competitors’ websites and the links to your own website to see what parts aren’t good. We don’t just find the problems, we also fix them and make your website better so you get the best results.",
  },

  {
    title: "The Strategy of Finding Effective Keywords",
    description:
      "Finding impactful and effective keywords is super important for a successful SEO campaign. Our experts look for really good keywords that will help your website do better in searches. ",
  },
  {
    title: "Improving Website Functionality for Success",
    description:
      "Making your website function better can help more people find it online. We make changes to your website to make it work better, so it’s easier for people to use and shows up higher in search results ultimately reaching success. ",
  },
];
const CardsSection = () => {
  return (
    <Stack
      width={"100%"}
      mt={{
        xs: 5,
        lg: 10,
      }}
      mb={{
        xs: 5,
        lg: 10,
      }}
      boxSizing={"border-box"}
    >
      <Stack
        width={{
          xs: "90%",
          lg: "80%",
        }}
        margin={"0 auto"}
      >
        <Stack gap={2}>
          <Stack gap={2}>
            <Typography
              fontWeight={"300"}
              fontSize={"35px"}
              textAlign={"center"}
            >
              BEST SEO COMPANY IN JAIPUR, INDIA
            </Typography>
            <Typography
              fontWeight={"300"}
              fontSize={"20px"}
              textAlign={"center"}
            >
              Complete SEO Services Provider in Jaipur, India.
            </Typography>
          </Stack>
          <Stack
            mt={4}
            boxSizing={"border-box"}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            gap={5}
          >
            {cardsDetails.map((card, index) => (
              <Stack
                width={{
                  xs: "100%",
                  lg: "30%",
                }}
                justifyContent={"start"}
                height={{
                  xs: "auto",
                }}
                alignItems={"start"}
                borderRadius={"8px"}
                bgcolor={"#FFF"}
                border={"3px solid #EAF9FD"}
                boxShadow={"0 2px 17px 4px rgba(221,221,221,.48)"}
              >
                <Stack p={3} boxSizing={"border-box"} gap={1}>
                  <Typography
                    fontWeight={"600"}
                    fontSize={"20px"}
                    textAlign={"center"}
                    mt={3}
                    mb={2}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    fontWeight={"300"}
                    fontSize={"17px"}
                    color={"#7A7A7A"}
                  >
                    {card.description}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardsSection;
