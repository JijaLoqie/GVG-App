import { Box, Button, Typography, alpha } from "@mui/material";
import { ImageSlider } from "./ImageSlider";
import { Link } from "react-router-dom";
import { customPalette } from "../../../../common/styles/themes";

export function Header() {
  return (
    <Box sx={{ position: "relative", width: "100%", height: {xs: "50vh",md:"95vh"} }}>
      <Box sx={{ position: "absolute", height: "100%", width: "100%", display: "flex", alignItems: "center", }}>
        <Box sx={{ width: "100%", marginTop: "-100px", marginLeft: {xs: 0, md: "48px"}, display: "flex", }}>
          <Box sx={{ bgcolor: "#00000033",
            transition: "background-color 300ms",
            "&:hover": { bgcolor: alpha("#000000", 0.3), },
            minHeight: "250px",
            width: {xs: "100%", md: "600px"}, padding: {xs: "10px", md:"32px"}, borderRadius: "24px",

          }}>
            <Typography sx={{fontSize: {xs: 30, md:50}, color: "text.main"}}>GVG Tech Solutions</Typography>
            <Typography sx={{color: "text.main"}}>
              Оставьте свои заявки сейчас, и наша команда приступит к работе над вашим идеальным компьютером. 💪
            </Typography>

            <Box sx={{width: "100%", display: "flex", justifyContent: 'center', paddingTop: "50px"}}>
              <Box
                component={Link}
                to="/offers/builds"
                sx={{
                  backgroundImage: `linear-gradient(to right bottom, ${customPalette.secondary}, ${customPalette.background})`,
                  color: "accent.main",

                  padding: "20px 30px",
                  borderRadius: "8px",


                  borderTop: "1px solid #fff",
                  boxShadow: `0 5px 8px #002851, 0 8px 0 #002851,
-2px 1px 0 #003872, 2px 1px 0 #003872, 0px 8px 10px #000, 0 10px 30px #1b1b1b`,


                  font: "bold 24px 'Trebuchet Ms', helvetica",
                  textDecoration: "none",
                  transition:"all 500ms",
                  "&:hover": {
                    boxShadow: `0 1px 1px #000, 0 1px 0 #000, -2px 1px 0 #000, 2px 1px 0 #000, 0px 1px 10px #000, 0 10px 10px #000`,
                  borderTop: "1px solid #ffffff99",
                  }
                }}
              >
                <Typography
                  fontSize="1em"
                  style={{
                    background: "-webkit-linear-gradient(45deg, #5d56d0 30%, #eb23ab 60%)",
                    webkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}

                >
                  Выбрать наилучший компьютер
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <ImageSlider />
    </Box>
  )}
