import { Paper, Typography } from "@mui/material";

export function NothingFound() {
  return (
    <Paper variant="outlined" sx={{
      display: "flex", flexDirection: "column",
      alignItems: "center",
      p: 6, m: 4
    }}>
      <Typography variant="h2"> 💢 </Typography>
      <Typography variant="h3">Ничего не найдено</Typography>
    </Paper>
  )
}
