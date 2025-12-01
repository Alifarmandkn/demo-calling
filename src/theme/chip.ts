import { hexToRGBA } from '../utils/colorUtils';
import { useThemeContext } from './theme';

export const megaChip = {
  MuiChip: {
    styleOverrides: {
      root: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor:
            theme.palette.mode === 'dark'
              ? hexToRGBA(theme.palette.custom.glass, 0.1)
              : hexToRGBA(theme.palette.custom.glass, 0.6),
          //   border: `1px solid ${hexToRGBA(theme.palette.custom.glassEdge, 0.2)}`,
          backdropFilter: 'blur(10px)',
          boxShadow: `0 2px 8px ${hexToRGBA(theme.palette.custom.glassSubtleEdge, 0.1)}, 
                      inset 0 1px 0 ${hexToRGBA(theme.palette.custom.glassEdge, 0.3)}`,
          transition: 'all 0.2s ease-in-out',
          // Only apply hover effects for clickable chips
          '&.MuiChip-clickable:hover': {
            backgroundColor:
              theme.palette.mode === 'dark'
                ? hexToRGBA(theme.palette.custom.glass, 0.2)
                : hexToRGBA(theme.palette.custom.glass, 0.8),
            boxShadow: `0 4px 12px ${hexToRGBA(theme.palette.custom.glassSubtleEdge, 0.2)}, 
                        inset 0 1px 0 ${hexToRGBA(theme.palette.custom.glassEdge, 0.4)}`,
          },
          '&.MuiChip-clickable': {
            '&:active': {
              boxShadow: `0 2px 6px ${hexToRGBA(theme.palette.custom.glassSubtleEdge, 0.15)}, 
                          inset 0 1px 0 ${hexToRGBA(theme.palette.custom.glassEdge, 0.2)}`,
            },
          },
          '& .MuiChip-deleteIcon': {
            '&:hover': {
              color: theme.palette.error.main,
            },
          },
        };
      },
      filled: () => {
        const { theme } = useThemeContext();
        return {
          '&.MuiChip-colorPrimary': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
            border: `1px solid ${hexToRGBA(theme.palette.primary.main, 0.2)}`,
            color: theme.palette.primary.main,
          },
          '&.MuiChip-colorSecondary': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.08),
            border: `1px solid ${hexToRGBA(theme.palette.secondary.main, 0.2)}`,
            color: theme.palette.secondary.main,
          },
          '&.MuiChip-colorSuccess': {
            border: `1px solid ${hexToRGBA(theme.palette.success.main, 0.2)}`,
            color: theme.palette.text.primary,
          },
          '&.MuiChip-colorWarning': {
            backgroundColor: hexToRGBA(theme.palette.warning.main, 0.08),
            border: `1px solid ${hexToRGBA(theme.palette.warning.main, 0.2)}`,
            color: theme.palette.warning.main,
          },
          '&.MuiChip-colorError': {
            backgroundColor: hexToRGBA(theme.palette.error.main, 0.08),
            border: `1px solid ${hexToRGBA(theme.palette.error.main, 0.2)}`,
            color: theme.palette.error.main,
          },
          '&.MuiChip-colorInfo': {
            backgroundColor: hexToRGBA(theme.palette.info.main, 0.08),
            border: `1px solid ${hexToRGBA(theme.palette.info.main, 0.2)}`,
            color: theme.palette.info.main,
          },
        };
      },
      // Add specific overrides for status chips with better contrast
      colorSuccess: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor: hexToRGBA(theme.palette.success.main, 0.2),
          color: theme.palette.text.secondary,
          '&.MuiChip-variantOutlined': {
            backgroundColor: 'transparent',
            color: theme.palette.success.main,
            borderColor: theme.palette.success.main,
          },
        };
      },
      colorError: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor: theme.palette.error.main,
          color: theme.palette.error.contrastText || '#fff',
          '&.MuiChip-variantOutlined': {
            backgroundColor: 'transparent',
            color: theme.palette.error.main,
            borderColor: theme.palette.error.main,
          },
        };
      },
      colorWarning: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor: theme.palette.warning.main,
          color: theme.palette.warning.contrastText || '#fff',
          '&.MuiChip-variantOutlined': {
            backgroundColor: 'transparent',
            color: theme.palette.warning.main,
            borderColor: theme.palette.warning.main,
          },
        };
      },
      colorDefault: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor: hexToRGBA(theme.palette.grey[500], 0.2),
          color: theme.palette.text.secondary,
          '&.MuiChip-variantOutlined': {
            backgroundColor: 'transparent',
            color: theme.palette.grey[500],
            borderColor: theme.palette.grey[500],
          },
        };
      },
      colorInfo: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor: theme.palette.info.main,
          color: theme.palette.info.contrastText || '#fff',
          '&.MuiChip-variantOutlined': {
            backgroundColor: 'transparent',
            color: theme.palette.info.main,
            borderColor: theme.palette.info.main,
          },
        };
      },
    },
  },
};
