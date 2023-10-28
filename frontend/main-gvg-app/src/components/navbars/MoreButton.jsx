import {
  MoreHoriz as MoreHorizIcon,
  Phone as PhoneIcon,
  Search as SearchIcon,
  Shop as ShopIcon,
} from "@mui/icons-material"
import { IconButton, Menu, MenuItem, Typography } from "@mui/material"
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state"
import React from "react"

export default function MoreButton() {
  return (
    <PopupState popupId="demo-popup-menu" variant="popover">
      {(popupState) => (
        <>
          <IconButton variant="contained" {...bindTrigger(popupState)}>
            <MoreHorizIcon color="secondary" />
          </IconButton>
          <Menu
            {...bindMenu(popupState)}
            MenuListProps={{
              sx: {
                py: 0,
                backgroundColor: "primary.main",
                color: "secondary.main",
				borderRadius: "4px",
                border: 2,
				borderColor: "#000000",
              },
            }}
          >
            <MenuItem onClick={popupState.close}>
              <SearchIcon sx={{ paddingRight: "10px", fontSize: "24px" }} />
              <Typography>Поиск</Typography>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <ShopIcon sx={{ paddingRight: "10px" }} />
              <Typography>Корзина</Typography>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <PhoneIcon sx={{ paddingRight: "10px" }} />
              <Typography>Номер</Typography>
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  )
}
