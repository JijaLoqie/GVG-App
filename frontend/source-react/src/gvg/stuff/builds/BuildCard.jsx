import { useMemo, useState } from "react"
import { Box, Button, IconButton, Typography, keyframes } from "@mui/material"
import styled from "@emotion/styled"
import { Link, useNavigate } from "react-router-dom"
import { Close } from "@mui/icons-material"
import SimpleSlider from "./SimpleSlider"
import { getComponentList } from "../../common/loaders/IconsLoader"

const gradientAnimation = keyframes({
  "0%": { backgroundPosition: "100% 0%", },
  "100%": { backgroundPosition: "-100% 0%", },
})

const CustomCard = styled("div")({
  "--card-height": "65vh",
  "--card-width": "calc(var(--card-height) / 1.5)",
  width: "var(--card-width)", height: "var(--card-height)",
  borderRadius: "8px", background: "linear-gradient(to right, blue, purple, blue)", backgroundSize: "200% 100%",
  animation: `${gradientAnimation} 5s linear infinite`,
  display: "flex", justifyContent: "center", alignItems: "center",
  margin: 4, padding: 4,
  fontFamily: "cursive",
})


const CardDescription = styled("div")({ height: "50%", paddingTop: "20px", paddingInline: "12px", fontSize: "1.5rem", fontWeight: "400", })

const CardComponents = styled("div")({ width: "100%", display: "flex", justifyContent: "space-around", })

const CardButtons = styled("div")({ width: "100%", display: "flex", justifyContent: "center", })


export function BuildCard({ build }) {
  const components = useMemo(getComponentList, [])
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()
  const [currentSelected, setCurrentSelected] = useState(-1)

  const toggleComponentInfo = (index) => {
    setCurrentSelected((current) => (current === index ? -1 : index))
  }

  return (
    <CustomCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ width: "100%", height: "100%", borderRadius: "8px", backgroundColor: "secondary.main", display: "flex", flexDirection: "column", }}>
        <Box sx={{ width: "100%", height: "100%", borderRadius: "8px", }}>
          <SimpleSlider
            scrollable={isHovered}
            items={[
              { url: "/static/builds/build1.jpg" },
              { url: "/static/builds/build2.jpg" },
              { url: "/static/builds/build3.jpg" },
            ]}
          />
          <Box component={Link} to={`/build/${build.id}`}
            sx={{ position: "relative", top: "-30px", visibility: isHovered ? "visible" : "hidden",
              width: "50%", height: "36.5px",
              display: "flex", justifyContent: "center", alignItems: "center", margin: "10px",
              backgroundColor: isHovered ? "#8778FC" : "#00000000", color: isHovered ? "#D7FEDC" : "#00000000",
              borderRadius: "8px", marginInline: "auto", transition: "all 0.3s",
              "&:hover": { backgroundColor: "lightblue", boxShadow: "0 0 1em #D7FEDC", color: "blue", cursor: "pointer", },
            }}
          >
            Подробнее
          </Box>
        </Box>
        <CardDescription>
          {currentSelected !== -1 ? (
            <Box
              sx={{ transition: "all 0.3s", borderRadius: "8px", display: "flex", flexDirection: "column", alignItems: "end", width: "100%", height: "95%", backgroundColor: "#D7FEDC", color: "#000000", }}
            >
              <IconButton
                onClick={() => setCurrentSelected(-1)}
                sx={{ width: "50px", height: "50px" }}
              >
                <Close />
              </IconButton>
              <Box
                sx={{ paddingInline: 4, display: "flex", flexDirection: "row", width: "100%", }}
              >
                <Box component="img" height="30px" marginRight="15px" src={`${components[currentSelected].path}`} width="30px" />
                <Typography height="100%" lineHeight="2">
                  {build[components[currentSelected].type]}
                </Typography>
              </Box>
            </Box>
          ) : (
              build.description
            )}
        </CardDescription>
        <CardComponents>
          {components.map((component, index) => (
            <Box key={index} onClick={() => toggleComponentInfo(index)}
              sx={{ transition: "all 0.3s", width: "50px", height: "50px",
                bgcolor: "#D7FEDC",
                boxShadow: currentSelected === index ? "0 0 1px #D7FEDC" : "none",
                borderRadius: "75px", display: "flex", justifyContent: "center", alignItems: "center",
                "&:hover": { backgroundColor: "lightblue", boxShadow: "0 0 1em #D7FEDC", color: "blue", cursor: "pointer", },
              }}
            >
              <Box component="img" src={`${component.path}`} width="30px" />
            </Box>
          ))}
        </CardComponents>
        <CardButtons>
          <Button variant="contained"
            sx={{ height: "60px", transition: "all 0.3s", margin: "10px", bgcolor: "#2600B1", color: "#D7FEDC", width: "50%", paddingTop: "6px",
              "&:hover": { backgroundColor: "lightblue", boxShadow: "0 0 1em #D7FEDC", color: "blue", cursor: "pointer", },
            }}
          >
            В корзину
          </Button>
          <Button variant="outlined" fontSize="0.85em"
            color= "background"
            sx={{ height: "60px", width: "50%", margin: "10px", color:"rgba(255, 255, 255, 0.5)",
              "&:hover": {
                border: "1px solid white",
              }}}
          >
            Заказать в 1 клик
          </Button>
        </CardButtons>
      </Box>
    </CustomCard>
  )
}
