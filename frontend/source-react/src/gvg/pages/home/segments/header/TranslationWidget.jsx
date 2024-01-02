import { Box } from "@mui/material";

export function TranslationWidget({link}) {
  return (
    <Box sx={{flex: 1}}>
      <iframe width="100%" height="100%" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Box>
  )
}

//  <iframe width="100%" height="315" src="https://www.youtube.com/embed/lHpYyYtkmrw?si=ZLrvzizLqM5yO0kJ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//        <iframe width="100%" height="515" src="https://www.youtube.com/embed/lHpYyYtkmrw?si=X82OXxOVT-eJERQb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
