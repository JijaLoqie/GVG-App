import { Box, Divider, Grid, Container, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { CustomStuffSlider } from "../../../common/CustomStuffSlider";
import { getComponentPartsList } from "../../../common/loaders/IconsLoader";
import { ComponentRowInfo } from "../../../widgets/BuildCard";
import { getBuildById } from "../../../stuff/builds/BuildLoader";
import { getRecommendedComponents } from "../../../stuff/components/ComponentLoader";
import { ComponentList } from "../../../stuff/components/ComponentList";
import { ProductActions } from "../../../widgets/ProductActions";
import { ComponentRecomeneddedList } from "../../../stuff/components/ComponentRecommendedList";


const componentParts = getComponentPartsList()

function BuildPage() {

  const { build, recommended } = useLoaderData()


  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3, }}>
      <Grid container sx={{ maxWidth: "1200px", width: "100%", minHeight: "70vh", color: "text.main" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ height: "50vh", boxShadow: "inset 0 0 2rem black" }}
          >
            <CustomStuffSlider images={build.images} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} p={2}>
          <Box mb={3}>
            <Typography textAlign="center" variant="h3">
              {build?.title}
            </Typography>
          </Box>
          <Divider />
          <Box my={3}>
            <Typography>
              {build?.description}
            </Typography>
          </Box>
          <ProductActions product={build} productType="build" />

        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">
            Характеристики
          </Typography>
          <Box pb={2}>
            {componentParts.map((buildPartInfo, index) => (
              <ComponentRowInfo componentMetaInfo={buildPartInfo} value={build[buildPartInfo.type]} fullExpanded key={index} />
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

export default BuildPage


export const buildLoader = async ({ params }) => {
  const build = await getBuildById(params.buildId);
  const recommended = await getRecommendedComponents()

  return { build, recommended: recommended };


}
