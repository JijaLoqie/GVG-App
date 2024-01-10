import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { CustomStuffSlider } from "../../../common/CustomStuffSlider";
import BuyButton from "../../../common/components/buttons/BuyButton";
import OneClickOrderButton from "../../../common/components/buttons/OneClickOrderButton";
import { getComponentById, getRecommendedComponents } from "../../../stuff/components/ComponentLoader";
import { ComponentList } from "../../../stuff/components/ComponentList";


function ComponentPage() {
  const { componentResult, recommended } = useLoaderData()

  return (
    <Stack>
      <Stack direction={{ xs: "column", md: "row" }} m={4} alignItems={{ xs: "stretch", md: "start" }}>
        <Box sx={{
          width: "100%",
          maxWidth: 600, minWidth: 300,
          height: { xs: 300, md: 600 },
        }}>
          <CustomStuffSlider images={componentResult.images} />
        </Box>
        <Box sx={{ padding: 3, pt: 0 }}>
          <Typography variant="h3"
            style={{
              background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {componentResult?.title}
          </Typography>
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", paddingBottom: "24px", justifyContent: "space-between" }}>
              {componentResult.params.map((componentParameter, index) => (
                <Paper square variant="outlined" key={index} sx={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: { xs: "start", md: "center" },
                  flexWrap: "wrap",
                  transition: "all 300ms",
                  "&:hover": {
                    bgcolor: "secondary.main"
                  },
                  p: 1, cursor: "pointer",
                }}>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                    <Typography>{componentParameter.parameter_name}</Typography>
                  </Box>
                  <Typography color="accent.main">{componentParameter.parameter_value}</Typography>
                </Paper>
              ))}
            </Box>
          </Box>
          <Typography paragraph>
            {componentResult?.description}
          </Typography>
          <Paper elevation={7} sx={{
            mt: 3, p: 2,
          }}>
            <Stack>
              <Paper variant="outlined" sx={{
                display: "flex", flexDirection: "column", justifyContent: "center",
                height: "60px",
                pl: 1,
              }}>
                <Typography color="primary.main">{componentResult.price} ₽</Typography>
                {componentResult.old_price != undefined
                  ? <Typography color="accent.main"><strike>{componentResult.old_price} ₽ </strike></Typography>
                  : null}
              </Paper>
              <Box pt={1}
                pl="2px"
              >
                <BuyButton
                  product={{ type: "component", ...componentResult }}
                  variant="contained"
                >
                  В корзину
                </BuyButton>
                <OneClickOrderButton
                  productInfo={{ type: "component", ...componentResult }}
                  color="warning"
                >
                  Заказать в 1 клик
                </OneClickOrderButton>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Stack>
      <Stack sx={{ borderTop: "1px solid white", p: 4 }}>
        <Typography variant="h4" p={3}>
          Рекомендуемые товары
        </Typography>
        <ComponentList components={recommended} />
      </Stack>
    </Stack>
  )
}

export default ComponentPage





export const componentLoader = async ({ params }) => {
  const componentResult = await getComponentById(params.componentId);
  const recommended = await getRecommendedComponents()

  return { componentResult, recommended: recommended.filter((item) => item.id != params.componentId) };
}
