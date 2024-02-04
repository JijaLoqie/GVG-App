import { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { BuildCard } from "./BuildCard"
import { NothingFound } from "../../widgets/NothingFound"


export function BuildsList({ builds, filter }) {
  const [filteredBuilds, setFilteredBuilds] = useState([])
  useEffect(() => {
    setFilteredBuilds(filter === null ? builds : builds.filter((build) => build.title.toLowerCase().includes(filter.name.toLowerCase())))
  }, [builds, filter])

  return (
    <Box sx={{
      display: "flex", justifyContent: "center", flexDirection: "row",
      flexWrap: "wrap", gap: 2,
    }}>
      {
        filteredBuilds.length !== 0
          ? filteredBuilds.map((build, index) => (
            <BuildCard build={build} key={index} />
          )) : (
            <NothingFound />
          )
      }
    </Box>
  )
}
