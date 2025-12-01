import { Box, TextField, Autocomplete, Typography, Divider } from '@mui/material';
import { useCountries, CountryOption } from '../../hooks/useCountries';
import { useThemeContext } from '../../theme/theme';

interface PhoneNumberInputProps {
  selectedCountry: CountryOption | null;
  phoneNumber: string;
  onCountryChange: (country: CountryOption | null) => void;
  onPhoneNumberChange: (phoneNumber: string) => void;
  error?: string;
  disabled?: boolean;
  label?: string;
}

/**
 * PhoneNumberInput Component
 * Handles country selection and phone number input
 * Single Responsibility: Phone number input with country code selection
 */
export function PhoneNumberInput({
  selectedCountry,
  phoneNumber,
  onCountryChange,
  onPhoneNumberChange,
  error,
  disabled = false,
  label = 'Phone Number',
}: PhoneNumberInputProps) {
  const { theme } = useThemeContext();
  const { countryOptions } = useCountries();

  return (
    <Box>
            <Divider sx={{ mb: 3 }} />
      <Typography variant="body2" sx={{ textAlign: 'left', color: theme.palette.text.secondary, mb: 2 }}>
        {label}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box sx={{ flex: '0 0 40%' }}>
          <Autocomplete
            options={countryOptions}
            value={selectedCountry}
            onChange={(_: any, newValue: CountryOption | null) => {
              onCountryChange(newValue);
            }}
            getOptionLabel={(option: CountryOption) => option.label}
            renderInput={(params: any) => (
              <TextField
                {...params}
                label="Country"
                error={!!error && !selectedCountry}
                disabled={disabled}
                placeholder="Select country"
              />
            )}
            renderOption={(props: any, option: CountryOption) => (
              <Box component="li" {...props} key={option.id}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, minWidth: '32px', textAlign: 'right' }}
                  >
                    +{option.phoneExtension}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    {option.name}
                  </Typography>
                </Box>
              </Box>
            )}
            disabled={disabled}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <TextField
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderRadius: 2,
              },
            }}
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => {
              const value = (e.target as HTMLInputElement).value;
              onPhoneNumberChange(value);
            }}
            error={!!error}
            helperText={error}
            disabled={disabled}
            placeholder="Enter phone number"
            InputProps={{
              startAdornment: selectedCountry && (
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    mr: 1,
                  }}
                >
                  +{selectedCountry.phoneExtension}
                </Typography>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

