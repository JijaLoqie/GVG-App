import {
  Box,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  Stack,
} from "@mui/material"
import { Link } from "react-router-dom"

export default ContuctGroup = function() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ paddingBottom: "10px" }} variant="h4">
        Связаться с нами
      </Typography>
      <Stack direction="column">
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          +7 (985) 146-04-77
        </Typography>
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          kraskovskiydm@gmail.com
        </Typography>
      </Stack>
      <Box
        sx={{
          width: "100%",
          marginTop: "40px",
        }}
      >
        <Button
          color="success"
          sx={{
            width: "100%",
            height: "60px",
          }}
          variant="contained"
        >
          Написать нам
        </Button>
      </Box>
    </Box>
  )
}
