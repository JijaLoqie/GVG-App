import { Paper, Box, Typography, Stack, Button } from "@mui/material"
import { SimpleSlider } from "./SimpleSlider"
import { getComponentPartsList } from "../../common/loaders/IconsLoader"
import { ComponentRowInfo } from "../../widgets/BuildCard"
import { ShowMoreButton } from "../../common/components/buttons/ShowMoreButton"
import { ProductActions } from "../../widgets/ProductActions"
import { useCheckMobileScreen } from "../../common/hooks/useCheckMobileScreen"


const componentParts = getComponentPartsList().slice(0, 5)


export function BuildCard({ build }) {
  const isMobile = useCheckMobileScreen()
  return (
    <Paper variant="outlined" sx={{
      flex: 1, display: "flex", flexDirection: "column",
      maxWidth: "700px", minWidth: { xs: "300px", sm: "500px" },
      p: 2,
    }}>
      <SimpleSlider items={build.images} scrollable={true} />

      <Typography gutterBottom variant="h4" pt={2} pl={1} height={{ xs: "auto", sm: "80px" }}>
        {build.title}
      </Typography>
      <Typography paragraph pt={2} height={{ xs: "auto", sm: "80px" }}>
        {build.description}
        {build.id === 1 && build.description}
      </Typography>

      <Stack sx={{ alignItems: "center" }}>
        {componentParts.map((componentMetaInfo, index) => (
          <ComponentRowInfo componentMetaInfo={componentMetaInfo} value={build[componentMetaInfo.type]} fullExpanded={isMobile} key={index} />
        ))}
        <ShowMoreButton productType="build" productId={build.id} />
      </Stack>

      <ProductActions product={build} productType="build" />
    </Paper >
  )
}

