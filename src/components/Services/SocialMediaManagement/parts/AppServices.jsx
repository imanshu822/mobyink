import { Stack, Typography } from "@mui/material";
import React from "react";
import AppStore from "../../../../assests/sm1.webp";
import nearByPlaceImg from "../../../../assests/sm2.webp";
import mobileGraphImg from "../../../../assests/sm3.webp";
import mobileAppArtImg from "../../../../assests/sm4.webp";
const AppServices = () => {
  const lists = [
    {
      id: 1,
      title: "1. Strategy with Content Creation",
      direction: "row",
      Desc: "Our strategy: clear goals aligned with marketing. Engaging content by our design team – graphics, videos, and writing – tailored to the audience. Metrics guide adaptability and active community engagement align with broader marketing for a dynamic online presence.",
      How: [
        {
          Description: "AI-Infused Brand Insights ",
        },
        {
          Description: "Competitor Alignment ",
        },
        {
          Description: "Creative and engaging content",
        },
        {
          Description: "Turn the content into visuals",
        },
      ],
      src: AppStore,
    },
    {
      id: 2,
      title: "2. Social Media posting",
      direction: "row-reverse",
      Desc: "After crafting top-notch content, we take charge of its social debut. We optimize for each platform, strategically timing posts for peak reach and engagement. Your content hits the right notes, exactly when and where it matters most.",
      How: [
        {
          Description: "Tailor content to your audience’s interests.",
        },
        {
          Description: "Keep posts aligned with your brand and audience needs.",
        },
        {
          Description: "Share content when your audience is most active.",
        },
        {
          Description: "Use engaging visuals to boost post-performance.",
        },
      ],
      src: nearByPlaceImg,
    },
    {
      id: 3,
      title: "3. Community Management",
      direction: "row",
      Desc: "We’re not just posting – we engage in real-time with your audience, building a vibrant community. Plus, we optimize campaigns using machine learning for maximum impact, providing insights and recommendations for business growth.",
      How: [
        {
          Description: "Engage with members",
        },
        {
          Description: "Moderate content",
        },
        {
          Description: "Build a sense of belonging",
        },
        {
          Description: "Gather feedback and analyze data",
        },
      ],
      src: mobileGraphImg,
    },
    {
      id: 4,
      title: "4. Performance Optimization",
      direction: "row-reverse",
      Desc: "We track key metrics like engagement and reach through analytics, generating detailed reports for content optimization. Our social media management handles the entire process, creating tailored strategies, engaging content, and community management to help brands achieve their goals efficiently.",
      How: [
        {
          Description: "Goal Setting",
        },
        {
          Description: "Regular FeedBack",
        },
        {
          Description: "Performance Feedback",
        },
        {
          Description: "Development Plans",
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
            Social Media Management
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
