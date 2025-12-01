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

// Function to refresh the access token using the refresh token
const refreshAccessToken = async (): Promise<boolean> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    return false;
  }

  try {
    const response = await fetch(`/${baseUrl}/auth/token/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });

    if (!response.ok) {
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

    return true;
  } catch (error) {
    console.error('Token refresh failed:', error);
    return false;
  }
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

  const token = getToken();
  if (!token) {
    throw new Error('No authentication token available');
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
      }
    }

    // If still 401 after refresh attempt, clear auth and redirect
    if (response.status === 401) {
      // Clear authentication data on persistent 401
      localStorage.removeItem('auth_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('auth_user');

      // Force page refresh to redirect to login
      window.location.href = '/';

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
