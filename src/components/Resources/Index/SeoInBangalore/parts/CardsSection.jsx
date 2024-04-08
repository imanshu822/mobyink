import { Stack, Typography } from "@mui/material";
import React from "react";

const cardsDetails = [
  {
    title: "Tailored Strategies",
    description:
      "We craft customized plans for your website, targeting specific business goals and audience demographics. By understanding your unique needs, we optimize your online presence to attract relevant traffic and boost noticeability in the competitive digital landscape.",
  },
  {
    title: "Local Market Optimization",
    description:
      "Leveraging the vibrant local market, Mobyink optimizes your website for regional searches, ensuring it appears prominently in local search results. This targeted approach drives qualified traffic from nearby users, increasing relevance and visibility within the local community.",
  },

  {
    title: "Result-Driven Approach",
    description:
      " With our SEO services in Bangalore, you can expect tangible results, including increased website traffic, improved search engine rankings, and enhanced online presence. Our data-driven approach allows us to continuously monitor performance metrics, identify areas for improvement,",
  },
  {
    title: "Content Excellence",
    description:
      "We focus on creating high-quality content that attracts a target audience. Through tactical content development and optimization, we boost your site’s relevance and authority, attracting more organic traffic and establishing your brand as an industry leader.",
  },
  {
    title: "Technical Expertise",
    description:
      "We implement advanced SEO techniques to optimize your website’s performance and user experience. From site speed optimization to mobile responsiveness, we ensure that the site meets search engine requirements and provides a seamless browsing experience for visitors, ultimately driving more traffic and engagement.",
  },
  {
    title: "Trust and Credibility",
    description:
      "Mobyink Innovation’s SEO team will help in boosting the organic traffic by building trust and credibility. We manage your online reputation and create a positive brand image. By showcasing your strengths, we make people trust your website more, encouraging them to visit and explore further. This results in increased traffic over time.",
  },
];
const CardsSection = () => {
  return (
    <Stack width={"100%"} mt={10} mb={10} boxSizing={"border-box"}>
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
              BEST SEO COMPANY IN BANGALORE, INDIA
            </Typography>
            <Typography
              fontWeight={"300"}
              fontSize={"20px"}
              textAlign={"center"}
            >
              Complete SEO Services Provider in Bangalore, India.
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
