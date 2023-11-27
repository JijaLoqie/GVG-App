import { Box } from "@mui/material";
import { BuildsList } from "../../../stuff/builds/BuildList";
import { CustomGlobalSearch } from "../../../common/CustomGlobalSearch";
import { useState } from "react";

export function Builds() {
  const [searchValue, setSearchValue] = useState("")
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center"}}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <CustomGlobalSearch handleUpdate={setSearchValue} isFastSearch={true}/>
        <BuildsList filter={{name: searchValue}}/>
      </Box>
    </Box>
  );
}
