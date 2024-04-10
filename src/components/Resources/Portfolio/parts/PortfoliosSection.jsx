import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import service1 from "../../../../assests/service1.webp";
import service2 from "../../../../assests/service2.webp";
import service3 from "../../../../assests/service3.webp";
import service4 from "../../../../assests/service4.webp";
import service5 from "../../../../assests/service5.webp";
import service6 from "../../../../assests/service6.webp";
import portfolioImg1 from "../../../../assests/Portfolio/Dharan-1536x691 (1).jpg";
import portfolioImg2 from "../../../../assests/Portfolio/Wooden-Owl-Design-Studio-1536x691.jpg";
import portfolioImg3 from "../../../../assests/Portfolio/Silent-Alley-1536x691.jpg";
import portfolioImg4 from "../../../../assests/Portfolio/Evolve-Universal-Solutions-1536x691.jpg";
import portfolioImg5 from "../../../../assests/Portfolio/Sanatna-1536x691.jpg";
import portfolioImg6 from "../../../../assests/Portfolio/northparkflorist-1536x691.jpg";
import portfolioImg7 from "../../../../assests/Portfolio/Ayudhi-1536x691.jpg";
import portfolioImg8 from "../../../../assests/Portfolio/Porter-1536x691.jpg";
import portfolioImg9 from "../../../../assests/Portfolio/Carryfast-1536x691 (1).jpg";
import portfolioImg10 from "../../../../assests/Portfolio/Gunjanapps-1536x691.jpg";
import portfolioImg11 from "../../../../assests/Portfolio/creativehomes-1536x691.jpg";
import portfolioImg12 from "../../../../assests/Portfolio/Wac-Bleading-1536x691.jpg";
import portfolioImg13 from "../../../../assests/Portfolio/Myglobalcityzenship-1536x691.jpg";
import portfolioImg14 from "../../../../assests/Portfolio/The-t-shirtman-1536x691.jpg";
import portfolioImg15 from "../../../../assests/Portfolio/Dharan-1536x691 (1).jpg";
import portfolioImg16 from "../../../../assests/Portfolio/ADHD-Clinics-1536x691.jpg";
import portfolioImg17 from "../../../../assests/Portfolio/Klinik-1536x691.jpg";
import portfolioImg18 from "../../../../assests/Portfolio/scrapshalla-1536x691.jpg";
import portfolioImg19 from "../../../../assests/Portfolio/Dharan-1536x691 (1).jpg";
import portfolioImg20 from "../../../../assests/Portfolio/Wooden-Owl-Design-Studio-1536x691.jpg";
import portfolioImg21 from "../../../../assests/Portfolio/Moodstooore-1536x691.jpg";
import portfolioImg22 from "../../../../assests/Portfolio/Ekantfoundation-1536x691.jpg";
import portfolioImg23 from "../../../../assests/Portfolio/Ladihya-1536x691.jpg";
import portfolioImg24 from "../../../../assests/Portfolio/Elisa-1536x691.jpg";
import portfolioImg25 from "../../../../assests/Portfolio/XM-Trade-1536x691.jpg";
import portfolioImg26 from "../../../../assests/Portfolio/Jai-Baba-Gi-Talk-1536x691.jpg";
import portfolioImg27 from "../../../../assests/Portfolio/Iroomit-1536x691.jpg";
import portfolioImg28 from "../../../../assests/Portfolio/mfine-1536x691.jpg";
import portfolioImg29 from "../../../../assests/Portfolio/SmartDiet-Planner-Weight-Loss-1536x691.jpg";
import portfolioImg30 from "../../../../assests/Portfolio/Bharat-Agri-APP-1536x691.jpg";

const categories = [
  "All",
  "Web Development",
  "Social Media Marketing",
  "ASO",
  "SEO",
];

