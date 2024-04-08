import React, { useState } from "react";
import { Stack, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
const ContactCustomFaq = ({ data }) => {
  const [expanded, setExpanded] = useState(0);

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Stack gap={0.5} mt={7} boxSizing={"border-box"}>
      {data.rows.map((row, index) => (
        <Stack
          key={index}
          border={"1px solid rgba(0,0,0,.02)"}
          bgcolor={"white"}
        >
          <Stack
            p={"4px 16px"}
            direction="row"
            justifyContent="space-between"
            color={"#000"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#0D6EFD",
                color: "#fff",
              },
            }}
            onClick={() => handleExpand(index)}
          >
            <Stack direction={"row"}>
              <IconButton>
                <AddIcon
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                />
              </IconButton>
              <Typography
                padding="11px 11px 11px 0"
                fontSize={{ lg: "18px", md: "16px", sm: "14px", xs: "12px" }}
                fontWeight="bold"
              >
                {row.title}
              </Typography>
              {row.arrowIcon && (
                <Typography color="grey">{row.arrowIcon}</Typography>
              )}
            </Stack>
            <IconButton>
              <KeyboardArrowRightIcon />
            </IconButton>
          </Stack>
          <Collapse in={expanded === index}>
            <Stack>
              {typeof row.content === "string" ? (
                <Stack p={2} pl={7}>
                  <Typography>{row.content}</Typography>
                </Stack>
              ) : (
                <Stack p={2} pl={7}>
                  <div>{row.content}</div>
                </Stack>
              )}
            </Stack>
          </Collapse>
        </Stack>
      ))}
    </Stack>
  );
};

export default ContactCustomFaq;
