/**
 * API Configuration
 *
 * This file controls the base URLs for all API endpoints.
 * The Vite proxy handles routing to the backend at https://app.uk.megavoice.ai/
 *
 * Key concept: We ALWAYS use relative URLs (e.g., 'api/ui') so that Vite's proxy can
 * intercept the requests and route them to the backend without CORS issues.
 */

interface ApiConfig {
  baseUrl: string;
  internalUrl: string;
}

const apiConfig: ApiConfig = {
  baseUrl: 'api/ui',
  internalUrl: 'api/internal',
};

// Helper function to get the full URL for an endpoint
// Always returns relative URLs to leverage Vite's proxy and avoid CORS issues
export const getApiUrl = (endpoint: string): string => {
  if (endpoint.startsWith('http')) {
    return endpoint; // Already a full URL (external service)
  }

  // Always return relative URLs - Vite proxy handles the backend routing
  return endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
};

// Helper function to get the full internal API URL
// Always returns relative URLs to leverage Vite's proxy and avoid CORS issues
export const getInternalApiUrl = (endpoint: string): string => {
  if (endpoint.startsWith('http')) {
    return endpoint; // Already a full URL (external service)
  }

  // Always return relative URLs - Vite proxy handles the backend routing
  return endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
};

// Export individual config values
export const { baseUrl, internalUrl } = apiConfig;

console.log(`🔧 API Configuration loaded:`, {
  baseUrl: apiConfig.baseUrl,
  internalUrl: apiConfig.internalUrl,
  note: 'Vite proxy will route requests to https://app.uk.megavoice.ai/',
});
