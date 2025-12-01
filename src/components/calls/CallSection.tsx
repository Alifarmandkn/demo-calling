import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  CircularProgress,
  Divider,
  Avatar,
  Collapse,
} from '@mui/material';
import { Phone, PhoneCallbackRounded, PhoneForwardedRounded } from '@mui/icons-material';
import { Campaign } from '../../entities/Campaign';
import { Contact } from '../../entities/Contact';
import { CampaignList } from './CampaignList';
import { ContactList } from './ContactList';
import { PhoneNumberInput } from './PhoneNumberInput';
import { CampaignService } from '../../services/campaignService';
import { ContactService } from '../../services/contactService';
import { CallService } from '../../services/callService';
import { useCountries, CountryOption } from '../../hooks/useCountries';
import { hexToRGBA } from '../../utils/colorUtils';
import { useThemeContext } from '../../theme/theme';

interface CallSectionProps {
  direction: 'Inbound' | 'Outbound';
  title: string;
  selectedCampaignId: number | null;
  selectedCampaignDirection: 'Inbound' | 'Outbound' | null;
  onCampaignSelect: (campaign: Campaign | null) => void;
}

/**
 * CallSection Component
 * Manages the complete call flow for a direction (Inbound or Outbound)
 * Single Responsibility: Orchestrate campaign selection, contact selection, and call initiation
 */
export function CallSection({
  direction,
  title,
  selectedCampaignId,
  selectedCampaignDirection,
  onCampaignSelect,
}: CallSectionProps) {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  
  // Determine if this section's campaign is selected
  const selectedCampaign =
    selectedCampaignId && selectedCampaignDirection === direction
      ? campaigns.find((c) => c.Id === selectedCampaignId) || null
      : null;
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [loadingCampaigns, setLoadingCampaigns] = useState(false);
  const [loadingContacts, setLoadingContacts] = useState(false);
  const [calling, setCalling] = useState(false);
  const [phoneError, setPhoneError] = useState<string>('');

  const { countryOptions, formatPhoneNumber } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const { theme } = useThemeContext();

  // Load campaigns on mount
  useEffect(() => {
    const loadCampaigns = async () => {
      setLoadingCampaigns(true);
      try {
        const fetchedCampaigns = await CampaignService.fetchCampaignsByDirection(direction);
        setCampaigns(fetchedCampaigns);
      } catch (error) {
        console.error(`Error loading ${direction} campaigns:`, error);
      } finally {
        setLoadingCampaigns(false);
      }
    };

    loadCampaigns();
  }, [direction]);

  // Load contacts when campaign is selected
  useEffect(() => {
    if (!selectedCampaign) {
      setContacts([]);
      setSelectedContact(null);
      return;
    }

    const loadContacts = async () => {
      setLoadingContacts(true);
      try {
        const fetchedContacts = await ContactService.fetchContactsByCampaign(selectedCampaign.Id);
        setContacts(fetchedContacts);
      } catch (error) {
        console.error('Error loading contacts:', error);
      } finally {
        setLoadingContacts(false);
      }
    };

    loadContacts();
  }, [selectedCampaign]);

  // Set default country to Denmark on mount
  useEffect(() => {
    if (!selectedCountry && countryOptions.length > 0) {
      const denmarkCountry = countryOptions.find(
        (country) =>
          country.name.toLowerCase().includes('denmark') || country.phoneExtension === '45'
      );
      if (denmarkCountry) {
        setSelectedCountry(denmarkCountry);
      }
    }
  }, [countryOptions, selectedCountry]);

  const handleSelectCampaign = (campaign: Campaign) => {
    // If clicking the same campaign, deselect it
    if (selectedCampaign?.Id === campaign.Id) {
      onCampaignSelect(null);
      setSelectedContact(null);
      setPhoneNumber('');
      setPhoneError('');
    } else {
      // Select the new campaign (this will automatically deselect the other side)
      onCampaignSelect(campaign);
      setSelectedContact(null);
      setPhoneNumber('');
      setPhoneError('');
    }
  };

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
    setPhoneError('');
  };

  const handleCountryChange = (country: CountryOption | null) => {
    setSelectedCountry(country);
    setPhoneError('');
  };

  const handlePhoneNumberChange = (phone: string) => {
    setPhoneNumber(phone);
    setPhoneError('');
  };

  const validatePhoneInput = (): boolean => {
    if (!selectedCountry) {
      setPhoneError('Country is required');
      return false;
    }
    if (!phoneNumber.trim()) {
      setPhoneError('Phone number is required');
      return false;
    }
    return true;
  };

  const handleCall = async () => {
    if (!selectedContact || !selectedCampaign) {
      return;
    }

    if (!validatePhoneInput()) {
      return;
    }

    try {
      setCalling(true);
      const fullPhoneNumber = formatPhoneNumber(
        selectedCountry?.phoneExtension || '',
        phoneNumber
      );

      await CallService.initiateCall({
        ContactId: selectedContact.Id,
        CampaignId: selectedCampaign.Id,
        PhoneNumberOverride: fullPhoneNumber,
      });

      // Reset form after successful call
      setPhoneNumber('');
      setSelectedContact(null);
      alert('Call initiated successfully!');
    } catch (error) {
      console.error('Error initiating call:', error);
      const errorMessage =
        (error as any)?.errorData?.title ||
        (error as Error)?.message ||
        'Failed to initiate call';
      setPhoneError(errorMessage);
    } finally {
      setCalling(false);
    }
  };

  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: hexToRGBA(theme.palette.background.default, 0.75),
      }}
    >
      <Avatar sx={{ width: 120, height: 120, mb: 4, bgcolor: theme.palette.secondary.main, color: theme.palette.brand[100] }}>
        {direction === 'Inbound' ? <PhoneCallbackRounded sx={{ fontSize: 60 }} /> : <PhoneForwardedRounded sx={{ fontSize: 60 }} />}
      </Avatar>
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        {title}
      </Typography>

      <Divider sx={{ my: 2, width: '100%' }} />

      {/* Campaign Selection */}
      <Box sx={{ mb: 3, width: '100%' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Campaigns
        </Typography>
        <CampaignList
          campaigns={campaigns}
          selectedCampaign={selectedCampaign}
          onSelectCampaign={handleSelectCampaign}
          loading={loadingCampaigns}
        />
      </Box>

      {/* Contact Selection */}
      <Collapse in={!!selectedCampaign} timeout={400} sx={{ width: '100%' }}>
        <Box sx={{ mb: 2, width: '100%' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contacts
          </Typography>
          <ContactList
            contacts={contacts}
            selectedContact={selectedContact}
            onSelectContact={handleSelectContact}
            loading={loadingContacts}
          />
        </Box>
      </Collapse>

      {/* Phone Number Input and Call Button */}
      <Collapse in={!!selectedContact} timeout={400} sx={{ width: '100%' }}>
        <Box sx={{ mt: 'auto', pt: 2, width: '100%' }}>
          <PhoneNumberInput
            selectedCountry={selectedCountry}
            phoneNumber={phoneNumber}
            onCountryChange={handleCountryChange}
            onPhoneNumberChange={handlePhoneNumberChange}
            error={phoneError}
            disabled={calling}
            label="Enter phone number for call"
          />
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={calling ? <CircularProgress size={20} /> : <Phone />}
              onClick={handleCall}
              disabled={calling || !selectedContact || !selectedCampaign}
            >
              {calling ? 'Calling...' : 'Call'}
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}

