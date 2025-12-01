import { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import { CallSection } from '../components/calls/CallSection';
import { Campaign } from '../entities/Campaign';

/**
 * CallPage Component
 * Main page component that displays Inbound and Outbound call sections side by side
 * Single Responsibility: Layout and orchestration of call sections
 */
export function CallPage() {
  // Track which campaign is selected across both sections
  const [selectedCampaignId, setSelectedCampaignId] = useState<number | null>(null);
  const [selectedCampaignDirection, setSelectedCampaignDirection] = useState<'Inbound' | 'Outbound' | null>(null);

  const handleCampaignSelect = (campaign: Campaign | null, direction: 'Inbound' | 'Outbound') => {
    if (campaign) {
      setSelectedCampaignId(campaign.Id);
      setSelectedCampaignDirection(direction);
    } else {
      setSelectedCampaignId(null);
      setSelectedCampaignDirection(null);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <CallSection
            direction="Inbound"
            title="Inbound Calls"
            selectedCampaignId={selectedCampaignId}
            selectedCampaignDirection={selectedCampaignDirection}
            onCampaignSelect={(campaign) => handleCampaignSelect(campaign, 'Inbound')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CallSection
            direction="Outbound"
            title="Outbound Calls"
            selectedCampaignId={selectedCampaignId}
            selectedCampaignDirection={selectedCampaignDirection}
            onCampaignSelect={(campaign) => handleCampaignSelect(campaign, 'Outbound')}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

