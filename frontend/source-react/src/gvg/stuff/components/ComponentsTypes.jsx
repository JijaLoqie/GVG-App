import { Box, Typography } from "@mui/material";
import { ComponentTypeOption } from "./ComponentTypeOption";
import { useState } from "react";


const typeVariants = [
  { name: "", rus_name: "Все",},
  { name: "hdd", rus_name: "Жёсткий диск",},
  { name: "ram", rus_name: "Оперативная память",},
  { name: "ssd", rus_name: "SSD накопитель",},
  { name: "cpu", rus_name: "Процессор",},
  { name: "graphics_card", rus_name: "Видеокарта",},
  { name: "motherboard", rus_name: "Материнская плата",},
]



export function ComponentTypes({ handleUpdate }) {
  const [selectedType, setSelectedType] = useState("")

  const handleChangeType = (newSelectedType) => {
    handleUpdate(newSelectedType)
    setSelectedType(newSelectedType)
  }

  return (
    <Box paddingY="12px" sx={{
      position: {xs: "relative", md:"sticky"},
      top: {xs: 0, md: "90px"},
      display: "flex", flexWrap: "wrap",
      flexDirection: {xs: "row", md:"column"},
      bgcolor: {xs: "#000", md:"#ffffff11"},
      borderRadius: "10px",

      minWidth: "inherit", width: "inherit", maxWidth: "inherit",
    }}>
      {typeVariants.map((typeVariant, index) => (
        <ComponentTypeOption key={index} name={typeVariant.rus_name} handleClick={() => handleChangeType(typeVariant.name)} shortName={typeVariant.name} selected={selectedType === typeVariant.name} />
      ))}
    </Box>
  )
}
