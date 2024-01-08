import { Button, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function OneClickOrderButton({ children, productInfo, ...otherProps }) {
  const dispatch = useDispatch()

  return (
    <Button
      onClick={() => {
        dispatch({ type: "open", payload: { title: productInfo.title, type: productInfo.type, id: productInfo.id, price: productInfo.price } })
      }}
      {...otherProps}
    >
      {children}
    </Button>
  )
}


export default OneClickOrderButton

