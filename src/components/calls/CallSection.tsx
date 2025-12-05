import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Divider,
  Avatar,
  Collapse,
} from '@mui/material';
import { Phone, PhoneCallbackRounded, PhoneForwardedRounded, CampaignRounded, GroupsRounded } from '@mui/icons-material';
import { Campaign } from '../../entities/Campaign';
import { Contact } from '../../entities/Contact';
import { CampaignList } from './CampaignList';
import { ContactList } from './ContactList';
import { PhoneNumberInput } from './PhoneNumberInput';
import { UserInfoView } from './UserInfoView';
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
  const [showContactsCollapse, setShowContactsCollapse] = useState(false);
  const [callActive, setCallActive] = useState(false);
  const [activeCallContact, setActiveCallContact] = useState<Contact | null>(null);

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
      setShowContactsCollapse(false);
      return;
    }

    const loadContacts = async () => {
      setLoadingContacts(true);
      // Don't show collapse until contacts are loaded to prevent height measurement issues
      setShowContactsCollapse(false);
      try {
        const fetchedContacts = await ContactService.fetchContactsByCampaign(Number(selectedCampaign.Id));
        setContacts(fetchedContacts);
        // Use double requestAnimationFrame to ensure DOM is fully updated before measuring
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setShowContactsCollapse(true);
          });
        });
      } catch (error) {
        console.error('Error loading contacts:', error);
        // Still show collapse even on error
        requestAnimationFrame(() => {
          setShowContactsCollapse(true);
        });
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
        ContactId: Number(selectedContact.Id),
        CampaignId: Number(selectedCampaign.Id),
        PhoneNumberOverride: fullPhoneNumber,
      });

      // For Outbound calls, show the user info view
      if (direction === 'Outbound') {
        setActiveCallContact(selectedContact);
        setCallActive(true);
      } else {
        // Reset form after successful call for Inbound
        setPhoneNumber('');
        setSelectedContact(null);
        alert('Call initiated successfully!');
      }
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

  const handleBack = () => {
    setCallActive(false);
    setActiveCallContact(null);
    setPhoneNumber('');
    setSelectedContact(null);
    setPhoneError('');
  };

  // Show UserInfoView for Outbound calls when call is active
  if (direction === 'Outbound' && callActive && activeCallContact) {
    return (
      <Box
        sx={{
          mt: 4,
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
        <UserInfoView contact={activeCallContact} onBack={handleBack} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mt: 4,
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
      <Box sx={{ mb: 2, width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2,  }}>
            <CampaignRounded sx={{ fontSize: 20, mr: 1 }} />
            <Typography variant="body2" sx={{ color:'theme.palette.text.secondary' }}>
            Campaigns
            </Typography>
        </Box>
        <CampaignList
          campaigns={campaigns}
          selectedCampaign={selectedCampaign}
          onSelectCampaign={handleSelectCampaign}
          loading={loadingCampaigns}
        />
      </Box>

      {/* Contact Selection */}
      <Collapse 
        in={showContactsCollapse} 
        timeout={400} 
        unmountOnExit={false}
        sx={{ width: '100%' }}
      >
        <Box sx={{ mb: 2, width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 2  }}>
            <GroupsRounded sx={{ fontSize: 20, mr: 1 }} />
            <Typography variant="body2" sx={{ color:'theme.palette.text.secondary' }}>
            Contacts
            </Typography>
          </Box>
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

