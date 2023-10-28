import React from "react"
import { Phone as PhoneIcon } from "@mui/icons-material"
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state"
import { Box, IconButton, Popover, ThemeProvider } from "@mui/material"
import CustomTelephoneLink from "./CustomTelephoneLink"
import useCheckCurrentTheme from './hooks/useCheckCurrentTheme'

export default function CustomCallButton({ sx }) {
	const currentTheme = useCheckCurrentTheme()
  return (
    <ThemeProvider theme={currentTheme}>
      <Box sx={sx}>
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
                <Box sx={{ padding: 2, backgroundColor: "primary.main" }}>
                  <CustomTelephoneLink />
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
      </Box>
    </ThemeProvider>
  )
}
