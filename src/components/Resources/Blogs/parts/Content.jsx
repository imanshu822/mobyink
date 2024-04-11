import React from "react";
import { Stack, Typography, Box } from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowLeftAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const Content = ({ data, id }) => {
  return (
    <Stack
      mt={{
        xs: 5,
        lg: 10,
      }}
      width={"100%"}
    >
      <Stack>
        <Stack
          width={{
            xs: "90%",
            lg: "70%",
          }}
          margin={"0 auto"}
          gap={{
            xs: 4,
            lg: 8,
          }}
        >
          <Stack width={"100%"} margin={"0 auto"}>
            <Typography color={"blue"}>
              {data.BlogContent.aboutCompany}
            </Typography>
            <Typography
              fontSize={{
                xs: "18px",
                lg: "20px",
              }}
              textAlign={"left"}
              color={"gray"}
            >
              {data.BlogContent.about}
            </Typography>
          </Stack>

          <Stack
            direction={{
              xs: "column",
              lg: "row",
            }}
            gap={7}
          >
            <Stack
              gap={2}
              width={{
                xs: "100%",
                lg: "50%",
              }}
            >
              <Stack gap={2}>
                {data.BlogContent.head1 && (
                  <>
                    <Typography
                      fontSize={{
                        xs: "16px",
                        lg: "18px",
                      }}
                      fontWeight={"bold"}
                    >
                      {data.BlogContent.head1.title1}
                    </Typography>
                    <Stack gap={1}>
                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head1.bold1} {` `}
                        </span>
                        {data.BlogContent.head1.t1}
                      </Typography>

                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head1.bold2} {` `}
                        </span>
                        {data.BlogContent.head1.t2}
                      </Typography>

                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head1.bold3} {` `}
                        </span>
                        {data.BlogContent.head1.t3}
                      </Typography>
                    </Stack>
                  </>
                )}

                {data.BlogContent.head2 && (
                  <>
                    <Typography
                      fontSize={{
                        xs: "16px",
                        lg: "18px",
                      }}
                      fontWeight={"bold"}
                    >
                      {data.BlogContent.head2.title2}
                    </Typography>
                    <Stack gap={1}>
                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head2.b1} {` `}
                        </span>
                        {data.BlogContent.head2.t1}
                      </Typography>

                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head2.bold2} {` `}
                        </span>
                        {data.BlogContent.head2.t2}
                      </Typography>

                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head2.b3} {` `}
                        </span>
                        {data.BlogContent.head2.t3}
                      </Typography>
                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head2.b4} {` `}
                          {data.BlogContent.head2.b4} {` `}
                        </span>
                        {data.BlogContent.head2.t4}
                      </Typography>
                    </Stack>
                  </>
                )}

                {data.BlogContent.head3 && (
                  <>
                    <Typography
                      fontSize={{
                        xs: "16px",
                        lg: "18px",
                      }}
                      fontWeight={"bold"}
                    >
                      {data.BlogContent.head3.title3}
                    </Typography>
                    <Stack gap={1}>
                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head3.bold1} {` `}
                        </span>
                        {data.BlogContent.head3.t1}
                      </Typography>

                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head3.bold2} {` `}
                        </span>
                        {data.BlogContent.head3.t2}
                      </Typography>

                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head3.bold3} {` `}
                        </span>
                        {data.BlogContent.head3.t3}
                      </Typography>
                    </Stack>
                  </>
                )}
                {data.BlogContent.head4 && (
                  <>
                    <Typography
                      fontSize={{
                        xs: "16px",
                        lg: "18px",
                      }}
                      fontWeight={"bold"}
                    >
                      {data.BlogContent.head4.title4}
                    </Typography>
                    <Stack gap={1}>
                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head4.bold1} {` `}
                        </span>
                        {data.BlogContent.head4.t1}
                      </Typography>

                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head4.bold2} {` `}
                        </span>
                        {data.BlogContent.head4.t2}
                      </Typography>

                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head4.bold3} {` `}
                        </span>
                        {data.BlogContent.head4.t3}
                      </Typography>
                    </Stack>
                  </>
                )}
                {data.BlogContent.head5 && (
                  <>
                    <Typography
                      fontSize={{
                        xs: "16px",
                        lg: "18px",
                      }}
                      fontWeight={"bold"}
                    >
                      {data.BlogContent.head5.title5}
                    </Typography>
                    <Stack gap={1}>
                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head5.bold1} {` `}
                        </span>
                        {data.BlogContent.head5.t1}
                      </Typography>

                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head5.bold2} {` `}
                        </span>
                        {data.BlogContent.head5.t2}
                      </Typography>

                      <Typography
                        textAlign={"justify"}
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.head5.bold3} {` `}
                        </span>
                        {data.BlogContent.head5.t3}
                      </Typography>
                    </Stack>
                  </>
                )}
              </Stack>

              {data.BlogContent.H1 && (
                <Typography variant="h4" fontWeight={"bold"}>
                  {data.BlogContent.H1}
                </Typography>
              )}

              {data.BlogContent.P1 && (
                <Typography color={"gray"} textAlign={"justify"}>
                  <span
                    style={{
                      fontSize: "1.5em",
                      color: "black",
                    }}
                  >
                    {data.BlogContent.P1.slice(0, 1)}
                  </span>
                  <span style={{ fontSize: "1em" }}>
                    {data.BlogContent.P1.slice(1)}
                  </span>
                </Typography>
              )}
              {data.BlogContent.P2 && (
                <Typography color={"gray"} textAlign={"justify"}>
                  {data.BlogContent.P2}
                </Typography>
              )}
            </Stack>

            <Stack
              width={{
                xs: "100%",
                lg: "50%",
              }}
              alignItems={"center"}
              position={"relative"}
            >
              <Box
                borderRadius={"10px"}
                component="img"
                src={data.img}
                width={"100%"}
                position={"sticky"}
                top={"30%"}
              />
            </Stack>
          </Stack>
          <Stack
            width={"100%"}
            margin={"0 auto"}
            gap={{
              xs: 2,
              lg: 3,
            }}
          >
            {data.BlogContent.Result ? (
              <>
                <Stack>
                  <Stack>
                    <Typography
                      fontWeight={"bold"}
                      fontSize={{
                        xs: "18px",
                        lg: "36px",
                      }}
                    >
                      {data.BlogContent.Result.title}
                    </Typography>
                  </Stack>
                  <Stack gap={2}>
                    {data.BlogContent.Result.t0 && (
                      <Typography
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                        textAlign={"justify"}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.Result.b0} {` `}
                        </span>
                        {data.BlogContent.Result.t0}
                      </Typography>
                    )}
                    {data.BlogContent.Result.t1 && (
                      <Typography
                        color={"gray"}
                        fontSize={{
                          xs: "14px",
                          lg: "16px",
                        }}
                        textAlign={"justify"}
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {data.BlogContent.Result.b1} {` `}
                        </span>
                        {data.BlogContent.Result.t1}
                      </Typography>
                    )}

                    {data.BlogContent.Result.t2 && (
                      <Stack>
                        <Typography
                          color={"gray"}
                          fontSize={{
                            xs: "14px",
                            lg: "16px",
                          }}
                          textAlign={"justify"}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            {data.BlogContent.Result.b2} {` `}
                          </span>
                          {data.BlogContent.Result.t2}
                        </Typography>
                      </Stack>
                    )}

                    {data.BlogContent.Result.t3 && (
                      <Stack>
                        <Typography
                          color={"gray"}
                          fontSize={{
                            xs: "14px",
                            lg: "16px",
                          }}
                          textAlign={"justify"}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            {data.BlogContent.Result.b3} {` `}
                          </span>
                          {data.BlogContent.Result.t3}
                        </Typography>
                      </Stack>
                    )}

                    {data.BlogContent.Result.t4 && (
                      <Stack>
                        <Typography
                          color={"gray"}
                          fontSize={{
                            xs: "14px",
                            lg: "16px",
                          }}
                          textAlign={"justify"}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            {data.BlogContent.Result.b4} {` `}
                          </span>
                          {data.BlogContent.Result.t4}
                        </Typography>
                      </Stack>
                    )}
                  </Stack>
                </Stack>
              </>
            ) : (
              <>
                {" "}
                {/* first  */}
                <Stack gap={2}>
                  <Typography textAlign={"justify"} fontWeight={"bold"}>
                    {data.BlogContent.q1}
                  </Typography>

                  <Stack gap={2}>
                    {data.BlogContent.a1.p1 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a1.p1}
                      </Typography>
                    )}
                    {data.BlogContent.a1.p2 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a1.p2}
                      </Typography>
                    )}
                    {data.BlogContent.a1.p3 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a1.p3}
                      </Typography>
                    )}
                    {data.BlogContent.a1.p4 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a1.p4}
                      </Typography>
                    )}
                    {data.BlogContent.a1.p5 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a1.p5}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
                {/* second */}
                <Stack gap={2}>
                  <Typography textAlign={"justify"} fontWeight={"bold"}>
                    {data.BlogContent.q2}
                  </Typography>
                  <Stack gap={2}>
                    {data.BlogContent.a2.p1 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a2.p1}
                      </Typography>
                    )}
                    {data.BlogContent.a2.p2 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a2.p2}
                      </Typography>
                    )}
                    {data.BlogContent.a2.p3 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a2.p3}
                      </Typography>
                    )}
                    {data.BlogContent.a2.p4 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a2.p4}
                      </Typography>
                    )}
                    {data.BlogContent.a2.p5 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a2.p5}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
                {/* third */}
                <Stack gap={2}>
                  <Typography textAlign={"justify"} fontWeight={"bold"}>
                    {data.BlogContent.q3}
                  </Typography>
                  <Stack gap={2}>
                    <Stack gap={2}>
                      {data.BlogContent.a3.p1 && (
                        <Typography color={"gray"} textAlign={"justify"}>
                          {data.BlogContent.a3.p1}
                        </Typography>
                      )}
                      {data.BlogContent.a3.p2 && (
                        <Typography color={"gray"} textAlign={"justify"}>
                          {data.BlogContent.a3.p2}
                        </Typography>
                      )}
                      {data.BlogContent.a3.p3 && (
                        <Typography color={"gray"} textAlign={"justify"}>
                          {data.BlogContent.a3.p3}
                        </Typography>
                      )}
                      {data.BlogContent.a3.p4 && (
                        <Typography color={"gray"} textAlign={"justify"}>
                          {data.BlogContent.a3.p4}
                        </Typography>
                      )}
                      {data.BlogContent.a3.p5 && (
                        <Typography color={"gray"} textAlign={"justify"}>
                          {data.BlogContent.a3.p5}
                        </Typography>
                      )}
                    </Stack>
                  </Stack>
                </Stack>
                {/* fourth */}
                <Stack gap={2}>
                  <Typography textAlign={"justify"} fontWeight={"bold"}>
                    {data.BlogContent.q4}
                  </Typography>
                  <Stack gap={2}>
                    {data.BlogContent.a4.p1 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a4.p1}
                      </Typography>
                    )}
                    {data.BlogContent.a4.p2 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a4.p2}
                      </Typography>
                    )}
                    {data.BlogContent.a4.p3 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a4.p3}
                      </Typography>
                    )}
                    {data.BlogContent.a4.p4 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a4.p4}
                      </Typography>
                    )}
                    {data.BlogContent.a4.p5 && (
                      <Typography color={"gray"} textAlign={"justify"}>
                        {data.BlogContent.a4.p5}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
                {/* fifth */}
                {data.BlogContent.q5 && (
                  <Stack gap={2}>
                    <Typography textAlign={"justify"} fontWeight={"bold"}>
                      {data.BlogContent.q5}
                    </Typography>
                    <Stack gap={2}>
                      {data.BlogContent.a5.p1 && (
                        <Typography color={"gray"} textAlign={"justify"}>
                          {data.BlogContent.a5.p1}
                        </Typography>
                      )}
                      {data.BlogContent.a5.p2 && (
                        <Typography color={"gray"} textAlign={"justify"}>
                          {data.BlogContent.a5.p2}
                        </Typography>
                      )}
                      {data.BlogContent.a5.p3 && (
                        <Typography color={"gray"} textAlign={"justify"}>
                          {data.BlogContent.a5.p3}
                        </Typography>
                      )}
                      {data.BlogContent.a5.p4 && (
                        <Typography color={"gray"} textAlign={"justify"}>
                          {data.BlogContent.a5.p4}
                        </Typography>
                      )}
                      {data.BlogContent.a5.p5 && (
                        <Typography color={"gray"} textAlign={"justify"}>
                          {data.BlogContent.a5.p5}
                        </Typography>
                      )}
                    </Stack>
                  </Stack>
                )}
              </>
            )}
          </Stack>

          {/* <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack width={"30%"}>
              <Stack direction={"row"} gap={1}>
                <Link to={`case-studies/${prev}`}>
                  <ArrowLeftAltIcon
                    sx={{
                      transform: "rotate(180deg)",
                      fontWeight: "bold",
                    }}
                  />

                  <Typography fontWeight={"bold"}>PREVIOUS</Typography>
                </Link>
              </Stack>
              <Typography>How to improve...</Typography>
            </Stack>
            <Stack width={"30%"}>
              <Stack gap={2} direction={"row"} justifyContent={"flex-end"}>
                <Link to={`../${next}`}>
                  <Typography fontWeight={"bold"} textAlign={"right"}>
                    NEXT
                  </Typography>
                  <ArrowRightAltIcon
                    sx={{
                      fontWeight: "bold",
                    }}
                  />
                </Link>
              </Stack>
              <Typography textAlign={"right"}>How to improve...</Typography>
            </Stack>
          </Stack> */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Content;
