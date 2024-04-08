import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import whoWeAreImg from "../../../assests/asset 16.webp";

const WhoWeAre = () => {
  return (
    <>
      <Stack width={"100%"} mt={10} boxSizing={"border-box"}>
        <Stack
          width={{
            xs: "95%",
            xl: "80%",
          }}
          margin={"0 auto"}
        >
          <Stack
            justifyContent={"center"}
            gap={1}
            mb={7}
            boxSizing={"border-box"}
          >
            <Typography
              fontSize={{
                xs: "30px",
                lg: "40px",
              }}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Who We Are?
            </Typography>
            <Typography
              textAlign={"center"}
              color={"#767a86"}
              fontSize={"21px"}
            >
              Providing you with the best Digital Marketing Solutions
            </Typography>
          </Stack>
          <Stack
            direction={{
              xs: "column",
              lg: "row",
            }}
            gap={3}
          >
            <Stack
              width={{
                xs: "95%",
                lg: "50%",
              }}
              margin={"0 auto"}
              gap={2}
            >
              <Typography
                lineHeight={2}
                color={"#767a86"}
                fontSize={"18px"}
                fontWeight={"300"}
              >
                Hey there! We’re your go-to team for embracing change in this
                digital world. Think of us as your guides in the exciting
                journey of digital transformation. We’re all about making a
                difference in your life and giving your business a digital super
                boost with our innovative solutions. Ready to make a splash in
                the digital universe? We’re here to make it happen!
              </Typography>
              <Typography
                lineHeight={2}
                color={"#767a86"}
                fontSize={"18px"}
                fontWeight={"300"}
              >
                Let’s talk about you! Your challenges, dreams, and goals are our
                starting point. We dive deep into your world – understanding
                your market, your competition, and your unique vibe. Mixing this
                with our tech wizardry and fresh insights, we craft digital
                marketing magic that’s just right for you – effective, exciting,
                and easy on your wallet. Ready to team up? Let’s make some
                digital waves together!
              </Typography>
            </Stack>
            <Stack
              width={{
                xs: "95%",
                lg: "50%",
              }}
              margin={"0 auto"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                component="img"
                width={"90%"}
                height={"90%"}
                src={whoWeAreImg}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default WhoWeAre;
