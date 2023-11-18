import { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { ComponentCard } from "./ComponentCard"


const handleMouseMove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};



export function ComponentList({ filter }) {
  const [components, setComponents] = useState([])
  const [filteredComponents, setFilteredComponents] = useState([])
  useEffect(() => {
    setFilteredComponents(
      components
        .filter((componentItem) => componentItem.description.toLowerCase().includes(filter.name.toLowerCase()))
        .filter((componentItem) => componentItem.type.includes(filter.type))
    )
  }, [components, filter.name, filter.type])
  useEffect(() => {
    //      fetch("/api/get-builds")
    //        .then((response) => response.json())
    //        .then((data) => {
    //          setBuilds(data)
    //          data.forEach((element) => {
    //            console.log(element)
    //          })
    //        })
    setComponents([
      {type: "hdd", description: "hdd_Компонент один"},
      {type: "ram", description: "ram_Компонент один"},
      {type: "ssd", description: "ssd_Компонент один"},
      {type: "cpu", description: "cpu_Компонент один"},
      {type: "graphics_card", description: "graphics_card_Компонент один"},
    ])
  }, [])

  return (
    <Box sx={{ maxWidth: "1200px", display: "flex", flexWrap: "wrap", flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
      <Box>
        <Box
          onMouseMove={handleMouseMove}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {filteredComponents.length !== 0 ? filteredComponents.map((componentItem, index) => (
              <ComponentCard componentItem={componentItem} key={index} />
            ))
            : (
              <Box sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center', textAlign: 'center', padding: "24px"}}>
                <Typography variant="h3">Нет компонентов по запросу &quot;{filter.name}&quot;</Typography>
              </Box>
            )
          }
        </Box>
      </Box>
    </Box>
  )
}


