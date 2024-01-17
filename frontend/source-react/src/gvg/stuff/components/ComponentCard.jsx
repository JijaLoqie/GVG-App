import styled from "@emotion/styled";
import { Box, Button, SvgIcon, Typography } from "@mui/material";
import { customPalette, themes } from "../../common/styles/themes";
import { useNavigate } from "react-router-dom";

import { ComponentTypeIcon, getComponentIconPathByType } from "../../common/loaders/IconsLoader";


const CustomPaper = styled(Box)((theme) => ({
  backgroundColor: "rgba(255,255,255, 0.1)",
  cursor: "pointer",
  position: "relative",
  borderRadius: "6px",
  fill: customPalette.text,
  transition: "all 300ms",
  "&:hover": {
    fill: customPalette.accent,
    color: customPalette.accent,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    backgroundImage: `radial-gradient( 800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)`,
    borderRadius: "inherit",
    height: "100%",
    left: "0",
    top: "0",
    width: "100%",
    zIndex: 3,

    opacity: 0,
    transition: "opacity 300ms",
  },
  "&:hover::before": {
    opacity: 1,
  },
  "&.border": {
    opacity: 1,
  },
}));

const CardBorder = styled("div")((_) => ({
  content: '""',
  position: "absolute",
  backgroundImage: `radial-gradient( 400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.5), transparent 40%)`,
  borderRadius: "inherit",
  height: "100%",
  left: "0",
  top: "0",
  width: "100%",
  zIndex: 1,

  transition: "opacity 300ms",
}));


export function ComponentCard({ componentItem, recommended, ...otherProps }) {
  const navigate = useNavigate()

  return (
    <CustomPaper className="card" onMouseDown={() => navigate(`/component/${componentItem.id}`)} sx={{
      flexGrow: 1,
    }}
      {...otherProps}
    >
      <CardBorder />
      <Box sx={{
        position: "absolute",
        backgroundColor: "background.main", borderRadius: "inherit",
        display: "flex", flexDirection: "column", flexGrow: 1,
        alignItems: "center",
        inset: "1px", padding: "10px", zIndex: 2,
      }} >
        <ComponentTypeIcon type={componentItem.component_type}
          style={{
            borderTopLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            border: "1px solid #ffffff31",
            padding: "8px",
            paddingBottom: "12px",
            position: "absolute", right: "0", bottom: "0",
            width: "30px", height: "30px",
            zIndex: 10,
          }} />
        <Box sx={{
          height: "80%",
          display: "flex", justifyContent: "center", alignItems: "start"
        }}
        >
          <img alt="Image" src={componentItem.images[0]?.path} style={{ maxHeight: "90%", width: "100%", }} />
        </Box>
        <Typography color="text.main" fontSize="1.1em" lineHeight="20px" m="0" >
          {componentItem.title}
        </Typography>
      </Box>
      <Box sx={{
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "absolute", up: "0", right: "0",
        zIndex: 1000,
      }}>
        <Box sx={{
          padding: "1px",
          paddingInline: "12px",
          borderTopRightRadius: "8px",
          borderBottomLeftRadius: "8px",
          border: "1px solid #ffffff31",
        }}>
          <Typography variant="body2" sx={{
            "&:hover": { color: "text.main", },
            color: "gray", textDecoration: "underline"
          }}>{componentItem.id}</Typography>
        </Box>
      </Box>
      <Box sx={{
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "absolute", bottom: "0",
        color: "text.main",
        zIndex: 100,
      }}>
        <Box sx={{
          padding: "8px", paddingBottom: "12px",
          borderTopRightRadius: "8px",
          borderBottomLeftRadius: "8px",
          border: "1px solid #ffffff31",
          "&:hover": {
            color: "accent.main",
          }
        }}>
          <Typography>{componentItem.price} ₽</Typography>
        </Box>
      </Box>
    </CustomPaper>
  );
}

