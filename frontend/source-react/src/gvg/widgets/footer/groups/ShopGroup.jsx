import {
  Box,
  Stack,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"

export default function ShopGroup({ ...otherProps }) {
  return (
    <Box {...otherProps}>
      <Typography sx={{ paddingBottom: "10px" }} variant="h4">
        Магазин
      </Typography>
      <Stack direction="column">
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
          to={"/offers/builds"}
        >
          Сборки
        </Typography>
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
          to={"/offers/components"}
        >
          Комплектующие
        </Typography>
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
          to={"/offers/constructor"}
        >
          Игровой конструктор
        </Typography>
      </Stack>
    </Box>
  )
}
