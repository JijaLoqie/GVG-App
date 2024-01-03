import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { customPalette } from "../../common/styles/themes";
import { SimpleSlider } from "../builds/SimpleSlider";
import { useMemo, useState } from "react";
import { ComponentTypeIcon, getComponentPartsList } from "../../common/loaders/IconsLoader";
import { useDispatch } from "react-redux";
import BuyButton from "../../common/components/buttons/BuyButton";

export function RecommendationCard({ item }) {
  const [cardOpened, setCardOpened] = useState(false)
  const components = useMemo(getComponentPartsList, [])
  const dispatch = useDispatch()

  return (
    <Box sx={{
      bgcolor: "background.main",
      minWidth: "400px",
      width: "33%",
      maxWidth: "400px",
      height: "550px",

      boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      borderRadius: "10px",

      display: "flex", flexDirection: "column", alignItems: "center",
    }}>

      <Typography variant="h5" p={1}> {item.title} </Typography>

      <Box sx={{
        position: 'relative',
        width: "100%",
        transition: "all 300ms",
        minHeight: cardOpened ? "100px" : "400px", maxHeight: "100px",
        boxShadow: "inset 0 0 8px black",
      }}>
        <SimpleSlider items={item.images} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%", height: "10px", bgcolor: "background.main", }}>
        <Box
          onClick={() => setCardOpened(was => !was)}
          sx={{
            display: "flex", justifyContent: "center", alignItems: "center",
            width: "20px", height: "20px",
            cursor: "pointer",
            transform: "translate(0, -40%)",
            bgcolor: "background.main",
            border: `1px solid ${customPalette.accent}`,
            borderRadius: "30px", color: "accent.main", padding: "12px",
            zIndex: "100",
            transition: "background-color 200ms",
            "&:hover": {
              bgcolor: "secondary.main",
            }
          }}> {cardOpened ? <KeyboardArrowDown /> : <KeyboardArrowUp />} </Box>
      </Box>
      <Box sx={{
        display: "flex", justifyContent: "space-around", alignItems: "center",
        width: "100%", height: "100px",
        borderRadius: "inherit",

        backgroundImage: "-webkit-linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5) )",
        padding: "6px",
        paddingTop: "12px",
        boxShadow: "0 0 8px black",
      }}>
        <Box sx={{
          height: "85%", width: "40%", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center",
          bgcolor: "#00000033",
          color: "primary.main",
          border: `2px solid ${customPalette.accent}`,
          borderRadius: "inherit",
        }}>
          <Typography>{item.price} ₽</Typography>
          {item.old_price != undefined ? <Typography color="primary.main"><strike>{item.old_price} ₽</strike></Typography> : null}
        </Box>
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "center", alignItems: "right" }}>
          <BuyButton
            variant="contained"
            productInfo={{ type: "build", id: item.id, price: item.price }}
          />

          <Button variant="outlined" color="accent"> Заказать в 1 клик </Button>
        </Box>
      </Box>
      <Box sx={{
        width: "100%",
        display: "flex", flexDirection: "column", alignItems: "center",
        overflow: "hidden",
      }}>
        <Typography variant="h4">
          Характеристики
        </Typography>
        <Box sx={{ height: "110%", width: "100%", display: "flex", flexDirection: "column", alignItems: "stretch", paddingBottom: "24px", justifyContent: "space-between" }}>
          {components.map((component, index) => (
            <Box key={index} sx={{
              display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
              padding: "8px",
              borderRadius: "15px",
              transition: "all 300ms",
              "&:hover": {
                boxShadow: "0 0 8px white",
              }
            }}>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                <ComponentTypeIcon type={component.type} width="30px" height="30px" fill={customPalette.text} />
                <Typography>{component.rus_type}</Typography>
              </Box>
              <Typography color="accent.main">{item[component.type]}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
