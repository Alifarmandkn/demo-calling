/**
 * API utility for making authenticated requests
 */

import { baseUrl, getApiUrl } from './config/apiConfig.ts';

export { baseUrl };

// Function to get the authentication token from localStorage
export const getToken = (): string | null => {
  return localStorage.getItem('auth_token');
};

// Function to get the refresh token from localStorage
export const getRefreshToken = (): string | null => {
  return localStorage.getItem('refresh_token');
};

// Function to clear authentication data
// This should be called whenever tokens expire or authentication fails
export const clearAuth = (): void => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('auth_user');
  // Dispatch custom event to notify auth state change
  window.dispatchEvent(new CustomEvent('authStateChanged'));
};

// Promise to track ongoing refresh attempts and prevent concurrent refreshes
let refreshPromise: Promise<boolean> | null = null;

// Function to refresh the access token using the refresh token
// Uses a promise queue to prevent concurrent refresh attempts
const refreshAccessToken = async (): Promise<boolean> => {
  // If a refresh is already in progress, wait for it
  if (refreshPromise) {
    return refreshPromise;
  }

  // Start a new refresh attempt
  refreshPromise = (async (): Promise<boolean> => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      refreshPromise = null;
      return false;
    }

    try {
      const refreshUrl = getApiUrl(`${baseUrl}/auth/token/refresh`);
      const response = await fetch(refreshUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (!response.ok) {
        refreshPromise = null;
        return false;
      }

      const data = await response.json();

      // Update stored tokens
      localStorage.setItem('auth_token', data.access_token);
      if (data.refresh_token) {
        localStorage.setItem('refresh_token', data.refresh_token);
      }

      // Update user data
      const userData = {
        id: parseInt(data.UserId),
        username: data.Name,
        role: data.Role,
      };
      localStorage.setItem('auth_user', JSON.stringify(userData));

      refreshPromise = null;
      return true;
    } catch (error) {
      console.error('Token refresh failed:', error);
      refreshPromise = null;
      return false;
    }
  })();

  return refreshPromise;
};

// Base fetch function that automatically includes the auth token and handles token refresh
export const fetchWithAuth = async (url: string, options: RequestInit = {}): Promise<Response> => {
  const makeRequest = async (token: string): Promise<Response> => {
    const defaultHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    // Merge headers, allowing custom headers to override defaults
    const headers = {
      ...defaultHeaders,
      ...(options.headers as Record<string, string>),
    };

    // Use the configuration system to get the proper URL
    const fullUrl = getApiUrl(url);

    return await fetch(fullUrl, {
      ...options,
      headers,
    });
  };

  let token = getToken();
  
  // If no token is available, try to refresh it first
  if (!token) {
    const refreshSuccessful = await refreshAccessToken();
    if (refreshSuccessful) {
      token = getToken();
    }
    
    // If still no token after refresh attempt, tokens have expired
    // Clear auth and throw error (UI will handle showing login button)
    if (!token) {
      clearAuth();
      throw new Error('Authentication expired. Please login again.');
    }
  }

  let response = await makeRequest(token);

  // Handle 401 Unauthorized responses by trying to refresh the token
  if (response.status === 401) {
    const refreshSuccessful = await refreshAccessToken();

    if (refreshSuccessful) {
      // Retry the request with the new token
      const newToken = getToken();
      if (newToken) {
        response = await makeRequest(newToken);
      } else {
        // Refresh succeeded but no token was stored - this shouldn't happen
        // but handle it gracefully by clearing auth
        clearAuth();
        throw new Error('Authentication failed after token refresh');
      }
    }

    // If still 401 after refresh attempt, tokens are expired - clear auth
    if (response.status === 401) {
      clearAuth();
      throw new Error('Authentication expired');
    }
  }

  return response;
};

// Helper methods for common HTTP verbs
export const api = {
  get: (url: string, options: RequestInit = {}): Promise<Response> =>
    fetchWithAuth(url, { ...options, method: 'GET' }),

  post: (url: string, data: any, options: RequestInit = {}): Promise<Response> =>
    fetchWithAuth(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // Post raw data without JSON stringification (useful for text/plain or custom content types)
  postRaw: (
    url: string,
    data: string | FormData | Blob,
    options: RequestInit = {}
  ): Promise<Response> =>
    fetchWithAuth(url, {
      ...options,
      method: 'POST',
      body: data,
    }),

  put: (url: string, data: any, options: RequestInit = {}): Promise<Response> =>
    fetchWithAuth(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  delete: (url: string, options: RequestInit = {}): Promise<Response> =>
    fetchWithAuth(url, { ...options, method: 'DELETE' }),
};
