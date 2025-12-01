import { Container, Grid, Box } from '@mui/material';
import { CallSection } from '../components/calls/CallSection';

/**
 * CallPage Component
 * Main page component that displays Inbound and Outbound call sections side by side
 * Single Responsibility: Layout and orchestration of call sections
 */
export function CallPage() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CallSection direction="Inbound" title="Inbound Calls" />
        </Grid>
        <Grid item xs={12} md={6}>
          <CallSection direction="Outbound" title="Outbound Calls" />
        </Grid>
      </Grid>
    </Container>
  );
}

