import { Add, AddOutlined, Remove } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function CartItem({ cartItem, typeItem, handleCount, handleDeleteItem }) {
  const [counter, setCounter] = useState(1)
  const navigate = useNavigate()


  const handleIncrement = useCallback(() => {
    setCounter((was) => {
      if (was !== 10) {
        return was + 1
      } else {
        return was
      }
    })
  }, [])

  const handleDecrement = useCallback(() => {
    setCounter((was) => {
      if (was !== 1) {
        return was - 1
      } else {
        return was
      }
    })
  }, [])

  useEffect(() => {
    handleCount(cartItem.id, typeItem, counter)
  }, [handleCount, cartItem, typeItem, counter])

  return (
    <Box
      sx={{
        boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        display: "flex", flexDirection: "row", justifyContent: "stretch", alignItems: "center",
        width: "100%", height: "200px",
        gap: "12px", borderBottom: "1px solid white",
      }}>
      <Box
        onClick={() => {navigate(`/${typeItem}/${cartItem.id}`)}}
        sx={{ flex: 2,
          height: "100%", minWidth: "400px",
          display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center",
          paddingLeft: "48px", gap: "12px", boxShadow: "inset 0 0 8px black",
          cursor: "pointer", transition: "all 300ms", "&:hover": { bgcolor: "#440000", },
        }}>
        <img alt="Image" src={cartItem.images[0].path} style={{ maxHeight: "100px", width: "100px", }} />
        <Box sx={{
          display: "inline-flex", flexDirection: "column", alignItems: "center",
        }}>
          <Typography fontSize="1.5rem" style={{ whiteSpace: 'nowrap', }} >{cartItem.title}</Typography>
          <Typography sx={{color: "accent.main"}}>{typeItem === "build" ? "Сборка" : cartItem.component_type}</Typography>
        </Box>
      </Box>
      <Box sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
      }}>
        <Typography sx={{color: cartItem.status === "PRESENT" ? "text.main" : "red"}}>{cartItem.status === "PRESENT" ? "Присутствует" : "Отсутствует" }</Typography>
      </Box>

      <Box sx={{
        flex: 2,
        display: "flex",
        justifyContent: "end", alignItems: "center",
        gap: "24px",
        paddingRight: "24px",
      }}>
        <Box sx={{display: "flex", alignItems: "center", bgcolor: "secondary.main"}}>
          <IconButton onClick={handleDecrement} color="text"><Remove /></IconButton>
          <Typography>{counter}</Typography>
          <IconButton onClick={handleIncrement} color="text"><Add /></IconButton>
        </Box>
        <Typography color="primary">{cartItem.price} ₽</Typography>
        <Button color="error" onClick={() => handleDeleteItem(typeItem, cartItem.id)}>Убрать</Button>
      </Box>
    </Box>
  )
}
