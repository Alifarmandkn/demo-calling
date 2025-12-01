import { Typography, Box, CircularProgress } from '@mui/material';
import { Contact } from '../../entities/Contact';
import { EnhancedCard } from '../ui/custom/molecules/cards/EnhancedCard';
import { generateRandomVibrantColor } from '../../utils/colorUtils';

interface ContactListProps {
  contacts: Contact[];
  selectedContact: Contact | null;
  onSelectContact: (contact: Contact) => void;
  loading?: boolean;
}

/**
 * ContactList Component
 * Displays a list of contacts as EnhancedCards and allows selection
 * Single Responsibility: Display and handle contact selection
 */
export function ContactList({
  contacts,
  selectedContact,
  onSelectContact,
  loading = false,
}: ContactListProps) {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (contacts.length === 0) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" color="text.secondary">
          No contacts available
        </Typography>
      </Box>
    );
  }

  const getContactDisplayName = (contact: Contact): string => {
    if (contact.Name) return contact.Name;
    const firstName = contact.FirstName || '';
    const lastName = contact.LastName || '';
    return `${firstName} ${lastName}`.trim() || 'Unknown Contact';
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {contacts.map((contact) => {
        const isSelected = selectedContact?.Id === contact.Id;
        const contactColor = generateRandomVibrantColor(contact.Id);

        return (
          <EnhancedCard
            key={contact.Id}
            interactive={true}
            selected={isSelected}
            color={contactColor}
            onClick={() => onSelectContact(contact)}
            sx={{
              p: 2,
              height: 'auto',
              minHeight: 'auto',
              cursor: 'pointer',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {getContactDisplayName(contact)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {contact.Telephone1 || contact.Email || 'No contact info'}
              </Typography>
            </Box>
          </EnhancedCard>
        );
      })}
    </Box>
  );
}

