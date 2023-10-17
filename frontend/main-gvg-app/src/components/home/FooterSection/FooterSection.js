import { Box, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import AboutGroup from "./groups/AboutGroup";
import HelpGroup from "./groups/HelpGroup";
import ShopGroup from "./groups/ShopGroup";
import ContactGroup from "./groups/ContactGroup";

const themed = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const items = [
  {
    component: <AboutGroup />,
  },
  {
    component: <HelpGroup />,
  },
  {
    component: <ShopGroup />,
  },
  {
    component: <ContactGroup />,
  },
];

export default FooterSection = () => {
  return (
    <ThemeProvider theme={themed}>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Grid
          container
          wrap="wrap"
          sx={{
            alignContent: "center",
            justifyContent: "center",
            paddingTop: "10vh",
          }}
          rowGap={5}
          columnGap={10}
        >
          {items.map((item, index) => (
            <Grid
              item
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                border: 1,
                borderColor: "black",
                width: "300px",
                paddingInline: 0,
              }}
            >
              {item.component}
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            textAlign: "center",
            padding: "10px",
			marginTop: "100px",
            bottom: { xs: "60px", md: "0" },
          }}
        >
          Copyright ©2023 "GVG Tech Solutions". All Rights Reserved
        </Box>
      </Box>
    </ThemeProvider>
  );
};