import { createTheme } from "@mui/material";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });


export const customPalette = {
  text: "#E8EFF6",
  background: "#191A1B",
  primary: "#5D56D0",
  secondary: "#563179",
  accent: "#EB23AB",
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
      primary: customMuiPalette.primary,
      secondary: customMuiPalette.secondary,
      background: customMuiPalette.background,
      text: customMuiPalette.text,
      accent: customMuiPalette.accent,
    },
  }),
};
