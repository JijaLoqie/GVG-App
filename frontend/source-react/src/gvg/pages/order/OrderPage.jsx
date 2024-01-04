import { Box, Button, Divider, Paper, Stack, Tab, Tabs, Typography, alpha } from "@mui/material";
import { useEffect, useState } from "react";
import ContactForm from "../../common/components/forms/ContactForm";
import { customPalette } from "../../common/styles/themes";
import { useSelector } from "react-redux";
import OrderProductInfo from "./OrderProductInfo";
import { Link } from "react-router-dom";


export function OrderPage({ }) {
  const productInfos = useSelector(state => state.carts.products ?? [])

  return (
    <Paper square variant="outlined" sx={{
      m: 4, p: 4,
      display: "flex", flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    }}>
      <Box sx={{
        width: "100%", height: "100%",
        width: "200px",
        flex: 2,
      }}>
        <Typography variant="h4" textAlign="center" mb={4}>Оставь нам свои контактные данные</Typography>
        <ContactForm />
      </Box>

      <Paper elevation={0} sx={{
        minWidth: "200px",
        width: "100%", height: "100%",
        display: "flex", flexDirection: "column",
        overflow: "scroll",
        flex: 1,
      }}>
        <Typography variant="h5" textAlign="center" mb={4} >Ваша корзина</Typography>
        {productInfos.length !== 0 ? productInfos.map((productInfo, index) => (
          <Box key={index}>
            <Divider />
            <OrderProductInfo product={productInfo} variant={index % 2 == 0 ? "light" : "dark"} />
          </Box>
        )) : (
          <Box sx={{
            width: "100%", height: "80%",
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}>
            <Typography variant="h3"> 🛒 </Typography>
            <Typography variant="h4"> Корзина пуста </Typography>
            <Typography variant="body1"> Переходите в наш каталог и заполняйте её </Typography>
            <Stack direction="row" mt={4}>
              <Button component={Link} to="/offers/builds">Сборки</Button>
              <Button color='accent' component={Link} to="/offers/components">Комплектующие</Button>
            </Stack>
          </Box>
        )}
      </Paper>

    </Paper>
  )
}
