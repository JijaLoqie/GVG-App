import { createTheme } from '@material-ui/core';
import { colors } from '@mui/material';

const themes = {
  darkTheme: createTheme({
    root: {
      "&$selected": {
        color: "red",
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#232323",
      },
      secondary: {
        main: "#e0f2f1",
      },
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: 1,
            borderColor: colors.primaryGrayMid,
            borderStyle: "solid",
            borderRadius: 10,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            backgroundColor: colors.primaryGrayDark,
            color: "#C1C2C5",
            padding: 10,
          },
        },
      },
    },
  }),
  lightTheme: createTheme({
    palette: {
      root: {
        "&$selected": {
          main: "red",
          primary: "red",
        },
      },
      mode: "light",
      primary: {
        main: colors.grey[200],
      },
      secondary: {
        main: "#0D0D0D",
      },
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: 1,
            borderColor: colors.primaryGrayMid,
            borderStyle: "solid",
            borderRadius: 10,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            backgroundColor: colors.primaryGrayDark,
            color: "#C1C2C5",
            padding: 10,
          },
        },
      },
    },
  }),
}

export default themes
