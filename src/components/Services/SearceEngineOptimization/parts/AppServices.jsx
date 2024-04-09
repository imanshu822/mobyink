import { Stack, Typography } from "@mui/material";
import React from "react";
import AppStore from "../../../../assests/seo1.webp";
import nearByPlaceImg from "../../../../assests/seo2.webp";
import mobileGraphImg from "../../../../assests/seo3.webp";
import mobileAppArtImg from "../../../../assests/seo4.webp";
const AppServices = () => {
  const lists = [
    {
      id: 1,
      title: "1. E-commerce SEO",
      direction: "row",
      Desc: "Incorporating our digital design expertise, we strategize and implement e-commerce SEO solutions tailored to your brand. By optimizing product pages, refining content, and enhancing user experience, we ensure your online store ranks higher, driving increased traffic and maximizing conversion opportunities.",
      How: [
        {
          Description: "Keyword Optimization",
        },
        {
          Description: "Site Speed",
        },
        {
          Description: "High-Quality Content",
        },
        {
          Description: "Mobile-Friendliness",
        },
      ],
      src: AppStore,
    },
    {
      id: 2,
      title: "2. Local SEO",
      direction: "row-reverse",
      Desc: "Taking your brand beyond the digital realm, our print and digital designs synergize to elevate your local presence through Local SEO strategies. By optimizing your business listings and implementing location-specific design elements, we ensure your brand stands out in local searches.",
      How: [
        {
          Description: "GMB Optimization",
        },
        {
          Description: "NAP Consistency",
        },
        {
          Description: "Local Citations",
        },
        {
          Description: "Customer Reviews",
        },
        {
          Description: "Local Content",
        },
      ],
      src: nearByPlaceImg,
    },
    {
      id: 3,
      title: "3. B2B and B2C SEO",
      direction: "row",
      Desc: "For B2B and B2C strategies, our digital design approach is versatile. We tailor branding to suit the tone and style of your target audience, applying it seamlessly to websites, business cards, and digital resources. Elevate your SEO game with designs that capture the essence of your business, whether you’re reaching out to businesses or individual consumers.",
      How: [
        {
          Description: "Keyword Strategy",
        },
        {
          Description: "Content Quality",
        },
        {
          Description: "Social Media Engagement",
        },
        {
          Description: "Mobile Optimization",
        },
        {
          Description: "Local SEO",
        },
      ],
      src: mobileGraphImg,
    },
    {
      id: 4,
      title: "4. Voice SEO",
      direction: "row-reverse",
      Desc: "Craft conversational keywords, ace local searches, and ride the wave of structured data for an auditory SEO triumph. Prioritize mobile, seize snippets, and own user intent—your brand’s future in search is now! Level Up with Voice SEO Excellence. ",
      How: [
        {
          Description: "Conversational Keywords",
        },
        {
          Description: "Featured Snippets",
        },
        {
          Description: "Local Optimization",
        },
        {
          Description: "Mobile-Friendly Design",
        },
        {
          Description: "Structured Data",
        },
      ],
      src: mobileAppArtImg,
    },
  ];

  return (
    <Stack>
      <Stack alignItems={"Center"} gap={1} p={"60px 0 80px 0 "}>
        <Stack>
          <Typography
            fontSize={{
              xs: "35px",
              lg: "50px",
            }}
            fontWeight={"bold"}
          >
            Search engine optimization
          </Typography>
        </Stack>
        <Stack
          sx={{
            content: "''",
            width: "200px",
            height: "2px",
            bgcolor: "#0D6EFD",
          }}
        ></Stack>
      </Stack>
      <Stack justifyContent={"center"} margin={"0 auto"} gap={7}>
        {lists.map((d, index) => (
          <Stack
            margin={"0 auto"}
            direction={{
              xs: "column-reverse",
              md: d.direction,
            }}
            width={"100%"}
            gap={{
              xs: 5,
              lg: 0,
            }}
          >
            <Stack
              margin={"0 auto"}
              width={{
                xs: "95%",
                lg: "50%",
              }}
              alignItems={"center"}
            >
              <Stack
                width={{
                  xs: "90%",
                  lg: "71%",
                }}
                gap={3}
              >
                <Typography
                  color={"black"}
                  fontWeight={"bold"}
                  fontSize={{
                    xs: "25px",
                    lg: "30px",
                  }}
                >
                  {d.title}
                </Typography>
                <Typography color={"grey"}>{d.Desc}</Typography>
                <Typography color={"black"} fontWeight={"bold"}>
                  How It Works:-
                </Typography>
                <Stack gap={1} width={"87%"}>
                  {d.How.map((item, idx) => (
                    <Stack key={idx}>
                      <li style={{ fontWeight: "bold" }}>
                        {item.title}
                        <span style={{ fontWeight: 400, color: "grey" }}>
                          {" "}
                          {item.Description}
                        </span>
                      </li>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
            <Stack
              width={{
                xs: "96%",
                lg: "50%",
              }}
              margin={"0 auto"}
              alignItems={"center"}
            >
              <Stack
                margin={"0 auto"}
                width={{
                  xs: "90%",
                  lg: "71%",
                }}
                height={"100%"}
              >
                <img
                  src={d.src}
                  alt="App Store Optimization"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "30px",
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default AppServices;
