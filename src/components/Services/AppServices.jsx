import { Stack, Typography } from '@mui/material'
import React from 'react'
import AppStore from "../../assests/App-Store-Optimization.jpeg"
const AppServices = () => {
const lists = [
  {
    title: "1. App Store Optimization",
    direction:"row",
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
];
  return (
    <Stack>
      <Stack alignItems={"Center"} gap={1} p={"60px 0 80px 0 "}>
        <Stack>
          <Typography fontSize={"50px"} fontWeight={"bold"}>
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
      <Stack gap={2} p={"0 98px"}>
        {lists.map((d, index) => (
          <Stack direction={d.direction} width={"100%"}>
            <Stack width={"50%"} alignItems={"center"} >
              <Stack width={"80%"} gap={3}>
                <Typography
                  color={"black"}
                  fontWeight={"bold"}
                  fontSize={"40px"}
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
            <Stack width={"50%"} alignItems={"center"}>
              <Stack width={"71%"} height={"100%"}>
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
}

export default AppServices