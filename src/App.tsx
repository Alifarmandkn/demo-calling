import { useState, useEffect } from 'react'
import { Container, Box, Typography, Paper, CircularProgress, Alert } from '@mui/material'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import credentials from '../credentials.json'
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

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userData, setUserData] = useState<LoginResponse | null>(null)

  useEffect(() => {
    // Automatically login using credentials from credentials.json
    const performLogin = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch(getApiUrl(`${baseUrl}/auth/login`), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ mt: 8 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            {isLoading ? (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <CircularProgress />
                <Typography variant="body1">Logging in...</Typography>
              </Box>
            ) : error ? (
              <Box>
                <Alert severity="error" sx={{ mb: 2 }}>
                  Login Failed
                </Alert>
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              </Box>
            ) : isAuthenticated && userData ? (
              <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                  Welcome!
                </Typography>
                <Typography variant="body1" gutterBottom>
                  You have successfully logged in as {userData.Name} ({userData.Email}).
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Role: {userData.Role}
                </Typography>
                {userData.client_name && (
                  <Typography variant="body2" color="text.secondary">
                    Client: {userData.client_name}
                  </Typography>
                )}
              </Box>
            ) : null}
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
