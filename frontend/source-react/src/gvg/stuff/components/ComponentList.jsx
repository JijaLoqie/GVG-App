import { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { ComponentCard } from "./ComponentCard"
import { SentimentVeryDissatisfied } from "@mui/icons-material";


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
        .filter((componentItem) => componentItem.name.toLowerCase().includes(filter.name.toLowerCase()))
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
      {id: 123, type: "hdd", name: "name1 of the component", description: "hdd_Компонент один"},
      {id: 234, type: "hdd", name: "name2of the component", description: "hdd_Кdомпонент один"},
      {id: 345, type: "hdd", name: "name2of the component", description: "hdd_Компонент один"},
      {id: 456, type: "hdd", name: "name3of the component", description: "hdd_Компонент один"},
      {id: 567, type: "hdd", name: "name3of the component", description: "hdd_Компонент один"},
      {id: 567, type: "hdd", name: "name3of the component", description: "hdd_Компонент один"},
      {id: 567, type: "hdd", name: "name4of the component", description: "hdd_Компонент один"},
      {id: 567, type: "hdd", name: "name4of the component", description: "hdd_Компонент один"},
      {id: 567, type: "hdd", name: "name4of the component", description: "hdd_Компонент один"},
      {id: 567, type: "hdd", name: "name4of the component", description: "hdd_Компонент один"},
      {id: 567, type: "hdd", name: "name4of the component", description: "hdd_Компонент один"},
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
          }}
        >
          {filteredComponents.length !== 0 ? filteredComponents.map((componentItem, index) => (
            <ComponentCard componentItem={componentItem} key={index} />
          ))
            : (
              <Box sx={{width: "100%", display: "flex", color: "text.main", flexDirection: "column", justifyContent: "center", alignItems: 'center', textAlign: 'center', padding: "24px"}}>
                <Typography variant="h3">По данному запросу ничего не найдено</Typography>
                <SentimentVeryDissatisfied sx={{width: "100px", height:"100px"}} /> 
              </Box>
            )
          }
        </Box>
      </Box>
    </Box>
  )
}


