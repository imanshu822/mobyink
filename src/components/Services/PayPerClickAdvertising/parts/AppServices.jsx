import { Stack, Typography } from "@mui/material";
import React from "react";
import AppStore from "../../../../assests/ppc1.webp";
import nearByPlaceImg from "../../../../assests/ppc2.webp";
import mobileGraphImg from "../../../../assests/ppc3.webp";
import mobileAppArtImg from "../../../../assests/ppc4.webp";
const AppServices = () => {
  const lists = [
    {
      id: 1,
      title: "1. Google Ads",
      direction: "row",
      Desc: "Fuel your business growth with the rocket fuel of the digital world! Our Google Ads services are your passport to online success. We turn clicks into customers, dreams into reality, and searches into sales. Ready to take the digital leap? Let’s skyrocket your business to new heights!",
      How: [
        {
          Description: "Consultation and Goal Setting ",
        },
        {
          Description: "Strategic Keyword Selection ",
        },
        {
          Description: "Compelling ad Creation",
        },
        {
          Description: "Ongoing Optimization",
        },
      ],
      src: AppStore,
    },
    {
      id: 2,
      title: "2. Meta Ads",
      direction: "row-reverse",
      Desc: "Welcome to the front row of the social media extravaganza! Our Meta Ads services are the VIP pass to a world where every scroll, like, and share turns into brand success. Say goodbye to the ordinary—let’s make your brand extraordinary on Meta Ads!",
      How: [
        {
          Description: "Identifying the Audience",
        },
        {
          Description: "Visual Storytelling",
        },
        {
          Description: "Strategic Campaign Management",
        },
        {
          Description: "Budget Allocation",
        },
      ],
      src: nearByPlaceImg,
    },
    {
      id: 3,
      title: "3. E-commerce Ads",
      direction: "row",
      Desc: "Unleash the sales powerhouse! Our e-commerce ads services are the secret sauce for turning casual browsers into enthusiastic buyers. From virtual window shopping to checkout triumphs, we’ve got your e-commerce success recipe ready!",
      How: [
        {
          Description: "Product Showcasing ",
        },
        {
          Description: "Personalized Shopping experience",
        },
        {
          Description: "Strategic Shopping Campaigns ",
        },
        {
          Description: "Continuous Conversion Refinement",
        },
      ],
      src: mobileGraphImg,
    },
    {
      id: 4,
      title: "4. Remarketing Ads",
      direction: "row-reverse",
      Desc: "Ever feel like you’re missing out on customers who slipped through the cracks? Enter our Remarketing Ads services—a second chance to captivate and convert! It’s not just advertising; it’s rekindling the spark with potential customers who almost said ‘yes’!",
      How: [
        {
          Description: "Segment Precision ",
        },
        {
          Description: "Ad creatives that Wow",
        },
        {
          Description: "Strategic Optimization ",
        },
        {
          Description: "Conversion Tracking",
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
            Pay Per Click Advertising
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
