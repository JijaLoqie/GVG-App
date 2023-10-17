import { Box, Grid, Typography, Button, ButtonGroup, Stack, Icon } from "@mui/material";
import { Link } from 'react-router-dom';
import {
  Telegram as TelegramIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

export default HelpGroup = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" sx={{ paddingBottom: "10px" }}>
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
          component="img"
          sx={{
            height: 25,
            width: 25,
          }}
          alt="vk"
          src="/static/logos/vk.png"
        />
      </Stack>
    </Box>
  );
};
