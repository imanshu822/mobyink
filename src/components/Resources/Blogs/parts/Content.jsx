import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import Img1 from "../../../../assests/ad4.webp";
import Img2 from "../../../../assests/ad3.webp";
const Content = () => {
  return (
    <Stack mt={10} width={"100%"}>
      <Stack>
        <Stack width={"80%"} margin={"0 auto"} gap={8}>
          <Stack width={"90%"} margin={"0 auto"}>
            <Typography variant="h5" textAlign={"left"} color={"gray"}>
              Paysafe provides payment solutions that power the everyday. The
              multinational organisation operates multiple brands across the
              e-cash, payments processing and digital wallets spectrum, serving
              over 145 million customers of varying size and scale.
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={7}>
            <Stack gap={2} width={"50%"}>
              <Typography variant="h3" fontWeight={"bold"}>
                The Challanges
              </Typography>
              <Typography textAlign={"left"}>
                <span
                  style={{
                    fontSize: "1.5em",
                  }}
                >
                  T
                </span>
                he Paysafe Group is a leading global provider of end-to-end
                payment solutions. Our core purpose is to enable businesses and
                consumers to connect and transact seamlessly through our
                industry-leading capabilities in payment processing, digital
                wallets, and online cash solutions.
              </Typography>
              <Typography textAlign={"left"}>
                The Paysafe Group is a leading global provider of end-to-end
                payment solutions. Our core purpose is to enable businesses and
                consumers to connect and transact seamlessly through our
                industry-leading capabilities in payment processing, digital
                wallets, and online cash solutions.
              </Typography>
              <Typography textAlign={"left"}>
                The Paysafe Group is a leading global provider of end-to-end
                payment solutions. Our core purpose is to enable businesses and
                consumers to connect and transact seamlessly through our
                industry-leading capabilities in payment processing, digital
                wallets, and online cash solutions.
              </Typography>
              <Typography textAlign={"left"}>
                The Paysafe Group is a leading global provider of end-to-end
                payment solutions. Our core purpose is to enable businesses and
                consumers to connect and transact seamlessly through our
                industry-leading capabilities in payment processing, digital
                wallets, and online cash solutions.
              </Typography>
            </Stack>

            <Stack
              width={"50%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box component="img" src={Img2} width={"100%"} height={"100%"} />
            </Stack>
          </Stack>
          <Stack width={"100%"} margin={"0 auto"} gap={5}>
            <Typography textAlign={"left"}>
              Paysafe provides payment solutions that power the everyday. The
              multinational organisation operates multiple brands across the
              e-cash, payments processing and digital wallets spectrum, serving
              over 145 million customers of varying size and scale. Paysafe
              provides payment solutions that power the everyday. The
              multinational organisation operates multiple brands across the
              e-cash, payments processing and digital wallets spectrum, serving
              over 145 million customers of varying size and scale. Paysafe
              provides payment solutions that power the everyday. The
              multinational organisation operates multiple brands across the
              e-cash, payments processing and digital wallets spectrum, serving
              over 145 million customers of varying size and scale.
            </Typography>
            <Typography textAlign={"left"}>
              Paysafe provides payment solutions that power the everyday. The
              multinational organisation operates multiple brands across the
              e-cash, payments processing and digital wallets spectrum, serving
              over 145 million customers of varying size and scale. Paysafe
              provides payment solutions that power the everyday. The
              multinational organisation operates multiple brands across the
              e-cash, payments processing and digital wallets spectrum, serving
              over 145 million customers of varying size and scale. Paysafe
              provides payment solutions that power the everyday. The
              multinational organisation operates multiple brands across the
              e-cash, payments processing and digital wallets spectrum, serving
              over 145 million customers of varying size and scale.
            </Typography>
          </Stack>

          <Stack direction={"row"} gap={7}>
            <Stack gap={2} width={"50%"}>
              <Typography variant="h3" fontWeight={"bold"}>
                The Solutions
              </Typography>
              <Typography textAlign={"left"}>
                <span
                  style={{
                    fontSize: "1.5em",
                  }}
                >
                  T
                </span>
                he Paysafe Group is a leading global provider of end-to-end
                payment solutions. Our core purpose is to enable businesses and
                consumers to connect and transact seamlessly through our
                industry-leading capabilities in payment processing, digital
                wallets, and online cash solutions.
              </Typography>
              <Typography textAlign={"left"}>
                The Paysafe Group is a leading global provider of end-to-end
                payment solutions. Our core purpose is to enable businesses and
                consumers to connect and transact seamlessly through our
                industry-leading capabilities in payment processing, digital
                wallets, and online cash solutions.
              </Typography>
              <Typography textAlign={"left"}>
                The Paysafe Group is a leading global provider of end-to-end
                payment solutions. Our core purpose is to enable businesses and
                consumers to connect and transact seamlessly through our
                industry-leading capabilities in payment processing, digital
                wallets, and online cash solutions.
              </Typography>
              <Typography textAlign={"left"}>
                The Paysafe Group is a leading global provider of end-to-end
                payment solutions. Our core purpose is to enable businesses and
                consumers to connect and transact seamlessly through our
                industry-leading capabilities in payment processing, digital
                wallets, and online cash solutions.
              </Typography>
            </Stack>

            <Stack
              width={"50%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box component="img" src={Img1} width={"100%"} height={"100%"} />
            </Stack>
          </Stack>
          <Stack>
            <Typography
              variant="h3"
              textAlign={"center"}
              fontWeight={"bold"}
              color={"blue"}
            >
              The Result
            </Typography>
            <Stack
              direction={"row"}
              gap={10}
              width={"80%"}
              margin={"0 auto"}
              mt={7}
            >
              <Stack width={"50%"} gap={3}>
                <Typography>30+ processes delivered</Typography>
                <Typography>
                  Over 30,000 hrs delivered back to the business
                </Typography>
                <Typography>
                  100% SOX compliance in Settlement process automation
                </Typography>
              </Stack>
              <Stack width={"50%"} gap={3}>
                <Typography>
                  {" "}
                  More then 95% success rate of bot case completion
                </Typography>
                <Typography>
                  SDK delivered for native platforms, enabling Virtual & Live
                  agent communications across multiple mobile platforms
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Content;
