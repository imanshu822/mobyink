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
      title: "1. CMS development using WordPress, Shopify, and Wix",
      direction: "row",
      Desc: "We specialize in crafting user-friendly websites tailored to your brand, harnessing the power of industry-leading CMS platforms like WordPress, Shopify, and Wix. Our expert team ensures your online presence is not just visually appealing but also seamlessly manageable.",
      How: [
        {
          Description: "Choose your preferred CMS platform.",
        },
        {
          Description: "We customize templates to align with your brand.",
        },
        {
          Description: "Seamlessly manage content and updates.",
        },
        {
          Description:
            "User-friendly interface for effortless content editing.",
        },
      ],
      src: AppStore,
    },
    {
      id: 2,
      title: "2. React js development",
      direction: "row-reverse",
      Desc: "Our forte lies in creating dynamic web applications with React.js, guaranteeing exceptional user experiences. We breathe life into your digital vision, turning it into an interactive reality that keeps users engaged.",
      How: [
        {
          Description: "Utilize React’s component-based architecture.",
        },
        {
          Description: "Develop interactive and responsive web interfaces.",
        },
        {
          Description: "Enhance user engagement and performance.",
        },
        {
          Description: "Deliver fast, seamless browsing experiences.",
        },
      ],
      src: nearByPlaceImg,
    },
    {
      id: 3,
      title: "3. Full stack developer",
      direction: "row",
      Desc: "As your full-stack development partner, we provide end-to-end web solutions. Our expertise spans both front-end and back-end development, ensuring your web projects are not only visually stunning but also functionally robust.",
      How: [
        {
          Description: "Design and develop the entire web application.",
        },
        {
          Description:
            "Seamlessly integrate user interfaces with server functionality.",
        },
        {
          Description: "Ensure a cohesive and efficient web experience.",
        },
        {
          Description: "Full-stack expertise for comprehensive solutions.",
        },
      ],
      src: mobileGraphImg,
    },
    {
      id: 4,
      title: "4. Php/node js development",
      direction: "row-reverse",
      Desc: "We specialize in building robust web applications using PHP and Node.js, empowering your digital presence with dynamic functionality. Our expert developers create scalable, server-side solutions that elevate your web experience.",
      How: [
        {
          Description: "Choose a suitable technology stack.",
        },
        {
          Description: "Develop scalable, server-side applications.",
        },
        {
          Description: "Optimize performance and security.",
        },
        {
          Description: "Deliver powerful and data-driven web solutions.",
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
