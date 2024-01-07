import { Typography, Box } from "@mui/material";

export function ReviewCard({ review }) {
  return (
    <Box sx={{
      width: { xs: "90vw", md: "300px" },
      margin: "10px",
      height: { xs: "200px", md: "400px" },
      backgroundColor: "background.main",
      borderRadius: "10px",
      border: "1px solid #ffffff22",
      padding: "36px 24px",
      transition: "all 500ms",
      zIndex: 10,
      "&:hover": {
        boxShadow: "0 0 15px red",
        width: "320px",
        height: { xs: "216px", md: "427px" }
      }
    }}>
      <Typography variant="h4"
        sx={{ paddingBottom: "12px" }}
        style={{
          background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {review.name}
      </Typography>
      <Typography variant="body2"
        sx={{ color: "#98A0B3", fontSize: "16px", maxWidth: "300px" }}
      >
        {review.review}
      </Typography>

    </Box>
  )
}
