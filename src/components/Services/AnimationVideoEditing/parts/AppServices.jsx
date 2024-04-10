import { Stack, Typography } from "@mui/material";
import React from "react";
import AppStore from "../../../../assests/av1.webp";
import nearByPlaceImg from "../../../../assests/av2.webp";
import mobileGraphImg from "../../../../assests/av3.webp";
import mobileAppArtImg from "../../../../assests/av4.webp";
const AppServices = () => {
  const lists = [
    {
      id: 1,
      title: "1. 2D Animation",
      direction: "row",
      Desc: "Harnessing the power of visual storytelling, our 2D animation services breathe life into characters and narratives. From lively cartoons to informative explainer videos, our team crafts compelling animations that captivate audiences and convey messages with a dynamic visual flair.",
      How: [
        {
          Description: "Storyboarding",
        },
        {
          Description: "Character Design",
        },
        {
          Description: "Animation Techniques",
        },
        {
          Description: "Timing and Pacing",
        },
      ],
      src: AppStore,
    },
    {
      id: 2,
      title: "2. 3D Animation",
      direction: "row-reverse",
      Desc: "In the realm of three-dimensional creativity, our expertise lies in crafting immersive experiences through 3D animation. We transform ideas into lifelike visuals, whether it’s for product visualization, architectural walkthroughs, or engaging entertainment content. Our 3D animation brings depth and realism to your concepts, leaving a lasting impression.",
      How: [
        {
          Description: "Modeling ",
        },
        {
          Description: "Texturing and Shading ",
        },
        {
          Description: "Rigging and Animation ",
        },
        {
          Description: "Rendering ",
        },
      ],
      src: nearByPlaceImg,
    },
    {
      id: 3,
      title: "3. E-learning Animation",
      direction: "row",
      Desc: "Education meets innovation with our E-learning Animation services. We blend educational content with captivating visuals, making learning an interactive and engaging experience. From animated courses to interactive modules, we tailor our E-learning animations to cater to diverse learning styles, ensuring information retention and a seamless educational journey.",
      How: [
        {
          Description: "Educational Content",
        },
        {
          Description: "Interactivity",
        },
        {
          Description: "Accessibility",
        },
        {
          Description: "Optimized File Formats",
        },
      ],
      src: mobileGraphImg,
    },
    {
      id: 4,
      title: "4. Corporate Video Editing",
      direction: "row-reverse",
      Desc: "Our Corporate Video Editing services focus on refining your brand narrative. We meticulously edit and enhance corporate videos to convey professionalism and capture the essence of your message. From promotional videos to internal communications, our editing expertise ensures that your corporate content aligns seamlessly with your brand identity, leaving a lasting impact.",
      How: [
        {
          Description: "Script and Storyline",
        },
        {
          Description: "Professional Editing Software",
        },
        {
          Description: "Branding Elements",
        },
        {
          Description: "Engaging Visuals",
        },
      ],
      src:""
   },

]
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
            Animation & Video Editing
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