const portfolios = [
  {
    title: "Dharan Jaipur",
    discription:
      "Dhãran is a comfort clothing brand that stands for the love of Indian craftsmanship and dedicated admiration towards ethical fashion. Based in the Pink city of India, it is a fond effort to sustain traditional crafts in the dynamic world.",
    categories: ["Web Development"],
    image: portfolioImg1,
  },
  {
    title: "Wooden Owl Design",
    discription:
      "Wooden Owl Design Studio: Where artistry in interior and furniture design meets functionality in Jaipur. Experience bespoke elegance and innovative craftsmanship tailored to your style.",
    categories: ["Web Development"],
    image: portfolioImg2,
  },
  {
    title: "Silent Alley",
    discription:
      "SilentAlly is an initiative to help students by helping them with career guidance and skill training with placement assistance. We aim to develop the required skills in our students to help them become the best fit for the industries.",
    categories: ["Web Development"],
    image: portfolioImg3,
  },
  {
    title: "Evolve Universal Solutions",
    discription:
      "Evolve Universal Solutions brings a sparkle to London homes and businesses with expert cleaning services, ensuring spotless results with our professional team for both one-time and regular cleanings",
    categories: ["Web Development"],
    image: portfolioImg4,
  },
  {
    title: "Sanatan Seva Sansthan",
    discription:
      "Sanatan Seva Sansthan is a sanctuary of tradition and spiritual learning, offering authentic puja essentials and cultural enrichment. It's a haven for those seeking tranquility and timeless wisdom in their devotional practice",
    categories: ["Web Development"],
    image: portfolioImg5,
  },
  {
    title: "Northpark Florist",
    discription:
      "North Park Florist in Buffalo offers expertly crafted and hand-delivered floral arrangements for all occasions, combining online convenience with local artisanal quality",
    categories: ["Web Development"],
    image: portfolioImg6,
  },
  {
    title: "Ayudhi Care Foundation",
    discription:
      "Embracing Hearts, Changing Lives. Join our journey of compassion and empowerment at Ayudhi Care Foundation. Together, we're crafting stories of hope, one act of kindness at a time. Let's make a brighter world together. Explore our mission at ayudhicarefoundation.org.",
    categories: ["Social Media Marketing"],
    image: portfolioImg7,
  },
  {
    title: "Porter",
    discription:
      "Porter started off as a platform to address inefficiencies in the last mile logistics sector and transform the way goods are transported around cities, enabling lakhs of businesses move anything on-demand.",
    categories: ["Web Development"],
    image: portfolioImg8,
  },
  {
    title: "Carry Fast Logistics",
    discription:
      "Carryfast offers the entire scale of 3PL services which includes Express Distribution, Inventory Management and Order Processing, Warehousing, Quality Control, Packaging and Labelling etc.",
    categories: ["Social Media Marketing"],
    image: portfolioImg9,
  },
  {
    title: "Gunjan Apps Studios",
    discription:
      "GunjanApps Studios is a new child’s playful learning companion. Their goal is to provide meaningful screen-time to millions of children all across the planet.",
    categories: ["Social Media Marketing"],
    image: portfolioImg10,
  },
  {
    title: "Creative Homes",
    discription:
      "Creative Homes, led by Architect Y. Sree Devi, excels in crafting innovative, high-quality custom homes focused on eco-friendly and sustainable design.",
    categories: ["Social Media Marketing"],
    image: portfolioImg11,
  },
  {
    title: "WAC Welding",
    discription:
      "WAC Welding provides a leading-edge wireless remote control for welding, offering easy operation up to 2000 feet, fast setup, and compatibility with major welding units",
    categories: ["Social Media Marketing"],
    image: portfolioImg12,
  },
  {
    title: "MY Global Citizenship",
    discription:
      "At MGC, you work alongside certified IMC Immigration consultants and have free access to our network of international legal, investment and immigration partners.",
    categories: ["SEO"],
    image: portfolioImg13,
  },
  {
    title: "The T Shirt Men",
    discription:
      "The T Shirt Man offers fast, quality service for a variety of needs, from business branding to personal style. Trusted for their speedy customization and extensive range, they bring your designs to life with exceptional attention to detail​",
    categories: ["SEO"],
    image: portfolioImg14,
  },
  {
    title: "Dharan Jaipur",
    discription:
      "Dhãran is a comfort clothing brand that stands for the love of Indian craftsmanship and dedicated admiration towards ethical fashion. Based in the Pink city of India, it is a fond effort to sustain traditional crafts in the dynamic world",
    categories: ["SEO"],
    image: portfolioImg15,
  },
  {
    title: "ADHD Clinics",
    discription:
      "ADHD Clinics UK offers pioneering private online ADHD and autism assessments and treatments, blending telepsychiatry with affordable, personalized care to enhance mental well-being.",
    categories: ["SEO"],
    image: portfolioImg16,
  },
  {
    title: "Klinik Europe",
    discription:
      "Klinik Europe, a leading plastic surgery clinic in Turkey, offers top-notch, personalized surgical experiences with a commitment to exceptional results and patient care since 2018",
    categories: ["SEO"],
    image: portfolioImg17,
  },
  {
    title: "Scrapshala",
    discription:
      "Presenting the transformative journey of Scrapshala, a women-led conscious Indian brand focused on sustainable handicrafts. Emphasizing their mission to revive traditional Indian craftsmanship through upcycling",
    categories: ["SEO"],
    image: portfolioImg18,
  },
  {
    title: "Dharan Jaipur",
    discription:
      "Dhãran is a comfort clothing brand that stands for the love of Indian craftsmanship and dedicated admiration towards ethical fashion. Based in the Pink city of India, it is a fond effort to sustain traditional crafts in the dynamic world.",
    categories: ["SEO"],
    image: portfolioImg19,
  },
  {
    title: "Wooden Owl Design",
    discription:
      "Wooden Owl Design Studio: Where artistry in interior and furniture design meets functionality in Jaipur. Experience bespoke elegance and innovative craftsmanship tailored to your style.",
    categories: [],
    image: portfolioImg20,
  },
  {
    title: "Mood Store",
    discription:
      "Highlighting the digital transformation of Mooodstore, a Saudi Arabian enterprise specializing in the latest electronic products. Focus on the store's commitment to offering cutting-edge technology and consumer electronics.",
    categories: [],
    image: portfolioImg21,
  },
  {
    title: "Ekant Foundation",
    discription:
      "Ekaant Foundation is dedicated to making mental health care accessible, offering diverse services like psychotherapy, crisis intervention, and educational workshops, aimed at building a more empathetic and inclusive society",
    categories: [],
    image: portfolioImg22,
  },
  {
    title: "Ladihya",
    discription:
      "LA DIHYA is an Amazigh warrior queen who reigned over the Berbers in the 7th century and fought against the Umayyads during the Islamic expansion in North Africa.",
    categories: [],
    image: portfolioImg23,
  },
  {
    title: "Elisa fashion",
    discription:
      "A hub of exclusive teenage fashion, offering a wide range of trendy clothing for girls and boys, including popular brands like American Outfitters, Bonton, and Chloé. Dive into our stylish collection where elegance meets youthful vibrancy",
    categories: [],
    image: portfolioImg24,
  },
  {
    title: "XM Trade",
    discription:
      "XM™ offers clients a user-friendly app, which enables you to trade the international markets from 1 login using either a demo or a live account.",
    categories: ["ASO"],
    image: portfolioImg25,
  },
  {
    title: "Jai Baba Gi Talk",
    discription:
      "Jai Baba Gi Talk is the best astrology app for all kind Astro solutions. Now connect with 500+ of India’s best astrologers.",
    categories: ["ASO"],
    image: portfolioImg26,
  },
  {
    title: "IRoom it",
    discription:
      "iROOMit is more than a Roommate Finder & Rooms to Rent listing site/app, helping connect between people, whatever their situation may be.",
    categories: ["ASO"],
    image: portfolioImg27,
  },
  {
    title: "Mfine",
    discription:
      "MFine offers convenient online doctor consultations and at-home lab test bookings, providing easy access to quality healthcare services",
    categories: ["ASO"],
    image: portfolioImg28,
  },
  {
    title: "Smart Diet Planner",
    discription:
      "SmartDiet Planner, an AI-powered diet planning app, to maximize their app's performance through App Store Optimization (ASO) and targeted app install campaigns.",
    categories: ["ASO"],
    image: portfolioImg29,
  },
  {
    title: "Bharat Agri APP",
    discription:
      "BharatAgri app offers personalized farming solutions with a custom crop calendar, expert agri doctor support, and discounts on quality agri inputs, aimed at enhancing farm productivity in India.",
    categories: ["ASO"],
    image: portfolioImg30,
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
            flexWrap={"wrap"}
            height={"100%"}
            justifyContent={"center"}
          >
            {categories.map((category, index) => (
              <Stack
                key={index}
                width={{
                  xs: "100%",
                  lg: "auto",
                }}
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
                  textAlign={"center"}
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
              width={{
                xs: "100%",
                lg: "90%",
              }}
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
                  width={{
                    xs: "100%",
                    md: "45%",
                    lg: "30%",
                  }}
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
                        style={{ width: "100%", height: "150px" }}
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
