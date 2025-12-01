import { Typography, Box, CircularProgress } from '@mui/material';
import { Campaign } from '../../entities/Campaign';
import { EnhancedCard } from '../ui/custom/molecules/cards/EnhancedCard';
import { generateRandomVibrantColor } from '../../utils/colorUtils';

interface CampaignListProps {
  campaigns: Campaign[];
  selectedCampaign: Campaign | null;
  onSelectCampaign: (campaign: Campaign) => void;
  loading?: boolean;
}

/**
 * CampaignList Component
 * Displays a list of campaigns as EnhancedCards and allows selection
 * Single Responsibility: Display and handle campaign selection
 */
export function CampaignList({
  campaigns,
  selectedCampaign,
  onSelectCampaign,
  loading = false,
}: CampaignListProps) {

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (campaigns.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" color="text.secondary">
          No campaigns available
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {campaigns.map((campaign) => {
        const isSelected = selectedCampaign?.Id === campaign.Id;
        // Use vibrant color for active campaigns, neutral gray for inactive
        const campaignColor = campaign.IsActive
          ? generateRandomVibrantColor(campaign.Id)
          : '138, 139, 139'; // RGB equivalent of neutral[500]

        return (
          <EnhancedCard
            key={campaign.Id}
            interactive={true}
            selected={isSelected}
            color={campaignColor}
            onClick={() => onSelectCampaign(campaign)}
            sx={{
              p: 2,
              height: 'auto',
              minHeight: 'auto',
              cursor: 'pointer',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {campaign.Name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {campaign.Project?.Name || 'No project'}
              </Typography>
            </Box>
          </EnhancedCard>
        );
      })}
    </Box>
  );
}

