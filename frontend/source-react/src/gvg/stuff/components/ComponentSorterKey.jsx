import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const variants = [
  {name: "PriceIncrease", rus_name: "Цена: по возрастанию"},
  {name: "PriceDecrease", rus_name: "Цена: по убыванию"},
]


export function ComponentSorterKey({handleUpdate}) {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    handleUpdate(variants[selected].name)
  }, [selected, handleUpdate])

  const updateSorterKey = () => {
    setSelected(was => (was + 1)%variants.length)
  }
  return (
    <Box onClick={updateSorterKey} sx={{
      height: "50px",
      display: "flex", justifyContent: "center", alignItems: "center",
      bgcolor: "background.main", borderRadius: "12px", border: "1px solid white",
      padding: "8px",
      cursor: "pointer",
    }}>
      <Typography> {variants[selected].rus_name} </Typography>
    </Box>
  )
}
