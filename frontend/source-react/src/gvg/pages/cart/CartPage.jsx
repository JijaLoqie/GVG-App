
import { Box, Button, ButtonGroup, Grid, Paper, Stack, Typography, alpha } from "@mui/material";
import { useEffect, useState } from "react";
import { getBuildById } from "../../stuff/builds/BuildLoader";
import { getComponentById } from "../../stuff/components/ComponentLoader";
import { CartItem } from "./CartItem";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
          padding: 15
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
    <Grid container spacing={2}
      sx={{
        minHeight: "100vh",
        boxSizing: "border-box",
        padding: 4
      }}>
      <Grid item xs={9}>
        <Paper variant="outlined" sx={{ display: "flex", flexDirection: "column",
          minHeight: "100vh",
        }}>
          {products.map((productInfo, index) => (
            <CartItem key={index} productInfo={productInfo} />
          ))}
        </Paper>
      </Grid>

      <Grid item xs={3}>
        <Paper variant="outlined" sx={{
          minHeight: "100vh",
        }}>
          <Box sx={{
            position: "sticky",
            top: "100px",
            border: "1px solid #ffffff77",
            width: "100%", height: "200px",
            textAlign: "center",
            display: "flex", flexDirection: "column"
          }}>
            <Typography variant="h5">
              Итоговая стоимость:
            </Typography>
            <Box sx={{
              mt: 1,
              boxShadow: "inset 0 0 36px black",
              bgcolor: alpha("#f1f", 0.5),
              width: "100%", height: "50px",
              display: "grid", placeItems: "center",
            }}>
              <Typography> {finalSum} ₽ </Typography>
            </Box>
            <Box sx={{
              flex: 1,
              display: "grid", placeItems: "center",
            }}>
              <Button component={Link} to="/order"
                variant="contained" color="success" sx={{
                "&.MuiButton-contained": {
                  padding: "10px 62px",
                }
              }}> Заказать </Button>
            </Box>
          </Box>

        </Paper>

      </Grid>
      <Button color="error" onClick={() => dispatch({ type: "clear" })}>Отчистить</Button>

    </Grid>
  )
}
