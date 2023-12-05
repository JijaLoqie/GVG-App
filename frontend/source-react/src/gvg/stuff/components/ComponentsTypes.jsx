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
    <Box paddingY="12px" sx={{ display: "block", flexDirection: "column",  bgcolor: "#ffffff11", borderRadius: "10px"}}>
        {typeVariants.map((typeVariant, index) => (
        <ComponentTypeOption key={index} name={typeVariant.rus_name} handleClick={() => handleChangeType(typeVariant.name)} shortName={typeVariant.name} selected={selectedType === typeVariant.name} />
        ))}
    </Box>
  )
}
