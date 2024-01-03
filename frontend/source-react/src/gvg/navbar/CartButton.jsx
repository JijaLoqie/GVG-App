import { ShoppingBagSharp } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const getSize = (products) => {
  const result = products.reduce((partialSum, product) => partialSum + product.quantity, 0)

  return result
}

export function CartButton() {
  const navigate = useNavigate()
  const cartSize = useSelector(state => getSize(state.carts.products ?? []))

  return (
    <IconButton
      onClick={() => navigate("/cart")}
      sx={{ paddingTop: 0, paddingBottom: 0, color: "text.main", transition: "color 0.2s", "&:hover": { color: "accent.main", }, }}
    >
      <Badge badgeContent={cartSize} color="primary" sx={{
        '& .MuiBadge-badge': {
          right: -3, top: 13,
          border: `2px solid white`,
          padding: '0 4px',
        },
      }}
      >
        <ShoppingBagSharp />
      </Badge>
    </IconButton>
  )
}
