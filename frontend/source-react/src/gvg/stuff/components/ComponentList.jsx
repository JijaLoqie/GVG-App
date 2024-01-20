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



export function ComponentList({ setupParams, components, filter, recommended, ...otherProps }) {
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

        let uniqueParams = {}
        filtered.forEach(component => {
          component.params.forEach(componentParameter => {
            if (!(componentParameter.parameter_name in uniqueParams)) {
              uniqueParams[componentParameter.parameter_name] = new Set()
            }
            uniqueParams[componentParameter.parameter_name].add(componentParameter.parameter_value)
          });
        });
        setupParams(uniqueParams)

        let filteredWithParams = filtered.filter(
          (component) => filter.filteredParams.every(unqieParamId => component.params.some(({ parameter_name, parameter_value }) => { console.log(`${key}-${value}`); return unqieParamId === `${key}-${value}` })))
        console.log(filter.filteredParams)
        return filteredWithParams.slice(filter.limitKey * filter.listSize, (filter.limitKey + 1) * filter.listSize)

      } else {
        return components
      }
    }
    )
  }, [components, filter])


  return (
    <Box onMouseMove={handleMouseMove}
      sx={{ justifyContent: "center", minWidth: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 2 }}
      {...otherProps}
    >
      {filteredComponents.length !== 0 ? [...filteredComponents,].map((componentItem, index) => (
        <ComponentCard componentItem={componentItem} key={index} recommended={recommended} sx={{
          width: { xs: "95%", sm: "45%", md: "30%" },
          maxWidth: "400px",
          height: { xs: "300px", sm: "300px", md: "300px" },
        }} />
      )) : (
        <Box sx={{
          width: "100%", p: 3, color: "text.main", textAlign: 'center',
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


