import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img2 from "../../../../../assests/seo_page_img_2.jpeg";
const ImgSection = () => {
  return (
    <Stack width={"100%"} bgcolor={"#EBF9FD"}>
      <Stack
        width={{
          xs: "95%",
          lg: "80%",
        }}
        margin={"0 auto"}
      >
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          p={4}
          boxSizing={"border-box"}
          gap={5}
        >
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
          >
            <Box
              component="img"
              width={"100%"}
              height={"100%"}
              src={img2}
              borderRadius={"8px"}
              boxShadow={"2px 18px 25px 10px #E5E5E5"}
            />
          </Stack>
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
            gap={2}
          >
            <Typography
              fontSize={"20px"}
              fontWeight={"600"}
              pl={{
                xs: 0,
                lg: 2,
              }}
              boxSizing={"border-box"}
            >
              Navigating the Digital Landscape with the Top SEO Company in
              Jaipur
            </Typography>
            <Typography
              fontSize={"18px"}
              fontWeight={"300"}
              pl={{
                xs: 0,
                lg: 2,
              }}
              boxSizing={"border-box"}
              textAlign={"justify"}
            >
              Search engine optimization is a combination of creativity and the
              science of enhancing a website’s visibility on search engines. In
              today’s world, being easy to find online is super important for
              businesses. That’s where a top SEO company in Jaipur like Mobyink
              comes in. We’re experts at helping your website do better in
              online searches, so more people can find you. Our team knows how
              to navigate the digital world, helping your website climb higher
              in search rankings. This means your online presence can grow and
              succeed, even in a constantly changing online world. Whether you
              run a business, create content, or just have a website, connecting
              with Mobyink – the best SEO company in Jaipur can make a big
              difference in how well you do online.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
