import {
  Box,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

export default ContuctGroup = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" sx={{ paddingBottom: "10px" }}>
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
          variant="contained"
          color="success"
          sx={{
            width: "100%",
			height: "60px"
          }}
        >
          Написать нам
        </Button>
      </Box>
    </Box>
  );
};