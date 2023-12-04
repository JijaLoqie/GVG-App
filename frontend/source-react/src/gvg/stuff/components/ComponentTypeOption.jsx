import { Box, Typography } from "@mui/material";

export function ComponentTypeOption({ handleClick, shortName, name, selected }) {
  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: "10px",
      transition: "all 300ms",
      "&:hover": {
        bgcolor: selected ? "primary.main" : "#ffffff",
        color: "secondary.main",
      },
      padding: "12px",
      marginTop: "12px",
      marginInline: "12px",
      bgcolor: selected ? "accent.main" : "transparent",
      color: selected ? "secondary.main" : "text.main",
    }}
      onClick={handleClick}
    >
      <Typography>{name}</Typography>
    </Box>
  ) 
}
