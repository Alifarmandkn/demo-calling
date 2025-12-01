import { hexToRGBA } from '../utils/colorUtils';
import { useThemeContext } from './theme';

export const megaPaper = {
  MuiPaper: {
    styleOverrides: {
      root: () => {
        const { theme } = useThemeContext();
        return {
          boxShadow: '0px 1.5px 2px -1px hsla(0,0%,100%,.8) inset',
          border:
            theme.palette.mode === 'dark'
              ? `1px solid ${hexToRGBA(theme.palette.custom.white, 0.2)}`
              : `1px solid ${hexToRGBA(theme.palette.custom.white, 1)}`,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? hexToRGBA(theme.palette.custom.black, 0.9)
              : hexToRGBA(theme.palette.custom.white, 0.5),
        };
      },
    },
  },
};
