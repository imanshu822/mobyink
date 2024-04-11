import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { GoMoveToTop } from "react-icons/go";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <Link
            to="https://web.whatsapp.com/send?phone=919001386001&text=Hello!%20I%27m%20testing%20the%20Social%20Chat%20plugin%20https%3A%2F%2Fquadlayers.com%2Flanding%2Fwhatsapp-chat%2F%3Futm_source%3Dqlwapp_admin"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security best practice when using target="_blank"
          >
            <Stack
              borderRadius={"5px"}
              bgcolor={"white"}
              style={{
                position: "fixed",
                bottom: "15px",
                right: "70px",
                fontSize: "2em",
                color: "#000",
                cursor: "pointer",
                zIndex: "1000",
              }}
            >
              <FaWhatsappSquare size={47} color="#25D366" />
            </Stack>
          </Link>
          <Stack
            borderRadius={"5px"}
            bgcolor={"#0D6EFD"}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
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
