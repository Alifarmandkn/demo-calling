import { hexToRGBA } from '../utils/colorUtils';
import { useThemeContext } from './theme';

export const megaSwitch = {
  MuiSwitch: {
    styleOverrides: {
      root: () => {
        const { theme } = useThemeContext();
        return {
          width: 58,
          height: 32,
          padding: 0,
          overflow: 'visible',
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(26px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.primary.main,
                opacity: 1,
                border: 0,
                boxShadow: `0 2px 8px ${hexToRGBA(theme.palette.primary.main, 0.3)}`,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: theme.palette.primary.main,
              border: `6px solid ${hexToRGBA(theme.palette.primary.main, 0.1)}`,
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color:
                theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: theme.palette.mode === 'light' ? 0.7 : 0.9,
            },
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: hexToRGBA(theme.palette.custom.glass, 0.9),
            border: `2px solid ${theme.palette.primary.main}`,
            boxShadow: `0 4px 12px ${hexToRGBA(theme.palette.primary.main, 0.2)}, 
                        inset 0 1px 0 ${hexToRGBA(theme.palette.custom.glassEdge, 0.3)}`,
            backdropFilter: 'blur(16px)',
            width: 28,
            height: 28,
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: `0 6px 16px ${hexToRGBA(theme.palette.primary.main, 0.3)}, 
                          inset 0 1px 0 ${hexToRGBA(theme.palette.custom.glassEdge, 0.4)}`,
            },
            '&:active': {
              boxShadow: `0 8px 20px ${hexToRGBA(theme.palette.primary.main, 0.4)}, 
                          inset 0 1px 0 ${hexToRGBA(theme.palette.custom.glassEdge, 0.5)}`,
            },
          },
          '& .MuiSwitch-track': {
            borderRadius: 32 / 2,
            backgroundColor:
              theme.palette.mode === 'light'
                ? hexToRGBA(theme.palette.custom.glassEdgeTwo, 0.4)
                : hexToRGBA(theme.palette.custom.glassEdgeTwo, 0.9),
            border: `1px solid ${hexToRGBA(theme.palette.custom.glassSubtleEdge, 0.1)}`,
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
              duration: 500,
            }),
          },
        };
      },
    },
  },
};
