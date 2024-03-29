import { Box, Chip, IconButton, InputBase } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export function CustomGlobalSearch({ handleUpdate, isFastSearch, ...otherProps }) {
  const [value, setValue] = useState("")
  const [fixedValue, setFixedValue] = useState("")

  const handleChange = (event) => {
    setValue(event.target.value)
    if (isFastSearch) {
      handleUpdate(event.target.value)
    }
  }

  const handleClick = () => {
    setFixedValue(value)
    handleUpdate(value)
  }

  const clearSearch = () => {
    setFixedValue("")
    setValue("")
    handleUpdate("")
  }

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: "1200px", display: "flex", flexDirection: "row", justifyContent: "stretch", }}>
        <InputBase sx={{
          width: "100%",
          height: "50px",
          bgcolor: "white",
          color: "background.main",
          borderRadius: isFastSearch ? "30px" : "30px 0 0 30px",
          boxShadow: "0 0 20px 1px #ffffff",
          padding: "0 10px 0 20px",
          fontSize: "25px", fontWeight: "1000",
        }}
          value={value}
          placeholder="Поиск по названию"
          onChange={handleChange}
        ></InputBase>
        {!isFastSearch ?
          <Box sx={{
            cursor: "pointer",
            width: "100px",
            bgcolor: "accent.main",
            boxShadow: "0 0 20px 1px greenyellow",
            borderRadius: "0 30px 30px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
            fontWeight: "1000",
            color: "background.main",
            transition: "background-color 300ms",
            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
            onClick={handleClick}
          >&#x027A4;</Box>
          : null}
      </Box>
      <Box sx={{ width: "100%", p: 2 }}>
        {fixedValue.length !== 0 ? (
          <Chip label={fixedValue} onDelete={clearSearch} color="primary" />
        ) : null}
      </Box>
    </>
  )
}
