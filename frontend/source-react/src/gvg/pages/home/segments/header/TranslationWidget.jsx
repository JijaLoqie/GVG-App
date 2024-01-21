import { Box } from "@mui/material";

export function TranslationWidget({ link }) {
  return (
    <Box sx={{ flex: 1 }}>
      <iframe width="100%" height="100%" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </Box>
  )
}

