import React, { useEffect, useState } from "react"

import { Search, ShoppingBag as ShoppingBagIcon } from "@mui/icons-material"
import {
  Box,
  Stack,
  Toolbar,
  IconButton,
  ButtonGroup,
  Button,
} from "@mui/material"
import CustomPopup from "../common/CustomPopup"
import { useNavigate } from "react-router-dom"
import LogoButton from "./LogoButton"
import useCheckMobileScreen from "../common/hooks/useCheckMobileScreen"
import CustomCallButton from "../common/CustomCallButton"
import MoreButton from "./MoreButton"


export default function TopBar({ actions, offersActions }) {
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
    <Toolbar
      style={{
        minHeight: 45,
      }}
      sx={{
        minHeight: 45,
        marginInline: "-15px",
        fontSize: "16px",
        lineHeight: "29px",
      }}
    >
      <LogoButton />
      {!isMobile ? (
        <>
          <ButtonGroup
            color="secondary"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              height: "100%",
              width: "50%",
              paddingInline: "15px",
            }}
            variant="text"
          >
            {actions.map((action, index) => (
              <Button
                key={index}
                onClick={() => handleClickButton(action)}
                onMouseEnter={() => handleEnterButton(action.path)}
                onMouseLeave={() => handleLeaveButton(action.path)}
                sx={{
                  padding: 0,
                  paddingInline: "20px",
                  color: hovered === action.path ? "#2222ff" : "secondary.main",
                  cursor: "pointer",
                  height: "100%",
				  width: "100%",
                  transition: "all 0.5s",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                {action.title}
              </Button>
            ))}
          </ButtonGroup>
          {mouseOnOffers || mouseOnPopup || offersOpen ? (
            <CustomPopup
              actions={offersActions}
              setMouseOnPopup={setMouseOnPopup}
            />
          ) : null}
        </>
      ) : null}
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "end",
          flexDirection: "column",
          color: "secondary.main",
          justifyContent: "center",
        }}
        width="25%"
      >
        {!isMobile ? (
          <Stack direction="row" spacing={{ xs: 1, md: 3 }}>
            {/* CallButton */}
            <CustomCallButton sx={{}} />
            <IconButton
              sx={{
                paddingTop: 0,
                paddingBottom: 0,
                color: "secondary.main",
                transition: "color 0.2s",
                "&:hover": {
                  color: "#2222ff",
                },
              }}
            >
              <ShoppingBagIcon />
            </IconButton>

            <IconButton
              sx={{
                padding: 0,
                color: "secondary.main",
                transition: "color 0.2s",
                "&:hover": {
                  color: "#2222ff",
                },
              }}
            >
              <Search />
            </IconButton>
          </Stack>
        ) : (
          <MoreButton />
        )}
      </Box>
    </Toolbar>
  )
}
