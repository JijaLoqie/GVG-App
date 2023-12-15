import { useEffect, useState } from "react"

import { ShoppingBag as ShoppingBagIcon } from "@mui/icons-material"
import {
  Box,
  Stack,
  Toolbar,
  IconButton,
  ButtonGroup,
  Button,
  Badge,
} from "@mui/material"
import CustomPopup from "../common/CustomPopup"
import { useNavigate } from "react-router-dom"
import LogoButton from "./LogoButton"
import { useCheckMobileScreen } from "../common/hooks/useCheckMobileScreen"
import CustomCallButton from "../common/CustomCallButton"
import MoreButton from "./MoreButton"
import CustomSearch from '../common/CustomSearch'
import { useCartItems } from "../common/hooks/useCartItems"


export default function TopBar({ actions, offerActions }) {
  const {cartItems} = useCartItems()
  const [hovered, setHovered] = useState("")
  const [mouseOnOffers, setMouseOnOffers] = useState(false)
  const [offersOpen, setOffersOpen] = useState(false)
  const [mouseOnPopup, setMouseOnPopup] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (!mouseOnOffers && !mouseOnPopup) {
      const timer = setTimeout(() => {
        if (!mouseOnOffers && !mouseOnPopup) {
          setOffersOpen(false)
        }
      }, 400)
      return () => clearTimeout(timer)
    } else {
      setOffersOpen(true)
    }
  }, [mouseOnOffers, mouseOnPopup])

  const handleEnterButton = (actionPath) => {
    if (actionPath === "/offers") {
      setMouseOnOffers(true)
    }
    setHovered(actionPath)
  }

  const handleLeaveButton = (actionPath) => {
    if (actionPath === "/offers") {
      setMouseOnOffers(false)
    }
    setHovered(actionPath === hovered ? "none" : hovered)
  }

  const handleClickButton = (action) => {
    if (action.path === "/offers") {
      return
    }
    navigate(action.path)
  }
  const isMobile = useCheckMobileScreen()
  return (
    <Toolbar style={{ minHeight: 45, }}
      sx={{
        minHeight: 45, fontSize: "16px", lineHeight: "29px", }}
    >
      <LogoButton />
      {!isMobile ? (
        <>
          <ButtonGroup
            color="text"
            sx={{ display: "flex", flexDirection: "row", justifyContent: "start", height: "100%", width: "50%", maxWidth: 600, paddingInline: "15px", }}
            variant="text"
          >
            {actions.map((action, index) => (
              <Button
                key={index}
                onClick={() => handleClickButton(action)}
                onMouseEnter={() => handleEnterButton(action.path)}
                onMouseLeave={() => handleLeaveButton(action.path)}
                sx={{ padding: 0, paddingInline: "20px", color: hovered === action.path ? "#2222ff" : "text.main", cursor: "pointer", height: "100%", width: "100%", transition: "all 0.5s",
                  "&:hover": { backgroundColor: "transparent", },
                }}
              >
                {action.title}
              </Button>
            ))}
          </ButtonGroup>
          {mouseOnOffers || mouseOnPopup || offersOpen ? (
            <CustomPopup
              actions={offerActions}
              setMouseOnPopup={setMouseOnPopup}
            />
          ) : null}
        </>
      ) : null}
      <Box
        sx={{ marginLeft: "auto", display: "flex", alignItems: "end", flexDirection: "column", color: "text.main", justifyContent: "center", }}
        width="25%"
      >
        <Stack direction="row" spacing={{ xs: 1, md: 3 }}>
          <CustomCallButton sx={{}} />
          <IconButton
            onClick={() => navigate("/cart")}
            sx={{ paddingTop: 0, paddingBottom: 0, color: "text.main", transition: "color 0.2s", "&:hover": { color: "accent.main", }, }}
          >
            <Badge badgeContent={cartItems.length} color="primary" sx={{
              '& .MuiBadge-badge': {
                right: -3,
                top: 13,
                border: `2px solid white`,
                padding: '0 4px',
              },
            }}
            >
              <ShoppingBagIcon />
            </Badge>
          </IconButton>

          { !isMobile && <CustomSearch />}
        </Stack>
      </Box>
    </Toolbar>
  )
}
