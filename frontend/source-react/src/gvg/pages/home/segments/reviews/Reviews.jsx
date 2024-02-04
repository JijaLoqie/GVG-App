import { Box, Stack, Typography, alpha } from "@mui/material";
import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { reviews } from "./model/reviews";

export function Reviews() {

  return (
    <Box sx={{
      bgcolor: "background.transparent",

      borderTop: '5px solid',
      borderImageSlice: 1,
      borderImageSource: `linear-gradient(to left, ${['red', 'blue'].join(',')})`,
      pb: 5,

    }}>
      <Typography variant="h3" pt={3} textAlign="center" gutterBottom>Наши первые клиенты</Typography>

      <Box sx={{
        display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", p: 2,
      }} m="auto">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Box>

    </Box>
  )
}
