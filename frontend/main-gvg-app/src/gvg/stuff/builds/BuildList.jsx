import { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { BuildCard } from "./BuildCard"

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
//      fetch("/api/get-builds")
//        .then((response) => response.json())
//        .then((data) => {
//          setBuilds(data)
//          data.forEach((element) => {
//            console.log(element)
//          })
//        })
    setBuilds([
      {description: "Компьютер один"},
      {description: "Компьютер второй"},
      {description: "Комьютер триии"},
    ])
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
