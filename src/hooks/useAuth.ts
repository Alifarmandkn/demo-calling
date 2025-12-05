import { useState, useEffect, useCallback } from 'react';
import { AuthService, LoginCredentials } from '../services/authService.ts';
import { getToken } from '../api.ts';

/**
 * Hook for managing authentication state
 */
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => AuthService.isAuthenticated());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [user, setUser] = useState<{ id: number; username: string; role: string } | null>(() =>
    AuthService.getCurrentUser()
  );

  // Check authentication status
  const checkAuth = useCallback(() => {
    const authenticated = AuthService.isAuthenticated();
    setIsAuthenticated(authenticated);
    if (authenticated) {
      setUser(AuthService.getCurrentUser());
    } else {
      setUser(null);
    }
  }, []);

  // Login function
  const login = useCallback(
    async (credentials: LoginCredentials) => {
      setIsLoading(true);
      setError(null);
      try {
        await AuthService.login(credentials);
        checkAuth();
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setError(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [checkAuth]
  );

  // Logout function
  const logout = useCallback(() => {
    AuthService.logout();
    checkAuth();
  }, [checkAuth]);

  // Listen for storage changes and custom auth events
  useEffect(() => {
    const handleStorageChange = () => {
      checkAuth();
    };

    const handleAuthStateChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authStateChanged', handleAuthStateChange);
    // Also check periodically in case token is cleared in same window
    const interval = setInterval(checkAuth, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authStateChanged', handleAuthStateChange);
      clearInterval(interval);
    };
  }, [checkAuth]);

  return {
    isAuthenticated,
    isLoading,
    error,
    user,
    login,
    logout,
    checkAuth,
  };
}

