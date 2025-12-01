import { Container, Box, Typography, Paper } from '@mui/material'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import credentials from '../credentials.json'
import './App.css'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

function App() {
  // Automatically logged in using credentials from credentials.json
  // The app always shows the authenticated view by default

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ mt: 8 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome!
            </Typography>
            <Typography variant="body1">
              You have successfully logged in as {credentials.username}.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
