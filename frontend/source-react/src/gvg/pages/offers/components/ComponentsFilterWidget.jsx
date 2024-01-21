import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Chip, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, Select, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const typeVariants = [
  { name: "hdd", rus_name: "Жёсткий диск", },
  { name: "ram", rus_name: "Оперативная память", },
  { name: "ssd", rus_name: "SSD накопитель", },
  { name: "cpu", rus_name: "Процессор", },
  { name: "graphics_card", rus_name: "Видеокарта", },
  { name: "motherboard", rus_name: "Материнская плата", },
]

export function ComponentsFilterWidget({ params, onUpdate }) {

  const [typesExpanded, setTypesExpanded] = useState(false)
  const [typesSelected, setTypesSelected] = useState(Object.fromEntries(typeVariants.map(x => [x.name, true])))
  const [typeState, setTypeState] = useState("All")
  const [sorterKey, setSorterKey] = useState("Name")
  const [sorterIncrease, setSorterIncrease] = useState(true)

  const [filteredParams, setFilteredParams] = useState([])

  const handleChangeParamsFilter = (paramId) => {
    if (filteredParams.includes(paramId)) {
      setFilteredParams(was => was.filter(element => element !== paramId))
    } else {
      setFilteredParams(was => [...was, paramId])
    }
  }

  const handleChangeTypeFilter = (value) => {
    if (value !== "Parent") {
      setTypesSelected(was => ({ ...was, [value]: !was[value] }))
    } else {
      setTypesSelected(Object.fromEntries(typeVariants.map(x => [x.name, (typeState === "None")])))
    }
  }

  useEffect(() => {
    const trueFound = Object.entries(typesSelected).reduce((globalCount, newPair) => globalCount + (newPair[1] ? 1 : 0), 0)
    setTypeState(trueFound === 0 ? "None" : (trueFound === typeVariants.length) ? "All" : "Some")
  }, [typesSelected])


  useEffect(() => {
    onUpdate({ types: typesSelected, sorterKey, sorterIncrease, filteredParams })
  }, [typesSelected, sorterKey, sorterIncrease, filteredParams])




  return (
    <Paper variant="outlined">
      <Box sx={{
        display: "flex", justifyContent: "stretch",
        alignItems: "start", flexWrap: "wrap",
        p: 1, gap: 2,
      }}>
        <Accordion
          sx={{ flex: 1 }}
          onChange={() => setTypesExpanded(was => !was)}>
          <AccordionSummary expandIcon={
            <Button>
              <ExpandMore />
            </Button>
          } onChange={() => setTypesExpanded(was => !was)}>
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
                typeVariants.map((component, index) => (
                  <FormControlLabel
                    key={index}
                    label={component.rus_name}
                    control={<Checkbox checked={typesSelected[component.name]} onChange={() => handleChangeTypeFilter(component.name)} />}
                  />
                ))
              }
            </Box>
          </AccordionDetails>
        </Accordion>
        <Paper elevation={1} sx={{
          display: "flex", justifyContent: "center", alignItems: "stretch",
          flex: 1, gap: 1, p: 1,
          minWidth: 300,
        }} >
          <Select value={sorterKey} onChange={(event) => setSorterKey(event.target.value)}
            sx={{
              flex: 1
            }}
          >
            <MenuItem label="Ценa" value="Price">Цена</MenuItem>
            <MenuItem label="Названиe" value="Name">Название</MenuItem>
          </Select>
          <Button color="primary" variant="outlined"
            sx={{ flex: 1, }}
            onClick={() => setSorterIncrease(was => !was)}
          >
            {sorterIncrease ? "По возрастанию" : "По убыванию"}
          </Button>
        </Paper>

        <Paper sx={{
          flex: 1, minHeight: "75px",
          display: "flex", alignItems: "center",
        }}>
          <Accordion
            sx={{ width: "100%" }}
            onChange={() => setTypesExpanded(was => !was)}>
            <AccordionSummary expandIcon={
              <Button>
                <ExpandMore />
              </Button>
            } onChange={() => setTypesExpanded(was => !was)}>
              <Typography>Характеристики</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack>
                {Object.keys(params).map((parameter, index) => (
                  <Stack key={index}>
                    <Typography fontWeight={700}>{parameter}: </Typography>
                    {
                      [...params[parameter]].map((value, index) => (
                        <Box key={`${index}-value`}>
                          <FormControlLabel
                            label={value}
                            control={
                              <Checkbox
                                checked={filteredParams.includes(`${parameter}-${value}`)}
                                onChange={() => handleChangeParamsFilter(`${parameter}-${value}`)}
                              />
                            }
                          />
                        </Box>
                      ))
                    }
                  </Stack>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Box>
    </Paper >
  )
}
