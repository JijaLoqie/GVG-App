import { Stack, AccordionSummary, Box, Paper, Typography, IconButton } from "@mui/material";
import { ComponentTypeIcon } from "../../../common/loaders/IconsLoader";
import { ExpandMore } from "@mui/icons-material"
import { customPalette } from "../../../common/styles/themes";
import { useState } from "react";

export function ComponentRowInfo({ componentMetaInfo, value }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Paper square variant="outlined" sx={{
      width: "100%",
      transition: "all 200ms",
      maxHeight: expanded ? "190px" : "50px",
      "&:hover": {
        bgcolor: "background.light"
      },
      cursor: "pointer",
    }} onClick={() => setExpanded(was => !was)}>
      <Stack direction="row">
        <Box sx={{ p: 1, display: "flex", gap: 1, width: "43%", minWidth: "180px", flexShrink: 0 }}>
          <ComponentTypeIcon type={componentMetaInfo.type} width={30} height={30} fill={customPalette.text} />
          <Typography>{componentMetaInfo.rus_type}</Typography>
        </Box>
        <Box sx={{
          p: 1,
          maskImage: !expanded ? "linear-gradient(180deg, #000 40%, transparent 89%)" : "linear-gradient(180deg, #000 99%, transparent)",
        }}>
          <Typography sx={{
            minWidth: "10px",
            transition: "all 200ms",
            maxHeight: expanded ? "190px" : "50px",
            color: "secondary.main",
          }} > {value}</Typography>
        </Box>
      </Stack>
    </Paper >

  )
}
