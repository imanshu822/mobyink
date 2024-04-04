import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import founderImg from "../../../assests/asset 15.webp";
import teamImg from "../../../assests/asset 16.webp";
import { Link } from "react-router-dom";

const MeetOurFounder = () => {
  return (
    <Stack>
      <Stack width={"80%"} margin={"0 auto"} gap={15}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack width={"45%"}>
            <Stack width={"90%"} height={"90%"} margin={"auto "}>
              <Box
                borderRadius={"12px"}
                component="img"
                width={"100%"}
                height={"100%"}
                src={founderImg}
              />
            </Stack>
          </Stack>
          <Stack width={"45%"} gap={4} p={2} boxSizing={"border-box"}>
            <Typography fontSize={"40px"} fontWeight={"bold"}>
              Meet Our Founder
            </Typography>
            <Typography fontSize={"18px"} fontWeight={"400"} color={"#767a86"}>
              Kapil Thakkar, founder of Mobyink Innovations, combines his rich
              educational background with a deep passion for digital marketing,
              especially in mobile app marketing. His expertise in ASO, PPC, and
              SEO drives business growth and user acquisition. As a creative
              entrepreneur, he thrives on helping clients surpass sales and
              revenue goals. Kapil’s leadership style and the dedicated ‘Digital
              Monks’ team at Mobyink Innovations are committed to delivering
              tangible results in the digital marketing sphere.
            </Typography>
            <Link
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"140px"}
                height={"40px"}
                backgroundColor={"#0D6EFD"}
                sx={{
                  "&:hover": {
                    color: "white",
                    opacity: 0.8,
                    fontWeight: "bold",
                  },
                }}
              >
                <Typography color={"white"}>Get In Touch</Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
        <Stack direction={"row-reverse"} justifyContent={"space-between"}>
          <Stack width={"45%"}>
            <Stack width={"100%"} height={"100%"}>
              <Box
                borderRadius={"12px"}
                component="img"
                width={"100%"}
                height={"100%"}
                src={teamImg}
              />
            </Stack>
          </Stack>
          <Stack
            width={"45%"}
            gap={2}
            justifyContent={"space-between"}
            p={2}
            boxSizing={"border-box"}
          >
            <Typography fontSize={"40px"} fontWeight={"bold"}>
              Why Mobyink?
            </Typography>
            <Typography fontSize={"18px"} fontWeight={"400"} color={"#767a86"}>
              Join us on your digital journey with a partner who’s not just an
              agency, but a powerhouse of success.We blend the latest tech with
              creative strategies for cutting-edge results.Unique visions need
              unique solutions. We tailor our strategies to fit your exact
              needs.
            </Typography>
            <Typography fontSize={"18px"} fontWeight={"400"} color={"#767a86"}>
              Our portfolio includes working with esteemed ‘Shark Tank’ clients,
              showcasing our ability to deliver success in high-stakes
              environments.Your goals are our mission. We believe in a
              collaborative journey to shared success.Choose us for a
              transformative digital experience, backed by a track record of
              excellence!
            </Typography>
            <Link
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"140px"}
                height={"40px"}
                backgroundColor={"#0D6EFD"}
                sx={{
                  "&:hover": {
                    color: "white",
                    opacity: 0.8,
                    fontWeight: "bold",
                  },
                }}
              >
                <Typography color={"white"}>Get In Touch</Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MeetOurFounder;
