import { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { ComponentCard } from "./ComponentCard"
import { SentimentVeryDissatisfied } from "@mui/icons-material";
import { loadComponentList } from "./ComponentLoader";


const handleMouseMove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};



export function ComponentList({ components, filter, recommended, ...otherProps }) {
  const [filteredComponents, setFilteredComponents] = useState([])

  useEffect(() => {
    setFilteredComponents(filter ?
      [
        ...components,
      ]
        .filter((componentItem) => componentItem.title.toLowerCase().includes(filter?.name.toLowerCase()))
        .filter((componentItem) => componentItem.component_type.includes(filter?.type))
        .toSorted(filter.sorterKey === "PriceIncrease" ? (a, b) => a.price - b.price : (a, b) => b.price - a.price)
        .slice(filter?.limitKey * filter?.listSize, (filter?.limitKey + 1) * filter?.listSize)
      : components
    )
  }, [components, filter])


  return (
    <Box onMouseMove={handleMouseMove}
      sx={{ justifyContent: "center", minWidth: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "12px" }}
      {...otherProps}
    >
      {filteredComponents.length !== 0 ? [...filteredComponents,].map((componentItem, index) => (
        <ComponentCard componentItem={componentItem} key={index} recommended={recommended} />
      )) : (
        <Box sx={{
          width: "100%", padding: "24px", color: "text.main", textAlign: 'center',
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center',
        }}>
          <Typography variant="h3">По данному запросу ничего не найдено</Typography>
          <SentimentVeryDissatisfied sx={{ width: "100px", height: "100px" }} />
        </Box>
      )
      }
    </Box>
  )
}


