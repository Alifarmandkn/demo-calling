import { hexToRGBA } from '../utils/colorUtils';
import { useThemeContext } from './theme';
import { borderRadius } from './borderRadius';

export const megaPopover = {
  MuiPopover: {
    styleOverrides: {
      paper: () => {
        const { theme } = useThemeContext();
        return {
          backgroundColor: hexToRGBA(theme.palette.background.default, 0.5),
          //   backgroundColor: 'transparent',

          backdropFilter: 'blur(16px)',
          //   border: `1px solid ${hexToRGBA(theme.palette.custom.contrast, 0.2)}`,
          borderRadius: borderRadius.md,
          boxShadow: theme.shadows[12],
          minWidth: 250,
          // Add subtle glass effect
          backgroundImage: `linear-gradient(135deg,
              ${hexToRGBA(theme.palette.custom.white, 0.1)} 0%,
              ${hexToRGBA(theme.palette.custom.white, 0.05)} 100%)`,
          // Ensure text is readable
          color: theme.palette.text.primary,
        };
      },
      root: () => {
        return {
          // Add subtle animation
          '& .MuiPopover-paper': {
            animation: 'popoverEnter 0.2s ease-out',
            transformOrigin: 'top right',
          },
          '& .MuiBackdrop-invisible': {
            backdropFilter: 'blur(8px)',
          },
        };
      },
    },
  },
};

// Add keyframes for animation
const popoverKeyframes = `
  @keyframes popoverEnter {
    0% {
      opacity: 0;
      transform: scale(0.95) translateY(-8px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

// Inject the keyframes into the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = popoverKeyframes;
  document.head.appendChild(style);
}
