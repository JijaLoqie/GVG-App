import { Box, Button, IconButton, Typography, keyframes } from "@mui/material"
import { SimpleSlider } from "./SimpleSlider"
import { ComponentTypeIcon, getComponentPartsList } from "../../common/loaders/IconsLoader"
import { customPalette } from "../../common/styles/themes"
import { useState } from "react"
import { useDispatch } from "react-redux"
import BuyButton from "../../common/components/buttons/BuyButton"


const componentParts = getComponentPartsList()


export function BuildCard({ build, premium }) {
  const [selectedComponentInfo, setSelectedComponentInfo] = useState(-1)

  return (
    <Box
      sx={{
        "--card-width": "calc(100% - 30px)",
        "--card-height": "500px",
        boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        width: "var(--card-width)", minHeight: "var(--card-height)",
        display: "flex", bgcolor: "background.main",
        borderRadius: "12px", fontFamily: "cursive",
      }}
    >
      <Box sx={{ width: "40%", height: "100%", borderInline: "6px solid black", borderRadius: "inherit" }}>
        <SimpleSlider items={build.images} scrollable={true} />
      </Box>



      <Box sx={{
        position: "relative",
        width: "60%", height: "100%",
        display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "stretch", paddingInline: "12px",
      }}>
        <Typography variant="h4" sx={{
          display: "flex", justifyContent: "center",
          textAlign: 'center', padding: "24px", borderBottom: `1px solid ${customPalette.text}`,
        }}>
          {build.title}
        </Typography>

        <Box sx={{
          width: { xs: "100%", md: "100%" },
        }}>
          <Box sx={{ width: "100%", display: "flex", margin: "24px", paddingTop: 0, }}>
            {build.description}
          </Box>
          <Box sx={{
            paddingTop: "24px",
            width: "100%",
            display: "flex", flexDirection: "column", justifyContent: "start",
            alignItems: 'start', gap: "12px"
          }}>
            <Box sx={{
              display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
              width: "50%",
              border: "1px solid white",
              padding: "12px",
              borderRadius: "8px",
            }}>
              <Typography color="primary.main">{build.price} ₽</Typography>
              {build.old_price != undefined ? <Typography color="accent.main"><strike>{build.old_price} ₽</strike></Typography> : null}
            </Box>
            <Box sx={{
              display: "flex", flexDirection: "row", alignItems: "center",
              borderTop: "1px solid white", borderBottom: "1px solid white",
              marginY: "24px", paddingY: "12px", textAlign: "center",
              width: "100%",
            }}>
              <BuyButton
                productInfo={{ type: "build", id: build.id, price: build.price }}
                sx={{
                  marginInline: "20px", transition: "all 0.3s", bgcolor: "#2600B1", color: "#D7FEDC", paddingTop: "6px",
                  "&:hover": { backgroundColor: "lightblue", boxShadow: "0 0 1em #D7FEDC", color: "blue", cursor: "pointer", },
                }}
                variant="contained"
              >
                В корзину
              </BuyButton>
              <Button variant="outlined" color="background" fontSize="0.85em"
                sx={{
                  color: "rgba(255, 255, 255, 0.5)",
                  "&:hover": {
                    border: "1px solid white",
                  }
                }}
              >
                Заказать в 1 клик
              </Button>
            </Box>
          </Box>

        </Box>
        <Box sx={{
          marginTop: "12px",
          overflowX: "scroll",
          width: "100%", height: "100%",
          position: "relative",
          paddingBottom: "24px",
          display: "flex", justifyContent: "center", alignItems: "end",
          flexWrap: "wrap",
        }}>
          {componentParts.map((component, index) => (
            <Box key={index}
              onClick={() => setSelectedComponentInfo(was => was !== index ? index : -1)}
              sx={{
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                transition: "all 300ms", "&:hover": { boxShadow: "0 0 8px white", },
                padding: "10px",
                overflow: "visible",
                borderRadius: "6",
                cursor: "pointer",
                flex: selectedComponentInfo === index ? 2 : 1,
              }}
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              <ComponentTypeIcon type={component.type} width="20px" height="20px" fill={customPalette.text} />
              <Typography variant="body2">{component.rus_type}</Typography>
              <Typography color="accent.main">{build[component.type]}</Typography>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  )
}
