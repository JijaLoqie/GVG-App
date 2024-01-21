import { alpha, createTheme } from "@mui/material";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor, transparent: alpha(mainColor, 0.9) } });


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
const updateCustomMuiPalette = () => {
  customMuiPalette.text = createColor(customPalette.text)
  customMuiPalette.background = createColor(customPalette.background)
  customMuiPalette.primary = createColor(customPalette.primary)
  customMuiPalette.secondary = createColor(customPalette.secondary)
  customMuiPalette.accent = createColor(customPalette.accent)
}

const updateThemes = () => {
  themes.darkTheme = createTheme({
    palette: {
      mode: "dark",
      ...customMuiPalette,
    },
    typography: {
      caption: {
        color: "#999999",
      }
    }
  })
}


export const updateCustomPalette = (newPalette) => {
  if (newPalette) {
    customPalette.text = newPalette.text
    customPalette.background = newPalette.background
    customPalette.primary = newPalette.primary
    customPalette.secondary = newPalette.secondary
    customPalette.accent = newPalette.accent
  }
  updateCustomMuiPalette()
  updateThemes()
}
