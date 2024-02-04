import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, Paper, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export function ParamsFilter() {
  const filteredParams = useSelector(state => state.filter.filter.params ?? [])
  const params = useSelector(state => state.filter.params ?? {})

  const dispatch = useDispatch()


  const handleChangeParamsFilter = (paramId) => {
    if (filteredParams.includes(paramId)) {
      dispatch({ type: "setParams", payload: filteredParams.filter(element => element !== paramId) })
    } else {
      dispatch({ type: "setParams", payload: [...filteredParams, paramId] })
    }
  }

  return (
    <Paper sx={{
      flex: 1, minHeight: "75px",
      display: "flex", alignItems: "center",
    }}>
      <Accordion sx={{ width: "100%" }} >
        <AccordionSummary expandIcon={
          <Button>
            <ExpandMore />
          </Button>
        } >
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
  )
}
