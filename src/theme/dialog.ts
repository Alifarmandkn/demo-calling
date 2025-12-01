import { hexToRGBA } from '../utils/colorUtils';
import { useThemeContext } from './theme';

export const megaDialog = {
  MuiDialog: {
    styleOverrides: {
      paper: () => {
        const { theme } = useThemeContext();
        return {
          boxShadow: 'none',
          backgroundColor: hexToRGBA(theme.palette.background.default, 0.75),
          backdropFilter: 'blur(16px)',
        };
      },
      backdrop: () => {
        const { theme } = useThemeContext();
        return {
          backdropFilter: 'blur(8px)',
          backgroundColor: hexToRGBA(theme.palette.custom.black, 0.5),
        };
      },
    },
  },
};
