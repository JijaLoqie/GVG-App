import { createTheme } from "@mui/material";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });


export const customPalette = {
  text: "#dccffc",
  background: "#100330",
  primary: "#caf65a",
  secondary: "#160444",
  accent: "#b7f320",
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
