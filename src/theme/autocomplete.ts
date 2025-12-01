import { hexToRGBA } from '../utils/colorUtils';
import { useThemeContext } from './theme';

export const megaAutocomplete = {
  MuiAutocomplete: {
    styleOverrides: {
      paper: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor: hexToRGBA(theme.palette.background.default, 0.75),
          backdropFilter: 'blur(16px)',
          boxShadow: 'none',
          border: `1px solid ${hexToRGBA(theme.palette.custom.glassEdge, 0.2)}`,
        };
      },
      '& .MuiBackdrop-invisible': {
        backdropFilter: 'blur(8px)',
      },
      listbox: () => {
        const { theme } = useThemeContext();
        return {
          padding: 0,
          '& .MuiAutocomplete-option': {
            padding: '12px 16px',
            '&:hover': {
              backgroundColor: hexToRGBA(theme.palette.action.hover, 0.1),
            },
            '&[aria-selected="true"]': {
              backgroundColor: hexToRGBA(theme.palette.primary.main, 0.1),
            },
          },
        };
      },
      tag: () => {
        return {
          // Hide tags in input field since we show them separately
          display: 'none',
        };
      },
      inputRoot: () => {
        return {
          borderRadius: 8,
        };
      },
    },
  },
};
