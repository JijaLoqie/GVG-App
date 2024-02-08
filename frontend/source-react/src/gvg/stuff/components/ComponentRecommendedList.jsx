import { useEffect, useReducer, useState } from "react"
import { Box } from "@mui/material"
import { ComponentCard } from "./ComponentCard"
import { NothingFound } from "../../widgets/NothingFound";
import { useDispatch, useSelector } from "react-redux";


const handleMouseMove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};



export function ComponentRecomeneddedList({ components, ...otherProps }) {

  return (
    <Box onMouseMove={handleMouseMove}
      sx={{
        p: 4,
        justifyContent: "start",
        display: "flex",
        gap: 2,
        overflow: "auto",
        flexWrap: "nowrap",
        boxShadow: "inset 0 0 1rem",
      }}
      {...otherProps}
    >
      {
        [...components,].map((componentItem, index) => (
          <ComponentCard componentItem={componentItem} key={index} />
        ))
      }
    </Box>
  )
}



