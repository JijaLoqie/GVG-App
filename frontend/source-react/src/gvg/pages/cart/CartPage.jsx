import { Box, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export function CartPage() {
  const products = useSelector(state => state.carts.products)

  return (
    <Paper sx={{
      minHeight: "100vh"
    }}>
      Here will be dragons
      {products.map((productInfo, index) => (
        <CartItem key={index} productInfo={productInfo}/>
      ))}

    </Paper>
  )
}
