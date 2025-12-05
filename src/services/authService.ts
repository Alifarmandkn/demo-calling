import { baseUrl, getApiUrl } from '../config/apiConfig.ts';
import { clearAuth } from '../api.ts';

/**
 * Login credentials interface
 */
export interface LoginCredentials {
  username: string;
  password: string;
}

/**
 * Login response interface
 */
export interface LoginResponse {
  access_token: string;
  refresh_token?: string;
  UserId: string;
  Name: string;
  Role: string;
}

/**
 * Auth Service
 * Handles user authentication and login
 */
export class AuthService {
  /**
   * Stores authentication data from login response
   */
  private static storeAuthData(data: LoginResponse): void {
    localStorage.setItem('auth_token', data.access_token);
    if (data.refresh_token) {
      localStorage.setItem('refresh_token', data.refresh_token);
    }
    const userData = {
      id: parseInt(data.UserId),
      username: data.Name,
      role: data.Role,
    };
    localStorage.setItem('auth_user', JSON.stringify(userData));
  }

  /**
   * Attempts login with a specific endpoint and content type
   */
  private static async tryLogin(
    endpoint: string,
    credentials: LoginCredentials,
    useFormData: boolean = false
  ): Promise<Response> {
    const loginUrl = getApiUrl(`${baseUrl}${endpoint}`);
    const headers: Record<string, string> = {};
    let body: string;

    if (useFormData) {
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
      body = new URLSearchParams({
        username: credentials.username,
        password: credentials.password,
      }).toString();
    } else {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      });
    }

    return fetch(loginUrl, {
      method: 'POST',
      headers,
      body,
    });
  }

  /**
   * Logs in a user with username and password
   * @param credentials - Username and password
   * @returns Promise resolving to login response
   */
  static async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      // Try different endpoints and formats
      const attempts = [
        { endpoint: '/auth/login', useFormData: false },
        { endpoint: '/auth/token', useFormData: false },
        { endpoint: '/auth/login', useFormData: true },
        { endpoint: '/auth/token', useFormData: true },
      ];

      for (const attempt of attempts) {
        try {
          const response = await this.tryLogin(attempt.endpoint, credentials, attempt.useFormData);

          if (response.ok) {
            const data = await response.json();
            this.storeAuthData(data);
            return data;
          }

          // If 405, try next option
          if (response.status === 405) {
            console.log(`Login endpoint ${attempt.endpoint} (${attempt.useFormData ? 'form' : 'json'}) returned 405, trying next option...`);
            continue;
          }

          // For other errors, throw
          const errorText = await response.text().catch(() => `HTTP ${response.status}: ${response.statusText}`);
          throw new Error(errorText || `Login failed with status ${response.status}`);
        } catch (error) {
          // If it's a network error or non-405 HTTP error, throw it
          if (error instanceof Error && !error.message.includes('405')) {
            throw error;
          }
          // Otherwise continue to next attempt
          continue;
        }
      }

      throw new Error('Login failed: All endpoint attempts returned 405 Method Not Allowed');
    } catch (error) {
      console.error('Login failed:', error);
      clearAuth();
      throw error;
    }
  }

  /**
   * Logs out the current user
   */
  static logout(): void {
    clearAuth();
  }

  /**
   * Checks if user is authenticated
   * @returns true if auth token exists
   */
  static isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  /**
   * Gets the current user data from localStorage
   * @returns User data or null if not logged in
   */
  static getCurrentUser(): { id: number; username: string; role: string } | null {
    const userData = localStorage.getItem('auth_user');
    if (!userData) {
      return null;
    }
    try {
      return JSON.parse(userData);
    } catch {
      return null;
    }
  }
}

