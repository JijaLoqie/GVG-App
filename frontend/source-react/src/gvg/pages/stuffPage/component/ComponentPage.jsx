import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CustomStuffSlider } from "../../../common/CustomStuffSlider";


export function ComponentPage() {
  const [componentsInfo, setComponentsInfo] = useState([])

  const { componentResult, params } = useLoaderData()


  useEffect(() => {
    setComponentsInfo(params ?? [])
  }, [params, componentResult])
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "24px",}}>
      <Grid container sx={{ maxWidth: "1200px", width: "100%", minHeight: "70vh", color: "text.main" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ width: "100%", height: {xs: "300px", md: "100%"}, maxHeight: "600px", boxShadow: "inset 0 0 2rem black" }}
          >
            <CustomStuffSlider images={componentResult.images} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex'}}>
          <Box sx={{width: "100%", padding: "24px", paddingTop: "0"}}>
            <Box marginBottom="24px">
              <Typography textAlign="center" variant="h3">
                {componentResult?.title}
              </Typography>
            </Box>
            <Box >
              <Typography variant="body" sx={{marginTop: "480px"}}>
                {componentResult?.description}
              </Typography>
            </Box>
            <Box sx={{
              display: "flex", flexDirection: "row", alignItems: "center",
              borderTop: "1px solid white", borderBottom: "1px solid white",
              marginY: "24px", paddingY: "12px", textAlign: "center",
            }}>
              <Typography>Цена: {componentResult?.price}</Typography>
              <Button
                sx={{ marginInline: "20px", transition: "all 0.3s", bgcolor: "#2600B1", color: "#D7FEDC", paddingTop: "6px",
                  "&:hover": { backgroundColor: "lightblue", boxShadow: "0 0 1em #D7FEDC", color: "blue", cursor: "pointer", },
                }}
                variant="contained"
              >
                В корзину
              </Button>
              <Button variant="outlined" fontSize="0.85em" color= "background"
                sx={{
                  color:"rgba(255, 255, 255, 0.5)",
                  "&:hover": {
                    border: "1px solid white",
                  }}}
              >
                Заказать в 1 клик
              </Button>
            </Box>
            <Box>
              <Typography variant="h4">
                Характеристики
              </Typography>
              <Box>
                {componentsInfo.map((componentResult, index) => (
                  <Box key={index} sx={{
                    marginTop: "8px",
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"}, justifyContent: "stretch",
                  }}>
                    <Box sx={{ minWidth: "10%", bgcolor: "text.main", color: "black", padding: "12px", fontSize: "1.5rem", }}>
                      {componentResult.rus_name}
                    </Box>
                    <Box sx={{ flex: 1, bgcolor: "gray", color: "text.main", padding: "12px", fontSize: "1.5rem", }}>
                      {componentResult.value}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{width: "100%", height: "100%", borderTop: "1px solid white", paddingBottom: "48px"}}>
        <Typography variant="h4" p="24px" pt="12px">
          Рекомендуемые товары
        </Typography>
      </Box>
    </Box>
  )
}
