import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import financeImg from "../../../../assests/Finance.jpg";
const Culture = [
  {
    title: "Strategic Branding and Positioning",
    description:
      "Leveraging our seasoned team of digital marketing experts, we delve deep into your unique value proposition, weaving it into a narrative that resonates with your target audience.",
  },
  {
    title: "Targeted Lead Generation",
    description:
      "Through advanced analytics and strategic content marketing, we generate high-quality leads that are more likely to convert, driving sustained growth for your institution.",
  },
  {
    title: "Content Marketing for Thought Leadership",
    description:
      "Our team of industry-specialized writers creates insightful and informative content that not only engages your audience but also establishes your brand as an authority in the financial landscape.",
  },
  {
    title: "Cutting-edge SEO Strategies",
    description:
      "Our SEO experts employ the latest techniques to optimize your website for search engines, ensuring that your financial services are easily discoverable by potential clients.",
  },
  {
    title: "Social Media Management",
    description:
      "Our team crafts tailored campaigns that align with the unique identity of your financial brand, fostering meaningful interactions and building a community around your services.",
  },
  {
    title: "Results-driven Analytics and Reporting",
    description:
      "Through detailed reporting, you gain a clear understanding of the impact of our strategies on your business, allowing for continuous refinement and optimization.",
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
                We are your trusted partner in revolutionizing the way financial
                institutions navigate the digital landscape. In an era where the
                financial industry is rapidly evolving, our digital marketing
                expertise ensures that your brand stays ahead, reaching new
                heights of visibility, engagement, and success.
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
              src={financeImg}
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
            What comes under the Finance digital transformation
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
