import { Box } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, useThemeContext } from './theme/theme'
import { AppBar } from './components/ui/custom/templates/layout/AppBar'
import { FloatingBubbles } from './components/ui/custom/effects/FloatingBubbles'
import { CallPage } from './pages/CallPage'
import './App.css'

function AppContent() {
  const { theme } = useThemeContext()

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Floating Bubbles Background */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <FloatingBubbles />
        </Box>

        {/* App Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <AppBar />
          <CallPage />
        </Box>
      </Box>
    </MuiThemeProvider>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
