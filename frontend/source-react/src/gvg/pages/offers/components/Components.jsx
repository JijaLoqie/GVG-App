import { Box, Button, Checkbox, Container, FormControlLabel, Grid, IconButton, Pagination, Paper, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomGlobalSearch } from "../../../common/CustomGlobalSearch";
import { ComponentList } from "../../../stuff/components/ComponentList";
import { loadComponentList } from "../../../stuff/components/ComponentLoader";
import { CustomPaginator } from "../../../common/CustomPaginator";
import { ParametersFilter } from "../../../stuff/components/ParametersFilter";
import { ComponentSorterKey } from "../../../stuff/components/ComponentSorterKey";
import { Form, useSearchParams } from "react-router-dom"
import { TextIncrease } from "@mui/icons-material";

const typeVariants = [
  { name: "hdd", rus_name: "Жёсткий диск", },
  { name: "ram", rus_name: "Оперативная память", },
  { name: "ssd", rus_name: "SSD накопитель", },
  { name: "cpu", rus_name: "Процессор", },
  { name: "graphics_card", rus_name: "Видеокарта", },
  { name: "motherboard", rus_name: "Материнская плата", },
]


export function Components() {
  const [components, setComponents] = useState([])
  const [components2, setComponents2] = useState([])

  const [searchValue, setSearchValue] = useState("")
  const [limitKey, setLimitKey] = useState(0)
  const [typesSelected, setTypesSelected] = useState(Object.fromEntries(typeVariants.map(x => [x.name, true])))
  const [typeState, setTypeState] = useState("All")
  const [sorterKey, setSorterKey] = useState("Price")
  const [sorterIncrease, setSorterIncrease] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const trueFound = Object.entries(typesSelected).reduce((globalCount, newPair) => globalCount + (newPair[1] ? 1 : 0), 0)
    setTypeState(trueFound === 0 ? "None" : (trueFound === typeVariants.length) ? "All" : "Some")
  }, [typesSelected])

  useEffect(() => {
    setLimitKey(0)
  }, [searchValue, typesSelected])
  useEffect(() => {
    loadComponentList(setComponents)
  }, [])
  useEffect(() => {
    setComponents2([
      ...components,
      ...components,
      ...components,
      ...components,
      ...components,
      ...components,
    ])
  }, [components])

  const handleChangeTypeFilter = (value) => {
    if (value !== "Parent") {
      setTypesSelected(was => ({ ...was, [value]: !was[value] }))
    } else {
      setTypesSelected(Object.fromEntries(typeVariants.map(x => [x.name, (typeState === "None")])))
    }

  }

  return (
    <Stack alignItems="center">
      <CustomGlobalSearch handleUpdate={setSearchValue} sx={{
        boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        width: "100%",
      }} />
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Stack spacing={2}>
            <Form>
              <Paper elevation={1} sx={{
                width: "100%",
                p: 1
              }}>
                <RadioGroup row value={sorterKey} onChange={(e, newValue) => setSorterKey(newValue)}>
                  <FormControlLabel label="Ценa" control={<Radio />} value="Price" />
                  <FormControlLabel label="Названиe" control={<Radio />} value="Name" />
                  <Typography variant="h6">Сортировать по </Typography>
                  <Button color="accent" onClick={() => setSorterIncrease(was => !was)}>{sorterIncrease ? "По возрастанию" : "По убыванию"}</Button>
                </RadioGroup>

              </Paper>
              <Paper elevation={7} sx={{
                width: "100%",
              }}>
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
              </Paper>
              <Paper elevation={1} sx={{
                width: "100%",
                height: "75px"
              }}>
                <Typography variant="h6">Конкретные характеристики: </Typography>
              </Paper>
            </Form>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Stack alignItems="center" justifyContent="space-between" height="100%" spacing={4} pb={4}>
            <ComponentList components={components2} filter=
              {{
                name: searchValue, types: typesSelected,
                limitKey: limitKey, listSize: 15,
                sorterKey: sorterKey, sorterIncrease: sorterIncrease
              }} />
            <Pagination count={Math.ceil((components2.length) / 15)} page={limitKey + 1} onChange={(_, value) => {
              setLimitKey(value - 1)
              window.scrollTo(0, 0)
            }
            } variant="outlined" />
          </Stack>
        </Grid>
      </Grid>
    </Stack >
  )
}
