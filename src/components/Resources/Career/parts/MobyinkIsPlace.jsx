import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MobyinkIsPlace = () => {
  return (
    <Stack
      width={"100%"}
      pt={{
        xs: 5,
        lg: 10,
      }}
      boxSizing={"border-box"}
      bgcolor={"white"}
    >
      <Stack
        width={{
          xs: "95%",
          lg: "90%",
        }}
        margin={"0 auto"}
      >
        <Stack
          justifyContent={"center"}
          mb={7}
          boxSizing={"border-box"}
          gap={3}
        >
          <Typography
            fontSize={{
              xs: "35px",
              lg: "48px",
            }}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Mobyink is place to Boost you career
          </Typography>
          <Typography
            width={{
              xs: "95%",
              lg: "80%",
            }}
            margin={"0 auto"}
            textAlign={"start"}
            color={"#767a86"}
            fontSize={"19px"}
            fontWeight={"300"}
          >
            At Mobylnk Innovations, it's not just a slogan - 'People First' is
            the heartbeat of our culture. We genuinely believe that by
            prioritizing our team's happiness, ensuring work/life kalance, and
            investing in professional development, we create a win-win scenario
            for everyone, including our valued clients. Join us in a workplace
            where your wellbeing matters just as much as your success.
          </Typography>
          <Typography
            width={{
              xs: "95%",
              lg: "80%",
            }}
            margin={"0 auto"}
            textAlign={"start"}
            color={"#767a86"}
            fontSize={"19px"}
            fontWeight={"300"}
          >
            Our expansion is dynamic, fueled by organic growth and strategic
            partnerships with like-minded digital innovators. We're weaving a
            national network designed to deliver exceptional service to our
            clients. But even as we scale, we keep it intimate. Picture yourself
            in smaller, agile teams, where your contributions matter daily-to
            our clients and the heartbeat of our company. When you're set to
            elevate your career, rest assured, there's a promising space for you
            to thrive and grow at Mobylnk Innovations.
            <Link
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Stack
                mt={3}
                justifyContent={"center"}
                alignItems={"center"}
                width={"140px"}
                height={"40px"}
                border={"2px solid white"}
                backgroundColor={"#0D6EFD"}
                sx={{
                  "&:hover": {
                    color: "white",
                    opacity: 0.8,
                  },
                }}
              >
                <Typography color={"white"}>Get In Touch</Typography>
              </Stack>
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MobyinkIsPlace;
