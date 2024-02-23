import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { ComponentList } from "../../../../stuff/components/ComponentList"
import { BuildsList } from "../../../../stuff/builds/BuildList"
import { ComponentRecomeneddedList } from "../../../../stuff/components/ComponentRecommendedList"

function HeadRecommendations({ recommendationsInfo }) {
  const [builds, setBuilds] = useState(recommendationsInfo?.builds ?? [])
  const [components, setComponents] = useState(recommendationsInfo?.components ?? [])

  return (
    <Box bgcolor={"background.transparent"} sx={{
      maxWidth: "1800px",
      m: "auto",
      pb: 6,
    }}
    >

      <Typography variant="h3" pt={3} textAlign="center" gutterBottom>Вот они, красавцы</Typography>
      <BuildsList builds={builds} filter={null} />

      <Typography variant="h3" pt={3} textAlign="center" gutterBottom>Хиты сезона</Typography>
      <ComponentRecomeneddedList components={components} />

    </Box>
  )

}



export default HeadRecommendations
