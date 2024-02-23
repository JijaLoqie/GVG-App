import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material"
import { Link } from "react-router-dom"
import CustomTelephoneLink from "../../../common/CustomTelephoneLink"
import ContactUsButton from "../../../common/components/buttons/ContactUsButton"

export default function ContuctGroup() {
  return (
    <Box>
      <Typography sx={{ paddingBottom: "10px" }} variant="h4">
        Связаться с нами
      </Typography>
      <Stack direction="column">
        <CustomTelephoneLink />
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          gvgcompany1@gmail.com
        </Typography>
      </Stack>
      <Box
        sx={{
          width: "100%",
          marginTop: "40px",
        }}
      >
        <ContactUsButton>Написать нам</ContactUsButton>
      </Box>
    </Box>
  )
}
