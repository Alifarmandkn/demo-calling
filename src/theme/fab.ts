import { useThemeContext } from './theme';
import { hexToRGBA } from '../utils/colorUtils';

export const megaFab = {
  MuiFab: {
    styleOverrides: {
      circular: () => {
        const { theme } = useThemeContext();
        return {
          background: `radial-gradient(circle at bottom, ${theme.palette.brand[500]} 0%, ${theme.palette.brand[700]} 100%)`,
          color: theme.palette.brand[50],
          boxShadow: `0 4px 8px 0 ${hexToRGBA(theme.palette.brand[500], 0.33)}`,
          transition: 'background 0.33s ease-in-out, color 0.33s ease-in-out',
          '&:hover': {
            background: `radial-gradient(circle at bottom, ${theme.palette.brand[600]} 40%, ${theme.palette.brand[800]} 100%)`,
            color: theme.palette.brand[100],
            boxShadow: `0 4px 16px 0 ${hexToRGBA(theme.palette.brand[500], 0.6)}`,
          },
          '&:active': {
            boxShadow: `0 4px 16px 0 ${hexToRGBA(theme.palette.accent[400], 0.6)}`,
          },
        };
      },
    },
  },
};
