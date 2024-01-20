import { Backdrop, Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import ContactForm from "../../common/components/forms/ContactForm";
import { Close, DocumentScannerSharp } from "@mui/icons-material";
import OrderProductInfo from "./OrderProductInfo";

export function OrderBackdrop({ isOpen, handleClose, productInfo }) {
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
          <IconButton color="primary" onClick={() => handleClose(null)}>
            <Close />
          </IconButton>
        </Paper>
        {productInfo ? (
          <Box sx={{ pt: 2, px: 4 }}>
            <Typography variant="h4">Ваш заказ:</Typography>
            <OrderProductInfo product={{ quantity: 1, ...productInfo }} />
          </Box>
        ) : null}
        <ContactForm parentHandleSubmit={handleClose} concreteProducts={
          productInfo ? ([
            { id: productInfo.id, title: productInfo.title, type: productInfo.type, quantity: 1 },
          ]) : null
        } sx={{ p: 4 }} />
      </Paper>
    </Backdrop>
  )
}
