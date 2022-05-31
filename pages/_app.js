import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    gold99: { main: "#EFAB48", contrastText: "#FFFFFF" },
    tacos38: { main: "#CC2936", contrastText: "#FFFFFF"},
    filmingLocations: {main: "#08415C", contrastText: "#FFFFFF"}
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
