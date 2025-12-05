import { useState } from 'react';
import { Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import { Login as LoginIcon } from '@mui/icons-material';
import { useAuth } from '../../hooks/useAuth';

/**
 * LoginButton Component
 * Displays a login button that automatically logs in using credentials from .env
 * Single Responsibility: Provide UI for user login
 */
export function LoginButton() {
  const { login, isLoading, error: authError } = useAuth();
  const [error, setError] = useState<string>('');

  const handleLogin = async () => {
    setError('');

    // Get credentials from environment variables
    const username = import.meta.env.VITE_USERNAME;
    const password = import.meta.env.VITE_PASSWORD;

    if (!username || !password) {
      setError('Login credentials not configured. Please set VITE_USERNAME and VITE_PASSWORD in .env file.');
      return;
    }

    try {
      await login({ username, password });
      // Reload the page to refresh all data with new token
      window.location.reload();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed. Please try again.';
      setError(errorMessage);
    }
  };

  const handleCloseError = () => {
    setError('');
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <LoginIcon />}
        onClick={handleLogin}
        disabled={isLoading}
        sx={{ minWidth: 120 }}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>

      <Snackbar
        open={!!error || !!authError}
        autoHideDuration={6000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error || authError?.message || 'Login failed'}
        </Alert>
      </Snackbar>
    </>
  );
}

