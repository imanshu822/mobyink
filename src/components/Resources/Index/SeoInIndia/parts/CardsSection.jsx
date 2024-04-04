import { Stack, Typography } from "@mui/material";
import React from "react";

const cardsDetails = [
  {
    title: "Helps Your Website to Get Found Easily",
    description:
      "A reliable company in India enhances your website’s visibility on search engine results pages (SERPs), ensuring it ranks higher for relevant search queries. This increased visibility makes it easier for consumers to find your website, ultimately driving more traffic and potential customers to your online platfor",
  },
  {
    title: "Attract More Organic Visitors",
    description:
      "An SEO company reforms your website’s content and attracts more organic visitors which leads to increased numbers of customers visiting your website. With the help of our user-friendly content, we draw more potential customers to your website, resulting in business growth.",
  },

  {
    title: "Builds Trust and Credibility",
    description:
      " Experienced experts aim to create a solid foundation for your online brand with the help of building trust and credibility. This effort increases the likelihood of consumers choosing your brand over competitors, enhancing your reputation and fostering long-term customer loyalty.",
  },
  {
    title: "More Online Sales and Steady Growth Over Time",
    description:
      " Hiring a professional SEO company ensures steady business growth by consistently attracting relevant visitors to your website. This strategy leads to increased online sales over time, making it a worthwhile investment for long-term success and profitability.",
  },
  {
    title: "Make your Website Mobile-Friendly",
    description:
      "As more people use mobile devices, the firms ensure your website works well on phones and tablets, making it easier for mobile users to access and enjoy. This enhances their overall experience and increases engagement with your website.",
  },
  {
    title: "Analytics and Reporting",
    description:
      "The experts provide detailed analytics and reports so you can see how your website is doing. This helps you figure out what’s working and what needs to change, so your website can keep getting better and attracting more visitors.",
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
              WHY IS THERE A NEED FOR SEO COMPANIES FROM A BUSINESS PERSPECTIVE?
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
