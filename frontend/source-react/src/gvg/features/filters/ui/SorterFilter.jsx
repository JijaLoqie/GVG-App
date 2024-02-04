import { Button, MenuItem, Paper, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export function SorterFilter() {
  const sorterKey = useSelector(state => {
    const filter = state.filter.filter
    return filter?.sorterKey ?? "Name"
  })
  const sorterIncrease = useSelector(state => {
    const filter = state.filter.filter
    return filter?.sorterIncrease ?? false
  })
  const dispatch = useDispatch()

  const handleUpdateKeySorter = (newValue) => {
    dispatch({ type: "setKeySorter", payload: newValue })
  }

  return (
    <Paper elevation={1} sx={{
      display: "flex", justifyContent: "center", alignItems: "stretch",
      flex: 1, gap: 1, p: 1,
      minWidth: 200,
    }} >
      <Select value={sorterKey} onChange={(event) => handleUpdateKeySorter(event.target.value)}
        sx={{ flex: 1, }}
      >
        <MenuItem label="Ценa" value="Price">Цена</MenuItem>
        <MenuItem label="Названиe" value="Name">Название</MenuItem>
      </Select>

      <Button color="primary" variant="outlined"
        sx={{ flex: 1, }}
        onClick={(event) => dispatch({ type: "setIsIncrease", payload: !sorterIncrease })}
      >
        {sorterIncrease ? "По возрастанию" : "По убыванию"}
      </Button>
    </Paper>
  )
}
