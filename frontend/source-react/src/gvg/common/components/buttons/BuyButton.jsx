import { useTheme } from "@emotion/react";
import { ShoppingCart } from "@mui/icons-material";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";

function BuyButton({ product, ...otherProps }) {
  const dispatch = useDispatch()

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));


  const { enqueueSnackbar } = useSnackbar()

  const productLink = useSelector(state => (state.carts.products ?? [])
    .find(item => item.id === product.id && item.type === product.type))



  const handleClick = () => {
    if (productLink && productLink.quantity >= 3) {
      let variant = "error"
      enqueueSnackbar("Максимум 3 товара одного вида!", { variant })
    } else {
      dispatch({ type: "buy", payload: { id: product.id, title: product.title, type: product.type, price: product.price } })
      let variant = "success"
      enqueueSnackbar("Товар добавлен в корзину", { variant })
    }
  }

  return (
    <Button
      onClick={handleClick}
      sx={{
        marginInline: "20px", transition: "all 0.3s", bgcolor: "#2600B1", color: "#D7FEDC", paddingTop: "6px",
        "&:hover": { backgroundColor: "lightblue", boxShadow: "0 0 1em #D7FEDC", color: "blue", cursor: "pointer", },
      }}
      endIcon={isSmallScreen ? null : <ShoppingCart />}
      {...otherProps}
    >

      {productLink === undefined ? (<Typography>В корзину</Typography>)
        : (<Typography>Добавить ещё</Typography>)}

    </Button>
  )
}


export default BuyButton
