import { Stack, Typography } from "@mui/material";
import React from "react";
import ad1 from "../../../../assests/ad1.webp";
import ad2 from "../../../../assests/ad2.webp";
import ad3 from "../../../../assests/ad3.webp";
import ad4 from "../../../../assests/ad4.webp";
const AppServices = () => {
  const lists = [
    {
      id: 1,
      title: "1. iOS App Development Services",
      direction: "row",
      Desc: "Bringing Your Vision to the App Store. Unlock the full potential of iOS with our app development services. From strategizing and conceptualizing to designing and coding, we bring your app vision to life. Whether it’s a sleek business tool or a consumer-facing app, our iOS development ensures a seamless, engaging experience for your users. Explore the possibilities of iOS app development with us — where innovation meets user-centric design.",
      How: [
        {
          Description: "Competitors Analysis",
        },
        {
          Description: "Keywords Research",
        },
        {
          Description: "Keywords Selection",
        },
        {
          Description: "Meta Text Optimisation",
        },
        {
          Description: "Localizations Growth",
        },
      ],
      src: ad1,
    },
    {
      id: 2,
      title: "2. Android App Development Services",
      direction: "row-reverse",
      Desc: "Empowering Your Brand on the Android Platform. Extend your brand’s reach with our Android app development services. We specialize in crafting intuitive, high-performance apps that resonate with Android users. From ideation to implementation, our team ensures your app stands out in the diverse Android ecosystem, delivering a consistent and delightful user experience. Discover the impact of Android app development — where functionality meets the diversity of the Android market.",
      How: [
        {
          Description: "Competitors Analysis",
        },
        {
          Description: "Keywords Research",
        },
        {
          Description: "Keywords Selection",
        },
        {
          Description: "Meta Text Optimisation",
        },
        {
          Description: "Localizations Growth",
        },
      ],
      src: ad2,
    },
    {
      id: 3,
      title: "3. Flutter App Development Services",
      direction: "row",
      Desc: "Unifying iOS and Android Experiences. Experience the best of both worlds with Flutter app development. Our team leverages this powerful framework to create cross-platform apps that seamlessly run on iOS and Android. Enjoy the efficiency of a single codebase without compromising on the native feel, ensuring your brand delivers a uniform and immersive experience across devices. Embrace the versatility of Flutter app development — where efficiency meets a harmonious user experience.",
      How: [
        {
          Description: "Competitors Analysis",
        },
        {
          Description: "Keywords Research",
        },
        {
          Description: "Keywords Selection",
        },
        {
          Description: "Meta Text Optimisation",
        },
        {
          Description: "Localizations Growth",
        },
      ],
      src: ad3,
    },
    {
      id: 4,
      title: "4. React App Development Services",
      direction: "row-reverse",
      Desc: "Building Dynamic and Responsive Web Apps. Redefine your online presence with React app development. Our team harnesses the power of React to create dynamic and responsive web applications. Whether it’s a business tool or a customer-facing platform, we ensure your app is not just functional but also visually compelling, offering users a seamless and engaging interaction. Explore the possibilities of React app development — where interactivity meets modern design.",
      How: [
        {
          Description: "Competitors Analysis",
        },
        {
          Description: "Keywords Research",
        },
        {
          Description: "Keywords Selection",
        },
        {
          Description: "Meta Text Optimisation",
        },
        {
          Description: "Localizations Growth",
        },
      ],
      src: ad4,
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
            App Development
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
