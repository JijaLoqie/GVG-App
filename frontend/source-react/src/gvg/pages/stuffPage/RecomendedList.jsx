import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getComponentList } from "../../stuff/components/ComponentLoader";
import { getBuildList } from "../../stuff/builds/BuildLoader";
import { ComponentCard } from "../../stuff/components/ComponentCard";

const handleMouseMove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

export function RecommendedList({ key }) {
  const [stuffList, setStuffList] = useState([])

  useEffect(() => {
    const components = getComponentList() 
    const builds = getBuildList() 
    setStuffList([...components])
  }, [key])
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "start",
      overflowX: "scroll",
      minWidth: "100%",
      height: "100%",
    }}>
      {stuffList.map((stuff, index) => (
        <Box key={index}
          onMouseMove={handleMouseMove}
          sx={{
          }}
        >
          <ComponentCard componentItem={stuff} />
        </Box>
      ))}
    </Box>
  )
}
