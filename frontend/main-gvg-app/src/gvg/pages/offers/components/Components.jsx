import { Box, Typography } from "@mui/material";
import { CustomGlobalSearch } from "../../../common/CustomGlobalSearch";
import { ComponentList } from "../../../stuff/components/ComponentList";
import { useState } from "react";
import { ComponentTypes } from "../../../stuff/components/ComponentsTypes";




export function Components() {
  const [searchValue, setSearchValue] = useState("")
  const [typeValue, setTypeValue] = useState("")
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center"}}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <CustomGlobalSearch handleUpdate={setSearchValue} isFastSearch={false}/>
        <ComponentTypes handleUpdate={setTypeValue}/>
        <ComponentList filter={{name: searchValue, type: typeValue}}/>
      </Box>
    </Box>
  )
}
