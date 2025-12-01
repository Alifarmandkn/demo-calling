import { ContactAPI } from '../generated';
import { Contact } from '../entities/Contact';

/**
 * Contact API Service
 * Handles fetching contacts from the API
 */
export class ContactService {
  /**
   * Fetches contacts for a specific campaign
   * @param campaignId - The ID of the campaign
   * @returns Promise resolving to array of contacts
   */
  static async fetchContactsByCampaign(campaignId: number): Promise<Contact[]> {
    try {
      const contacts = await ContactAPI.apiq({
        Where: {
          CampaignIdIn: [campaignId],
          IsDeleted: false,
        },
      });

      return contacts as Contact[];
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }
}

