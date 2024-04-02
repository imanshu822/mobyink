import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";

const Button = styled(MuiButton)({
  color: "white",
  backgroundColor: "#F15B25",
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: 0,
  textTransform: "none",

  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
});

export default Button;
