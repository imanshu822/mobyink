import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import missionImg from "../../../assests/asset 17.svg";
import vissionImg from "../../../assests/asset 18.svg";
import valuesImg from "../../../assests/asset 19.svg";

const EmpoweringDigital = () => {
  return (
    <Stack
      width={"100%"}
      mt={{
        xs: 5,
        lg: 10,
      }}
      mb={{
        xs: 5,
        lg: 10,
      }}
      boxSizing={"border-box"}
    >
      <Stack
        width={{
          xs: "90%",
          lg: "80%",
        }}
        margin={"0 auto"}
      >
        <Stack>
          <Typography
            fontSize={{
              xs: "30px",
              lg: "40px",
            }}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Empowering Digital Journeys, Creating Tomorrow's Success Stories.​
          </Typography>
          <Typography
            fontSize={{
              xs: "21px",
              lg: "24px",
            }}
            textAlign={"center"}
            color={"#767a86"}
          >
            Everyone has a story. Here is ours.​
          </Typography>
        </Stack>
        <Stack
          width={{
            xs: "100%",
            lg: "80%",
          }}
          margin={"0 auto"}
          mt={10}
          boxSizing={"border-box"}
          gap={3}
        >
          <Stack
            direction={{
              xs: "column",
              lg: "row",
            }}
            justifyContent={"space-between"}
          >
            <Stack
              width={{
                xs: "100%",
                lg: "45%",
              }}
            >
              <Box
                component="img"
                width={"100%"}
                height={"100%"}
                src={missionImg}
              />
            </Stack>
            <Stack
              width={{
                xs: "100%",
                lg: "45%",
              }}
              gap={3}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack boxSizing={"border-box"} p={2}>
                <Typography
                  fontSize={"30px"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  Our Mission
                </Typography>
                <Typography
                  fontSize={"20px"}
                  textAlign={"left"}
                  fontWeight={"300"}
                  color={"#767a86"}
                >
                  To revolutionise digital engagement by empowering businesses
                  with innovative, tailored solutions that drive growth and
                  success in the digital realm.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={{
              xs: "column",
              lg: "row-reverse",
            }}
            justifyContent={"space-between"}
          >
            <Stack
              width={{
                xs: "100%",
                lg: "45%",
              }}
            >
              <Box
                component="img"
                width={"100%"}
                height={"100%"}
                src={vissionImg}
              />
            </Stack>
            <Stack
              width={{
                xs: "100%",
                lg: "45%",
              }}
              gap={3}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack boxSizing={"border-box"} p={2}>
                <Typography
                  fontSize={"30px"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  Vision
                </Typography>
                <Typography
                  fontSize={"20px"}
                  textAlign={"left"}
                  fontWeight={"300"}
                  color={"#767a86"}
                >
                  To be the leading digital marketing agency recognized for
                  creativity, excellence, and transformative impact, setting new
                  standards in the industry and consistently exceeding client
                  expectations.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction={{
              xs: "column",
              lg: "row",
            }}
            justifyContent={"space-between"}
          >
            <Stack
              width={{
                xs: "100%",
                lg: "45%",
              }}
            >
              <Box
                component="img"
                width={"100%"}
                height={"100%"}
                src={valuesImg}
              />
            </Stack>
            <Stack
              width={{
                xs: "100%",
                lg: "45%",
              }}
              gap={3}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack boxSizing={"border-box"} p={2}>
                <Typography
                  fontSize={"30px"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  Values
                </Typography>
                <Typography
                  fontSize={"20px"}
                  textAlign={"left"}
                  fontWeight={"300"}
                  color={"#767a86"}
                >
                  Continuously exploring new frontiers in digital marketing.
                  Upholding honesty and transparency in all our dealings.
                  Valuing teamwork and partnerships for mutual success. Striving
                  for the highest quality in every project. Prioritising client
                  satisfaction and measurable results.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EmpoweringDigital;
