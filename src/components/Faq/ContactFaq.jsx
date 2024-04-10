import React from "react";
// import "./Faq.css"; // Import a CSS file for custom styling
import ContactCustomFaq from "./ContactCustomFaq";
import { Box, Typography } from "@mui/material";

const data = {
  rows: [
    {
      title: `1.What are your two primary services?`,
      content: (
        <p>
          APP Marketing Services -Our first primary service is APP Marketing,
          strategically crafted to amplify the visibility and engagement of your
          mobile applications. This service is dedicated to maximizing app
          downloads and enhancing user interaction. SEO Services -Our second
          primary service is SEO Services, meticulously designed to boost your
          online presence by optimizing search engine rankings. This offering
          focuses on driving targeted traffic to your digital assets, ensuring a
          strong and sustainable online footprint
        </p>
      ),
    },
    {
      title: "2.What other services do you offer?",
      content:
        "In addition to our primary services, we provide a comprehensive suite of 360-degree Digital Marketing services. This includes but is not limited to social media management, content marketing, paid advertising, and web development. We strive to offer a holistic approach to meet diverse digital marketing needs.",
    },
    {
      title: "3.What business problems do you solve?",
      content: `We specialize in solving the challenges businesses face in the digital landscape. From increasing app downloads to improving search engine rankings, our services address key pain points, ultimately driving growth and maximizing online success for our clients.
`,
    },
    {
      title: "4.What are your core services?",
      content: (
        <p>
          Our core services revolve around APP Marketing and SEO. APP Marketing
          focuses on optimizing visibility and engagement for mobile
          applications, while SEO Services aim to enhance website rankings on
          search engines, ensuring a strong online presence.
        </p>
      ),
    },
    {
      title: "5.How are you different?",
      content: `What sets us apart is our commitment to a 360-degree approach in Digital Marketing. We don't just focus on individual components; we integrate various strategies to create a cohesive and effective digital marketing plan tailored to your unique goals. Our emphasis on innovation and staying abreast of industry trends ensures that our clients benefit from cutting-edge solutions.`,
    },
    {
      title: "6.How do you maximize responsiveness?",
      content: `We understand the importance of responsiveness in the digital realm. Our team is dedicated to providing swift and effective responses to client inquiries, feedback, and evolving market trends. Regular communication channels, quick turnaround times, and proactive problem-solving are ingrained in our client-centric approach.`,
    },
    {
      title: "7.What is your industry focus?",
      content: `While our services cater to a broad spectrum of industries, we excel in adapting our strategies to suit the unique needs of each client. Our versatile expertise allows us to work with businesses across various sectors, ensuring a tailored and effective approach that aligns with industry-specific challenges and opportunities.`,
    },
  ],
};

const config = {
  animate: true,
  tabFocus: true,
};

const ContactFaq = () => {
  return (
    <Box pt={5}>
      <Typography
        marginTop={"10px"}
        fontWeight={"bold"}
        color={"#052973"}
        display={"flex"}
        justifyContent={"Center"}
        textAlign={"center"}
        sx={{
          fontSize: { xs: "20px", sm: "30px", md: "45px" },
          margin: {
            xs: "7px",
            sm: "15px",
            lg: "0px",
          },
        }}
      >
        Frequently Asked Question
      </Typography>
      <ContactCustomFaq data={data} />
    </Box>
  );
};

export default ContactFaq;
