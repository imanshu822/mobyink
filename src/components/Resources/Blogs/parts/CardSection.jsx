import { Stack, Typography, Button, Box } from "@mui/material";
import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import service1 from "../../../../assests/service1.webp";
import service2 from "../../../../assests/service2.webp";
import service3 from "../../../../assests/service3.webp";
import service4 from "../../../../assests/service4.webp";
import service5 from "../../../../assests/service5.webp";
import service6 from "../../../../assests/service6.webp";
const CardSection = () => {
  // Define an array of blog data objects
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [blogsToShow, setBlogsToShow] = useState(9);

  const blogData = [
    {
      id: 1,
      img: service1,
      category: "Technology",
      title: "Introduction to React",
      content:
        "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    },
    {
      id: 2,
      img: service2,
      category: "Travel",
      title: "Exploring Europe",
      content:
        "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It comprises the westernmost part of Eurasia and is bordered by the Arctic Ocean to the north.",
    },
    {
      id: 3,
      img: service3,
      category: "Food",
      title: "Delicious Italian Cuisine",
      content:
        "Italian cuisine is known for its regional diversity, abundance of difference in taste, and is one of the most popular in the world, with influences abroad.",
    },
    {
      id: 4,
      img: service4,
      category: "Technology",
      title: "The Future of Artificial Intelligence",
      content:
        "Artificial intelligence (AI) is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals.",
    },
    {
      id: 5,
      img: service5,
      category: "Science",
      title: "The Wonders of the Cosmos",
      content:
        "The cosmos is everything in existence, including the stars, planets, galaxies, the contents of intergalactic space, and all matter and energy.",
    },
    {
      id: 6,
      img: service6,
      category: "Health",
      title: "Staying Healthy in a Busy World",
      content:
        "Maintaining good health requires effort and discipline, especially in a fast-paced world filled with various distractions and stressors.",
    },
    {
      id: 7,
      img: service1,
      category: "Technology",
      title: "The Rise of Machine Learning",
      content:
        "Machine learning is a subset of artificial intelligence that focuses on the development of computer programs that can learn and improve from experience.",
    },
    {
      id: 8,
      img: service2,
      category: "Travel",
      title: "Discovering South America",
      content:
        "South America is a continent in the Western Hemisphere, mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere.",
    },
    {
      id: 9,
      img: service3,
      category: "Food",
      title: "The Art of Sushi Making",
      content:
        "Sushi is a Japanese dish consisting of cooked vinegared rice combined with other ingredients, such as seafood, vegetables, and occasionally tropical fruits.",
    },
    {
      id: 10,
      img: service4,
      category: "Technology",
      title: "The Impact of Blockchain Technology",
      content:
        "Blockchain technology is a decentralized digital ledger system that records transactions across multiple computers in a way that ensures the security, transparency, and immutability of the data.",
    },
    {
      id: 11,
      img: service5,
      category: "Science",
      title: "Exploring the Depths of the Ocean",
      content:
        "The ocean is a vast and largely unexplored ecosystem that covers more than 70% of the Earth's surface and contains a rich diversity of marine life.",
    },
    {
      id: 12,
      img: service6,
      category: "Health",
      title: "The Importance of Mental Health",
      content:
        "Mental health is a state of well-being in which an individual realizes their own abilities, can cope with the normal stresses of life, can work productively, and is able to make a contribution to their community.",
    },
    {
      id: 13,
      img: service1,
      category: "Technology",
      title: "The Evolution of Mobile Technology",
      content:
        "Mobile technology has undergone rapid evolution over the past few decades, leading to the development of smartphones and other handheld devices that have transformed the way we communicate, work, and interact with the world.",
    },
    {
      id: 14,
      img: service2,
      category: "Travel",
      title: "Journey Through Southeast Asia",
      content:
        "Southeast Asia is a subregion of Asia, consisting of the countries that are geographically south of China, east of India, and north of Australia.",
    },
    {
      id: 15,
      img: service3,
      category: "Food",
      title: "Exploring Mediterranean Cuisine",
      content:
        "Mediterranean cuisine is the foods and methods of preparation by people of the Mediterranean Basin region. The cuisine varies by country and region, but is largely based on fresh, seasonal ingredients and simple cooking techniques.",
    },
    {
      id: 16,
      img: service4,
      category: "Technology",
      title: "The Future of Virtual Reality",
      content:
        "Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world. It immerses users in a three-dimensional environment and allows them to interact with the virtual environment in a realistic way.",
    },
    {
      id: 17,
      img: service5,
      category: "Science",
      title: "Unraveling the Mysteries of the Universe",
      content:
        "The universe is a vast expanse of space and time, filled with countless galaxies, stars, planets, and other celestial bodies. Scientists continue to explore and study the universe to understand its origins, evolution, and ultimate fate.",
    },
    {
      id: 18,
      img: service6,
      category: "Health",
      title: "The Benefits of Regular Exercise",
      content:
        "Regular exercise has numerous benefits for physical and mental health. It can improve cardiovascular health, strengthen muscles and bones, boost mood and mental well-being, and reduce the risk of chronic diseases such as heart disease, diabetes, and obesity.",
    },
    {
      id: 19,
      img: service1,
      category: "Technology",
      title: "The Role of Artificial Intelligence in Healthcare",
      content:
        "Artificial intelligence (AI) is increasingly being used in healthcare to improve patient outcomes, streamline administrative processes, and assist medical professionals in diagnosis and treatment planning.",
    },
    {
      id: 20,
      img: service2,
      category: "Travel",
      title: "Adventures in Africa",
      content:
        "Africa is the world's second-largest and second-most populous continent, covering more than 30 million square kilometers and home to a diverse array of cultures, landscapes, and wildlife.",
    },
    {
      id: 21,
      img: service3,
      category: "Food",
      title: "The Rich Flavors of Indian Cuisine",
      content:
        "Indian cuisine encompasses a wide variety of regional and traditional dishes known for their rich flavors, aromatic spices, and vibrant colors. From curry to tandoori, Indian food offers a culinary journey like no other.",
    },
    {
      id: 22,
      img: service4,
      category: "Technology",
      title: "Advancements in Renewable Energy",
      content:
        "Renewable energy technologies, such as solar, wind, and hydroelectric power, are increasingly being adopted as alternatives to fossil fuels to reduce greenhouse gas emissions and combat climate change.",
    },
    {
      id: 23,
      img: service5,
      category: "Science",
      title: "The Fascinating World of Genetics",
      content:
        "Genetics is the study of genes, heredity, and genetic variation in living organisms. It plays a crucial role in understanding human health and disease, as well as in fields such as agriculture, forensics, and evolutionary biology.",
    },
    {
      id: 24,
      img: service6,
      category: "Health",
      title: "The Importance of Sleep for Overall Well-being",
      content:
        "Adequate sleep is essential for overall health and well-being. It plays a critical role in various physiological processes, including brain function, hormone regulation, immune system function, and metabolism.",
    },
    {
      id: 25,
      img: service1,
      category: "Technology",
      title: "The Impact of 5G Technology on Communication",
      content:
        "5G technology promises faster data speeds, lower latency, and greater connectivity, revolutionizing the way we communicate, work, and interact with technology.",
    },
    {
      id: 26,
      img: service2,
      category: "Travel",
      title: "Exploring the Beauty of Australia",
      content:
        "Australia is a vast and diverse country known for its stunning natural landscapes, vibrant cities, and unique wildlife, making it a popular destination for travelers from around the world.",
    },
    {
      id: 27,
      img: service3,
      category: "Food",
      title: "Traditional Japanese Cuisine",
      content:
        "Japanese cuisine is renowned for its emphasis on fresh, seasonal ingredients, meticulous preparation techniques, and beautiful presentation. From sushi to ramen, Japanese food offers a culinary experience like no other.",
    },
    {
      id: 28,
      img: service4,
      category: "Technology",
      title: "The Rise of E-Commerce",
      content:
        "E-commerce has revolutionized the way we shop, allowing consumers to browse and purchase products online from the comfort of their homes. It has also transformed the retail industry, leading to the growth of online marketplaces and digital storefronts.",
    },
    {
      id: 29,
      img: service5,
      category: "Science",
      title: "The Exploration of Mars",
      content:
        "Mars has long captured the imagination of scientists and space enthusiasts alike. Exploration missions to the Red Planet have uncovered valuable insights into its geology, climate, and potential for supporting life.",
    },
    {
      id: 30,
      img: service6,
      category: "Health",
      title: "The Benefits of Meditation for Mental Health",
      content:
        "Meditation is a practice that has been used for centuries to promote relaxation, reduce stress, and enhance overall well-being. Research has shown that regular meditation can have profound effects on mental health, including reducing symptoms of anxiety and depression.",
    },
  ];

  const handleShowMoreBlogs = () => {
    setBlogsToShow((prevBlogsToShow) => prevBlogsToShow + 9);
  };

  return (
    <Stack width={"100%"} mt={10} boxSizing={"border-box"}>
      <Stack width={"80%"} margin={"0 auto"}>
        <Stack>
          <Typography fontSize={"40px"} textAlign={"center"}>
            Blogs
          </Typography>
        </Stack>
        <Stack
          mt={5}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={5}
        >
          {blogData
            .slice(0, showAllBlogs ? blogData.length : blogsToShow)
            .map((blog) => (
              <Stack width={"30%"}>
                <Link
                  key={blog.id} // Add key prop to the Link component
                  to={`/blog/${blog.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Stack
                    boxShadow={"0 0 10px 0 rgba(0,0,0,.15)"}
                    height={"100%"}
                    borderRadius={"10px"}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <Stack
                      height={"100%"}
                      p={2}
                      justifyContent={"space-between"}
                      gap={1}
                    >
                      <Stack height={"50%"}>
                        <Box
                          component="img"
                          width={"100%"}
                          height={"100%"}
                          src={blog.img}
                        />
                      </Stack>
                      <Stack height={"50%"}>
                        <Stack gap={2}>
                          <Typography
                            fontSize={"12px"}
                            color={"black"} // Move color style here
                          >
                            {blog.category}
                          </Typography>
                          <Typography
                            fontSize={"24px"}
                            fontWeight={"bold"}
                            color={"black"} // Move color style here
                          >
                            {blog.title}
                          </Typography>
                          <Typography color={"black"}>
                            {blog.content.length > 150
                              ? blog.content.slice(0, 150) + "..."
                              : blog.content}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack direction={"row"} gap={0.5}>
                        <Typography
                          alignSelf={"center"}
                          fontSize={"14px"}
                          fontWeight={"bold"}
                        >
                          Read More
                        </Typography>
                        <ArrowRightAltIcon />
                      </Stack>
                    </Stack>
                  </Stack>
                </Link>
              </Stack>
            ))}
        </Stack>
        {!showAllBlogs && blogsToShow < blogData.length && (
          <Stack
            margin={"0 auto"}
            mt={10}
            width={"200px"}
            bgcolor={"#0D6EFD"}
            borderRadius={"8px"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#0B5ED7",
              },
            }}
          >
            <Typography
              p={2}
              color={"white"}
              textAlign={"center"}
              variant="contained"
              onClick={handleShowMoreBlogs}
            >
              Show More Blogs
            </Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default CardSection;
