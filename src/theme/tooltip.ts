import { hexToRGBA } from '../utils/colorUtils';
import { useThemeContext } from './theme';

export const megaTooltip = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor: hexToRGBA(theme.palette.brand[300], 0.3),
          backdropFilter: 'blur(12px)',
          border:
            theme.palette.mode === 'dark'
              ? `1px solid ${hexToRGBA(theme.palette.custom.white, 0.15)}`
              : `1px solid ${hexToRGBA(theme.palette.custom.white, 1)}`,
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.text.primary,
          fontSize: theme.typography.caption.fontSize,
          fontWeight: theme.typography.caption.fontWeight,
          boxShadow: 'none',
        };
      },
      arrow: () => {
        const { theme } = useThemeContext();
        return {
          color: hexToRGBA(theme.palette.brand[300], 0.3),
          '&::before': {
            border:
              theme.palette.mode === 'dark'
                ? `1px solid ${hexToRGBA(theme.palette.custom.white, 0.15)}`
                : `1px solid ${hexToRGBA(theme.palette.custom.white, 1)}`,
          },
        };
      },
    },
  },
};
