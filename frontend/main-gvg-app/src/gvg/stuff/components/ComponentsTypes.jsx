import { Box, Typography } from "@mui/material";
import { ComponentTypeOption } from "./ComponentTypeOption";
import { useState } from "react";


const typeVariants = [
  { name: "", rus_name: "Все", src: "/builds/parts/hdd.png" },
  { name: "hdd", rus_name: "Жёсткий диск", src: "/builds/parts/hdd.png" },
  { name: "ram", rus_name: "Оперативная память", src: "/builds/parts/ram.png", },
  { name: "ssd", rus_name: "SSD накопитель", src: "/builds/parts/ssd.png", },
  { name: "cpu", rus_name: "Процессор", src: "/builds/parts/cpu.png", },
  { name: "graphics_card", rus_name: "Видеокарта", src: "/builds/parts/graphics-card.png", },
]



export function ComponentTypes({ handleUpdate }) {
  const [selectedType, setSelectedType] = useState("")

  const handleChangeType = (newSelectedType) => {
    handleUpdate(newSelectedType)
    setSelectedType(newSelectedType)
  }

  return (
    <Box sx={{ paddingTop: "12px", width: "100%", display: "flex", justifyContent: "center"}}>
      <Box sx={{
        width: "100%", maxWidth: "900px", 
        display: "flex",
        justifyContent: "center",
        flextDirection: "row",
        flexWrap: "wrap",
        color: "text.main",
      }}>
        {typeVariants.map((typeVariant, index) => (
        <ComponentTypeOption key={index} name={typeVariant.rus_name} handleClick={() => handleChangeType(typeVariant.name)} shortName={typeVariant.name} selected={selectedType === typeVariant.name} />
        ))}
      </Box>
    </Box>
  )
}
