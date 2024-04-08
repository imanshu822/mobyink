import { Stack, Typography } from "@mui/material";
import React from "react";

const TopDiscription = () => {
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
        gap={3}
      >
        <Typography textAlign={"center"} fontWeight={"300"} fontSize={"40px"}>
          Mobyink: A Premium SEO Service Agency in India
        </Typography>
        <Typography textAlign={"justify"} fontWeight={"300"} fontSize={"19px"}>
          Are you searching for the top SEO services in India from a leading
          company? If so, Mobyink is the perfect choice for you. Our experts
          specialize in providing White Hat services in India. We are
          customer-focused digital marketing experts and are well-known in the
          industry for delivering top-notch services.
        </Typography>
        <Typography textAlign={"justify"} fontWeight={"300"} fontSize={"19px"}>
          We are the best SEO service provider in India, offering Premium
          solutions to businesses and tailored strategies to enhance online
          visibility and traffic. We provide quality SEO consultancy in India,
          and with our guidance, your brand will achieve greater success in the
          digital landscape.
        </Typography>
        <Typography textAlign={"justify"} fontWeight={"300"} fontSize={"19px"}>
          Mobyink is the top pick for boosting your online presence in India. As
          a comprehensive firm, we unlock your website’s digital capabilities,
          by enhancing its organic search rankings, boosting lead generation,
          and increasing profits. We consider ourselves the top SEO company in
          India, with the potential to transform your website into a powerful
          marketing tool, driving sales and capturing online attention
          effectively.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TopDiscription;
