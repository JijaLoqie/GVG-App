import {
  Box,
  Grid,
  Typography,
  Stack,
} from "@mui/material"

import {
  Phone as PhoneIcon,
  AccessTime as AccessTimeIcon,
  Email as EmailIcon,
  Telegram as TelegramIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material"
import CustomTelephoneLink from "../../common/CustomTelephoneLink"


export function About() {
  return (
    <Box padding={4} sx={{ flexGrow: 1, marginBottom: "100px" }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Typography fontSize="1.5rem">Кто мы?</Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <Typography paragraph>
            Мы динамичная компания, предлагающая более 10 профессиональных
            сборок компьютеров для любых задач. Наша команда состоит из опытных
            специалистов, гарантирующих качественную сборку в кратчайшие сроки.
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
        </Grid>

        <Grid item md={12} xs={12}>
          <Typography fontSize="1.5rem">Контакты</Typography>
        </Grid>
        <Grid alignItems="center" component={Stack} item md={4} xs={12}>
          <PhoneIcon sx={{ marginRight: 2 }} />
          <CustomTelephoneLink />
        </Grid>
        <Grid alignItems="center" component={Stack} item md={4} xs={12}>
          <AccessTimeIcon sx={{ marginRight: 2 }} />
          <Box>Ежедневно с 10:00 до 20:00</Box>
        </Grid>
        <Grid alignItems="center" component={Stack} item md={4} xs={12}>
          <EmailIcon sx={{ marginRight: 2 }} />
          <Box>kraskovskiydm@gmail.com</Box>
        </Grid>
        <Grid item marginBottom={12} md={12} xs={12}>
          <TelegramIcon sx={{ marginRight: 2 }} />
          <InstagramIcon sx={{ marginRight: 2 }} />
        </Grid>
      </Grid>
    </Box>
  )
}
