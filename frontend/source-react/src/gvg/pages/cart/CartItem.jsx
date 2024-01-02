import { Add, Remove } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBuildById } from "../../stuff/builds/BuildLoader";
import { getComponentById } from "../../stuff/components/ComponentLoader";

export function CartItem({ productInfo }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(productInfo.quantity)

  useEffect(() => {
    const id = productInfo.id
    const type = productInfo.type
    const newQuantity = productInfo.quantity

    setQuantity(newQuantity)

    if (type === "build") {
      getBuildById(id).then((result) => {
        setProduct({ ...result, type: type})
      })
    }
    if (type === "component") {
      getComponentById(id).then((result) => {
        setProduct({ ...result, type: type })
      })
    }
  }, [productInfo])

  if (product === null) {
    return (
      <Box
        sx={{
          boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          display: "flex", flexDirection: "row", justifyContent: "stretch", alignItems: "center",
          width: "100%", height: "200px",
          gap: "12px", borderBottom: "1px solid white",
        }}>
        loading...
      </Box>
    )
  }

  return (
    <Box
      sx={{
        boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        display: "flex", flexDirection: "row", justifyContent: "stretch", alignItems: "center",
        width: "100%", height: "200px",
        gap: "12px", borderBottom: "1px solid white",
      }}>
      <Box
        onClick={() => { navigate(`/${product.type}/${product.id}`) }}
        sx={{
          flex: 2,
          height: "100%", minWidth: "400px",
          display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center",
          paddingLeft: "48px", gap: "12px", boxShadow: "inset 0 0 8px black",
          cursor: "pointer", transition: "all 300ms", "&:hover": { bgcolor: "#440000", },
        }}>
        <img alt="Image" src={product.images[0].path} style={{ maxHeight: "100px", width: "100px", }} />


        <Box sx={{
          display: "inline-flex", flexDirection: "column", alignItems: "center",
        }}>
          <Typography fontSize="1.5rem" style={{ whiteSpace: 'nowrap', }} >{product.title}</Typography>
          <Typography sx={{ color: "accent.main" }}>{product.type === "build" ? "Сборка" : product.component_type}</Typography>
        </Box>
      </Box>

      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", }}>
        <Typography sx={{ color: product.status === "PRESENT" ? "text.main" : "red" }}>{product.status === "PRESENT" ? "Присутствует" : "Отсутствует"}</Typography>
      </Box>

      <Box sx={{
        flex: 2,
        display: "flex", justifyContent: "end", alignItems: "center",
        gap: "24px", paddingRight: "24px",
      }}>
        <Box sx={{ display: "flex", alignItems: "center", bgcolor: "secondary.main" }}>
          <IconButton onClick={() => dispatch({ type: "remove", payload: { productType: product.type, productId: product.id } })} color="text"><Remove /></IconButton>
          <Typography>{quantity}</Typography>
          <IconButton onClick={() => dispatch({ type: "buy", payload: { productType: product.type, productId: product.id } })} color="text"><Add /></IconButton>
        </Box>
        <Typography color="primary">{product.price} ₽</Typography>
        <Button color="error" onClick={() => dispatch({ type: "remove-all", payload: { productType: product.type, productId: product.id } })}>Убрать</Button>
      </Box>
    </Box>
  )
}
