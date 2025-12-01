import { useState, useEffect } from 'react'
import { Container, Box, Typography, Grid, Avatar, Button, Paper, CircularProgress, Alert } from '@mui/material'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Phone } from '@mui/icons-material'
import { getApiUrl, baseUrl } from './config/apiConfig'
import './App.css'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

interface LoginResponse {
  UserId: string
  Name: string
  Email: string
  Role: string
  access_token: string
  token_type: string
  expires_in: number
  refresh_token?: string
  client_name?: string
}

interface CallSectionProps {
  type: 'inbound' | 'outbound'
  title: string
  subtitle: string
}

function CallSection({ type, title, subtitle }: CallSectionProps) {
  const handleCall = () => {
    console.log(`Call ${type} initiated`)
    // Add your call logic here
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
      }}
    >
      <Avatar
        sx={{
          width: 120,
          height: 120,
          bgcolor: type === 'inbound' ? 'primary.main' : 'secondary.main',
        }}
      >
        <Phone sx={{ fontSize: 60 }} />
      </Avatar>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
        {subtitle}
      </Typography>
      <Button
        variant="contained"
        size="large"
        startIcon={<Phone />}
        onClick={handleCall}
        sx={{
          mt: 2,
          px: 4,
          py: 1.5,
          fontSize: '1.1rem',
        }}
      >
        Call
      </Button>
    </Paper>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userData, setUserData] = useState<LoginResponse | null>(null)

  useEffect(() => {
    // Automatically login using credentials from environment variables
    const performLogin = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const username = import.meta.env.VITE_USERNAME
        const password = import.meta.env.VITE_PASSWORD

        if (!username || !password) {
          throw new Error('Missing credentials: VITE_USERNAME and VITE_PASSWORD must be set in .env file')
        }

        const response = await fetch(getApiUrl(`${baseUrl}/auth/login`), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(`Login failed: ${response.status} ${response.statusText} - ${errorText}`)
        }

        const data: LoginResponse = await response.json()

        // Console.log the backend response as requested
        console.log('✅ Login successful! Backend response:', data)

        // Save tokens to localStorage
        localStorage.setItem('auth_token', data.access_token)
        if (data.refresh_token) {
          localStorage.setItem('refresh_token', data.refresh_token)
        }

        // Save user data to localStorage
        const userDataToStore = {
          id: parseInt(data.UserId),
          username: data.Name,
          email: data.Email,
          role: data.Role,
          clientName: data.client_name,
        }
        localStorage.setItem('auth_user', JSON.stringify(userDataToStore))

        setUserData(data)
        setIsAuthenticated(true)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
        console.error('❌ Login error:', err)
        setError(errorMessage)
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }

    performLogin()
  }, [])

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ mt: 8 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <CircularProgress />
                <Typography variant="body1">Logging in...</Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
    )
  }

  if (error) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ mt: 8 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Box>
                <Alert severity="error" sx={{ mb: 2 }}>
                  Login Failed
                </Alert>
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
    )
  }

  if (!isAuthenticated || !userData) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome, {userData.Name}!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userData.Email} • {userData.Role}
            {userData.client_name && ` • ${userData.client_name}`}
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CallSection
              type="inbound"
              title="Inbound"
              subtitle="Receive incoming calls and manage your inbound communications"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CallSection
              type="outbound"
              title="Outbound"
              subtitle="Make outgoing calls and reach out to your contacts"
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
