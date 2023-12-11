import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      main: string
      secondary: string
      danger: string
      borderMain: string
      borderDanger: string
      navbarBackground: string
      header: string
    }
    consts: {
      containerWidth: string
      sidebarWidth: string
      sidebarWidthCollapsed: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: {
      header: string
      main: string
      secondary: string
      danger: string
      borderMain: string
      borderDanger: string
      navbarBackground: string
    }
    consts: {
      containerWidth: string
      sidebarWidth: string
      sidebarWidthCollapsed: string
    }
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#526599',
      contrastText: '#ebebeb',
    },
    secondary: {
      main: '#D5DCE6',
      contrastText: '#1A1A1A',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#000000',
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#262626',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          height: '30px',
        },
        sizeMedium: {
          height: '40px',
        },
        sizeLarge: {
          height: '50px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
          },
          '*::-webkit-scrollbar-thumb': {
            background: '#526599',
            borderRadius: '5px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            background: '#526599',
            cursor: 'pointer',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: '16px',
    },
    body2: {
      fontSize: '14px',
    },
  },
  colors: {
    header: '#dfdfdf',
    main: '#f2f7ff',
    secondary: '#dfe6ee',
    danger: '#fdf5f5',
    borderMain: '#EBF0F7',
    borderDanger: '#E8B9B8',
    navbarBackground: '#1F2630',
  },
  consts: {
    containerWidth: '1400px',
    sidebarWidth: '250px',
    sidebarWidthCollapsed: '80px',
  },
})
