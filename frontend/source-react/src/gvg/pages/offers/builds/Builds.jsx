import { Box } from "@mui/material";
import { BuildsList } from "../../../stuff/builds/BuildList";
import { CustomGlobalSearch } from "../../../common/CustomGlobalSearch";
import { useState, useEffect } from "react";
import { loadBuildList } from "../../../stuff/builds/BuildLoader";

export function Builds() {
  const [searchValue, setSearchValue] = useState("")
  const [builds, setBuilds] = useState([])
  useEffect(() => {
    loadBuildList(setBuilds)
  }, [])
  useEffect(() => {console.log(builds)},[builds])
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center"}}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <CustomGlobalSearch handleUpdate={setSearchValue} isFastSearch={true}/>
        <BuildsList builds={builds} filter={{name: searchValue}}/>
      </Box>
    </Box>
  );
}
