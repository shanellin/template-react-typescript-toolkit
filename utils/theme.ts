import { createTheme } from "@mui/material/styles"
// https://mui.com/customization/default-theme/#explore

const colors = {
  blue: "#352f7c",
  blue_light: "#2f80ed",
  purple: "#796a9a",
  gray: "#cfcfd9",
  brown: "#9c9999",
  yellow: "#fac043",
  yellow_dark: "#B68720",
  green: "#0a792d",
  green_light: "#34ae60",
  red: "#f66361",
  red_dark: "#eb5757",
  white: "#ffffff",
  paper: "#fcfcfc",
  black: "#2f2e41",
  transparent: "transparent"
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    primary: {
      main: colors.yellow,
      light: colors.yellow,
      dark: colors.yellow_dark,
      contrastText: colors.white
    },
    secondary: {
      main: colors.gray,
      light: colors.gray,
      dark: colors.gray,
      contrastText: colors.white
    },
    error: {
      main: colors.red,
      dark: colors.red_dark
    },
    info: {
      main: colors.blue,
      light: colors.blue_light
    },
    success: {
      main: colors.green,
      dark: colors.green,
      light: colors.green_light
    },
    text: {
      blue_light: colors.blue_light
    },
    divider: colors.yellow,
    background: {
      default: colors.white,
      paper: colors.paper,
      yellow: colors.yellow
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  },
  border: {
    yellow: colors.yellow,
    transparent: colors.transparent
  },
  customZIndex: {
    header: 1000,
    footer: 1000,
    statusBar: 1000,
    sideBar: 1200,
    modal: 1300
  },
  customDivider: {
    yellow: colors.yellow
  },
  components: {}
})

export default theme
