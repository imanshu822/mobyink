import { Stack, Typography } from "@mui/material";
import React from "react";

const cardsDetails = [
  {
    title: "Audit & Ideation",
    description:
      "In this phase, we thoroughly examine the website’s performance and identify areas for improvement. We analyze factors such as mobile friendliness, page speed, meta tags, and content structure to develop a strategy for optimization and enhancement. Through examining your website’s strengths and weaknesses, we select the areas for better performance.",
  },
  {
    title: "Planning and Execution",
    description:
      "This phase includes utilizing insights from site audits, market research, and competitor analysis to shape a customized SEO strategy. We develop a plan for your business, so that your site can attract more customers online. Our team identifies the best strategies and puts them into action to improve the online presence.",
  },
  {
    title: "Keywords Research",
    description:
      "In our services we’re all about diving into keywords and really  understanding them. By targeting specific keywords, we not only define your audience but also drive relevant traffic to your website. Through this research we identify the effective keywords to optimize your content and improve your visibility on SERPs.",
  },

  {
    title: "SEO Content",
    description:
      "In this, we ensure your website’s content is easily readable, essential for effective SEO. At our SEO agency in Delhi, we specialize in crafting content to enhance readability. By making your content more engaging and easy to understand, we encourage visitors to stay on your site longer.",
  },
  {
    title: "Local SEO",
    description:
      "With our local SEO services, we’re here to help your business shine in your neighbourhood. By improving your online presence and reputation, we make sure more customers can find you easily. Our strategies are tailored to target local audiences, making your business more visible and trustworthy in your community.",
  },
  {
    title: "Complete SEO services",
    description:
      "This phase covers all aspects of optimizing your website for better visibility on google. This includes both on-page and off-page SEO techniques, as well as technical SEO strategies. By addressing elements such as content, meta tags, backlinks, and site structure, we ensure that your website is fully optimized to rank higher in search results.",
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
              BEST SEO COMPANY IN DELHI, INDIA
            </Typography>
            <Typography
              fontWeight={"300"}
              fontSize={"20px"}
              textAlign={"center"}
            >
              Complete SEO Services Provider in Delhi, India.
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
