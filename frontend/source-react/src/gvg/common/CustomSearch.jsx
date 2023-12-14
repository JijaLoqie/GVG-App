import { useEffect, useState } from "react"

import { Search as SearchIcon } from "@mui/icons-material"
import { styled } from "@mui/material/styles"
import { InputBase } from "@mui/material"
import { PopupSearch } from "./search/PopupSearch"

const Search = styled("div")(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  borderRadius: theme.shape.borderRadius,

}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "40px",
  width: "40px",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    transition: theme.transitions.create(["padding", "width", "borderBottom"]),
    width: "0",
    padding: "0",
    borderBottom: "2px solid rgb(212, 212, 212)",
    "&:focus": {
      padding: theme.spacing(1, 1, 1, 0),
      width: "100px",
    },
  },
}))

export default function CustomSearch() {
	const [textField, setTextField] = useState()
	const [focused, setFocused] = useState(false)
	const [textValue, setTextValue] = useState("")



  return (
    <>
      <Search
        onClick={() => textField?.focus()} onFocus={() => {setFocused(true)}} onBlur={() => {setFocused(false)}}
        sx ={{ color: "text.main", transition: "color 0.2s", "&:hover": {color: "accent.main"}}}>
        {focused && textValue !== "" ? <PopupSearch filter={{title: textValue}}/> : null}
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase onChange={(value) => {setTextValue(value.target.value)}} inputRef={(el) => {setTextField(el)}} sx={{color: "text.main", }}/>
      </Search>
    </>
  )
}
