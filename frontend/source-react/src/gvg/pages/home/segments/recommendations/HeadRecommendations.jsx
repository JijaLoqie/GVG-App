import { Paper, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { BuildCard } from "../../../../stuff/builds/BuildCard"
import { ComponentList } from "../../../../stuff/components/ComponentList"

function HeadRecommendations({ recommendationsInfo }) {
  const [builds, setBuilds] = useState(recommendationsInfo?.builds ?? [])
  const [components, setComponents] = useState(recommendationsInfo?.components ?? [])

  return (
    <Stack p={{ xs: 0, md: 2 }} bgcolor={"background.transparent"}>
      <Typography textAlign="center" variant="h3" p={2}>Вот они, красавцы</Typography>
      <Paper variant="outlined">
        <Stack spacing={2} p={{ xs: 0, md: 2 }}
          sx={{
            boxShadow: "inset 0 0 81px black"
          }}
          alignItems={{ xs: "center", md: "stretch" }}
          direction={{ xs: "column", md: "row" }}>
          {builds.map((build, _) => <BuildCard key={build.id} build={build} forceShrink />)}
        </Stack>
      </Paper >
      <Typography textAlign="center" variant="h3" p={2}>Хиты сезона</Typography>
      <ComponentList components={components} />

    </Stack >
  )

}



export default HeadRecommendations
