import { hexToRGBA } from '../utils/colorUtils';
import { useThemeContext } from './theme';

export const megaSlider = {
  MuiSlider: {
    styleOverrides: {
      root: () => {
        const { theme } = useThemeContext();
        return {
          '& .MuiSlider-track': {
            backgroundColor: theme.palette.primary.main,
            border: 'none',
            boxShadow: `0 2px 8px ${hexToRGBA(theme.palette.primary.main, 0.3)}`,
          },
          '& .MuiSlider-rail': {
            backgroundColor:
              theme.palette.mode === 'dark'
                ? hexToRGBA(theme.palette.custom.glassEdgeTwo, 0.2)
                : hexToRGBA(theme.palette.custom.glassEdgeTwo, 0.4),
            border: `1px solid ${hexToRGBA(theme.palette.custom.glassSubtleEdge, 0.1)}`,
          },
          '& .MuiSlider-thumb': {
            backgroundColor: hexToRGBA(theme.palette.custom.glass, 0.9),
            border: `2px solid ${theme.palette.primary.main}`,
            boxShadow: `0 4px 12px ${hexToRGBA(theme.palette.primary.main, 0.2)}, 
                        inset 0 1px 0 ${hexToRGBA(theme.palette.custom.glassEdge, 0.3)}`,
            backdropFilter: 'blur(16px)',
            '&:hover': {
              boxShadow: `0 6px 16px ${hexToRGBA(theme.palette.primary.main, 0.3)}, 
                          inset 0 1px 0 ${hexToRGBA(theme.palette.custom.glassEdge, 0.4)}`,
            },
            '&.Mui-active': {
              boxShadow: `0 8px 20px ${hexToRGBA(theme.palette.primary.main, 0.4)}, 
                          inset 0 1px 0 ${hexToRGBA(theme.palette.custom.glassEdge, 0.5)}`,
            },
          },
        };
      },
    },
  },
};
