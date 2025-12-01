import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createTheme, Theme } from '@mui/material/styles';
import {
  megaButtons,
  megaCards,
  megaPaper,
  megaDialog,
  megaTooltip,
  megaFab,
  megaMenu,
  megaAutocomplete,
  megaSlider,
  megaSwitch,
  megaChip,
  borderRadius,
  megaTabs,
  megaPopover,
  megaInput,
} from './index';
import { lightPalette, CustomPalette } from './light-theme';
import { darkPalette } from './dark-theme';

// Extend the MUI theme types
declare module '@mui/material/styles' {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: lightPalette.brand[500],
      contrastText: '#8CF9E3',
    },
    secondary: {
      main: lightPalette.accent[600],
      contrastText: '#8CF9E3',
    },
    mode: 'light',
    ...lightPalette,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: 'clamp(1.5rem, 2vw + 1rem, 2.25rem)', // 24px–36px responsive
      fontWeight: 500,
      lineHeight: 'clamp(2.25rem, 3vw + 1rem, 2.25rem)', // 36px
      textWrap: 'balance',
    },
    h2: {
      fontSize: 'clamp(1.375rem, 1.5vw + 1rem, 1.75rem)', // 22px–28px responsive
      fontWeight: 500,
      lineHeight: 'clamp(1.75rem, 2vw + 1rem, 1.75rem)', // 28px
      textWrap: 'balance',
    },
    h3: {
      fontSize: 'clamp(1.375rem, 1.5vw + 1rem, 1.75rem)', // 22px–28px responsive
      fontWeight: 400,
      lineHeight: 'clamp(1.75rem, 2vw + 1rem, 1.75rem)', // 28px
      textWrap: 'balance',
    },
    body1: {
      fontSize: 'clamp(1rem, 0.5vw + 0.75rem, 1.125rem)', // 16px responsive
      fontWeight: 400,
      lineHeight: '1.5rem', // 24px
      textWrap: 'pretty',
    },
    body2: {
      fontSize: 'clamp(0.875rem, 0.3vw + 0.7rem, 1rem)', // 14px responsive
      fontWeight: 400,
      lineHeight: '1.25rem', // 20px
      textWrap: 'pretty',
    },
    caption: {
      fontSize: 'clamp(0.75rem, 0.2vw + 0.6rem, 0.875rem)', // 12px responsive
      fontWeight: 400,
      lineHeight: '1rem', // 16px
    },
    button: {
      fontSize: 'clamp(0.875rem, 0.3vw + 0.7rem, 1rem)', // 14px responsive
      fontWeight: 500,
      lineHeight: '1.25rem', // 20px
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: borderRadius.sm, // Default border radius
  },
  components: {
    ...megaButtons,
    ...megaCards,
    ...megaPaper,
    ...megaDialog,
    ...megaTooltip,
    ...megaFab,
    ...megaMenu,
    ...megaAutocomplete,
    ...megaSlider,
    ...megaSwitch,
    ...megaChip,
    ...megaTabs,
    ...megaPopover,
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: darkPalette.brand[500],
      contrastText: '#8CF9E3',
    },
    secondary: {
      main: darkPalette.accent[600],
      contrastText: '#8CF9E3',
    },
    mode: 'dark',
    ...darkPalette,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: 'clamp(1.5rem, 2vw + 1rem, 2.25rem)',
      fontWeight: 500,
      lineHeight: 'clamp(2.25rem, 3vw + 1rem, 2.25rem)',
    },
    h2: {
      fontSize: 'clamp(1.375rem, 1.5vw + 1rem, 1.75rem)',
      fontWeight: 500,
      lineHeight: 'clamp(1.75rem, 2vw + 1rem, 1.75rem)',
    },
    h3: {
      fontSize: 'clamp(1.375rem, 1.5vw + 1rem, 1.75rem)',
      fontWeight: 400,
      lineHeight: 'clamp(1.75rem, 2vw + 1rem, 1.75rem)',
    },
    body1: {
      fontSize: 'clamp(1rem, 0.5vw + 0.75rem, 1.125rem)',
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
    body2: {
      fontSize: 'clamp(0.875rem, 0.3vw + 0.7rem, 1rem)',
      fontWeight: 400,
      lineHeight: '1.25rem',
    },
    caption: {
      fontSize: 'clamp(0.75rem, 0.2vw + 0.6rem, 0.875rem)',
      fontWeight: 400,
      lineHeight: '1rem',
    },
    button: {
      fontSize: 'clamp(0.875rem, 0.3vw + 0.7rem, 1rem)',
      fontWeight: 500,
      lineHeight: '1.25rem',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: borderRadius.sm, // Default border radius
  },
  components: {
    ...megaButtons,
    ...megaCards,
    ...megaPaper,
    ...megaDialog,
    ...megaTooltip,
    ...megaFab,
    ...megaMenu,
    ...megaAutocomplete,
    ...megaSlider,
    ...megaSwitch,
    ...megaChip,
    ...megaTabs,
    ...megaPopover,
    ...megaInput,
  },
});

// Create a context for the theme
export const ThemeContext = createContext<{
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}>({
  theme: darkTheme,
  isDarkMode: true,
  toggleTheme: () => {},
});

// Theme provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize theme from localStorage or default to dark
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true;
    }
    return true;
  });

  // Update theme when isDarkMode changes
  const theme = isDarkMode ? darkTheme : lightTheme;

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Initialize CSS variables on first render
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    const palette = isDarkMode ? darkPalette : lightPalette;

    root.style.setProperty('--scrollbar-thumb-color', palette.brand[100]);
    root.style.setProperty('--scrollbar-thumb-border', palette.brand[200]);
    root.style.setProperty('--scrollbar-thumb-hover', palette.brand[200]);
    root.style.setProperty('--scrollbar-color', palette.brand[400]);
  }, []);

  // Save theme preference to localStorage and update CSS variables
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Update CSS variables for scrollbar colors based on theme
    const root = document.documentElement;
    const palette = isDarkMode ? darkPalette : lightPalette;

    root.style.setProperty('--scrollbar-thumb-color', palette.brand[100]);
    root.style.setProperty('--scrollbar-thumb-border', palette.brand[200]);
    root.style.setProperty('--scrollbar-thumb-hover', palette.brand[200]);
    root.style.setProperty('--scrollbar-color', palette.brand[200]);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useThemeContext() {
  return useContext(ThemeContext);
}
