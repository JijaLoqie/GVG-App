import { ShoppingBagSharp } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function CartButton() {
  const navigate = useNavigate()
  const cartSize = useSelector(state => state.carts.products?.length ?? 0)

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
