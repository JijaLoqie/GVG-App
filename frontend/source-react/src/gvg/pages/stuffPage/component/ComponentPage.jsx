import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { CustomStuffSlider } from "../../../common/CustomStuffSlider";
import { getComponentById, getRecommendedComponents } from "../../../stuff/components/ComponentLoader";
import { ComponentList } from "../../../stuff/components/ComponentList";
import { ProductActions } from "../../../widgets/ProductActions";
import { ComponentRowInfo } from "../../../widgets/BuildCard";
import { ComponentRecomeneddedList } from "../../../stuff/components/ComponentRecommendedList";


function ComponentPage() {
  const { component, recommended } = useLoaderData()

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3, }}>
      <Grid container sx={{ maxWidth: "1200px", width: "100%", minHeight: "70vh", color: "text.main" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ height: "50vh", boxShadow: "inset 0 0 2rem black" }}
          >
            <CustomStuffSlider images={component.images} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} p={2}>
          <Box mb={3}>
            <Typography textAlign="center" variant="h3">
              {component?.title}
            </Typography>
          </Box>
          <Divider />
          <Box my={3}>
            <Typography>
              {component?.description}
            </Typography>
          </Box>
          <ProductActions product={component} productType={"component"} />

        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">
            Характеристики
          </Typography>
          <Box pb={2}>
            {component?.params.map((row, index) => (
              <ComponentRowInfo componentMetaInfo={row.parameter_name} value={row.parameter_value} key={index} />
            ))}
          </Box>
        </Grid>
      </Grid>
      {

        recommended ? (
          <Box sx={{ maxWidth: "1200px", width: "100%", height: "100%", borderTop: "1px solid white", paddingBottom: "48px" }}>
            <Typography variant="h4" p="24px" pt="12px">
              Рекомендуемые товары
            </Typography>
            <ComponentRecomeneddedList components={recommended} />
          </Box>) : null
      }
    </Box>
  )
}

export default ComponentPage





export const componentLoader = async ({ params }) => {
  const component = await getComponentById(params.componentId);
  const recommended = await getRecommendedComponents()

  return { component, recommended: recommended?.filter((item) => item.id != params.componentId) };
}

