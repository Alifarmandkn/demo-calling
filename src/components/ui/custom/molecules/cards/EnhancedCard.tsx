import { ReactNode } from 'react';
import { Card as MuiCard, Box } from '@mui/material';
import { forwardRef } from 'react';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useThemeContext } from '../../../../../theme/theme';
import { borderRadius } from '../../../../../theme/borderRadius';
import {
  desaturateRGB,
  desaturateHex,
  hexToRGBA,
  hexToRGBString,
  rgbToRGBA,
  rotateHue,
} from '../../../../../utils/colorUtils';

export interface CardProps {
  children?: ReactNode;
  color?: string; // RGB color string (e.g., "255, 0, 0" or "rgb(255, 0, 0)") OR hex color string (e.g., "#FF0000")
  selected?: boolean;
  interactive?: boolean;
  [key: string]: any;
}

// Utility function to detect if a color is in hex format
const isHexColor = (color: string): boolean => {
  return color.startsWith('#');
};

// Utility function to desaturate a color (supports both RGB and hex)
const desaturateColor = (color: string): string => {
  if (isHexColor(color)) {
    return hexToRGBString(desaturateHex(color));
  }
  return desaturateRGB(color);
};

// Utility function to convert any color to RGBA (supports both RGB and hex)
const colorToRGBA = (color: string, opacity: number): string => {
  if (isHexColor(color)) {
    return hexToRGBA(color, opacity);
  }
  return rgbToRGBA(color, opacity);
};

export const EnhancedCard = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { theme: customTheme } = useThemeContext();
  const { xs, color, selected, interactive, ...otherProps } = props;
  const boxSize = 400;
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverBoxRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const boundingRectRef = useRef<DOMRect>();

  // Optimized mouse move handler using requestAnimationFrame
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!interactive || !hoverBoxRef.current) return;

      // Cancel previous animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Use requestAnimationFrame for smooth updates
      animationFrameRef.current = requestAnimationFrame(() => {
        if (!boundingRectRef.current) {
          // Cache bounding rect on first use
          boundingRectRef.current = (event.currentTarget as HTMLElement).getBoundingClientRect();
        }

        const rect = boundingRectRef.current;
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Use CSS custom properties for better performance
        hoverBoxRef.current?.style.setProperty('--mouse-x', `${x - boxSize / 2}px`);
        hoverBoxRef.current?.style.setProperty('--mouse-y', `${y - boxSize / 2}px`);
      });
    },
    [interactive, boxSize]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    // Recalculate bounding rect when mouse enters
    if (cardRef.current) {
      boundingRectRef.current = cardRef.current.getBoundingClientRect();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    // Clear cached bounding rect
    boundingRectRef.current = undefined;
    // Cancel any pending animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        height: 'auto',
        position: 'relative',
        borderRadius: borderRadius.xs,
        background: hexToRGBA(customTheme.palette.background.default, 0.5),
        overflow: 'hidden',
        border: `1px solid ${color ? rgbToRGBA(desaturateColor(color), 1) : customTheme.palette.custom.glassEdge}`,
        WebkitBackgroundClip: 'padding-box',
        backgroundClip: 'padding-box',
        transition: 'box-shadow 0.3s ease-in-out, background 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: interactive ? 'pointer' : 'default',
        boxShadow: selected
          ? `0 4px 16px 0 ${color ? rgbToRGBA(desaturateColor(color), 0.4) : 'rgba(0,0,0,0.2)'}`
          : 'none !important',
        ...xs,
        '& .MuiPaper-root': {
          margin: 0,
        },
      }}
    >
      <MuiCard
        ref={ref}
        {...otherProps}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: 'relative',
          height: '100%',
          backgroundColor: selected
            ? hexToRGBA(customTheme.palette.primary.main, 0.7)
            : 'transparent',
          backdropFilter: 'blur(10px)',
          borderRadius: borderRadius.xs,
          border: 'none',
          ...otherProps.sx,
        }}
      >
        {/* Simplified background overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(0deg, 
            ${hexToRGBA(customTheme.palette.background.default, 0)},
            ${hexToRGBA(customTheme.palette.secondary.main, 0.1)}
            ), radial-gradient(at bottom, ${
              color ? colorToRGBA(color, 0.2) : hexToRGBA(customTheme.palette.custom.contrast, 0.15)
            },rgba(0,0,0,0))`,
            mixBlendMode: 'overlay',
            pointerEvents: 'none',
            borderRadius: borderRadius.xs,
            zIndex: -1,
          }}
        />

        {/* Optimized hover effect */}
        {interactive && (
          <Box
            ref={hoverBoxRef}
            sx={{
              position: 'absolute',
              width: `${boxSize}px`,
              height: `${boxSize}px`,
              // Use CSS custom properties with fallback
              transform: `translate3d(var(--mouse-x, -${boxSize / 2}px), var(--mouse-y, -${boxSize / 2}px), 0)`,
              opacity: isHovered ? 0.6 : 0,
              // make this a radial gradient from the color to the customTheme.palette.primary.main
              // create a function that  rotates the hue of a color by a given amount

              background: color
                ? `radial-gradient(at center,  ${colorToRGBA(rotateHue(color, -35), 0.6)} 10%, ${colorToRGBA(color, 0.8)} 90%)`
                : hexToRGBA(customTheme.palette.primary.main, 0.6),
              pointerEvents: 'none',
              borderRadius: borderRadius.circle,
              filter: `blur(${boxSize / 4}px)`,
              zIndex: -1,
              transition: 'opacity 0.3s ease-in-out',
              willChange: 'transform, opacity',
              // Optimize for hardware acceleration
              backfaceVisibility: 'hidden',
              perspective: 1000,
            }}
          />
        )}

        {otherProps.children}
      </MuiCard>
    </Box>
  );
});

EnhancedCard.displayName = 'EnhancedCard';

// Also export as Card for backward compatibility
export const Card = EnhancedCard;
