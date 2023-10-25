import { Box, Button, ButtonGroup, Typography } from "@mui/material"
import UseCheckMobileScreen from "./hooks/UseCheckMobileScreen"
import { darken } from "@material-ui/core"

export default CustomPopupOptions = function({ setMouseOnPopup, actions }) {
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
        bottom: { xs: "56px", md: "auto" },
        top: { xs: "auto", md: "76px" },
        left: { xs: "12.5vw", md: "25vw" },
        width: "50vw",
        minHeight: "50px",
        paddingInline: 0,
        transform: "skew(-10deg)",

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
