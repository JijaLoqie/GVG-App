import React from "react"

import {
  Box,
  Typography,
  Grid,
} from "@mui/material"
import GamesList from './GamesList'



export default function ChooseSection() {

  return (
    <Grid
      container
    >
      <Grid item xs={12}>
        <Box>
          <Typography paddingTop={4} textAlign="center" variant="h4">
            Мы проанализируем требования к играм и подбираём для вас наиболее
            подходящие сборки
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          padding: "10px 0",
          height: "600px",
        }}
        xs={12}
      >
        <GamesList />
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          padding: "10px 0",
          height: "600px",
        }}
        xs={12}
      >
        <Box
          component="div"
          id="gradient"
          style={{
            backgroundImage: "linear-gradient(315deg, #191714 0%, #2234ae 74%)",

            boxShadow:
              "inset 0px 10px 4em -4px #0d0d0d, inset 0px -10px 4em -4px #0d0d0d",
          }}
          sx={{
            width: "100%",
            minHeight: "100%",
          }}
        />
      </Grid>
    </Grid>
  )
}
