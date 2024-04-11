import { Stack, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import bgImg from "../../../assests/asset 27.svg";
import contactUsImg from "../../../assests/Here-to-Help-01-01.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Budget: "",
    Message: "",
  });
  const [message, setMessage] = useState(""); // State variable for the message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formDatab = new FormData(e.target);
    fetch(
      "https://script.google.com/macros/s/AKfycbyMr8veKnjMwXB_vJJ1zaOvw7EEePfkd53-_Vq7-j6-sdHAOytPsto7nVLRNH2nuNjE/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setMessage(
          "Your message has been sent to our team. We will connect with you soon."
        );
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Budget: "",
          Message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setMessage("An error occurred. Please try again later.");
      });
  }

  return (
    <Stack
      width={"100%"}
      margin={"0 auto"}
      pt={{
        xs: 3,
        lg: 10,
      }}
      pb={{
        xs: 3,
        lg: 10,
      }}
    >
      <Stack
        width={"85%"}
        margin={"0 auto"}
        borderRadius={"10px"}
        border={"1px solid white"}
        bgcolor={"#172063"}
      >
        <Stack
          margin={"40px auto"}
          width={"80%"}
          direction={"row"}
          gap={10}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack width={"50%"} justifyContent={"right"}>
            <Typography
              color={"white"}
              textAlign={"right"}
              fontSize={{
                xs: "1rem",
                lg: "1.5rem",
              }}
            >
              Call Us at :-
            </Typography>
            <Typography
              fontSize={{
                xs: "1rem",
                lg: "1.5rem",
              }}
              color={"white"}
              textAlign={"right"}
            >
              +91-9001386001
            </Typography>
          </Stack>
          <Stack width={"50%"}>
            <Typography
              fontSize={{
                xs: "1rem",
                lg: "1.5rem",
              }}
              color={"white"}
            >
              Email us :-
            </Typography>
            <Typography
              fontSize={{
                xs: "1rem",
                lg: "1.5rem",
              }}
              color={"white"}
            >
              info@mobyink.com
            </Typography>
          </Stack>
        </Stack>
        <Stack
          zIndex={1}
          boxSizing={"border-box"}
          p={3}
          direction={{
            xs: "column",
            lg: "row",
          }}
          justifyContent={"center"}
          gap={5}
          pb={10}
        >
          <Stack
            width={{
              xs: "100%",
              lg: "45%",
            }}
            gap={2}
          >
            <Stack
              direction={"column"}
              alignItems={{
                xs: "center",
                lg: "start",
              }}
            >
              <Box
                component="img"
                width={"100%"}
                height={"500px"}
                src={contactUsImg}
              />
            </Stack>
          </Stack>
          <Stack
            width={{
              xs: "100%",
              lg: "45%",
            }}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="Name"
                placeholder="Your Name"
                value={formData.Name}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="Your Email"
                value={formData.Email}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="number"
                id="phone"
                name="Phone"
                placeholder="Phone Number"
                value={formData.Phone}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="number"
                id="budget"
                name="Budget"
                placeholder="What is your budget?"
                value={formData.Budget}
                onChange={handleChange}
                style={styles.input}
              />
              <textarea
                id="message"
                name="Message"
                rows={7}
                placeholder="Your Message"
                value={formData.Message}
                onChange={handleChange}
                style={styles.input}
              />
              <Stack mt={4}>
                <Stack border={"1px solid white"} width={"150px"}>
                  <button type="submit" style={styles.button}>
                    <Typography fontSize={"14px"} fontWeight={"bold"}>
                      Submit
                    </Typography>
                  </button>
                </Stack>
              </Stack>
            </form>
            {message && (
              <Typography
                color="white"
                textAlign="center"
                mt={2}
                variant="subtitle1"
                fontWeight="bold"
                fontStyle="italic"
              >
                {message}
              </Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const styles = {
  input: {
    borderRadius: "5px",
    border: "none",
    boxShadow: "0px 0px 5px 0px #ffffff",
    width: "100%",
    padding: "10px",
    paddingLeft: "20px",
    margin: "10px 0",
    boxSizing: "border-box",
    fontSize: "20px",
  },
  button: {
    backgroundColor: "#0D6EFD",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "20px",
    cursor: "pointer",
  },
};

export default ContactForm;
