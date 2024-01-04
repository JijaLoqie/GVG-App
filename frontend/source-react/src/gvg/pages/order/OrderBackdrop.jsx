import { Backdrop, Paper } from "@mui/material";
import { useState } from "react";

export function OrderBackdrop({ open }) {
  const [isOpen, setOpen] = useState(true)
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
      onClick={handleClose}
    >
      <Paper
        variant="outlined"

        sx={{
          width: "40vw", height: "60vh",
        }}>
        hello world

      </Paper>
    </Backdrop>
  )
}
