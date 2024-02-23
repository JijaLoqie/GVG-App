import {
  Box,
  Typography,
  Stack,
  IconButton,
} from "@mui/material"
import { Link } from "react-router-dom"
import {
  Telegram as TelegramIcon,
} from "@mui/icons-material"



const vkIcon = 'vk.png'



const vkIconPath = `/static/logos/${vkIcon}`



export default function HelpGroup({ ...otherProps }) {
  return (
    <Box {...otherProps}>
      <Typography gutterBottom variant="h4">
        Поддержка
      </Typography>
      <Stack direction="column">
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
          to="https://vk.com/im?media=&sel=-222109451"
        >
          Задать вопрос в ВК
        </Typography>
        <Typography
          component={Link}
          style={{ textDecoration: "none", color: "#ffffff" }}
          to="/delivery"
        >
          Вопросы по доставке
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2} marginTop={2}>
        <IconButton>
          <TelegramIcon sx={{ color: "text.main" }} />
        </IconButton>
        <IconButton href="https://vk.com/gvgtechsolutions">
          <Box alt="vk" component="img"
            src={vkIconPath}
            sx={{ height: 25, width: 25, }}
          />
        </IconButton>
      </Stack>
    </Box>
  )
}
