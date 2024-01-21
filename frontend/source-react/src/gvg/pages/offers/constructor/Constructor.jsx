import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Constructor() {
  return (
    <Box sx={{
      display: "grid",
      placeItems: "center",
      minHeight: "50vh",
    }}>
      <Paper elevation={4} sx={{
        p: 2,
        textAlign: "center"
      }}>
        <Typography variant="h2"> 💢 </Typography>
        <Typography variant="h3"> Временно не работает </Typography>
        <Stack direction="row" justifyContent="center" mt={4}>
          <Button component={Link} to="/offers/builds">Сборки</Button>
          <Button color='accent' component={Link} to="/offers/components">Комплектующие</Button>
        </Stack>
      </Paper>
    </Box>
  )
}
