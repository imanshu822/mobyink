import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img1 from "../../../../../assests/seo_page_img_1.jpeg";
import img2 from "../../../../../assests/seo_page_img_2.jpeg";
import img3 from "../../../../../assests/seo_page_img_3.jpeg";
const ImgSection = () => {
  return (
    <Stack width={"100%"} bgcolor={"#EBF9FD"}>
      <Stack width={"80%"} margin={"0 auto"}>
        <Stack direction={"row"} p={4} boxSizing={"border-box"} gap={5}>
          <Stack width={"50%"}>
            <Box
              component="img"
              width={"100%"}
              height={"100%"}
              src={img1}
              borderRadius={"8px"}
              boxShadow={"7px -11px 25px 10px #FFF"}
            />
          </Stack>
          <Stack width={"50%"}>
            <Typography
              fontSize={"18px"}
              fontWeight={"300"}
              pl={2}
              boxSizing={"border-box"}
            >
              Mobyink, an SEO company in Noida, uses diverse techniques to
              enhance your website’s search rankings effectively. First, we
              conduct strategic keyword optimization, identifying relevant
              keywords for your business and seamlessly incorporating them into
              your website’s content, meta tags, and other elements. This
              improves its relevance to search queries and increases the
              likelihood of appearing in search results. Mobyink prioritizes
              technical optimizations to ensure your website meets search engine
              standards for crawlability, speed, and mobile-friendliness,
              enhancing user experience and search engine visibility. We
              enriches your website’s content to engage your target audience,
              encouraging longer visits and positive interactions. Through these
              comprehensive strategies, Mobyink, the best SEO company in Noida
              effectively boosts the website’s rank, increasing its visibility
              and driving organic traffic, ultimately leading to business growth
              and success in the competitive online landscape.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
