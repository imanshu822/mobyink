import React from "react";
// import "./Faq.css"; // Import a CSS file for custom styling
import ContactCustomFaq from "./ContactCustomFaq";
import { Stack, Typography } from "@mui/material";

const data = {
  rows: [
    {
      title: `What are your two primary services?`,
      content: (
        <p>
          Users are expected to treat the pod and its contents with care. Any
          damages or malfunctions should be reported immediately through the
          app.
        </p>
      ),
    },
    {
      title: "What other services do you offer?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "What business problems do you solve?",
      content: `Cancellation Time Frame: Cancellations must be made at least 1 hour before the scheduled booking time.  `,
    },
    {
      title: "What are your core services?",
      content: (
        <p>
          Users are expected to treat the pod and its contents with care. Any
          damages or malfunctions should be reported immediately through the
          app.
        </p>
      ),
    },
    {
      title: "How are you different?",
      content: `Cancellation Time Frame: Cancellations must be made at least 1 hour before the scheduled booking time.  `,
    },
    {
      title: "How do you maximize responsiveness?",
      content: `Cancellation Time Frame: Cancellations must be made at least 1 hour before the scheduled booking time.  `,
    },
    {
      title: "What is your industry focus?",
      content: `Cancellation Time Frame: Cancellations must be made at least 1 hour before the scheduled booking time.  `,
    },
  ],
};

const config = {
  animate: true,
  tabFocus: true,
};

const ContactFaq = () => {
  return (
    <>
      <Stack>
        <Stack
          width={{
            xs: "90%",
            lg: "80%",
          }}
          margin={"0 auto"}
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
          <Typography
            marginTop={"10px"}
            fontWeight={"400"}
            display={"flex"}
            justifyContent={"Center"}
            textAlign={"center"}
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "35px" },
            }}
          >
            Frequently Asked Question
          </Typography>
          <ContactCustomFaq data={data} />
        </Stack>
      </Stack>
    </>
  );
};

export default ContactFaq;
