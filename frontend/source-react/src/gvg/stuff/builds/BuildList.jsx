import { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { BuildCard } from "./BuildCard"
import { loadBuildList } from "./BuildLoader"
















export function BuildsList({ filter }) {
  const [builds, setBuilds] = useState([])
  const [filteredBuilds, setFilteredBuilds] = useState([])
  useEffect(() => {
    setFilteredBuilds(
      builds
        .filter((build) => build.description.toLowerCase().includes(filter.name.toLowerCase()))

    )
  }, [builds, filter.name])
  useEffect(() => {
    loadBuildList(setBuilds)
  }, [])

  return (
    <Box>
      <Box
        padding={4}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {filteredBuilds.length !== 0 ? filteredBuilds.map((build, index) => (
          <BuildCard build={build} key={index} />
        )) : (
              <Box sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: 'center', textAlign: 'center', padding: "24px"}}>
                <Typography variant="h3">Нет сборок по запросу &quot;{filter.name}&quot;</Typography>
              </Box>
            )
        }
      </Box>
    </Box>
  )
}
