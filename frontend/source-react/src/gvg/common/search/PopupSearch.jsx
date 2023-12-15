import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLoaderProducts } from "../hooks/useLoaderProducts"
import { customPalette } from "../styles/themes";
import { Face, SentimentVeryDissatisfied } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function PopupSearch({filter}) {
  const [products, updateProducts] = useLoaderProducts([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setFilteredProducts(was => {
      if (products === undefined) {
        return was
      }
      return products.filter((product) => product.title.toLowerCase().includes(filter.title.toLowerCase())).slice(0, 5)
    })
  }, [filter, products])
  


  return (
    <Box sx={{ position: "absolute", top: "60px", right: "30px",
      minWidth: "100px", minHeight: "100px",
      display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "stretch",
      bgcolor: "background.main", border: `2px solid ${customPalette.secondary}`,
    }}>
      {filteredProducts.length !== 0 ? filteredProducts.map((product, index) => (
        <Box key={index}
          onMouseDown={() => {navigate(`${product["component_type"] ? "component" : "build"}/${product.id}`)}}
          sx={{
          display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center",
          gap: "12px",
          padding: "24px 96px 24px 6px",
          borderBottom: "1px solid white",
        }}>
          <img alt="Image" src={product.images[0].path} style={{ maxHeight: "100px", width: "50px", }} />
          <Typography>{product.title}</Typography>
        </Box>
      )) : (
          <Box display="flex" justifyContent="center" alignItems="center" p={2}>
            <Typography> Мы ничего не нашли </Typography>
            <SentimentVeryDissatisfied sx={{width: "100px", height:"100px"}} /> 
          </Box>
        )}
    </Box>
  )
}
