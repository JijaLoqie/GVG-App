
import styled from "@emotion/styled";
import { Code } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { customPalette } from "../../common/styles/themes";
import { Link, useNavigate } from "react-router-dom";

const CustomPaper = styled("div")((theme) => ({
  height: "312px",
  width: "383px",
  backgroundColor: "rgba(255,255,255, 0.1)",
  margin: "8px",
  cursor: "pointer",
  position: "relative",
  borderRadius: "10px",
  transition: "color 500ms",
  color: customPalette.text,
  "&:hover": {
    color: customPalette.accent,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    backgroundImage: `radial-gradient( 800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)`,
    borderRadius: "inherit",
    height: "100%",
    left: "0",
    top: "0",
    width: "100%",
    zIndex: 3,

    opacity: 0,
    transition: "opacity 500ms",
  },
  "&:hover::before": {
    opacity: 1,
  },
  "&.border": {
    opacity: 1,
  },
}));

const CardBorder = styled("div")((_) => ({
  content: '""',
  position: "absolute",
  backgroundImage: `radial-gradient( 400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.5), transparent 40%)`,
  borderRadius: "inherit",
  height: "100%",
  left: "0",
  top: "0",
  width: "100%",
  zIndex: 1,

  transition: "opacity 500ms",
}));

export function ComponentCard({ componentItem }) {
  return (
    <Link to={`componentItem/${componentItem.id}`}>
      <CustomPaper className="card">
        <Box sx={{ backgroundColor: "secondary.main", borderRadius: "inherit", display: "flex", flexDirection: "column", flexGrow: 1, inset: "1px", padding: "10px", position: "absolute", zIndex: 2, }} >
          <Box sx={{ alignItems: "center", display: "flex", height: "140px", justifyContent: "center", overflow: "hidden", }} >
            <Code sx={{ transform: "scale(4)", }} />
          </Box>
          <Box sx={{ alignItems: "center", display: "flex", flexGrow: 1, justifyContent: "flex-start", padding: "0px 20px", }} >
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", }} >
              <Code sx={{ color: "text.main", }} />
              <Box sx={{ alignItems: "flex-start", display: "flex", flexDirection: "column", }} >
                <Typography color="text.main" fontSize="1.1em" lineHeight="20px" m="0" >
                  {componentItem.title}
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.5)" fontSize="0.85em" marginTop="8px" >
                  {componentItem.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <CardBorder className="border" />
      </CustomPaper>
      </Link>
  );
}
