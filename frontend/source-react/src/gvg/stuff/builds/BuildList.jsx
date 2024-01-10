import { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { BuildCard } from "./BuildCard"
import { loadBuildList } from "./BuildLoader"


export function BuildsList({ builds, filter }) {
  const [filteredBuilds, setFilteredBuilds] = useState([])
  useEffect(() => {
    setFilteredBuilds(
      builds
        .filter((build) => build.title.toLowerCase().includes(filter.name.toLowerCase()))

    )
  }, [builds, filter.name])

  return (
    <Box
      paddingBottom={4}
      sx={{
        width: "100%",
        position: "relative",
        display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: 'space-around',
        gap: "12px",
      }}
    >
      {filteredBuilds.length !== 0 ? filteredBuilds.map((build, index) => (
        <BuildCard build={build} key={index} />
      )) : (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: 'center', textAlign: 'center', padding: "24px" }}>
          <Typography variant="h3">Нет сборок по запросу &quot;{filter.name}&quot;</Typography>
        </Box>
      )
      }
    </Box>
  )
}
