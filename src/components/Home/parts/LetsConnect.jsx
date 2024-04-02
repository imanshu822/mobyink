import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import bgImg from "../../../assests/asset 27.svg";
const LetsConnect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Stack width={"100%"} margin={"0 auto"}>
      <Stack
        width={"85%"}
        margin={"0 auto"}
        bgcolor={"#0D6EFD"}
        borderRadius={"25px"}
      >
        <Stack
          zIndex={1}
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
          boxSizing={"border-box"}
          p={3}
          direction={{
            xs: "column",
            lg: "row",
          }}
          justifyContent={"center"}
          gap={5}
          pt={10}
          pb={10}
        >
          <Stack
            width={{
              xs: "100%",
              lg: "45%",
            }}
            gap={2}
          >
            <Typography
              fontSize={{
                xs: "20px",
                lg: "45px",
              }}
              color={"white"}
              fontWeight={"bold"}
              textAlign={{
                xs: "center",
                lg: "left",
              }}
            >
              Have an idea? Let's build and scale it together.
            </Typography>
            <Stack
              direction={"column"}
              alignItems={{
                xs: "center",
                lg: "start",
              }}
            >
              <Typography color={"white"}>T: +91-9001386001</Typography>
              <Typography color={"white"}>E: info@mobyink.com</Typography>
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
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="number"
                id="budget"
                name="budget"
                placeholder="What is your budget?"
                value={formData.budget}
                onChange={handleChange}
                style={styles.input}
              />
              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Your Message"
                value={formData.message}
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

export default LetsConnect;
