import { useState } from "react";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { OrderBackdrop } from "../../../pages/order/OrderBackdrop";

function OneClickOrderButton({ children, productInfo, ...otherProps }) {
  const { enqueueSnackbar } = useSnackbar()
  const [isOpen, setOpen] = useState(false)

  const handleClose = (success) => {
    setOpen(false)
    if (success === null) {
      return
    }

    if (success) {
      let variant = "success"
      let textMessage = productInfo !== null ? "Товар заказан" : "Скоро мы с вами свяжемся!"
      enqueueSnackbar(textMessage, { variant })
    } else {
      let variant = "error"
      enqueueSnackbar("Произошла ошика! Попробуйте позже или напишите нам", { variant })
    }
  }

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true)
        }}
        {...otherProps}
      >
        {children}
      </Button>
      <OrderBackdrop isOpen={isOpen} handleClose={handleClose} productInfo={productInfo} />
    </>
  )
}


export default OneClickOrderButton

