import { Phone as PhoneIcon } from "@mui/icons-material"
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state"
import { Box, IconButton, Popover } from "@mui/material"
import CustomTelephoneLink from "./CustomTelephoneLink"

export default function CustomCallButton({ sx }) {
  return (
      <Box sx={sx}>
        <PopupState popupId="demo-popup-popover" variant="popover">
          {(popupState) => (
            <div>
              <IconButton
                sx={{ color: "text.main", transition: "color 0.2s", "&:hover": { color: "accent.main", }, }}
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
                <Box
                  sx={{ padding: 2, backgroundColor: "secondary.main", borderRadius: "4px", border: 2, borderColor: "#000000", }}
                >
                  <CustomTelephoneLink />
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
      </Box>
  )
}
