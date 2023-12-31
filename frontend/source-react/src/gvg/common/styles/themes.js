import { createTheme } from "@mui/material";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });


export const customPalette = {
  text: "#E8EFF6",
  background: "#111111",
  primary: "#c0ff01",
  secondary: "#333333",
  accent: "#9074ff",
};

const customMuiPalette = {
  text: createColor(customPalette.text),
  background: createColor(customPalette.background),
  primary: createColor(customPalette.primary),
  secondary: createColor(customPalette.secondary),
  accent: createColor(customPalette.accent),
};




export const themes = {
  darkTheme: createTheme({
    palette: {
      mode: "dark",
      ...customMuiPalette,
    },
    typography: {
      caption: {
        color: "#999999",
      }
    }
  }),
};
