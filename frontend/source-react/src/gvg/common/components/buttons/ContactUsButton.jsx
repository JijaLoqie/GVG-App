import { Button, Typography, useMediaQuery } from "@mui/material";
import { enqueueSnackbar, useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { OrderBackdrop } from "../../../pages/order/OrderBackdrop";
import { useState } from "react";

function ContactUsButton({ children, ...otherProps }) {
  const [isOpen, setOpen] = useState(false)

  const handleClick = (success) => {
    setOpen(was => !was)
    if (success === null) {
      return
    }

    if (success) {
      var variant = "success"
      var textMessage = "Скоро мы с вами свяжемся!"
    } else {
      var variant = "error"
      var textMessage = "Скоро мы с вами свяжемся!"
    }
    enqueueSnackbar(textMessage, { variant })
  }

  return (
    <>
      <Button
        onClick={() => handleClick(null)}
        color="success"
        sx={{
          width: "100%",
          height: "60px",
        }}
        variant="contained"
      >
        {children}
      </Button>
      <OrderBackdrop isOpen={isOpen} handleClose={handleClick} />
    </>
  )
}


export default ContactUsButton

