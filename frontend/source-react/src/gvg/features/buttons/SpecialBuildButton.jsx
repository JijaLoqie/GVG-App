import { Box, Typography } from "@mui/material"; import { Link } from "react-router-dom";

export function SpecialBuildButton() {
  return (
    <Box component={Link} to="/offers/builds"
      sx={(theme) => ({
        width: "100%",
        display: "flex", justifyContent: "center", textAlign: "center",
        borderTop: "1px solid #ffffff99",


        backgroundColor: "background.transparent",
        transition: "all 400ms",
        "&:hover": {
          backgroundColor: "background.light",
        },
        borderRadius: "8px",
        padding: "20px 30px",
        boxShadow: `0 1px 1px #000, 0 1px 0 #f00, -2px 1px 0 #000, 2px 1px 0 #000, 0px 1px 10px ${theme.palette.accent.main}, 0 10px 10px #000`,

        font: "bold 24px 'Trebuchet Ms', helvetica", textDecoration: "none",
      })}
    >
      <Typography fontSize="1em"
        style={{
          background: "-webkit-linear-gradient(45deg, #fd45cd 50%, #7f78f2 95%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        sx={{
          color: "text.primary",
        }}

      >
        Выбрать наилучший компьютер
      </Typography>
    </Box>
  )
}
