import { useThemeContext } from './theme';
import { hexToRGBA } from '../utils/colorUtils';

export const megaTabs = {
  MuiTabs: {
    styleOverrides: {
      root: () => {
        const { theme } = useThemeContext();
        return {
          '& .MuiTabs-indicator': {
            borderRadius: '2px',
            boxShadow: `0px -1px 4px 0px ${hexToRGBA(theme.palette.brand[500], 0.5)}`,
          },

          '& .MuiTab-root': {
            '&:before': {
              opacity: 0,
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            },
            '&.Mui-selected': {
              color: theme.palette.text.primary,
              '&:before': {
                opacity: 1,
                background: `radial-gradient(ellipse at center bottom, ${hexToRGBA(theme.palette.brand[100], 1)} 0%,${hexToRGBA(theme.palette.brand[500], 0.01)} 70%,${hexToRGBA(theme.palette.brand[500], 0)} 100%)`,
              },
            },
          },
        };
      },
    },
  },
};
