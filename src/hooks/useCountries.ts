import { useState, useEffect, useCallback } from 'react';
import { CountryAPI } from '../generated';
import { Country } from '../entities/Country';

/**
 * Country option interface
 */
export interface CountryOption {
  id: number;
  name: string;
  phoneExtension: string;
  language: string | null;
  label: string;
}

/**
 * Hook for managing country data
 */
export function useCountries() {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Load countries from API
  const loadCountries = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const countryData = await CountryAPI.apiq({});

      const options: CountryOption[] = countryData.map((country: Country) => ({
        id: country.Id,
        name: country.Name,
        phoneExtension: country.PhoneExtension,
        language: country.Language,
        label: `+${country.PhoneExtension} ${country.Name}`,
      }));

      setCountries(options);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      console.error('Failed to load countries:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load countries on mount
  useEffect(() => {
    if (countries.length === 0) {
      loadCountries();
    }
  }, [countries.length, loadCountries]);

  // Find country by phone extension
  const findCountryByExtension = useCallback(
    (extension: string): CountryOption | null => {
      return countries.find((country) => country.phoneExtension === extension) || null;
    },
    [countries]
  );

  // Format phone number with extension
  const formatPhoneNumber = useCallback((extension: string, phoneNumber: string): string => {
    if (!extension && !phoneNumber) return '';
    if (!extension) return phoneNumber;
    if (!phoneNumber) return `+${extension}`;
    return `+${extension}${phoneNumber}`;
  }, []);

  return {
    countries,
    countryOptions: countries,
    loading,
    error,
    findCountryByExtension,
    formatPhoneNumber,
    loadCountries,
  };
}

