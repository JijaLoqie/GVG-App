import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { customPalette } from "../../../../common/styles/themes";

export function HandyButton() {
  return (
      <Box component={Link} to="/offers/builds"
        sx={{ display: "flex", justifyContent: "center", textAlign: "center",
          transition:"all 500ms",

          backgroundImage: `linear-gradient(to right bottom, ${customPalette.secondary}, ${customPalette.background})`,
          color: "accent.main",

          borderRadius: "8px", borderTop: "1px solid #ffffff99", padding: "20px 30px",
          boxShadow: `0 1px 1px #000, 0 1px 0 #000, -2px 1px 0 #000, 2px 1px 0 #000, 0px 1px 10px #000, 0 10px 10px #000`,

          font: "bold 24px 'Trebuchet Ms', helvetica", textDecoration: "none",
        }}
      >
        <Typography fontSize="1em"
          style={{
            background: "-webkit-linear-gradient(45deg, #eb23ab 10%, #5d56d0 95%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}

        >
          Выбрать наилучший компьютер
        </Typography>
      </Box>
)}




