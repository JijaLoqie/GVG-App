import { Box, Typography, alpha } from "@mui/material";
import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { customPalette } from "../../../../common/styles/themes";

export function Reviews() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setReviews([
      {name: "Reviewer 1", review: "TThis is a goood build I bought!This is a goood build I bought!This is a goood build I bought!This is a goood build I bought!his is a goood build I bought! # 1"},
      {name: "Reviewer 2", review: "TTThis is a goood build I bought!This is a goood build I bought!This is a goood build I bought!This is a goood build I bought!his is aTThis is a goood build I bought!This is a goood build I bought!This is a goood build I bought!This is a goood build I bought!his is ahis is a goood build I bought! # 2"},
      {name: "Reviewer 3", review: "This is a goood build I bought! # 3"},
    ])
  }, [])
  return (
    <Box sx={{
        bgcolor: alpha(`${customPalette.background}`, '0.85'),
      borderTop: '5px solid',
      borderImageSlice: 1,
      borderImageSource: `linear-gradient(to left, ${['red', 'blue'].join(',')})`,
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "inset 0em -1.5em 3em black"
    }}>
      <Typography pt="12px" pb="24px" sx={{fontSize: {xs:25, md:40}, color: "text.main"}}> Наши первые клиенты </Typography>
      <Box sx={{
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        justifyContent: {xs:"start", md:"space-evenly"},
        width: "100%",
        minHeight: "470px",
        height: {xs:"auto", md:"427px"},
        alignItems: "center",
      }}>
        {reviews.map((review, index) => (
          <ReviewCard key={index}review={review} />
        ))}
      </Box>

    </Box>
  )}
