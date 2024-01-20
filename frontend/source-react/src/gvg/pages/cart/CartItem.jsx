import { Add, Remove } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import useProduct from "../../common/hooks/useProduct";
import { RemoveCartItemButton } from "../../common/components/buttons/RemoveCartItemButton";
import { SimpleSlider } from "../../stuff/builds/SimpleSlider";

export function CartItem({ productInfo }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const product = useProduct(productInfo)

  const [quantity, setQuantity] = useState(productInfo.quantity)

  const changeQuantity = useCallback((operationType, product) => {
    if (operationType === "buy" && quantity === 3) {
      let variant = "error"
      enqueueSnackbar("Максимум 3 товара одного вида!", { variant })
    } else {
      dispatch({ type: operationType, payload: { type: product.type, id: product.id } })
      if (operationType === "remove" && quantity === 1 || operationType === "remove-all") {
        let variant = "success"
        enqueueSnackbar("Товар удалён из корзины", { variant })
      }
      setQuantity(was => operationType === "buy" ? was + 1 : was - 1)
    }

  }, [quantity])




  if (product === null) {
    return (
      <Box
        sx={{
          boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          display: "flex", flexDirection: "row", justifyContent: "stretch", alignItems: "center",
          width: "100%", height: "200px",
          gap: "12px", borderBottom: "1px solid white",
          paddingLeft: 4,
        }}>
        Loading
      </Box>
    )
  }

  return (
    <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={2}
      p={2} sx={{
        boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        borderBottom: "1px solid white",
      }}>
      <Box
        onClick={() => { navigate(`/${product.type}/${product.id}`) }}
        sx={{
          boxShadow: "0 0 8px black",
          height: "200px",
          maxHeight: "300px",
          width: "200px",
          display: "grid", placeItems: "center"
        }}>
        {product ? (
          <img alt="Image" src={product?.images[0].path} style={{ maxHeight: "100%", width: "100%", }} />
        ) : (
          <CircularProgress />
        )}
      </Box>

      <Stack direction={{ xs: "column", sm: "row" }} flex={1}>
        <Stack justifyContent="center" alignItems="center">
          <Typography fontSize="1.5rem" >{product.title}</Typography>
          <Typography sx={{ color: "accent.main" }}>{product.type === "build" ? "Сборка" : product.component_type}</Typography>
        </Stack>

        <Stack justifyContent="center" alignItems="center" flex={1}>
          <Typography sx={{ color: product.status === "PRESENT" ? "text.main" : "red" }}>
            {product.status === "PRESENT" ? "Присутствует" : "Отсутствует"}
          </Typography>
          <Stack direction="row" alignItems="center" bgcolor="secondary.main" color="text.main" maxHeight="40px">
            <IconButton onClick={() => changeQuantity("remove", productInfo)} color="text"><Remove /></IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={() => changeQuantity("buy", productInfo)} color="text"><Add /></IconButton>
          </Stack>

          <Box display="flex" flexWrap="wrap" gap={1}>
            <Typography color="primary" variant="body2">{quantity * product.price} ₽  </Typography>
            {product.quantity !== 1 ? (
              <Typography variant="caption"> ({quantity} шт * {product.price} ₽) </Typography>) : null
            }
          </Box>
        </Stack>
        <RemoveCartItemButton action={() => changeQuantity("remove-all", productInfo)} />
      </Stack>
    </Stack >
  )
}
