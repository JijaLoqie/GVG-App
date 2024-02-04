import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComponentPartsList } from "../../../common/loaders/IconsLoader"

const componentParts = getComponentPartsList()

export function TypesFilter() {

  const typesSelected = useSelector(state => {
    const filter = state.filter.filter
    return filter?.types ?? []
  })

  const [typeState, setTypeState] = useState("All")
  const dispatch = useDispatch()

  useEffect(() => {
    const trueFound = Object.entries(typesSelected).reduce((globalCount, newPair) => globalCount + (newPair[1] ? 1 : 0), 0)
    setTypeState(trueFound === 0 ? "None" : (trueFound === componentParts.length) ? "All" : "Some")
  }, [typesSelected])




  const handleChangeTypeFilter = (value) => {
    if (value !== "Parent") {
      dispatch({ type: "setTypes", payload: { ...typesSelected, [value]: !typesSelected[value] } })
    } else {
      dispatch({ type: "setTypes", payload: Object.fromEntries(componentParts.map(x => [x.type, (typeState === "None")])) })
    }
  }

  return (
    <Accordion sx={{ flex: 1, }} >
      <AccordionSummary expandIcon={<Button> <ExpandMore /> </Button>}>
        <FormControlLabel
          label="Все"
          control={
            <Checkbox
              checked={typeState === "All"}
              indeterminate={typeState === "Some"}
              onChange={() => handleChangeTypeFilter("Parent")}
            />
          }
        />
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          {
            componentParts.map((component, index) => (
              <FormControlLabel
                key={index}
                label={component.rus_type}
                control={<Checkbox checked={typesSelected[component.type]} onChange={() => handleChangeTypeFilter(component.type)} />}
              />
            ))
          }
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}
