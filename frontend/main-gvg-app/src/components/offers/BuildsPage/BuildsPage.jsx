import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import BuildCard from "./BuildCard"

export default function BuildsPage() {
  const [builds, setBuilds] = useState([])
  useEffect(() => {
    fetch("/api/get-builds")
      .then((response) => response.json())
      .then((data) => {
        setBuilds(data)
        data.forEach((element) => {
          console.log(element)
        })
      })
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
        {builds.map((build, index) => (
          <BuildCard build={build} key={index} />
        ))}
      </Box>
    </Box>
  )
}
