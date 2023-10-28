import React from "react"
import {
  Box,
  Typography,
  Stack,
} from "@mui/material"
import { Link } from "react-router-dom"
import {
  Telegram as TelegramIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material"

export default function HelpGroup() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ paddingBottom: "10px" }} variant="h4">
        Поддержка
      </Typography>
      <Stack direction="column">
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          Задать вопрос в ВК
        </Typography>
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          Вопросы по доставке
        </Typography>
      </Stack>
      <Stack direction="row" marginTop={2}>
        <TelegramIcon sx={{ marginRight: 2 }} />
        <InstagramIcon sx={{ marginRight: 2 }} />
        <Box
          alt="vk"
          component="img"
          src="/static/logos/vk.png"
          sx={{
            height: 25,
            width: 25,
          }}
        />
      </Stack>
    </Box>
  )
}
