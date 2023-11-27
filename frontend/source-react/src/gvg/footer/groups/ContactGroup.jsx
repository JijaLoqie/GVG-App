import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material"
import { Link } from "react-router-dom"
import CustomTelephoneLink from "../../common/CustomTelephoneLink"

export default function ContuctGroup() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ paddingBottom: "10px" }} variant="h4">
        Связаться с нами
      </Typography>
      <Stack direction="column">
        <CustomTelephoneLink />
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
