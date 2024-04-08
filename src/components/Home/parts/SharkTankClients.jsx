import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import childImg from "../../../assests/asset 8.svg";
import motherImg from "../../../assests/asset 9.svg";
import deliveryBoy from "../../../assests/asset 10.svg";
import { Link } from "react-router-dom";

const SharkTankClients = () => {
  return (
    <Stack width={"100%"} bgcolor={"#F5F7FF"}>
      <Stack width={"90%"} m={"0 auto"} gap={3}>
        <Stack
          width={{
            xs: "90%",
            lg: "60%",
          }}
          m={"0 auto"}
        >
          <Typography
            fontSize={{
              xs: "30px",
              lg: "50px",
            }}
            fontWeight={"bold"}
            color={"black"}
            textAlign={"center"}
          >
            Meet Our{" "}
            <span
              style={{
                color: "#0D6EFD",
              }}
            >
              Shark Tank
            </span>{" "}
            Clients: Trusted Partners in Success
          </Typography>
        </Stack>

        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          gap={{
            xs: 5,
            lg: 0,
          }}
        >
          <Stack width={"100%"} m={"0 auto"} direction={"row"} gap={5}>
            <Stack
              p={{
                xs: 0,
                lg: 3,
              }}
              boxSizing={"border-box"}
            >
              <Stack
                width={"100%"}
                height={"100%"}
                bgcolor={"#DEE0FE"}
                borderRadius={"25px"}
                p={{ xs: 3, lg: 4 }}
                boxSizing={"border-box"}
                gap={3}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  mt={2}
                >
                  <Typography
                    fontSize={"15px"}
                    fontWeight={"600"}
                    color={"#606060"}
                  >
                    01
                  </Typography>
                  <Typography
                    fontSize={"15px"}
                    fontWeight={"600"}
                    color={"#606060"}
                  >
                    Showcase
                  </Typography>
                </Stack>

                <Stack
                  direction={{
                    xs: "column-reverse",
                    lg: "row",
                  }}
                >
                  <Stack
                    width={{
                      xs: "100%",
                      lg: "50%",
                    }}
                  >
                    <Typography
                      fontSize={"28px"}
                      fontWeight={"600"}
                      textAlign={{ xs: "center", lg: "left" }}
                    >
                      Gunjan Apps Studios
                    </Typography>
                    <Typography
                      variant="p"
                      fontSize={"20px"}
                      color={"#606060"}
                      lineHeight={"1.9"}
                      textJustify={"inter-word"}
                      textAlign={{
                        xs: "justify",
                        lg: "left",
                      }}
                    >
                      Gunjan Apps Studios specializes in creating educational
                      and entertaining content for children, focusing on
                      meaningful screen time.
                    </Typography>
                    <Typography mt={4}>About Project</Typography>
                  </Stack>
                  <Stack width={"200px"} margin={"0 auto"}>
                    <Box
                      component="img"
                      src={childImg}
                      width={"100%"}
                      height={"100%"}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack width={"100%"} m={"0 auto"} direction={"row"} gap={5}>
            <Stack
              p={{
                xs: 0,
                lg: 3,
              }}
              boxSizing={"border-box"}
            >
              <Stack
                width={"100%"}
                height={"100%"}
                bgcolor={"#F9F0E6"}
                borderRadius={"25px"}
                p={4}
                boxSizing={"border-box"}
                gap={3}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  mt={2}
                >
                  <Typography
                    fontSize={"15px"}
                    fontWeight={"600"}
                    color={"#606060"}
                  >
                    02
                  </Typography>
                  <Typography
                    fontSize={"15px"}
                    fontWeight={"600"}
                    color={"#606060"}
                  >
                    Showcase
                  </Typography>
                </Stack>
                <Stack
                  direction={{
                    xs: "column-reverse",
                    lg: "row",
                  }}
                >
                  <Stack
                    width={{
                      xs: "100%",
                      lg: "50%",
                    }}
                  >
                    <Typography
                      fontSize={"28px"}
                      textAlign={{
                        xs: "center",
                        lg: "left",
                      }}
                      fontWeight={"600"}
                    >
                      Scrapshala
                    </Typography>
                    <Typography
                      variant="p"
                      fontSize={"20px"}
                      color={"#606060"}
                      lineHeight={"1.9"}
                      textJustify={"inter-word"}
                      textAlign={{
                        xs: "justify",
                        lg: "left",
                      }}
                    >
                      A women-led conscious Indian brand focused on sustainable
                      handicrafts.
                    </Typography>
                    <Typography mt={4}>About Project</Typography>
                  </Stack>
                  <Stack width={"200px"} margin={"0 auto"}>
                    <Box
                      component="img"
                      src={motherImg}
                      width={"100%"}
                      height={"100%"}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          width={"100%"}
          p={{
            xs: 0,
            lg: 3,
          }}
          boxSizing={"border-box"}
          direction={{
            xs: "column",
            lg: "row",
          }}
          gap={5}
        >
          <Stack
            width={"100%"}
            height={"100%"}
            bgcolor={"#050000"}
            borderRadius={"25px"}
            p={6}
            boxSizing={"border-box"}
            gap={3}
          >
            <Stack direction={"row"} justifyContent={"space-between"} mt={2}>
              <Typography fontSize={"15px"} fontWeight={"600"} color={"white"}>
                03
              </Typography>
              <Typography fontSize={"15px"} fontWeight={"600"} color={"white"}>
                Showcase
              </Typography>
            </Stack>
            <Stack
              direction={{
                xs: "column",
                lg: "row",
              }}
            >
              <Stack
                width={{
                  xs: "100%",
                  lg: "50%",
                }}
              >
                <Typography
                  fontSize={"28px"}
                  fontWeight={"600"}
                  color={"white"}
                >
                  Waayu
                </Typography>
                <Typography
                  variant="p"
                  fontSize={"20px"}
                  lineHeight={"1.9"}
                  color={"white"}
                >
                  Waayu is the industry’s very own food delivery app with zero
                  commission charges designed especially by and for restaurants
                  for better profits, visibility, and freedom like never before!
                </Typography>
                <Typography color={"white"} mt={4}>
                  About Project
                </Typography>
              </Stack>
              <Stack
                width={{
                  xs: "100%",
                  lg: "50%",
                }}
                height={"300px"}
                margin={"0 auto"}
              >
                <Box
                  component="img"
                  src={deliveryBoy}
                  width={"100%"}
                  height={"100%"}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack mt={4} mb={4}>
        <Link
          to="#"
          style={{
            textDecoration: "none",
            display: "block",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="p"
            fontSize={"16px"}
            fontWeight={"bold"}
            lineHeight={"1.9"}
            color={"#0D6EFD"}
            sx={{
              textDecoration: "underline",
              "&:hover": {
                opacity: 0.8,
                cursor: "pointer",
              },
            }}
            textAlign={"center"}
          >
            View All Projects
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default SharkTankClients;
