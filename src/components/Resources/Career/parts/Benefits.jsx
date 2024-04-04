import React from "react";
import { Stack, Typography } from "@mui/material";

const benefitsData = [
  {
    title: "Diverse Clients",
    description:
      "Explore a multitude of industries, working on diverse projects and expanding your expertise.",
  },
  {
    title: "Continuous Learning",
    description:
      "Stay at the forefront of digital trends, keeping your skills sharp and innovative.",
  },
  {
    title: "Creative Freedom",
    description:
      "Unleash your creativity, designing captivating campaigns and content that stand out.",
  },
  {
    title: "Team Collaboration",
    description:
      "Collaborate with experts across domains, fostering skill development and holistic campaign management.",
  },
  {
    title: "Client Interaction",
    description:
      "Hone client communication skills, gaining deep insights into diverse industries.",
  },
  {
    title: "Client Interaction",
    description:
      "Immerse in a results-focused culture, driving campaign accountability and optimization.",
  },
  {
    title: "Career Growth",
    description:
      "Enjoy a well-defined career path, from junior roles to specialization or senior positions.",
  },
  {
    title: "Recognition",
    description:
      "Be acknowledged for excellence through awards and incentives, driving motivation and excellence.",
  },
];

const Benefits = () => {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      bgcolor={"#F5F7FF"}
      mt={10}
      boxSizing={"border-box"}
    >
      <Stack width={"75%"} margin={"0 auto"} gap={3}>
        <Stack>
          <Stack bgcolor={"white"} width={"100px"} borderRadius={"5px"}>
            <Typography p={0.5} textAlign={"center"}>
              Benefits
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h3" fontWeight={"bold"} textAlign={"start"}>
            Best-in-class benefits
          </Typography>
        </Stack>
        <Stack
          gap={3}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {benefitsData.map((benefit, index) => (
            <Stack
              key={index}
              bgcolor={"white"}
              width={"23%"}
              height={"270px"}
              boxShadow={"rgba(0, 0, 0, 0.15) 0px 0px 10px 0px"}
            >
              <Stack padding={2} pt={5}>
                <Typography fontSize={"22px"} fontWeight={"bold"}>
                  {benefit.title}
                </Typography>
                <Typography fontSize={"16px"} fontWeight={"300"}>
                  {benefit.description}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Benefits;
