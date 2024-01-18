import { useEffect, useState } from "react"


import { BottomNavigation, BottomNavigationAction } from "@mui/material"

import { useLocation, useNavigate } from "react-router-dom"
import CustomPopup from "../common/CustomPopup"

export default function BottomBar({ actions, offerActions }) {
  const [selected, setSelected] = useState(0)

  const [mouseOnOffers, setMouseOnOffers] = useState(false)
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
    for (let i = 0; i < offerActions.length; i += 1) {
      if (offerActions[i].path == pathname) {
        setSelected(1)
        return
      }
    }
  }, [location, actions, offerActions])

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
    <BottomNavigation
      onChange={handleSelect}
      showLabels
      sx={{ width: "100%", position: "fixed", bottom: 0, left: 0, backgroundColor: "background.light", marginBottom: 0, }}
      value={selected}
    >
      {actions.map((action, index) => (
        <BottomNavigationAction
          icon={action.icon}
          key={index}
          label={action.title}
          sx={{
            color: "text.main",
            "& svg": { color: "text.main", },
            "& .Mui-selected": { color: "accent.main", },
          }}
        />
      ))}
      {mouseOnOffers && <CustomPopup actions={offerActions} />}
    </BottomNavigation>
  )
}
