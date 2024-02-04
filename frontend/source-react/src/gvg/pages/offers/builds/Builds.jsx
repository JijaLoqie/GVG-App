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

  return (
    <>
      <CustomGlobalSearch handleUpdate={setSearchValue} isFastSearch={true} />
      <BuildsList builds={builds} filter={{ name: searchValue }} />
    </>
  );
}
