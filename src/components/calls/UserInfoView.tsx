import { Box, Typography, Divider, Chip, IconButton } from '@mui/material';
import { Phone, LocationOn, Email, AccountBalance, ArrowBack } from '@mui/icons-material';
import { Contact } from '../../entities/Contact';
import { CallingAvatar } from './CallingAvatar';
import { hexToRGBA } from '../../utils/colorUtils';
import { useThemeContext } from '../../theme/theme';

interface UserInfoViewProps {
  contact: Contact;
  onBack: () => void;
}

/**
 * UserInfoView Component
 * Displays user information during an active call
 * Similar to UserInfoCard from SPA.Client
 */
export function UserInfoView({ contact, onBack }: UserInfoViewProps) {
  const { theme } = useThemeContext();

  const getFullName = () => {
    const parts = [contact.FirstName, contact.MiddleName, contact.LastName].filter(Boolean);
    return parts.length > 0 ? parts.join(' ') : contact.Name || 'Unknown User';
  };

  const getFullAddress = () => {
    const addressParts = [
      contact.HouseNumber,
      contact.StreetName,
      contact.City,
      contact.Zipcode,
    ].filter(Boolean);
    return addressParts.length > 0 ? addressParts.join(', ') : 'Address not available';
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Back Button */}
      <IconButton
        onClick={onBack}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10,
          color: 'text.secondary',
          '&:hover': {
            backgroundColor: 'action.hover',
            color: 'text.primary',
          },
        }}
      >
        <ArrowBack />
      </IconButton>

      {/* Avatar with calling animation */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <CallingAvatar
          firstName={contact.FirstName}
          lastName={contact.LastName}
          size={120}
        />
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mt: 3,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          {getFullName()}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
            textAlign: 'center',
          }}
        >
          Calling...
        </Typography>
      </Box>

      <Divider sx={{ my: 2, width: '100%' }} />

      {/* Contact Information */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          px: 2,
        }}
      >
        {/* Phone Number */}
        {contact.Telephone1 && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Phone sx={{ fontSize: 20, color: theme.palette.text.secondary }} />
            <Typography variant="body1" sx={{ flex: 1 }}>
              {contact.Telephone1}
            </Typography>
          </Box>
        )}

        {/* Address */}
        {getFullAddress() !== 'Address not available' && (
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
            <LocationOn sx={{ fontSize: 20, color: theme.palette.text.secondary, mt: 0.5 }} />
            <Typography variant="body1" sx={{ flex: 1 }}>
              {getFullAddress()}
            </Typography>
          </Box>
        )}

        {/* Email */}
        {contact.Email && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Email sx={{ fontSize: 20, color: theme.palette.text.secondary }} />
            <Typography variant="body1" sx={{ flex: 1 }}>
              {contact.Email}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Debt Information */}
      {(contact.DebtAmount || contact.DebtCollector || contact.DebtDebitor) && (
        <>
          <Divider sx={{ my: 2, width: '100%' }} />
          <Box
            sx={{
              px: 2,
              mb: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <AccountBalance sx={{ fontSize: 20, color: theme.palette.text.secondary }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Debt Information
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {contact.DebtAmount && (
                <Typography variant="body2" color="text.secondary">
                  Amount: <strong>{contact.DebtAmount}</strong>
                </Typography>
              )}
              {contact.DebtCollector && (
                <Typography variant="body2" color="text.secondary">
                  Collector: <strong>{contact.DebtCollector}</strong>
                </Typography>
              )}
              {contact.DebtDebitor && (
                <Typography variant="body2" color="text.secondary">
                  Debitor: <strong>{contact.DebtDebitor}</strong>
                </Typography>
              )}
            </Box>
          </Box>
        </>
      )}

      {/* Campaign Info */}
      {contact.Campaign && (
        <>
          <Divider sx={{ my: 2, width: '100%' }} />
          <Box sx={{ px: 2, mb: 2 }}>
            <Chip
              label={contact.Campaign.Name}
              size="small"
              variant="outlined"
              sx={{ mb: 1 }}
            />
            {contact.Description && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {contact.Description}
              </Typography>
            )}
          </Box>
        </>
      )}
    </Box>
  );
}

