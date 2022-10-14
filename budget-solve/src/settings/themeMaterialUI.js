import {createTheme} from "@mui/material";

const themeMaterialUI = createTheme ({
  overrides: {},
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    colors: {
      main: '#00B3A1',
      error: '#E41E15',
      secondary: '#FFC101',
      dark: '#0F0F0F',
      text: '#0E4E4E',
      background: '#0E4E4E',
      lightBackground: '#0E4E4E',
      darkText: 'white',
      activeText: '#0E4E4E',
      light: '#C5C6C6',
      darkLight: '#0B4040',
      border: '#F0F0F0',
      hoverBackground: '#FFC101'
    },
    primary: {
      main: '#00B3A1',
      selected: '#d6fff9',
      dark: '#0E4E4E',
      light: '#00b3a126',
      lighter: '#00B3A140',
      activeText: '#0E4E4E',
      hoverBackground: '#FFC101'
    },
    secondary: {
        main: '#FFC101',
        background: '#FFC101',
        text: '#FFC101',
        darkText: '#FFC101'
    },
    error: {
      main: '#E41E15',
    },
    dark: {
      main: '#0F0F0F',
     },
    grey: {
      main: '#C5C6C6',
      text: '#9A9EA6',
      extraText: '#C5C6C6',
      border: '#F0F0F0',
      label: '#0F0F0F80',
      accordion: '#363D4D14',
      price: '#363D4D',
      light: '#F0F0F0FF',
      action: '#707070',
    },
    blue: {
      main: '#18243E',
      light: '#18243E80',
      calendar: '#18243E1a'
    },
    header: {
      main: '#00B3A1aa',
    },
    green: {
      dark: '#0E4E4E',
      lighter: '#0E4E4EB3',
      calendar: '#0E4E4E80',
      actions: '#0B4040'
    },
  },
});

export default themeMaterialUI;
