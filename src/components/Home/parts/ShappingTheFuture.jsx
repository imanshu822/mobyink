import { Stack, Typography } from "@mui/material";
import React from "react";

const ShappingTheFuture = () => {
  return (
    <Stack
      height={"100%"}
      mt={{
        xs: 5,
        lg: 10,
      }}
      mb={{ xs: 5, lg: 10 }}
    >
      <Stack
      justifyContent={"space-between"}
        width={"85%"}
        margin={"0 auto"}
        direction={{
          xs: "column",
          lg: "row",
        }}
      >
        <Stack
          width={{
            xs: "100%",
            lg: "45%",
          }}
        >
          <Typography
            pb={3}
            fontSize={{
              xs: "6px",
              sm: "18px",
              lg: "42px",
            }}
            textAlign={{
              xs: "center",
              lg: "left",
            }}
            lineHeight={"1.2"}
            fontWeight={"bold"}
          >
            Shaping the Future of Business with Innovative Digital Marketing
          </Typography>
        </Stack>
        <Stack
          width={{
            xs: "100%",
            lg: "50%",
          }}
        >
          <Typography
            fontSize={{
              xs: "12px",
              sm: "14px",
              lg: "20px",
            }}
            textAlign={{
              xs: "justify",
              lg: "left",
            }}
            fontFamily={("Montserrat", "Sans - serif")}
          >
            Mobyink stands out in the digital marketing landscape with over 7
            years of expertise and a dynamic team of 50+ specialists. Our focus
            on current trends and future innovations ensures exceptional results
            for both new and established businesses. We prioritize your growth
            and customer satisfaction, offering a strategic advantage in a
            constantly evolving market. Trust us to keep your business ahead of
            the curve
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ShappingTheFuture;
