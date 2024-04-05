import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { GoMoveToTop } from "react-icons/go";
import { FaWhatsappSquare } from "react-icons/fa";

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <>
          <Stack
            borderRadius={"5px"}
            bgcolor={"white"}
            style={{
              position: "fixed",
              bottom: "80px",
              right: "30px",
              fontSize: "2em",
              color: "#000",
              cursor: "pointer",
              zIndex: "1000",
            }}
          >
            <FaWhatsappSquare size={50} color="#25D366" />
          </Stack>
          <Stack
            borderRadius={"5px"}
            bgcolor={"#0D6EFD"}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "35px",
              fontSize: "2em",
              color: "#000",
              cursor: "pointer",
              zIndex: "1000",
            }}
            onClick={scrollToTop}
          >
            <GoMoveToTop
              size={30}
              color="white"
              style={{
                padding: "4px",
              }}
            />
          </Stack>
        </>
      )}
    </>
  );
};

export default GoToTop;
