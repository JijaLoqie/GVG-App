import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ComponentCard } from "../../stuff/components/ComponentCard";
import { getRecommendedComponents } from "../../stuff/components/ComponentLoader";
import { getRecommendedBuilds } from "../../stuff/builds/BuildLoader";

const handleMouseMove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

export function RecommendedList({ keyFilter }) {
  const [stuffList, setStuffList] = useState([])

  useEffect(async () => {
    const components = await getRecommendedComponents() 
    const builds = await getRecommendedBuilds() 
    setStuffList([...components])
  }, [keyFilter])
  return (
    <Box sx={{ display: "flex", justifyContent: "start", overflowX: "scroll", minWidth: "100%", height: "100%", }}>
      {stuffList.map((stuff, index) => (
        <Box key={index} onMouseMove={handleMouseMove} sx={{ }} >
          <ComponentCard componentItem={stuff} />
        </Box>
      ))}
    </Box>
  )
}
