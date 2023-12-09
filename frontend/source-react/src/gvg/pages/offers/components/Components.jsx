import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomGlobalSearch } from "../../../common/CustomGlobalSearch";
import { ComponentList } from "../../../stuff/components/ComponentList";
import { ComponentTypes } from "../../../stuff/components/ComponentsTypes";
import { loadComponentList } from "../../../stuff/components/ComponentLoader";
import { CustomPaginator } from "../../../common/CustomPaginator";




export function Components() {
  const [components, setComponents] = useState([])
  const [components2, setComponents2] = useState([])


  const [searchValue, setSearchValue] = useState("")
  const [limitKey, setLimitKey] = useState(0) 
  const [typeValue, setTypeValue] = useState("")

  useEffect(() => {
    setLimitKey(0)
  }, [searchValue, typeValue])
  useEffect(() => {
    loadComponentList(setComponents)
  }, [])
  useEffect(() => {
    setComponents2([
      ...components,
    ])
  }, [components])

  return (
    <Box sx={{
      display: "flex", justifyContent: "center",
    }}>
      <Box sx={{ display: "flex", flexDirection: {xs: "column", md: "row"},
        width: "1500px",
        height: "100%",
      }}>
        <Box sx={{
          width: {xs: "100%", md: "268.5px"}, minWidth: {xs: "100%", md: "268.5px"}, maxWidth: {xs: "100%", md: "268.5px"},
          bgcolor: "#ffffff11", borderRadius: "10px",
          zIndex: "1000",
        }}>
          <ComponentTypes handleUpdate={setTypeValue}/>
        </Box>
        <Box sx={{ position: "relative",
          flexGrow: 1, minHeight: "50vh", bgcolor: "#ffffff11", borderRadius: "10px",
          display: 'flex', flexDirection: "column", alignItems: "center",
          marginLeft: "8px",
        }}>
          <CustomGlobalSearch handleUpdate={setSearchValue} /> 
          <ComponentList components={components2} filter={{name: searchValue, type: typeValue, limitKey: limitKey, listSize: 15}}/>
          <CustomPaginator handleUpdate={setLimitKey} pagesLength={Math.ceil((components2.length)/15)} />
        </Box>
      </Box>
    </Box>
  )
}
