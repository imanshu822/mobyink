import { Stack, Typography } from "@mui/material";
import React from "react";

const cardsDetails = [
  {
    title: "Higher Ranking and Quality Traffic",
    description:
      "An SEO company helps your business rank higher on search engines and attract quality traffic to your website by optimizing it for the web. Their professionals employ the latest tactics to please both the audience and search engines.",
  },
  {
    title: "Increased Sales",
    description:
      "SEO boosts your website’s ranking, attracting more visitors and increasing sales, leading to higher revenue. By understanding user behavior, the agencies develop plans to enhance your authority and credibility, ultimately driving more purchases.",
  },

  {
    title: "Adapt to Current Trends",
    description:
      "SEO companies in Mumbai stay updated with the latest strategies, tools, and technologies to optimize websites according to evolving search engine algorithms. This ensures websites maintain high rankings and saves entrepreneurs time and effort.",
  },
  {
    title: "Effective Content Creation",
    description:
      "SEO firms have skilled content creators who craft engaging content with appropriate keyword usage. They specialize in various content formats like blogs, articles, videos, and infographics. Also, they tailor content to local audiences, boosting local presence and search rankings.",
  },
  {
    title: "Long-term Results",
    description:
      "SEO offers enduring benefits unlike short-term methods like PPC (Pay Per Click) ads. Collaborating with an expert in Mumbai ensures a sustainable strategy for long-term growth. Higher search engine rankings mean more visitors and potential customers, leading to increased sales over time.",
  },
  {
    title: "Tailored Approach",
    description:
      "Each business is different, requiring a unique SEO strategy. Mobyink’s experts collaborate closely with you to understand your business, goals, and audience. This personalized approach ensures a more effective and efficient path to achieving your marketing objectives.",
  },
];
const CardsSection = () => {
  return (
    <Stack width={"100%"} mt={10} mb={10} boxSizing={"border-box"}>
      <Stack width={"80%"} margin={"0 auto"}>
        <Stack gap={2}>
          <Stack gap={2}>
            <Typography
              fontWeight={"300"}
              fontSize={"35px"}
              textAlign={"center"}
            >
              BEST SEO COMPANY IN MUMBAI, INDIA
            </Typography>
            <Typography
              fontWeight={"300"}
              fontSize={"20px"}
              textAlign={"center"}
            >
              Complete SEO Services Provider in Mumbai, India.
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
                width={"45%"}
                justifyContent={"start"}
                height={"400px"}
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
                    textAlign={"center"}
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
