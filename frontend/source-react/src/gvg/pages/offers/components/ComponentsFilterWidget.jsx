import { ParamsFilter, SorterFilter, TypesFilter } from "../../../features/filters";
import { Box, Paper } from "@mui/material";

export function ComponentsFilterWidget({ params }) {

  return (
    <Paper variant="outlined">
      <Box sx={{
        display: "flex", justifyContent: "stretch",
        alignItems: "start", flexWrap: "wrap",
        p: 1, gap: 2,
      }}>
        <TypesFilter />
        <SorterFilter />
        <ParamsFilter params={params} />
      </Box>
    </Paper >
  )
}
