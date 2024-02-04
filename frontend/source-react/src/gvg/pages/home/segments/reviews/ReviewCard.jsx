import { Typography, Box, Paper, Divider } from "@mui/material";
import { SimpleSlider } from "../../../../stuff/builds/SimpleSlider";

export function ReviewCard({ review }) {
  return (
    <Paper variant="outlined" sx={{
      flex: 1,
      minHeight: "600px",
      minWidth: "300px", maxWidth: "400px",
      p: 4,
      backgroundColor: "background.main",
      "&:hover": { boxShadow: "0 0 15px red", },
      display: "flex",
      flexDirection: "column",
    }}>
      <Typography variant="h4" gutterBottom
        style={{
          background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {review.name}
      </Typography>
      <Divider />

      <Typography variant="body2"
        sx={{ flex: 1, pt: 1, color: "text.dark", fontSize: "16px", }}
      >
        {review.review}
      </Typography>
      <Paper elevation={5} sx={{
        position: "relative",
        width: "100%",
        height: "300px",
      }}>
        <SimpleSlider items={review.images} scrollable={true} />
      </Paper>

    </Paper>
  )
}
