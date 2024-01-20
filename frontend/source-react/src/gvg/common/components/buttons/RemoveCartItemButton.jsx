import { useTheme } from "@emotion/react";
import { Delete } from "@mui/icons-material";
import { Button, useMediaQuery, IconButton } from "@mui/material";
import { useEffect } from "react";

export function RemoveCartItemButton({ action }) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    console.log(smallScreen)
  }, [smallScreen])

  return (
    <>
      {
        (smallScreen) ? (
          <IconButton color="error" onClick={action}>
            <Delete />
          </IconButton >
        ) : (
          <Button color="error" onClick={action}>Убрать</Button>
        )
      }
    </>
  )
}
