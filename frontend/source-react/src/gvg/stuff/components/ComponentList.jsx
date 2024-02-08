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



export function ComponentList({ components, recommended, ...otherProps }) {
  const filter = useSelector(state => state.filter.filter)
  const dispatch = useDispatch()
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
        dispatch({ type: "setupParams", payload: uniqueParams })

        let filteredWithParams = filtered.filter(
          (component) => filter.params.every(
            unqieParamId => component.params.some(
              ({ parameter_name, parameter_value }) => { return unqieParamId === `${parameter_name}-${parameter_value}` })))

        return filteredWithParams.slice(filter.limitKey * 15, (filter.limitKey + 1) * 15)

      } else {
        return components
      }
    }
    )
  }, [components, filter, dispatch])


  return (
    <Box onMouseMove={handleMouseMove}
      sx={{ pt: 4, justifyContent: "center", minWidth: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 2 }}
      {...otherProps}
    >
      {filteredComponents.length !== 0 ? [...filteredComponents,].map((componentItem, index) => (
        <ComponentCard componentItem={componentItem} key={index} recommended={recommended} />
      )) : (
        <NothingFound />
      )
      }
    </Box>
  )
}


