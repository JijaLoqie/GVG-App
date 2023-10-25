import { Box, Grid, Typography } from "@mui/material"

export default AboutGroup = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ paddingBottom: "10px" }}>
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
          srcSet={`/static/logos/gvgFull.png`}
          src={`/static/logos/gvgFull.png`}
          alt={`GVG Tech Solutions`}
          loading="lazy"
          style={{ objectFit: "cover", width: "100px" }}
        />
      </Box>
    </Box>
  )
}
