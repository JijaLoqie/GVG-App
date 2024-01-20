
import { Box, Button, Container, Grid, Paper, Stack, Typography, alpha } from "@mui/material";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { customPalette } from "../../common/styles/themes";

const getSum = (products) => {
  const result = products.reduce((partialSum, product) => partialSum + product.price * product.quantity, 0)
  return result
}

export function CartPage() {
  const products = useSelector(state => state.carts.products ?? [])
  const finalSum = useSelector(state => getSum(state.carts.products ?? []))
  const dispatch = useDispatch()

  if (products.length === 0) {
    return (
      <Box sx={{
        display: "grid", placeItems: "center", height: "80vh",
      }}>
        <Paper variant="outlined" sx={{
          minHeight: "50vh",
          display: "flex", justifyContent: "center", alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          p: 1
        }}>
          <Typography variant="h1"> 🛒 </Typography>
          <Typography variant="h2"> Корзина пуста </Typography>
          <Typography variant="body1"> Переходите в наш каталог и заполняйте её </Typography>
          <Stack direction="row" mt={4}>
            <Button component={Link} to="/offers/builds">Сборки</Button>
            <Button color='accent' component={Link} to="/offers/components">Комплектующие</Button>
          </Stack>
        </Paper>
      </Box>
    )

  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} p={2}>
        <Grid item xs={12} sm={3}>
          <Paper variant="outlined" sx={{ minHeight: { sx: "auto", md: "100vh" }, }}>
            <Stack spacing={1} sx={{
              position: "static", top: "90px",
              border: `1px solid ${customPalette.text}`,
              width: "100%", height: "200px",
              textAlign: "center",
            }}>
              <Typography fontSize={20}>
                Итоговая стоимость:
              </Typography>
              <Box sx={{
                boxShadow: "inset 0 0 36px black", bgcolor: alpha(customPalette.accent, 0.5),
                display: "grid", placeItems: "center", height: "50px",
              }}>
                <Typography> {finalSum} ₽ </Typography>
              </Box>
              <Box sx={{
                flex: 1,
                display: "grid", placeItems: "center",
              }}>
                <Button component={Link} to="/order"
                  variant="contained" color="accent" sx={{
                  }}> Заказать </Button>
              </Box>
            </Stack>

          </Paper>

        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper variant="outlined" sx={{ minHeight: { sx: "auto", md: "100vh" }, }}>
            {products.map((productInfo) => (
              <CartItem key={`${productInfo.type}-${productInfo.id}`} productInfo={productInfo} />
            ))}
          </Paper>
        </Grid>
        <Button color="error" onClick={() => dispatch({ type: "clear" })}>Отчистить</Button>

      </Grid >
    </Container>
  )
}
