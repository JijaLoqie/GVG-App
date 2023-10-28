import React, { useEffect, useState } from "react"

import CustomPopup from "../common/CustomPopup"

import { BottomNavigation, BottomNavigationAction, ThemeProvider } from "@mui/material"

import { useLocation, useNavigate } from "react-router-dom"
import useCheckCurrentTheme from '../common/hooks/useCheckCurrentTheme'

export default function BottomBar({ actions, offersActions }) {
  const [selected, setSelected] = useState(0)
  const currentTheme = useCheckCurrentTheme()

  const [mouseOnOffers, setMouseOnOffers] = useState(false)
  const [mouseOnPopup, setMouseOnPopup] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // remember last location and display it on mobile navbar
  useEffect(() => {
    var pathname = location.pathname
    if (pathname[pathname.length - 1] === "/") {
      pathname = pathname.substring(0, pathname.length - 1)
    }
    for (let i = 0; i < actions.length; i += 1) {
      if (actions[i].path == pathname) {
        setSelected(i)
        return
      }
    }
    for (let i = 0; i < offersActions.length; i += 1) {
      if (offersActions[i].path == pathname) {
        setSelected(1)
        return
      }
    }
  }, [location])

  const handleSelect = (target, newSelected) => {
    setSelected(newSelected)

    if (actions[newSelected].path === "/offers") {
      setMouseOnOffers((value) => !value)
    } else {
      setMouseOnOffers(false)
      navigate(`${actions[newSelected].path}`)
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <BottomNavigation
        onChange={handleSelect}
        showLabels
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          backgroundColor: "primary.main",
          marginBottom: 0,
        }}
        value={selected}
      >
        {actions.map((action, index) => (
          <BottomNavigationAction
            icon={action.icon}
            key={index}
            label={action.title}
            sx={{
              color: "secondary.main",
              "& svg": {
                color: "secondary.main",
              },
              "& .Mui-selected": {
                color: "#A0648C",
              },
            }}
          />
        ))}
      </BottomNavigation>
      {mouseOnOffers || mouseOnPopup ? (
        <CustomPopup
          actions={offersActions}
          setMouseOnPopup={setMouseOnPopup}
        />
      ) : null}
    </ThemeProvider>
  )
}
