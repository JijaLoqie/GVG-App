import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Container, FormControlLabel, Grid, IconButton, Pagination, Paper, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomGlobalSearch } from "../../../common/CustomGlobalSearch";
import { ComponentList } from "../../../stuff/components/ComponentList";
import { loadComponentList } from "../../../stuff/components/ComponentLoader";
import { ComponentsFilterWidget } from "./ComponentsFilterWidget";
import { useDispatch } from "react-redux";



export function Components() {
  const dispatch = useDispatch()

  const [components, setComponents] = useState([])
  const [components2, setComponents2] = useState([])


  const [limitKey, setLimitKey] = useState(0)



  //      limitKey: 0, listSize: 15,
  useEffect(() => {
    setLimitKey(0)
    window.scrollTo(0, 0)
  }, [])

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


  return (
    <Stack alignItems="center" maxWidth="1200px" margin="auto">
      <CustomGlobalSearch handleUpdate={(newValue) => dispatch({ type: "setName", payload: newValue })} sx={{
        boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }} />
      <Grid container px={4}>
        <Grid item xs={12} sm={12}>
          <ComponentsFilterWidget />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Stack alignItems="center" justifyContent="space-between" height="100%" spacing={4} pb={4}>
            <ComponentList components={components2} />
            <Pagination count={Math.ceil((components2.length) / 15)} page={limitKey + 1} onChange={(_, value) => {
              dispatch({ type: "setLimitKey", payload: value - 1 })
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
