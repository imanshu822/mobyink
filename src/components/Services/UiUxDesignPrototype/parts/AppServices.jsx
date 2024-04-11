import { Stack, Typography } from "@mui/material";
import React from "react";
import AppStore from "../../../../assests/ui1.webp";
import nearByPlaceImg from "../../../../assests/ui2.webp";
import mobileGraphImg from "../../../../assests/ui3.webp";
import mobileAppArtImg from "../../../../assests/ui4.webp";

const AppServices = () => {
  const lists = [
    {
      title: "1. Custom Web Design",
      direction: "row",
      Desc: "Crafting Digital Masterpieces for You! Our Custom Web Design services are all about bringing your vision to life. We blend creativity and functionality to create websites that don’t just meet your expectations – they exceed them.",
      How: [
        {
          title: "Dream It:",
          Desc: "Share your goals",
        },
        {
          title: "Design It:",
          Desc: "We create stunning designs.",
        },
        {
          title: "Develop It:",
          Desc: "We build functional websites",
        },
        {
          title: "Test It:",
          Desc: "Ensuring it works everywhere.",
        },
        {
          title: "Launch It:",
          Desc: "Your masterpiece goes live!",
        },
      ],
      src: AppStore,
    },

    {
      title: "2. Mobile App Design",
      direction: "row-reverse",
      Desc: "Apps That Delight, Designs That Shine! Our Mobile App Design service is all about creating user-friendly interfaces that captivate and engage your users.",
      How: [
        {
          title: "Discover It: ",
          Desc: "Define your app’s purpose.",
        },
        {
          title: "Sketch It:",
          Desc: "Layout and functionality",
        },
        {
          title: "Design It: ",
          Desc: "We craft stunning interfaces.",
        },
        {
          title: "Test It:",
          Desc: "User feedback refines it",
        },
        {
          title: "Build It:",
          Desc: "Developers make it real.",
        },
        {
          title: "Launch It:",
          Desc: "Your app makes an impact!",
        },
      ],
      src: nearByPlaceImg,
    },

    {
      title: "3. Product Design",
      direction: "row",
      Desc: "From Idea to Reality! Our Product Design service is where concepts turn into beautifully functional products that leave a lasting impression.",
      How: [
        {
          title: "Imagine It: ",
          Desc: "Define your product’s purpose.",
        },
        {
          title: "Create It:",
          Desc: "Concepts take shape.",
        },
        {
          title: "Refine It: ",
          Desc: "Feedback leads to perfection.",
        },
        {
          title: "Craft It:",
          Desc: "Materials are selected.",
        },
        {
          title: "Produce It:",
          Desc: "We ensure production quality.",
        },
        {
          title: "Perfect It:",
          Desc: "Quality checks guarantee excellence.",
        },
      ],
      src: mobileGraphImg,
    },

    {
      title: "4. Branding & Graphics",
      direction: "row-reverse",
      Desc: "Your Brand, Your Story! Our Branding and graphics services are all about creating visuals that not only speak to your audience but tell your unique brand story.",
      How: [
        {
          title: "Assess It:",
          Desc: "Understand your brand.",
        },
        {
          title: "Strategize It:",
          Desc: "Plan a cohesive strategy.",
        },
        {
          title: "Visualize It:",
          Desc: "Create logos and graphics.",
        },
        {
          title: "Guide It:",
          Desc: "Provide branding guidelines.",
        },
        {
          title: "Market It:",
          Desc: "Design materials aligned with your brand.",
        },
        {
          title: "Support It:",
          Desc: "Maintain your brand’s presence.",
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
            UI/UX Design
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
                        <span style={{ fontWeight: 300, color: "grey" }}>
                          {" "}
                          {item.Desc}
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
