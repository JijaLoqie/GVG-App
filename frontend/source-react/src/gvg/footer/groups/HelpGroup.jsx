import {
  Box,
  Typography,
  Stack,
  IconButton,
} from "@mui/material"
import { Link } from "react-router-dom"
import {
  Telegram as TelegramIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material"



const vkIcon = 'vk.png'



const vkIconPath = `/static/logos/${vkIcon}`



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
      <Stack direction="row" marginTop={2}>
        <IconButton>
          <TelegramIcon sx={{ color: "text.main", marginRight: 2 }} />
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{ color: "text.main", marginRight: 2 }} />
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
