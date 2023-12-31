import { Box, Typography } from "@mui/material"


const fullLogoIcon = 'gvgFull.png'



const fullLogoIconPath = `/static/logos/${fullLogoIcon}`




export default function AboutGroup() {
  return (
    <Box>
      <Typography sx={{ paddingBottom: "10px" }} variant="h4">
        О нас
      </Typography>
      <Typography>
        Мы динамичная компания, предлагающая более 10 профессиональных сборок
        компьютеров для любых задач. Наша команда состоит из опытных
        специалистов, гарантирующих качественную сборку в кратчайшие сроки.
      </Typography>
      <Box
        sx={{
          width: "100%",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <img
          alt="GVG Tech Solutions"
          loading="lazy"
          src={fullLogoIconPath}
          srcSet={fullLogoIconPath}
          style={{ objectFit: "cover", width: "100px" }}
        />
      </Box>
    </Box>
  )
}
