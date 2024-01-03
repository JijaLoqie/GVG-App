import { useTheme } from "@emotion/react";
import { ShoppingCart } from "@mui/icons-material";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";

function BuyButton({ productInfo, ...otherProps }) {
  const dispatch = useDispatch()

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));


  const { enqueueSnackbar } = useSnackbar()

  const productLink = useSelector(state => (state.carts.products ?? [])
    .find(item => item.id === productInfo.id && item.type === productInfo.type))



  const handleClick = () => {
    console.log(theme.breakpoints.up("xs"))
    if (productLink && productLink.quantity >= 5) {
      let variant = "error"
      enqueueSnackbar("Максимум 5 товаров одного вида!", { variant })
    } else {
      dispatch({ type: "buy", payload: productInfo })
      let variant = "success"
      enqueueSnackbar("Товар добавлен в корзину", { variant })
    }
  }

  return (
    <Button
      onClick={handleClick}
      endIcon={isSmallScreen ? null : <ShoppingCart />}
      {...otherProps}>

      {productLink === undefined ? (<Typography>В корзину</Typography>)
        : (<Typography>Добавить ещё</Typography>)}

    </Button>
  )
}


export default BuyButton
