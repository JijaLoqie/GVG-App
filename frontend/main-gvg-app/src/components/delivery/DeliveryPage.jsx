import React, { useState } from "react"

import {
  Stack,
  Grid,
  List,
  ListItemButton,
  Typography,
  alpha,
} from "@mui/material"
import CustomYandexMap from "./CustomYandexMap"

import {
  Phone as PhoneIcon,
  AccessTime as AccessTimeIcon,
  Email as EmailIcon,
} from "@mui/icons-material"
import CustomTelephoneLink from '../common/CustomTelephoneLink'

const adresses = [
  {
    title: "595695, Омская область, город Кашира, проезд Чехова, 52",
    coord: [53.26875, 69.37066],
  },
  {
    title: "418586, Тамбовская область, город Истра, пл. Космонавтов, 66",
    coord: [52.7801, 41.35677],
  },
  {
    title: "590951, Курская область, город Раменское, пер. Домодедовская, 57",
    coord: [51.73716, 36.16227],
  },
  {
    title:
      "537051, Астраханская область, город Орехово-Зуево, бульвар Ладыгина, 13",
    coord: [48.30179, 25.03982],
  },
  {
    title: "747934, Оренбургская область, город Ступино, пер. Косиора, 89",
    coord: [51.00372, 55.62612],
  },
  {
    title: "575674, Волгоградская область, город Подольск, шоссе Чехова, 88",
    coord: [1, 2],
  },
]

export default function DeliveryPage() {
  const [selected, setSelected] = useState(adresses[0])
  return (
    <Grid
      container
      justifyItems="center"
      marginBlockEnd="100px"
      padding={4}
      rowGap="30px"
    >
      <Grid item md={12} xs={12}>
        <Typography fontSize="1.5rem">Самовывоз</Typography>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          width: { xs: "360px", md: "100%" },
          height: "360px",
        }}
        xs={12}
      >
        <CustomYandexMap selected={selected} />
      </Grid>
      <Grid item md={6} xs={12}>
        <List
          sx={{
            border: 1,
            borderColor: "#ffffff",
            width: "100%",
            height: { xs: "150px", md: "360px" },
            overflow: "auto",
            maxHeight: 360,
            "& ul": { padding: 0 },
          }}
        >
          {adresses.map((adress, index) => (
            <ListItemButton
              key={index}
              onClick={() => setSelected(adresses[index])}
              sx={{
                bgcolor:
                  selected == adress ? alpha("#ffffff", 0.15) : "#000000",
                "&: hover": {
                  bgcolor: alpha("#ffffff", 0.15),
                },
              }}
            >
              <Typography>{adress.title}</Typography>
            </ListItemButton>
          ))}
        </List>
      </Grid>
      <Grid item md={12} xs={12}>
        <Typography fontSize="1.5rem">Доставка до двери</Typography>
      </Grid>
      <Grid alignItems="center" component={Stack} item md={4} xs={12}>
        <Typography>Осуществляется Яндекс курьером по всей Москве</Typography>
      </Grid>
      <Grid item md={12} xs={12}>
        <Typography fontSize="1.5rem">Свяжитесь с нами</Typography>
      </Grid>
      <Grid item md={12} xs={12}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          fontSize="1rem"
          spacing={4}
        >
          <Stack alignItems="center" direction="row">
            <PhoneIcon sx={{ marginRight: 2 }} />
            <CustomTelephoneLink />
          </Stack>
          <Stack alignItems="center" direction="row">
            <AccessTimeIcon sx={{ marginRight: 2 }} />
            <Typography>Ежедневно с 10:00 до 20:00</Typography>
          </Stack>
          <Stack alignItems="center" direction="row">
            <EmailIcon sx={{ marginRight: 2 }} />
            <Typography>kraskovskiydm@gmail.com</Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}
