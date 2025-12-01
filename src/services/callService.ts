import { api, baseUrl } from '../api';
import { CallRequest } from '../types/call.types';

/**
 * Call API Service
 * Handles initiating calls
 */
export class CallService {
  /**
   * Initiates a test call for a contact
   * @param request - Call request parameters
   * @returns Promise resolving when call is initiated
   */
  static async initiateCall(request: CallRequest): Promise<void> {
    try {
      const response = await api.post(`${baseUrl}/dialing/test/contact/specific`, request);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const error = new Error(errorData.title || `HTTP error! status: ${response.status}`);
        (error as any).errorData = errorData;
        throw error;
      }

      // Check if response has content before trying to parse JSON
      const contentType = response.headers.get('content-type');
      const contentLength = response.headers.get('content-length');

      if (contentType?.includes('application/json') && contentLength !== '0') {
        await response.json();
      }
    } catch (error) {
      console.error('Error initiating call:', error);
      throw error;
    }
  }
}

