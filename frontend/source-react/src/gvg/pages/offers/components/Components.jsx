import { Box, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { CustomGlobalSearch } from "../../../common/CustomGlobalSearch";
import { ComponentList } from "../../../stuff/components/ComponentList";
import { ComponentTypes } from "../../../stuff/components/ComponentsTypes";




export function Components() {
  const [searchValue, setSearchValue] = useState("")
  const [limitKey, setLimitKey] = useState(0) // Todo: осталось добавить виджет с пагинатором и накидать побольше карточек (15-20, чтобы протестить)
  const [typeValue, setTypeValue] = useState("")
  return (
    <Box minHeight="200vh" marginLeft={10}>
      <Grid container  gap={"12px"}>
        <Grid item xs={2} sx={{bgcolor: "#ffffff11", borderRadius: "10px"}}>
          <ComponentTypes handleUpdate={setTypeValue}/>
        </Grid>
        <Grid item xs={9} sx={{ minHeight: "200vh", bgcolor: "#ffffff11", borderRadius: "10px"}}>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <CustomGlobalSearch handleUpdate={setSearchValue} /> 
            <ComponentList filter={{name: searchValue, type: typeValue, limitKey: limitKey, listSize: 15}}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
