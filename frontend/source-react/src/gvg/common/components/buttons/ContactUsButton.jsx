import { Button, Typography, useMediaQuery } from "@mui/material";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";

function ContactUsButton({ children, ...otherProps }) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: "open" })
  }

  return (
    <Button
      onClick={handleClick}
      color="success"
      sx={{
        width: "100%",
        height: "60px",
      }}
      variant="contained"
    >
      {children}
    </Button>
  )
}


export default ContactUsButton

