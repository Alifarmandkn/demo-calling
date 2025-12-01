import { useThemeContext } from './theme';
import { hexToRGBA } from '../utils/colorUtils';

export const megaButtons = {
  MuiButton: {
    styleOverrides: {
      root: () => {
        const { theme } = useThemeContext();
        return {
          position: 'relative',
          overflow: 'hidden',
          padding: '10px 20px',
          borderRadius: 8,
          zIndex: 1,
          boxShadow: '0px 1.5px 2px -1px hsla(0,0%,100%,.2) inset',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: `radial-gradient(at bottom, ${hexToRGBA(
              theme.palette.brand[500],
              0.1
            )},rgba(0,0,0,0))`,
          },
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '0',
            bottom: '0',
            left: '0',
            zIndex: '-1',
            // background: `linear-gradient(315deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 74%)`,
            background: hexToRGBA(theme.palette.brand[500], 0.2),
            boxShadow: `
              -7px -7px 20px 0px ${hexToRGBA(theme.palette.custom.white, 0.3)},
              -4px -4px 5px 0px ${hexToRGBA(theme.palette.custom.white, 0.3)},
              7px 7px 20px 0px ${hexToRGBA(theme.palette.custom.black, 0.1)},
              4px 4px 5px 0px ${hexToRGBA(theme.palette.custom.black, 0.05)}
            `,
            transition: 'all 0.15s ease',
          },
          '&:hover::after': {
            top: '0',
            height: '100%',
          },
          // '&:active': {
          //   transform: 'translateY(2px)',
          // },
        };
      },

      contained: () => {
        const { theme } = useThemeContext();

        return {
          border: 'none',
          background: `linear-gradient(0deg, ${theme.palette.brand[600]} 0%, ${theme.palette.brand[500]} 100%)`,
          color:
            theme.palette.mode === 'dark' ? theme.palette.custom.black : theme.palette.custom.white,
          overflow: 'hidden',
          transition: 'all 0.15s ease',
          // boxShadow: 'none',
          boxShadow: `${hexToRGBA(theme.palette.brand[100], 1)} 0px 2px 4px, 0px 1.5px 2px -1px hsla(0,0%,100%,.2) inset`,
          '&.Mui-disabled': {
            background:
              theme.palette.mode === 'dark'
                ? hexToRGBA(theme.palette.custom.white, 0.12)
                : hexToRGBA(theme.palette.custom.black, 0.12),
            color:
              theme.palette.mode === 'dark'
                ? hexToRGBA(theme.palette.custom.white, 0.3)
                : hexToRGBA(theme.palette.custom.black, 0.26),
            boxShadow: 'none',
            '&::before': {
              display: 'none',
            },
          },
          '&::before': {
            position: 'absolute',
            content: '""',
            display: 'inline-block',
            top: '-180px',
            left: '0',
            width: '30px',
            height: '100%',
            backgroundColor: hexToRGBA(theme.palette.custom.white, 0.5),
            animation: 'shiny-btn1 6s ease-in-out infinite',
          },
          '&:hover': {
            textDecoration: 'none',
            color: theme.palette.custom.white,
            // boxShadow: `0 5px 10px 0 ${hexToRGBA(theme.palette.brand[200], 0.7)}`,
            boxShadow: `${hexToRGBA(theme.palette.brand[400], 0.6)} 0px 4px 12px`,
            // opacity: '0.7',
          },
          '&:active': {
            boxShadow: `${hexToRGBA(theme.palette.brand[400], 0.8)} 0px 4px 20px`,
          },
          // Error button styles
          '&.MuiButton-containedError': {
            background: `linear-gradient(0deg, ${(theme.palette.error as any)[600]} 0%, ${theme.palette.error.main} 100%)`,
            color: theme.palette.custom.white,
            boxShadow: `${hexToRGBA((theme.palette.error as any)[100], 1)} 0px 2px 4px, 0px 1.5px 2px -1px hsla(0,0%,100%,.2) inset`,
            '&::before': {
              background: `radial-gradient(at bottom, ${hexToRGBA(
                theme.palette.error.main,
                0.1
              )},rgba(0,0,0,0))`,
            },
            '&::after': {
              background: hexToRGBA(theme.palette.error.main, 0.2),
            },
            '&:hover': {
              boxShadow: `${hexToRGBA((theme.palette.error as any)[300], 0.6)} 0px 4px 12px`,
            },
            '&:active': {
              boxShadow: `${hexToRGBA((theme.palette.error as any)[300], 0.8)} 0px 4px 20px`,
            },
          },
          '@keyframes shiny-btn1': {
            '0%': {
              transform: 'scale(0) rotate(45deg)',
              opacity: 0,
            },
            '80%': {
              transform: 'scale(0) rotate(45deg)',
              opacity: 0.5,
            },
            '81%': {
              transform: 'scale(4) rotate(45deg)',
              opacity: 1,
            },
            '100%': {
              transform: 'scale(50) rotate(45deg)',
              opacity: 0,
            },
          },
        };
      },

      outlinedPrimary: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor: 'transparent',
          color: theme.palette.brand[500],
          border: `1px solid ${theme.palette.brand[200]}`,
          '&:hover': {
            backgroundColor: theme.palette.brand[50],
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.brand[500]}`,
          },
          '&:active': {
            backgroundColor: theme.palette.brand[100],
            color: theme.palette.brand[700],
            border: `1px solid ${theme.palette.brand[600]}`,
          },
        };
      },

      outlinedError: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor: 'transparent',
          color: theme.palette.error.main,
          border: `1px solid ${(theme.palette.error as any)[200]}`,
          '&:hover': {
            backgroundColor: (theme.palette.error as any)[50],
            color: (theme.palette.error as any)[700],
            border: `1px solid ${theme.palette.error.main}`,
          },
          '&:active': {
            backgroundColor: (theme.palette.error as any)[100],
            color: (theme.palette.error as any)[700],
            border: `1px solid ${(theme.palette.error as any)[600]}`,
          },
        };
      },
    },
  },
};
