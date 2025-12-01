import React, { useRef, useEffect, useState } from 'react';
import { Dialog, DialogProps } from '../../../material/Dialog';
import { useThemeContext } from '../../../../../theme/theme';

export type DialogStatus = 'default' | 'warning' | 'error';

interface EnhancedDialogProps extends DialogProps {
  children: React.ReactNode;
  enableAnimations?: boolean;
  /**
   * Dialog status that affects the background gradient colors:
   * - 'default': Uses brand and accent colors
   * - 'warning': Uses warning theme colors
   * - 'error': Uses error theme colors
   */
  status?: DialogStatus;
}

export function EnhancedDialog({
  children,
  enableAnimations = true,
  status = 'default',
  sx,
  ...dialogProps
}: EnhancedDialogProps) {
  const { theme } = useThemeContext();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  const getGradientColors = (status: DialogStatus) => {
    switch (status) {
      case 'warning':
        return `linear-gradient(45deg, ${(theme.palette.warning as any)[300]}, ${(theme.palette.warning as any)[200]})`;
      case 'error':
        return `linear-gradient(45deg, ${(theme.palette.error as any)[300]}, ${(theme.palette.error as any)[200]})`;
      default:
        return `linear-gradient(45deg, ${theme.palette.brand[300]}, ${theme.palette.accent[300]})`;
    }
  };

  useEffect(() => {
    if (dialogProps.open && dialogRef.current && enableAnimations) {
      const updateDimensions = () => {
        const paper = dialogRef.current?.querySelector('.MuiDialog-paper') as HTMLElement;
        if (paper) {
          const rect = paper.getBoundingClientRect();
          setContainerDimensions({
            width: rect.width,
            height: rect.height,
          });
        }
      };

      // Update dimensions after a short delay to ensure modal is fully rendered
      const timer = setTimeout(updateDimensions, 100);

      // Also update on window resize
      window.addEventListener('resize', updateDimensions);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, [dialogProps.open, enableAnimations]);

  const enhancedSx = enableAnimations
    ? {
        '& .MuiDialog-paper': {
          borderRadius: 4,
          px: 2,
          py: 2,
          ...(sx?.['& .MuiDialog-paper'] || {}),
        },
        '&:after': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: containerDimensions.width > 0 ? `${containerDimensions.width}px` : '0',
          height:
            containerDimensions.height > 0 ? `${containerDimensions.height}px` : '0',
          background: getGradientColors(status),
          content: '""',
          zIndex: '-1',
          filter: 'blur(100px) hue-rotate(0deg)',
          borderRadius: '40%',
          opacity: dialogProps.open ? 1 : 0,
          visibility: dialogProps.open ? 'visible' : 'hidden',
          transition: 'opacity 0.2s ease-out, visibility 0.2s ease-out',
          animation: dialogProps.open
            ? 'gradientRotation 10s linear infinite, gradientScale 5s ease-in-out infinite, gradientTranslate 42s ease-in-out infinite'
            : 'none',
        },

        '@keyframes gradientRotation': {
          '0%': {
            filter: 'blur(80px) hue-rotate(0deg)',
          },
          '25%': {
            filter: 'blur(80px) hue-rotate(100deg)',
          },
          '50%': {
            filter: 'blur(80px) hue-rotate(0deg)',
          },
          '75%': {
            filter: 'blur(80px) hue-rotate(-100deg)',
          },
          '100%': {
            filter: 'blur(80px) hue-rotate(0deg)',
          },
        },
        '@keyframes gradientScale': {
          '0%': {
            transform: 'translate(-50%, -50%) scaleX(1) scaleY(1)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scaleX(1.2) scaleY(1.2)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scaleX(1) scaleY(1)',
          },
        },
        '@keyframes gradientTranslate': {
          '0%': {
            transform: 'translate(-50%, -50%) scaleX(1) scaleY(1)',
          },
          '12.5%': {
            transform: 'translate(-45%, -60%) scaleX(1) scaleY(1)',
          },
          '25%': {
            transform: 'translate(-55%, -40%) scaleX(1) scaleY(1)',
          },
          '37.5%': {
            transform: 'translate(-40%, -65%) scaleX(1) scaleY(1)',
          },
          '50%': {
            transform: 'translate(-65%, -45%) scaleX(1) scaleY(1)',
          },
          '62.5%': {
            transform: 'translate(-42%, -58%) scaleX(1) scaleY(1)',
          },
          '75%': {
            transform: 'translate(-58%, -62%) scaleX(1) scaleY(1)',
          },
          '87.5%': {
            transform: 'translate(-48%, -35%) scaleX(1) scaleY(1)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scaleX(1) scaleY(1)',
          },
        },
        ...sx,
      }
    : {
        '& .MuiDialog-paper': {
          borderRadius: '20px',
          ...(sx?.['& .MuiDialog-paper'] || {}),
        },
        ...sx,
      };

  return (
    <Dialog ref={dialogRef} sx={enhancedSx} {...dialogProps}>
      {children}
    </Dialog>
  );
}
