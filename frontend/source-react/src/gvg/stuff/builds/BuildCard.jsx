import { Divider, Grid, Paper, Box, Typography } from "@mui/material"
import { SimpleSlider } from "./SimpleSlider"
import { ComponentTypeIcon, getComponentPartsList } from "../../common/loaders/IconsLoader"
import { customPalette } from "../../common/styles/themes"
import BuyButton from "../../common/components/buttons/BuyButton"
import OneClickOrderButton from "../../common/components/buttons/OneClickOrderButton"


const componentParts = getComponentPartsList()


export function BuildCard({ build }) {
  return (
    <Paper variant="outlined" square
      sx={{
        width: "calc(100% - 30px)",
        minWidth: "300px",
        fontFamily: "cursive",
        boxShadow:
          "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={5}>
          <SimpleSlider items={build.images} scrollable={true} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box p={3} textAlign="center">
            <Typography gutterBottom variant="h4">
              {build.title}
            </Typography>
            <Divider flexItem />
            <Box flex={1}>
              <Typography paragraph sx={{
                pt: 2,
                textAlign: "start"
              }}>
                {build.description}
              </Typography>
              <Box direction="column" alignItems="start">
                {componentParts.map((component, index) => (
                  <Paper variant="outlined" key={index} sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "start", md: "center" },
                    flexWrap: "wrap",
                    transition: "all 300ms",
                    "&:hover": {
                      bgcolor: "secondary.main"
                    },
                    p: 1, cursor: "pointer",
                  }}>
                    <Box sx={{
                      gap: 1,
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}>
                      <ComponentTypeIcon type={component.type} width={30} height={30} fill={customPalette.text} />
                      <Typography>{component.rus_type}</Typography>
                    </Box>
                    <Typography color="accent.main"
                      sx={{
                        whiteSpace: "wrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {build[component.type]}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>
            <Paper elevation={7} sx={{
              mt: 3, p: 2, gap: 1,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexWrap: "wrap",
            }}>
              <Paper variant="outlined" sx={{
                p: 2,
                display: "flex",
                flexDirection: "row",
                gap: 1,
              }}>
                <Typography color="primary.main">{build.price} ₽</Typography>
                {build.old_price != undefined
                  ? <Typography color="accent.main"><strike>{build.old_price} ₽ </strike></Typography>
                  : null}
              </Paper>
              <BuyButton
                product={{ type: "build", ...build }}
                variant="contained"
              >
                В корзину
              </BuyButton>
              <OneClickOrderButton
                productInfo={{ type: "build", ...build }}
                color="warning"
              >
                Заказать в 1 клик
              </OneClickOrderButton>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
