import { Box, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { CustomGlobalSearch } from "../../../common/CustomGlobalSearch";
import { ComponentList } from "../../../stuff/components/ComponentList";
import { ComponentTypes } from "../../../stuff/components/ComponentsTypes";




export function Components() {
  const [searchValue, setSearchValue] = useState("")
  const [typeValue, setTypeValue] = useState("")
  return (
    <Box minHeight="100vh" marginLeft={10}>
      <Grid container  gap={"12px"}>
        <Grid item xs={2} sx={{bgcolor: "#ffffff11", borderRadius: "10px"}}>
          <ComponentTypes handleUpdate={setTypeValue}/>
        </Grid>
        <Grid item xs={9} sx={{bgcolor: "#ffffff11", borderRadius: "10px"}}>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <CustomGlobalSearch handleUpdate={setSearchValue} /> 
            <ComponentList filter={{name: searchValue, type: typeValue}}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
