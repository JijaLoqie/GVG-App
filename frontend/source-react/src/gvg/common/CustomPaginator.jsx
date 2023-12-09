import { Box, Typography } from "@mui/material"
import { useState, useEffect, useLayoutEffect } from "react"

export function CustomPaginator({ handleUpdate, pagesLength }) {
  const [selectedValue, setSelectedValue] = useState(0)
  const [nums, setNums] = useState([])
  
  function goNextValue() {
    setSelectedValue(was => {
      if (was !== pagesLength - 1) {
        return was + 1
      } else {
        return was
      }
    })
  }
  function goPrevValue() {
    setSelectedValue(was => {
      if (was !== 0) {
        return was - 1
      } else {
        return was
      }
    })
  }

  useEffect(() => {
    setNums([...Array(pagesLength).keys()].map(value => value + 1))
  }, [pagesLength])
  useEffect(() => {
    handleUpdate(selectedValue)
    document.documentElement.scrollTo(0, 0);
  }, [selectedValue])
  return (
    <Box sx={{
      position: "absolute",
      bottom: "12px",
      display: "flex", justifyContent: "center", alignItems: "center",
      color: "black",width:"100%", height: "100px", zIndex: 1000}}>
      <Box onClick={goPrevValue}
        sx={{
          color:"secondary.main",
          cursor:"pointer",
          "&:hover": {
            color: "primary.main",
          }
        }}><Typography>Prev</Typography></Box>
      {nums.map((value, index) => (
        <Box key={index}
          onClick={() => {setSelectedValue(index)}}
          sx={{
            cursor: "pointer",
            width: "40px", height: "40px",
            margin: "8px", borderRadius: "100%",
            display: "flex", justifyContent: "center", alignItems: "center",
            bgcolor: selectedValue === index ? "primary.main" : "transparent",
            color: selectedValue === index ? "text.main" : "text.main",
            transition: "all 300ms",
          }}>
          <Typography>{value}</Typography>
        </Box>
      ))}
      <Box onClick={goNextValue}
        sx={{
          color:"accent.main",
          cursor:"pointer",
          "&:hover": {
            color: "text.main",
          }
        }}><Typography>Next</Typography></Box>
    </Box>
  )
}
