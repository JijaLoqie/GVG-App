import { Button, Paper, Stack, Typography } from "@mui/material";
import BuyButton from "../../../common/components/buttons/BuyButton";
import OnClickOrderButton from "../../../common/components/buttons/OneClickOrderButton";

export function ProductActions({ product, productType }) {
  return (
    <Paper elevation={7} sx={{
      display: "flex", p: 2, alignItems: "center",
      textAlign: "center", gap: 1,
    }}>
      <Stack pt={1}>
        <BuyButton product={{ type: productType, ...product }} variant="contained"> В корзину </BuyButton>
        <OnClickOrderButton productInfo={{ type: productType, ...product }}> или заказать в 1 клик </OnClickOrderButton>
      </Stack>

      <Paper variant="outlined" sx={{
        display: "flex", gap: 2, justifyContent: "center", m: 0, px: 1, py: 2, ml: "auto",
      }}>
        <Typography color="primary.main">{product.price} ₽</Typography>
        {product.old_price != undefined ? <Typography color="accent.main"><strike>{product.old_price} ₽ </strike></Typography> : null}
      </Paper>
    </Paper>
  )
}
