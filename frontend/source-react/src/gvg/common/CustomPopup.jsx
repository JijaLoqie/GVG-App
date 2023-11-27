import { Box, Button, ButtonGroup, Typography } from "@mui/material"
import { useCheckMobileScreen } from "./hooks/useCheckMobileScreen"

export default function CustomPopup({ setMouseOnPopup, actions }) {
  const isMobile = useCheckMobileScreen()
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
              paddingTop: isMobile ? "16px" : "inherit",
              paddingBottom: isMobile ? "16px" : "inherit",
              color: "primary.main",
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "secondary.main",
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
