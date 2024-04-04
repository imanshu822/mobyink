import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import service1 from "../../../../assests/service1.webp";
import service2 from "../../../../assests/service2.webp";
import service3 from "../../../../assests/service3.webp";
import service4 from "../../../../assests/service4.webp";
import service5 from "../../../../assests/service5.webp";
import service6 from "../../../../assests/service6.webp";

const categories = [
  "All",
  "Web Development",
  "Social Media Marketing",
  "Google Ads",
  "ASO",
  "SEO",
];

const portfolios = [
  {
    title: "Dharan Jaipur",
    discription:
      "Dhãran is a comfort clothing brand that stands for the love of Indian craftsmanship and dedicated admiration towards ethical fashion. Based in the Pink city of India, it is a fond effort to sustain traditional crafts in the dynamic world.",
    categories: ["Web Development"],
    image: service1,
  },
  {
    title: "Wooden Owl Design",
    discription:
      "Wooden Owl Design Studio: Where artistry in interior and furniture design meets functionality in Jaipur. Experience bespoke elegance and innovative craftsmanship tailored to your style.",
    categories: ["Web Development"],
    image: service2,
  },
  {
    title: "Silent Alley",
    discription:
      "SilentAlly is an initiative to help students by helping them with career guidance and skill training with placement assistance. We aim to develop the required skills in our students to help them become the best fit for the industries.",
    categories: [
      "Google Ads",
      "SEO",
      "Web Development",
      "Social Media Marketing",
    ],
    image: service3,
  },
  {
    title: "Evolve Universal Solutions",
    discription:
      "Evolve Universal Solutions brings a sparkle to London homes and businesses with expert cleaning services, ensuring spotless results with our professional team for both one-time and regular cleanings",
    categories: ["Web Development"],
    image: service4,
  },
  {
    title: "Sanatan Seva Sansthan",
    discription:
      "Sanatan Seva Sansthan is a sanctuary of tradition and spiritual learning, offering authentic puja essentials and cultural enrichment. It's a haven for those seeking tranquility and timeless wisdom in their devotional practice",
    categories: ["ASO"],
    image: service5,
  },
  {
    title: "Northpark Florist",
    discription:
      "North Park Florist in Buffalo offers expertly crafted and hand-delivered floral arrangements for all occasions, combining online convenience with local artisanal quality",
    categories: [
      "Google Ads",
      "SEO",
      "Web Development",
      "Social Media Marketing",
    ],
    image: service6,
  },
  {
    title: "Ayudhi Care Foundation",
    discription:
      "Embracing Hearts, Changing Lives. Join our journey of compassion and empowerment at Ayudhi Care Foundation. Together, we're crafting stories of hope, one act of kindness at a time. Let's make a brighter world together. Explore our mission at ayudhicarefoundation.org.",
    categories: ["Web Development"],
    image: service1,
  },
  {
    title: "Porter",
    discription:
      "Porter started off as a platform to address inefficiencies in the last mile logistics sector and transform the way goods are transported around cities, enabling lakhs of businesses move anything on-demand.",
    categories: ["Web Development"],
    image: service2,
  },
  {
    title: "Carry Fast Logistics",
    discription:
      "Carryfast offers the entire scale of 3PL services which includes Express Distribution, Inventory Management and Order Processing, Warehousing, Quality Control, Packaging and Labelling etc.",
    categories: ["Web Development"],
    image: service3,
  },
  {
    title: "Gunjan Apps Studios",
    discription:
      "GunjanApps Studios is a new child’s playful learning companion. Their goal is to provide meaningful screen-time to millions of children all across the planet.",
    categories: [
      "Google Ads",
      "SEO",
      "Web Development",
      "Social Media Marketing",
    ],
    image: service4,
  },
];

const PortfoliosSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredPortfolios =
    selectedCategory === "All"
      ? portfolios
      : portfolios.filter((portfolio) =>
          portfolio.categories.includes(selectedCategory)
        );

  return (
    <Stack width={"100%"}>
      <Stack width={"90%"} margin={"0 auto"}>
        <Stack>
          <Stack
            margin={"0 auto"}
            width={"95%"}
            direction={"row"}
            height={"60px"}
            justifyContent={"center"}
          >
            {categories.map((category, index) => (
              <Stack
                key={index}
                height={"100%"}
                justifyContent={"center"}
                bgcolor={selectedCategory === category ? "#0D6EFD" : "white"}
                color={selectedCategory === category ? "white" : "#0D6EFD"}
                sx={{
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#0D6EFD",
                    cursor: "pointer",
                  },
                }}
                onClick={() => handleCategoryClick(category)}
              >
                <Typography
                  p={"14px 43px"}
                  boxSizing={"border-box"}
                  fontSize={"20px"}
                  fontWeight={"300"}
                >
                  {category}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <Stack>
            <Stack
              width={"90%"}
              margin={"0 auto"}
              direction={"row"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              gap={5}
            >
              {filteredPortfolios.map((portfolio, index) => (
                <Stack
                  key={index}
                  mt={5}
                  width={"30%"}
                  boxShadow={"0 0 10px 0 rgba(0,0,0,.15)"}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Stack p={2} boxSizing={"border-box"} gap={3}>
                    <Stack>
                      <img
                        src={portfolio.image}
                        alt={portfolio.title}
                        style={{ width: "100%" }}
                      />
                    </Stack>
                    <Stack gap={1}>
                      <Typography
                        fontSize={"20px"}
                        textAlign={"center"}
                        fontWeight={"bold"}
                      >
                        {portfolio.title}
                      </Typography>
                      <Typography textAlign={"center"} color={"#767a86"}>
                        {portfolio.discription}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PortfoliosSection;
