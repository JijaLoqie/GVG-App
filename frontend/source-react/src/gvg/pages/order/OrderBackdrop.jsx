import { Backdrop, Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../common/components/forms/ContactForm";
import { Close, DocumentScannerSharp } from "@mui/icons-material";
import OrderProductInfo from "./OrderProductInfo";
import { useSnackbar } from "notistack";

export function OrderBackdrop({ isOpen }) {
  const dispatch = useDispatch()
  const productInfo = useSelector(state => state.order.productInfo)
  const { enqueueSnackbar } = useSnackbar()

  const handleClose = (success) => {
    if (success) {
      let variant = "success"
      let textMessage = productInfo !== null ? "Товар заказан" : "Скоро мы с вами свяжемся!"
      enqueueSnackbar(textMessage, { variant })
    } else {
      let variant = "error"
      enqueueSnackbar("Произошла ошика! Попробуйте позже или напишите нам", { variant })
    }
    dispatch({ type: "close" });
  }



  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
    >
      <Paper variant="outlined"

        sx={{
          width: { xs: "90vw", md: "50vw" },
        }}>
        <Paper elevation={3} square sx={{
          display: "flex", justifyContent: "end",
          bgcolor: "secondary.main"
        }}>
          <IconButton color="primary" onClick={handleClose}>
            <Close />
          </IconButton>
        </Paper>
        {productInfo ? (
          <Box sx={{ pt: 2, px: 4 }}>
            <Typography variant="h4">Ваш заказ:</Typography>
            <OrderProductInfo product={productInfo} />
          </Box>
        ) : null}
        <ContactForm parentHandleSubmit={handleClose} concreteProducts={[productInfo,]} sx={{ p: 4 }} />
      </Paper>
    </Backdrop>
  )
}
