import { Box, Button, Grid, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { CustomStuffSlider } from "../../../common/CustomStuffSlider";
import BuyButton from "../../../common/components/buttons/BuyButton";


export function ComponentPage() {
  const { componentResult } = useLoaderData()

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "24px", }}>
      <Grid container sx={{ maxWidth: "1200px", width: "100%", minHeight: "70vh", color: "text.main" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ width: "100%", height: { xs: "300px", md: "100%" }, maxHeight: "600px", boxShadow: "inset 0 0 2rem black" }}
          >
            <CustomStuffSlider images={componentResult.images} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
          <Box sx={{ width: "100%", padding: "24px", paddingTop: "0" }}>
            <Box marginBottom="24px">
              <Typography textAlign="center" variant="h3">
                {componentResult?.title}
              </Typography>
            </Box>
            <Box >
              <Typography variant="body" sx={{ marginTop: "480px" }}>
                {componentResult?.description}
              </Typography>
            </Box>
            <Box sx={{
              display: "flex", flexDirection: "row", alignItems: "center",
              borderTop: "1px solid white", borderBottom: "1px solid white",
              marginY: "24px", paddingY: "12px", textAlign: "center",
            }}>
              <Typography>Цена: {componentResult?.price}</Typography>
              <BuyButton
                product={{ type: "component", ...componentResult }}
                sx={{
                  marginInline: "20px", transition: "all 0.3s", bgcolor: "#2600B1", color: "#D7FEDC", paddingTop: "6px",
                  "&:hover": { backgroundColor: "lightblue", boxShadow: "0 0 1em #D7FEDC", color: "blue", cursor: "pointer", },
                }}
                variant="contained"
              >
                В корзину
              </BuyButton>
              <Button variant="outlined" fontSize="0.85em" color="background"
                sx={{
                  color: "rgba(255, 255, 255, 0.5)",
                  "&:hover": {
                    border: "1px solid white",
                  }
                }}
              >
                Заказать в 1 клик
              </Button>
            </Box>
            <Box>
              <Typography variant="h4">
                Характеристики
              </Typography>
              <Box sx={{ height: "110%", width: "100%", display: "flex", flexDirection: "column", alignItems: "stretch", paddingBottom: "24px", justifyContent: "space-between" }}>
                {componentResult.params.map((componentParameter, index) => (
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
                      <Typography>{componentParameter.parameter_name}</Typography>
                    </Box>
                    <Typography color="accent.main">{componentParameter.parameter_value}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%", height: "100%", borderTop: "1px solid white", paddingBottom: "48px" }}>
        <Typography variant="h4" p="24px" pt="12px">
          Рекомендуемые товары
        </Typography>
      </Box>
    </Box>
  )
}
