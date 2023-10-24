import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = {
  display: "inline-block",
  maxWidth: "100%",
  font: "1000 34px/34px 'Montserrat',sans-serif",
  letterSpacing: ".1em",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "0.2s",
  "&:hover": {
    md: {color: "#2222ff",}
  },
};

export default LogoButton = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "start",
        alignItems: "end",
        color: "#ffffff",
        paddingBottom: "5px",
        paddingInline: "15px",
        width: "15%",
        marginRight: "10%",
      }}
      onClick={() => navigate("/home")}
    >
      <Box
        component="img"
        sx={{
          maxHeight: 81,
          maxWidth: 61,
          alignSelf: "end",
        }}
        src="/static/logos/icon.png"
      />
      {/* <Box
        component="img"
        sx={{
          height: "35px",
          width: "79px",
        }}
        src="/static/logos/gvg.png"
      /> */}
      <Typography sx={theme}>G</Typography>
      <Typography sx={theme}>V</Typography>
      <Typography sx={theme}>G</Typography>
    </Box>
  );
};
