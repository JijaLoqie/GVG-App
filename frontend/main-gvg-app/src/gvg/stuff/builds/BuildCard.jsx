import { useState } from "react"
import { Box, Button, IconButton, Typography, keyframes } from "@mui/material"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import { Close } from "@mui/icons-material"
import SimpleSlider from "./SimpleSlider"

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
const CardContent = styled("div")({ width: "100%", height: "100%", borderRadius: "8px", backgroundColor: "#191c29", display: "flex", flexDirection: "column", })

const CardImages = styled("div")({ width: "100%", height: "100%", borderRadius: "8px", })

const CardDescription = styled("div")({ height: "50%", paddingTop: "20px", paddingInline: "12px", fontSize: "1.5rem", fontWeight: "400", })

const CardComponents = styled("div")({ width: "100%", display: "flex", justifyContent: "space-around", })

const CardButtons = styled("div")({ width: "100%", display: "flex", justifyContent: "center", })

const components = [
  { name: "hdd", rus_name: "Жёсткий диск", src: "/builds/parts/hdd.png" },
  { name: "ram", rus_name: "Оперативная память", src: "/builds/parts/ram.png", },
  { name: "ssd", rus_name: "SSD накопитель", src: "/builds/parts/ssd.png", },
  { name: "cpu", rus_name: "Процессор", src: "/builds/parts/cpu.png", },
  { name: "graphics_card", rus_name: "", src: "/builds/parts/graphics-card.png", },
]

export function BuildCard({ build }) {
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
      <CardContent>
        <CardImages>
          <SimpleSlider
            items={[
              { url: "/builds/build1.jpg" },
              { url: "/builds/build2.jpg" },
              { url: "/builds/build3.jpg" },
            ]}
            scrollable={isHovered}
          />
          <Box onClick={() => navigate("/offers/constructor")}
            sx={{ position: "relative", top: "-30px", visibility: isHovered ? "visible" : "hidden",
              width: "50%", height: "36.5px",
              display: "flex", justifyContent: "center", alignItems: "center", margin: "10px",
              backgroundColor: isHovered ? "#8778FC" : "#00000000", color: isHovered ? "#D7FEDC" : "#00000000",
              borderRadius: "10px", marginInline: "auto", transition: "all 0.3s",
              "&:hover": { backgroundColor: "lightblue", boxShadow: "0 0 1em #D7FEDC", color: "blue", cursor: "pointer", },
            }}
          >
            Подробнее
          </Box>
        </CardImages>
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
                <Box
                  component="img"
                  height="30px"
                  marginRight="15px"
                  src={`${components[currentSelected].src}`}
                  width="30px"
                />
                <Typography height="100%" lineHeight="2">
                  {build[components[currentSelected].name]}
                </Typography>
              </Box>
            </Box>
          ) : (
              build.description
            )}
        </CardDescription>
        <CardComponents>
          {components.map((component, index) => (
            <Box
              key={index}
              onClick={() => toggleComponentInfo(index)}
              sx={{ transition: "all 0.3s", width: "50px", height: "50px", bgcolor: "#D7FEDC", boxShadow: currentSelected === index ? "0 0 1px #D7FEDC" : "none", borderRadius: "75px", display: "flex", justifyContent: "center", alignItems: "center", "&:hover": { backgroundColor: "lightblue", boxShadow: "0 0 1em #D7FEDC", color: "blue", cursor: "pointer",
                },
              }}
            >
              <Box
                component="img"
                src={`${component.src}`}
                width="30px"
              />
            </Box>
          ))}
        </CardComponents>
        <CardButtons>
          <Button
            sx={{ margin: "20px", transition: "all 0.3s", bgcolor: "#2600B1", color: "#D7FEDC", width: "50%", paddingTop: "6px",
              "&:hover": { backgroundColor: "lightblue", boxShadow: "0 0 1em #D7FEDC", color: "blue", cursor: "pointer", },
            }}
            variant="contained"
          >
            В корзину
          </Button>
        </CardButtons>
      </CardContent>
    </CustomCard>
  )
}
