import { Stack, Typography } from "@mui/material";
import React from "react";
import AppStore from "../../../../assests/App-Store-Optimization.jpeg";
import nearByPlaceImg from "../../../../assests/nearbyplace.webp";
import mobileGraphImg from "../../../../assests/mobileGraph.webp";
import mobileAppArtImg from "../../../../assests/mobileappArt.webp";

const AppServices = () => {
  const lists = [
    {
      id: 1,
      title: "1. App Store Optimization",
      direction: "row",
      Desc: "Crafting a strategic approach to elevate your app’s visibility and downloads. We delve into researching and recommending designs that not only capture attention on the App Store but also align with your brand, ensuring a seamless on-screen experience for potential users.",
      How: [
        {
          title: "Strategic Analysis:",
          Description: "Understand your app’s market and audience.",
        },
        {
          title: "Keyword Optimization:",
          Description: "Boost discoverability with targeted keywords.",
        },
        {
          title: "Strategic Analysis:",
          Description: "Understand your app’s market and audience.",
        },
      ],
      src: AppStore,
    },
    {
      id: 2,
      title: "2. Creatives & CVR Optimization",
      direction: "row-reverse",
      Desc: "In the realm of digital design, we specialize in creating captivating visuals that not only enhance click-through rates but also optimize conversion rates. By strategically designing creatives, we ensure that your digital content speaks to your audience, driving higher engagement and conversions.",
      How: [
        {
          title: "Audience-Centric Design:",
          Description:
            "Create resonant visuals for higher click-through rates.",
        },
        {
          title: "A/B Testing:",
          Description: "Optimize creatives through rigorous A/B testing.",
        },
        {
          title: "Data-Driven Iteration:",
          Description: "Continuously refine elements for maximum conversion.",
        },
      ],
      src: nearByPlaceImg,
    },
    {
      id: 3,
      title: "3. User Acquisition & Media",
      direction: "row",
      Desc: "Our expertise extends beyond design; we strategically brainstorm and research user acquisition tactics, presenting comprehensive ideas to clients with detailed volume and budget considerations. From compelling visuals to targeted media strategies, we design the digital assets that power your user acquisition efforts.",
      How: [
        {
          title: "Ideation and Planning:",
          Description: "Brainstorm innovative acquisition strategies.",
        },
        {
          title: "Budget Alignment: ",
          Description: "Propose detailed budgets for impactful campaigns.",
        },
        {
          title: "Strategic Design: ",
          Description:
            "Craft visually appealing assets for effective user acquisition.",
        },
      ],
      src: mobileGraphImg,
    },
    {
      id: 4,
      title: "4. Retention",
      direction: "row-reverse",
      Desc: "Beyond the initial download, our design philosophy extends to user retention. We create visually appealing and engaging content that keeps users coming back. Whether through in-app visuals, notifications, or other retention-focused materials, we ensure that your app maintains a lasting impression on its users.",
      How: [
        {
          title: "Engagement-Centric Design:",
          Description: "Create visuals fostering ongoing engagement.",
        },
        {
          title: "Feedback Loop: ",
          Description: "Refine designs based on user interactions.",
        },
        {
          title: "Brand Consistency:",
          Description: "Ensure consistent elements for long-term user loyalty.",
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
            App Marketing
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
                        <span style={{ fontWeight: 100, color: "grey" }}>
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
