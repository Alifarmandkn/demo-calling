/**
 * Campaign entity type
 */
export interface Campaign {
  Id: number;
  Name: string;
  Direction: 'Inbound' | 'Outbound';
  ProjectId: number;
  IsDeleted: boolean;
  IsActive: boolean;
  Project?: {
    Id: number;
    Name: string;
    IsActive: boolean;
  };
}

/**
 * Campaign list item props
 */
export interface CampaignListItemProps {
  campaign: Campaign;
  isSelected: boolean;
  onSelect: (campaign: Campaign) => void;
}

