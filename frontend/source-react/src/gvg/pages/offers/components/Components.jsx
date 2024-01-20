import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Container, FormControlLabel, Grid, IconButton, Pagination, Paper, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomGlobalSearch } from "../../../common/CustomGlobalSearch";
import { ComponentList } from "../../../stuff/components/ComponentList";
import { loadComponentList } from "../../../stuff/components/ComponentLoader";
import { ComponentsFilterWidget } from "./ComponentsFilterWidget";



export function Components() {
  const [components, setComponents] = useState([])
  const [components2, setComponents2] = useState([])


  const [searchValue, setSearchValue] = useState("")
  const [limitKey, setLimitKey] = useState(0)
  const [params, setParams] = useState({})
  const [filters, setFilters] = useState({
    name: "", types: [],
    limitKey: 0, listSize: 15,
    sorterKey: "Name", sorterIncrease: true
  })



  useEffect(() => {
    setLimitKey(0)
    window.scrollTo(0, 0)
  }, [searchValue, filters])
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


  const handleUpdateFilters = (filterProps) => {
    setFilters(oldFilters => ({
      ...oldFilters,
      ...filterProps,
    }))
  }



  return (
    <Stack alignItems="center">
      <CustomGlobalSearch handleUpdate={(newValue) => handleUpdateFilters({ name: newValue })} sx={{
        boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }} />
      <Grid container>
        <Grid item xs={12} sm={12}>
          <ComponentsFilterWidget params={params} onUpdate={handleUpdateFilters} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Stack alignItems="center" justifyContent="space-between" height="100%" spacing={4} pb={4}>
            <ComponentList setupParams={(newParams) => {
              setParams(newParams)
            }} components={components2} filter={filters} />
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
