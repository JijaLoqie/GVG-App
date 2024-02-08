import { Typography, Paper, CircularProgress, Box } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import useProduct from "../../common/hooks/useProduct"

function OrderProductInfo({ product, variant, ...otherProps }) {
  const realProduct = useProduct(product)

  if (product === null) {
    return (
      <Paper sx={{
        minHeight: "90px",
      }}>
        <CircularProgress />
      </Paper>
    )
  }

  return (
    <Paper square elevation={variant === "dark" ? 1 : 4}
      sx={{
        p: 2,
        minHeight: "90px",
        display: "flex", flexDirection: "row", justifyContent: "space-between",
      }}
      {...otherProps}
    >
      <Box sx={{
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start",
      }}>
        <Typography component={Link} to={`/${product.type}/${product.id}`}
          style={{
            background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >{product.title}</Typography>

        <Box display="flex" flexWrap="wrap" gap={1}>
          <Typography variant="body2">{product.quantity * product.price} ₽  </Typography>
          {product.quantity !== 1 ? (
            <Typography variant="caption"> ({product.quantity} шт * {product.price} ₽) </Typography>) : null
          }
        </Box>
      </Box>
      <Box sx={{ boxShadow: "0 0 8px black", height: "100px", width: "100px", display: "grid", placeItems: "center" }}>
        {realProduct?.images ? (
          <img alt="Image" src={realProduct?.images[0]?.path} style={{ maxHeight: "100%", maxWidth: "100%", }} />
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Paper >
  )
}


export default OrderProductInfo
