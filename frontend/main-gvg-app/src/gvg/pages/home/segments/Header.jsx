import { Box, Button, Typography, alpha } from "@mui/material";
import { ImageSlider } from "./ImageSlider";
import { Link } from "react-router-dom";

export function Header() {
  return <Box sx={{
    position: "relative",
    width: "100%",
    height: "100vh",
  }}>
    <Box sx={{
      position: "absolute",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
    }}>
      <Box sx={{
        width: "100%",
        marginTop: "-100px",
        marginLeft: {xs: 0, md: "48px"},
        display: "flex",
      }}>
        <Box sx={{
          bgcolor: "#00000033",
          transition: "background-color 300ms",
          "&:hover": {
            bgcolor: alpha("#000000", 0.3),
          },
          minHeight: "250px",
          width: {xs: "100%", md: "600px"},
          padding: "32px",
          borderRadius: "24px",
          
        }}>
          <Typography variant="h2">GVG Tech Solutions</Typography>
          <Typography>Оставьте свои заявки сейчас, и наша команда приступит к работе над вашим идеальным компьютером. 💪</Typography>
          <Box sx={{width: "100%", display: "flex", justifyContent: 'center', paddingTop: "50px"}}>
            <Button component={Link} variant="contained" color="success" size="large" to="/offers/builds">Выбрать наилучший компьютер</Button>
          </Box>
        </Box>
      </Box>
    </Box>
    <ImageSlider />
  </Box>
}
