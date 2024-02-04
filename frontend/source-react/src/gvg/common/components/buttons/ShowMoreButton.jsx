import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function ShowMoreButton({ productType, productId }) {
  const navigate = useNavigate()
  return (
    <Button variant="outlined" sx={{
      p: 1, m: 1,
      textAlign: "center",
    }}
      onClick={() => navigate(`/${productType}/${productId}`)}
    >
      Показать остальные характеристики
    </Button>
  )
}
