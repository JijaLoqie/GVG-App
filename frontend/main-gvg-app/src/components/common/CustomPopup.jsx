import React from 'react'
import { Box, Button, ButtonGroup, Typography } from "@mui/material"
import UseCheckMobileScreen from "./hooks/UseCheckMobileScreen"

export default function CustomPopupOptions({ setMouseOnPopup, actions }) {
  const isMobile = UseCheckMobileScreen()
  const handleEnter = () => {
    setMouseOnPopup(true)
  }

  const handleLeave = () => {
    setMouseOnPopup(false)
  }
  const buttonGroupProps = {
    orientation: isMobile ? "vertical" : "horizontal",
    variant: "contained",
    fullWidth: true,
  }

  return (
    <Box
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      sx={{
        position: "fixed",
        bottom: isMobile ? "56px" : "auto",
        top: isMobile ? "auto" : "66px",
        left: isMobile ? "12.5vw" : "25vw",
        width: "50vw",
        minHeight: "50px",
        paddingInline: 0,
        transform: "skew(-10deg)",
        boxShadow: "0 0 8px black",
        zIndex: 10000,
      }}
    >
      <ButtonGroup
        {...buttonGroupProps}
        sx={{
          minHeight: "50px",
        }}
      >
        {actions.map((action, index) => (
          <Button
            href={`${action.path}`}
            key={index}
            sx={{
              color: "secondary.main",
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "primary.main",
              },
            }}
          >
            <Typography
              sx={{
                width: "100%",
                textAlign: "center",
                transform: "skew(10deg)",
              }}
              variant="p"
            >
              {action.title}
            </Typography>
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  )
}
