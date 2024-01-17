import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomGlobalSearch } from "../../../common/CustomGlobalSearch";
import { ComponentList } from "../../../stuff/components/ComponentList";
import { ComponentTypes } from "../../../stuff/components/ComponentsTypes";
import { loadComponentList } from "../../../stuff/components/ComponentLoader";
import { CustomPaginator } from "../../../common/CustomPaginator";
import { ParametersFilter } from "../../../stuff/components/ParametersFilter";
import { ComponentSorterKey } from "../../../stuff/components/ComponentSorterKey";




export function Components() {
  const [components, setComponents] = useState([])
  const [components2, setComponents2] = useState([])


  const [searchValue, setSearchValue] = useState("")
  const [limitKey, setLimitKey] = useState(0)
  const [typeValue, setTypeValue] = useState("")
  const [sorterKey, setSorterKey] = useState("None")

  useEffect(() => {
    setLimitKey(0)
  }, [searchValue, typeValue])
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
      ...components,
      ...components,
      ...components,
      ...components,
      ...components,
      ...components,
      ...components,
      ...components,
    ])
  }, [components])

  return (
    <Stack alignItems="center">
      <CustomGlobalSearch handleUpdate={setSearchValue} sx={{
        boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        width: "100%",
      }} />
      <Grid container>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <Paper elevation={1} sx={{
              width: "100%",
              height: "75px"
            }}>
              <Typography variant="h4">Сортировать по (цена / алфавит / ?): toggle buttons </Typography>
            </Paper>
            <Paper elevation={7} sx={{
              width: "100%",
              height: "75px"
            }}>
              <Typography variant="h4"> Искать по (тип товара): radio buttons/checkboxes</Typography>
            </Paper>
            <Paper elevation={1} sx={{
              width: "100%",
              height: "75px"
            }}>
              <Typography variant="h4">Конкретные характеристики (??): Autocompletes, selects</Typography>
            </Paper>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <ComponentList components={components2} filter={{ name: searchValue, type: typeValue, limitKey: limitKey, listSize: 15, sorterKey: sorterKey }} />
        </Grid>
      </Grid>
    </Stack>
  )
}
