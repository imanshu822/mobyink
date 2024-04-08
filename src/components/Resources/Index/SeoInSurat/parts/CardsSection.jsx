import { Stack, Typography } from "@mui/material";
import React from "react";

const cardsDetails = [
  {
    title: "Keywords Research",
    description:
      "Keyword research is important for a successful search marketing campaign. It helps businesses find the right words to attract customers to their websites. Our keyword research process also helps in making content more visible and increasing the chances of turning visitors into customers.",
  },
  {
    title: "Content Optimization",
    description:
      "Content optimization is a good step towards SEO success. We focus on making your website’s content easy to read, which keeps visitors engaged for longer. By crafting and refining content, we ensure it is appealing and encourages visitors to spend more time on your site.",
  },

  {
    title: "Competitor Analysis",
    description:
      "We conduct competitor analysis for your business to gain insights into what strategies your competitors are using. This helps us understand the competitive landscape better and identify opportunities for your business. By analyzing competitors, we can tailor our approach to make your business more competitive and successful.",
  },
  {
    title: "On-Page/ Off-Page SEO",
    description:
      "Mobyink specializes in both on-page and off-page SEO strategies. On-page SEO involves optimizing elements on your website to improve its search engine visibility, such as content, meta tags, and site structure. Off-page SEO focuses on external factors like backlinks and social media presence to enhance your website’s authority and rankings.",
  },
  {
    title: "Quality Backlinks",
    description:
      "Building links is a powerful method that aligns with search engine rules. We focus on boosting your website’s rank naturally. Our priority is to create top quality backlinks to improve your website’s position in search results.",
  },
  {
    title: "Technical SEO",
    description:
      "This improves the BTS (behind-the-scenes) workings of your website to boost its ranking. It enhances a website’s structure and backend components to boost its visibility and performance on search engines, like page speed, which is crucial for user experience. Users prefer fast loading pages, so it’s important to optimize for speed.",
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
              BEST SEO COMPANY IN SURAT, INDIA
            </Typography>
            <Typography
              fontWeight={"300"}
              fontSize={"20px"}
              textAlign={"center"}
            >
              Complete SEO Services Provider in Surat, India.
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
