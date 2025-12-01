import { CampaignAPI } from '../generated';
import { Campaign } from '../entities/Campaign';

/**
 * Campaign API Service
 * Handles fetching campaigns from the API
 */
export class CampaignService {
  /**
   * Fetches all campaigns filtered by direction
   * @param direction - 'Inbound' or 'Outbound'
   * @returns Promise resolving to array of campaigns
   */
  static async fetchCampaignsByDirection(
    direction: 'Inbound' | 'Outbound'
  ): Promise<Campaign[]> {
    try {
      const campaigns = await CampaignAPI.apiq({
        Where: {
          DirectionIn: [direction],
          IsDeleted: false,
        },
        Include: {
          Project: {},
        },
      });

      return campaigns as Campaign[];
    } catch (error) {
      console.error(`Error fetching ${direction} campaigns:`, error);
      throw error;
    }
  }

  /**
   * Fetches all campaigns (both Inbound and Outbound)
   * @returns Promise resolving to array of campaigns
   */
  static async fetchAllCampaigns(): Promise<Campaign[]> {
    try {
      const campaigns = await CampaignAPI.apiq({
        Where: {
          IsDeleted: false,
        },
        Include: {
          Project: {},
        },
      });

      return campaigns as Campaign[];
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      throw error;
    }
  }
}

