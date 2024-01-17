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
    setFilteredComponents((old) => {
      if (filter) {
        let filtered = [
          ...components,
        ].filter((componentItem) => componentItem.title.toLowerCase().includes(filter.name.toLowerCase()))
          .filter((componentItem) => !!filter.types[componentItem.component_type])
        if (filter.sorterKey === "Price") {
          filtered = filtered.toSorted(filter.sorterIncrease ? (a, b) => a.price - b.price : (a, b) => b.price - a.price)
        } else if (filter.sorterKey === "Name") {
          filtered = filtered.toSorted(filter.sorterIncrease ? (a, b) => a.title.localeCompare(b.title) : (a, b) => !a.title.localeCompare(b.title))
        }
        return filtered.slice(filter.limitKey * filter.listSize, (filter.limitKey + 1) * filter.listSize)

      } else {
        return components
      }
    }
    )
  }, [components, filter])


  return (
    <Box onMouseMove={handleMouseMove}
      sx={{ justifyContent: "center", minWidth: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "12px" }}
      {...otherProps}
    >
      {filteredComponents.length !== 0 ? [...filteredComponents,].map((componentItem, index) => (
        <ComponentCard componentItem={componentItem} key={index} recommended={recommended} sx={{
          width: { xs: "95%", sm: "45%", md: "30%" },
          height: { xs: "300px", sm: "300px", md: "300px" },
        }} />
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


