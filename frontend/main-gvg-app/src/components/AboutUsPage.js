import {
  Box,
  Link,
  Grid,
  Paper,
  Typography,
  styled,
  Stack,
  Divider,
} from "@mui/material";
import React from "react";

import {
  Phone as PhoneIcon,
  AccessTime as AccessTimeIcon,
  Email as EmailIcon,
  Telegram as TelegramIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: 2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  alignItems: "center",
}));

export default AboutUsPage = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography fontSize="1.5rem">Кто мы?</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="body2" gutterBottom>
            <Typography paragraph>
              Мы динамичная компания, предлагающая более 10 профессиональных
              сборок компьютеров для любых задач. Наша команда состоит из
              опытных специалистов, гарантирующих качественную сборку в
              кратчайшие сроки.
            </Typography>
            <Typography paragraph>
              Мы понимаем, что ваше время ценно, поэтому мы стремимся обеспечить
              прямую связь с нашей компанией. У нас нет посредников, только
              непосредственное общение с нашей дружелюбной командой, готовой
              помочь и ответить на все ваши вопросы.
            </Typography>
            {/* <Typography paragraph>
              И самое лучшее - наши цены! Мы стремимся предложить вам выдающееся
              качество и отличные цены, чтобы вы могли получить мощный
              компьютер, который отвечает всем вашим потребностям, не
              переплачивая.
            </Typography> */}
            <Typography paragraph>
              Если вам нужна надежная сборка компьютера, то GVG Tech Solutions -
              ваш идеальный выбор! Оставьте свои заявки сейчас, и наша команда
              приступит к работе над вашим идеальным компьютером. 💪
            </Typography>
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography fontSize="1.5rem">Контакты</Typography>
        </Grid>
        <Grid item xs={12} md={4} component={Stack} alignItems="center">
          <PhoneIcon sx={{ marginRight: 2 }} />
          <Box>
            <Link to="tel:9851460477">+7 (985) 146-04-77</Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} component={Stack} alignItems="center">
          <AccessTimeIcon sx={{ marginRight: 2 }} />
          <Box>Ежедневно с 10:00 до 20:00</Box>
        </Grid>
        <Grid item xs={12} md={4} component={Stack} alignItems="center">
          <EmailIcon sx={{ marginRight: 2 }} />
          <Box>kraskovskiydm@gmail.com</Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <TelegramIcon sx={{ marginRight: 2 }} />
          <InstagramIcon sx={{ marginRight: 2 }} />
        </Grid>
      </Grid>
    </Box>
  );
};
