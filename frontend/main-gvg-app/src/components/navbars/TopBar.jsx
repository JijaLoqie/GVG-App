/* eslint-disable react/forbid-component-props */
import React, { useEffect, useState } from "react"

import {
  Phone as PhoneIcon,
  ShoppingBag as ShoppingBagIcon,
  Search as SearchIcon,
} from "@mui/icons-material"
import {
  Box,
  Stack,
  Typography,
  Toolbar,
  Popover,
  IconButton,
  Switch,
  createTheme,
  colors,
} from "@mui/material"
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state"
import CustomPopup from "../common/CustomPopup"
import { useNavigate } from "react-router-dom"
import LogoButton from "./LogoButton"
import styled from "styled-components"
import useCheckMobileScreen from "../common/hooks/useCheckMobileScreen"


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}))

export default function TopBar({ actions, offersActions, themeOptions }) {
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              height: "100%",
              width: "50%",
              paddingInline: "15px",
            }}
          >
            {actions.map((action, index) => (
              <Typography
                key={index}
                onClick={() => handleClickButton(action)}
                onMouseEnter={() => handleEnterButton(action.path)}
                onMouseLeave={() => handleLeaveButton(action.path)}
                sx={{
                  paddingInline: "20px",
                  color: hovered === action.path ? "#2222ff" : "secondary.main",
                  cursor: "pointer",
                  height: "100%",
                  transition: "all 0.5s",
                }}
              >
                {action.title}
              </Typography>
            ))}
          </Box>
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
        {/* CallText */}
        <Typography
          display={{ xs: "none", lg: "flex" }}
          sx={{ fontSize: "20px", fontWeight: "400" }}
        >
          TEL: 89851460477
        </Typography>
        {/* CallButton */}
        <Box display={{ xs: "flex", lg: "none" }}>
          <PopupState popupId="demo-popup-popover" variant="popover">
            {(popupState) => (
              <div>
                <IconButton
                  sx={{
                    color: "secondary.main",
                    transition: "color 0.2s",
                    "&:hover": {
                      color: "#2222ff",
                    },
                  }}
                  {...bindTrigger(popupState)}
                >
                  <PhoneIcon />
                </IconButton>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography sx={{ p: 2 }}>
                    <a
                      href="tel:9851460477"
                      style={{
                        color: "primary.secondary",
                      }}
                    >
                      +7 (985) 146-04-77
                    </a>
                  </Typography>
                </Popover>
              </div>
            )}
          </PopupState>
        </Box>
        <Stack direction="row" spacing={3} sx={{}}>
          <MaterialUISwitch
            checked={themeOptions.darkMode}
            onChange={themeOptions.handleThemeSwitch}
            theme={themeOptions.theme}
          />
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

          {/* <IconButton
            sx={{
              padding: 0,
              color: "secondary.main",
              transition: "color 0.2s",
              "&:hover": {
                color: "#2222ff",
              },
            }}
          >
            <SearchIcon />
          </IconButton> */}
        </Stack>
      </Box>
    </Toolbar>
  )
}
