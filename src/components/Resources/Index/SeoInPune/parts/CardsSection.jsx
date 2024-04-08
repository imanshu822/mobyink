import { Stack, Typography } from "@mui/material";
import React from "react";

const cardsDetails = [
  {
    title: "Keyword Research",
    description:
      "Our team conducts extensive research to understand your target audience and incorporates relevant keywords into your SEO strategy.",
  },
  {
    title: "Traffic Generation",
    description:
      "We focus on attracting organic traffic to your site by providing valuable and authentic content to potential customers.",
  },

  {
    title: "Website Analysis",
    description:
      "We thoroughly examine your website to assess its performance, identifying what’s working and what’s not.",
  },
  {
    title: "Enhancing Website Visibility",
    description:
      "Staying updated with the latest trends allows us to improve your website’s visibility on search engine results pages (SERPs).",
  },
  {
    title: "Competitor Evaluation",
    description:
      "We study the strategies of your competitors to anticipate challenges and opportunities in your industry.",
  },
  {
    title: "Conversion Optimization",
    description:
      "Using proven methods, we aim to increase your website’s sales and reduce bounce rates, ensuring visitors stay engaged. ",
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
              BEST SEO COMPANY IN PUNE, INDIA
            </Typography>
            <Typography
              fontWeight={"300"}
              fontSize={"20px"}
              textAlign={"center"}
            >
              Complete SEO Services Provider in Pune, India..
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
