import { hexToRGBA } from '../utils/colorUtils';
import { useThemeContext } from './theme';

export const megaMenu = {
  MuiMenu: {
    styleOverrides: {
      paper: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor: hexToRGBA(theme.palette.background.default, 0.5),
          backdropFilter: 'blur(16px)',
        };
      },
      '& .MuiBackdrop-invisible': {
        backdropFilter: 'blur(8px)',
      },
      menuItem: () => {
        return {
          p: '16px !important',
        };
      },
    },
  },
};
