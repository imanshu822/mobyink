import { Stack, Typography } from "@mui/material";
import React from "react";

import gd1 from "../../../../assests/gd1.webp";
import gd2 from "../../../../assests/gd2.webp";
import gd3 from "../../../../assests/gd3.webp";
import gd4 from "../../../../assests/gd4.webp";

const AppServices = () => {
  const lists = [
    {
      id: 1,
      title: "1. Banner Design and Logo Design",
      direction: "row",
      Desc: "At the heart of our creative expertise lies Banner and Logo Design that goes beyond aesthetics. We don’t just create visuals; we craft brand identities. Whether it’s a striking banner that demands attention or a logo that becomes the face of your brand, our designs are a blend of artistry and strategic branding, leaving a lasting impression.",
      How: [
        {
          Description: "Gather client requirements.",
        },
        {
          Description: "Create design concepts.",
        },
        {
          Description: "Collaborate for revisions.",
        },
        {
          Description: "Deliver finalized designs.",
        },
      ],
      src: gd1,
    },
    {
      id: 2,
      title: "2. Illustration Design",
      direction: "row-reverse",
      Desc: "Step into a world where ideas come to life through our Illustration Design services. We breathe artistic expression into concepts, creating visuals that tell stories, evoke emotions, and leave a memorable impact. From intricate details to bold strokes, our illustrations transform imagination into captivating visuals, making your brand stand out.",
      How: [
        {
          Description: "Define purpose",
        },
        {
          Description: "Choose style and medium",
        },
        {
          Description: "Implement creativity",
        },
        {
          Description: "Gather feedback for revisions",
        },
      ],
      src: gd2,
    },
    {
      id: 3,
      title: "3. 3D Design",
      direction: "row",
      Desc: "Experiencing the next dimensional for the creativity with our 3D Designs services. We breathe artistic expression into concepts, creating visuals that tell stories, evoke emotions, and leave a memorable impact. From intricate details to bold strokes, our illustrations transform imagination into captivating visuals, making your brand stand out.",
      How: [
        {
          Description: "Conceptualization of Idea",
        },
        {
          Description: "Using appropriate Softwares ",
        },
        {
          Description: "Focus on details ",
        },
        {
          Description: "Testing and Opgimization",
        },
      ],
      src: gd3,
    },
    {
      id: 4,
      title: "4. Advertising Design",
      direction: "row-reverse",
      Desc: "In the dynamic world of Advertising Design, we don’t just create visuals; we craft campaigns that leave an indelible mark. From eye-catching layouts to compelling copy, our designs are strategic storytelling tools. We blend creativity with marketing acumen to ensure your advertising materials not only grab attention but also drive engagement and action.",
      How: [
        {
          Description: "Target Audience Research ",
        },
        {
          Description: "Budget designing ",
        },
        {
          Description: "Creating Copies and Visuals ",
        },
        {
          Description: "Testing",
        },
      ],
      src: gd4,
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
