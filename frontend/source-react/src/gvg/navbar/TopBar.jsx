import { useEffect, useState } from "react"

import {
  Stack,
  Toolbar,
  ButtonGroup,
  Button,
} from "@mui/material"
import CustomPopup from "../common/CustomPopup"
import { useNavigate } from "react-router-dom"
import LogoButton from "./LogoButton"
import { useCheckMobileScreen } from "../common/hooks/useCheckMobileScreen"
import CustomCallButton from "../common/CustomCallButton"
import CustomSearch from '../common/CustomSearch'
import { CartButton } from "./CartButton"

export default function TopBar({ actions, offerActions }) {
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
    <Toolbar >
      <LogoButton />
      {!isMobile ? (
        <>
          <ButtonGroup
            color="text"
            sx={{ width: "50%", maxWidth: 600, paddingInline: "15px", }}
            variant="text"
          >
            {actions.map((action, index) => (
              <Button
                key={index}
                onClick={() => handleClickButton(action)}
                onMouseEnter={() => handleEnterButton(action.path)}
                onMouseLeave={() => handleLeaveButton(action.path)}
                sx={{
                  color: hovered === action.path ? "accent.main" : "text.main",
                  width: "100%", "&:hover": { backgroundColor: "transparent", },
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
      <Stack sx={{ marginLeft: "auto", alignItems: "end", }} >
        <Stack direction="row" spacing={{ xs: 1, md: 3 }}>
          <CustomCallButton />
          <CartButton />
          {!isMobile && <CustomSearch />}
        </Stack>
      </Stack>
    </Toolbar>
  )
}
