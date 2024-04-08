import { Stack, Typography } from "@mui/material";
import React from "react";

const cardsDetails = [
  {
    title: "Increased Online Visibility",
    description:
      "SEO boosts your website’s search engine rankings, making it more likely for potential customers to find your business when they search for related products or services. This increased visibility enhances your online presence and improves the chances of attracting new customers.",
  },
  {
    title: "Enhanced User Experience",
    description:
      "Improving user experience is key for online triumph. Google values websites that offer good user experiences. Search engine optimization enhances user experience, leading to more traffic, better visibility, more leads, and increased conversions.",
  },

  {
    title: "Boosting Website Visitors",
    description:
      "It draws specific, focused traffic to your website by optimizing content for relevant keywords. More visitors mean better impressions, more qualified leads, and stronger customer relationships. Increasing website traffic enhances business opportunities and fosters growth.",
  },
  {
    title: "Establish Trust and Credibility",
    description:
      "This helps in establishing your company as an expert in your industry, boosting brand trust and leading to long-term customer loyalty. The trust helps you connect with your audience better and get more people to buy from you.",
  },
  {
    title: "Builds Brand Awareness",
    description:
      "SEO plays a crucial role in establishing and enhancing brand awareness for your business. By securing top rankings and strategic positioning on Google search results, it elevates your products or services, making them more visible to potential customers and strengthening your brand identity and recognition.",
  },
  {
    title: "SEO Improves Sales",
    description:
      "By increasing the visibility of your website in search engine results, driving more organic traffic, targeting relevant keywords and optimizing your content, it helps attract potential customers who are actively searching for products or services like yours, leading to higher conversion rates and increased sales.",
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
              BEST SEO COMPANY IN NOIDA, INDIA
            </Typography>
            <Typography
              fontWeight={"300"}
              fontSize={"20px"}
              textAlign={"center"}
            >
              Complete SEO Services Provider in Noida, India.
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
