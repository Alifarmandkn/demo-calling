import { useCallback, useEffect, useRef, useMemo, memo } from 'react';
import { useTheme } from '@mui/material/styles';
import { generateColorPalette, hexToRGB, getComplementaryColor } from '../../../../utils/colorUtils';

// Configuration variables for bubble appearance and behavior
const BUBBLE_CONFIG = {
  // Size configuration
  minSizeFactor: 0.8, // Minimum size as a factor of the base size (0.5 = half size)
  maxSizeFactor: 1.4, // Maximum size as a factor of the base size (1.0 = full size)

  // Movement configuration
  minSpeed: -0.66, // Minimum movement speed
  maxSpeed: 0.66, // Maximum movement speed

  // Opacity configuration
  opacity: '99', // 60% opacity (99 in hex)

  // Base size configuration (relative to canvas)
  baseSizeMinFactor: 1 / 5, // Minimum base size as a fraction of the smaller canvas dimension
  baseSizeMaxFactor: 1 / 4, // Maximum base size as a fraction of the smaller canvas dimension
};

/**
 * Clamps a number between a minimum and maximum value
 *
 * @param {number} value - Value to be clamped
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Generates a random number between min and max, rounded to 2 decimal places
 *
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number between min and max
 */
const randomNumber = (min: number, max: number): number => {
  return +Number.parseFloat(`${Math.random() * (max - min) + min}`).toFixed(2);
};

/**
 * Gets the radius of the bubble based on the canvas size
 *
 * @param {number} canvasWidth - Width of the canvas in pixels
 * @param {number} canvasHeight - Height of the canvas in pixels
 * @returns {number} Appropriate radius value for the bubble
 */
const getRadius = (canvasWidth: number, canvasHeight: number): number => {
  const minCanvasSize = Math.min(canvasWidth, canvasHeight);
  const min = minCanvasSize * BUBBLE_CONFIG.baseSizeMinFactor;
  const max = minCanvasSize * BUBBLE_CONFIG.baseSizeMaxFactor;

  return clamp(randomNumber(min, max), min, max);
};

/**
 * Creates a bubble with random position and movement properties
 *
 * @param {string} color - Color string for the bubble
 * @param {HTMLCanvasElement} canvas - Canvas element to position the bubble within
 * @returns Bubble object with all required properties
 */
const createBubble = (color: string, canvas: HTMLCanvasElement) => {
  const { height: canvasHeight, width: canvasWidth } = canvas.getBoundingClientRect();

  // Store relative size factor instead of absolute radius
  const sizeFactor = randomNumber(BUBBLE_CONFIG.minSizeFactor, BUBBLE_CONFIG.maxSizeFactor);

  // Calculate initial radius and store it
  const baseRadius = getRadius(canvasWidth, canvasHeight);
  const radius = baseRadius * sizeFactor;

  // Generate random percentage positions (0 to 1)
  const percentageX = Math.random();
  const percentageY = Math.random();

  return {
    color,
    // Store movement as percentage of canvas size per frame (small percentage for smooth movement)
    dx: randomNumber(BUBBLE_CONFIG.minSpeed, BUBBLE_CONFIG.maxSpeed) / 1000,
    dy: randomNumber(BUBBLE_CONFIG.minSpeed, BUBBLE_CONFIG.maxSpeed) / 1000,
    // Store both size factor and current radius
    sizeFactor,
    radius,
    percentageX,
    percentageY,
    // Calculate initial absolute positions from percentages
    x: percentageX * canvasWidth,
    y: percentageY * canvasHeight,
  };
};

interface FloatingBubblesProps {
  static?: boolean;
}

/**
 * FloatingBubbles component that renders animated colored bubbles on a canvas
 */
const FloatingBubblesComponent = ({ static: isStatic = false }: FloatingBubblesProps) => {
  const theme = useTheme();
  const animationFrame = useRef<number>();
  const bubblesRef = useRef<ReturnType<typeof createBubble>[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const cachedGradientsRef = useRef<Map<string, CanvasGradient>>(new Map());
  const canvasDimensionsRef = useRef({ width: 0, height: 0 });

  // Memoize bubble colors to prevent recalculation
  const bubbleColors = useMemo(() => {
    const brandColor = theme.palette.brand[200];
    const complementaryColor = getComplementaryColor(brandColor);
    return generateColorPalette(complementaryColor, 8);
  }, [theme.palette.brand]);

  // Memoize background color conversion
  const backgroundRGB = useMemo(() => {
    const bgColor = theme.palette.background.default;
    return hexToRGB(bgColor);
  }, [theme.palette.background.default]);

  // Memoize opacity decimal conversion
  const opacityDecimal = useMemo(() => {
    return parseInt(BUBBLE_CONFIG.opacity, 16) / 255;
  }, []);

  // Memoize converted bubble colors
  const processedBubbleColors = useMemo(() => {
    return bubbleColors.map((color) => {
      if (color.startsWith('rgb(')) {
        const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (rgbMatch) {
          const r = rgbMatch[1];
          const g = rgbMatch[2];
          const b = rgbMatch[3];
          return `rgba(${r}, ${g}, ${b}, ${opacityDecimal})`;
        }
      }
      return color;
    });
  }, [bubbleColors, opacityDecimal]);

  // Memoize theme-dependent styles
  const containerStyle = useMemo(
    () => ({
      alignItems: 'center' as const,
      backgroundColor: theme.palette.neutral?.[300] || theme.palette.background.default,
      display: 'flex' as const,
      height: '100%',
      justifyContent: 'center' as const,
      position: 'fixed' as const,
      width: '100%',
      zIndex: '0',
      opacity: theme.palette.mode === 'dark' ? 0.5 : 0.8,
    }),
    [theme.palette.neutral, theme.palette.mode, theme.palette.background.default]
  );

  // Memoized function to create or get cached gradient
  const getOrCreateGradient = useCallback(
    (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      radius: number,
      color: string,
      bubbleIndex: number
    ): CanvasGradient | null => {
      // Validate that all values are finite numbers
      if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(radius) || radius <= 0) {
        return null;
      }

      const key = `${bubbleIndex}-${Math.round(x)}-${Math.round(y)}-${Math.round(radius)}`;

      let gradient = cachedGradientsRef.current.get(key);
      if (!gradient) {
        gradient = context.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(
          1,
          `rgba(${backgroundRGB.r}, ${backgroundRGB.g}, ${backgroundRGB.b}, 0)`
        );
        cachedGradientsRef.current.set(key, gradient);

        // Limit cache size to prevent memory leaks
        if (cachedGradientsRef.current.size > 100) {
          const firstKey = cachedGradientsRef.current.keys().next().value;
          if (firstKey) {
            cachedGradientsRef.current.delete(firstKey);
          }
        }
      }

      return gradient;
    },
    [backgroundRGB]
  );

  // Memoized resize handler
  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const entry = entries[0];
    const { width, height } = entry.contentRect;

    // Validate dimensions before updating
    if (width <= 0 || height <= 0 || !Number.isFinite(width) || !Number.isFinite(height)) {
      return;
    }

    // Only update if dimensions actually changed
    if (
      canvasDimensionsRef.current.width !== width ||
      canvasDimensionsRef.current.height !== height
    ) {
      canvasDimensionsRef.current = { width, height };
      canvas.width = width;
      canvas.height = height;

      // Clear gradient cache when canvas resizes
      cachedGradientsRef.current.clear();

      // Update bubble radii when canvas resizes
      bubblesRef.current.forEach((bubble) => {
        const baseRadius = getRadius(width, height);
        bubble.radius = baseRadius * bubble.sizeFactor;
      });
    }
  }, []);

  /**
   * Draws static bubbles on the canvas
   */
  const drawStaticBubbles = useCallback(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Initialize canvas size
    const { height, width } = canvas.getBoundingClientRect();
    
    // Validate canvas dimensions
    if (width <= 0 || height <= 0 || !Number.isFinite(width) || !Number.isFinite(height)) {
      return;
    }
    
    canvas.width = width;
    canvas.height = height;
    canvasDimensionsRef.current = { width, height };

    // Create bubbles with processed colors
    bubblesRef.current = processedBubbleColors.map((color) => createBubble(color, canvas));

    // Validate canvas dimensions before drawing
    if (canvas.width <= 0 || canvas.height <= 0 || !Number.isFinite(canvas.width) || !Number.isFinite(canvas.height)) {
      return;
    }

    // Draw static bubbles
    context.clearRect(0, 0, canvas.width, canvas.height);
    bubblesRef.current.forEach((bubble, index) => {
      // Calculate absolute positions from percentages and current canvas size
      const x = bubble.percentageX * canvas.width;
      const y = bubble.percentageY * canvas.height;

      // Use stored radius
      const radius = bubble.radius * 2;

      // Skip if values are invalid
      if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(radius) || radius <= 0) {
        return;
      }

      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);

      const gradient = getOrCreateGradient(
        context,
        x,
        y,
        radius,
        processedBubbleColors[index],
        index
      );
      
      if (gradient) {
        context.fillStyle = gradient;
        context.fill();
      }
    });
  }, [processedBubbleColors, getOrCreateGradient]);

  /**
   * Updates canvas dimensions and draws bubble animations
   */
  const handleDraw = useCallback(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Initialize canvas size
    const { height, width } = canvas.getBoundingClientRect();
    
    // Validate canvas dimensions
    if (width <= 0 || height <= 0 || !Number.isFinite(width) || !Number.isFinite(height)) {
      return;
    }
    
    canvas.width = width;
    canvas.height = height;
    canvasDimensionsRef.current = { width, height };

    // Create bubbles once with processed colors
    bubblesRef.current = processedBubbleColors.map((color) => createBubble(color, canvas));

    // Animation timing variables
    const fps = 60;
    const fpsInterval = 1000 / fps;

    let now: number;
    let then = Date.now();
    let elapsed: number;

    /**
     * Optimized animation function
     */
    function animate() {
      animationFrame.current = requestAnimationFrame(animate);

      now = Date.now();
      elapsed = now - then;

      // Control frame rate
      if (fpsInterval === 0 || elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        // Ensure context is still available
        if (!context) return;

        // Use cached dimensions instead of getBoundingClientRect
        const canvasWidth = canvasDimensionsRef.current.width;
        const canvasHeight = canvasDimensionsRef.current.height;

        // Validate canvas dimensions before drawing
        if (canvasWidth <= 0 || canvasHeight <= 0 || !Number.isFinite(canvasWidth) || !Number.isFinite(canvasHeight)) {
          return;
        }

        context.clearRect(0, 0, canvasWidth, canvasHeight);

        bubblesRef.current.forEach((bubble, index) => {
          // Update percentage positions first
          bubble.percentageX += bubble.dx;
          bubble.percentageY += bubble.dy;

          // Calculate absolute positions from current percentages and canvas size
          bubble.x = bubble.percentageX * canvasWidth;
          bubble.y = bubble.percentageY * canvasHeight;

          // Check boundaries using absolute positions including bubble radius (DVD logo style bouncing)
          if (bubble.x - bubble.radius <= 0 || bubble.x + bubble.radius >= canvasWidth) {
            bubble.dx = -bubble.dx;
            // Keep bubble within bounds
            if (bubble.x - bubble.radius <= 0) {
              bubble.percentageX = bubble.radius / canvasWidth;
            } else {
              bubble.percentageX = (canvasWidth - bubble.radius) / canvasWidth;
            }
            bubble.x = bubble.percentageX * canvasWidth;
          }

          if (bubble.y - bubble.radius <= 0 || bubble.y + bubble.radius >= canvasHeight) {
            bubble.dy = -bubble.dy;
            // Keep bubble within bounds
            if (bubble.y - bubble.radius <= 0) {
              bubble.percentageY = bubble.radius / canvasHeight;
            } else {
              bubble.percentageY = (canvasHeight - bubble.radius) / canvasHeight;
            }
            bubble.y = bubble.percentageY * canvasHeight;
          }

          // Use stored radius (only updated when canvas resizes)
          const radius = bubble.radius * 2;

          // Skip if values are invalid
          if (!Number.isFinite(bubble.x) || !Number.isFinite(bubble.y) || !Number.isFinite(radius) || radius <= 0) {
            return;
          }

          context.beginPath();
          context.arc(bubble.x, bubble.y, radius, 0, 2 * Math.PI);

          const gradient = getOrCreateGradient(
            context,
            bubble.x,
            bubble.y,
            radius,
            processedBubbleColors[index],
            index
          );
          
          if (gradient) {
            context.fillStyle = gradient;
            context.fill();
          }
        });
      }
    }

    // Start animation
    animate();
  }, [processedBubbleColors, getOrCreateGradient]);

  // Initialize ResizeObserver
  useEffect(() => {
    if (!canvasRef.current) return;

    resizeObserverRef.current = new ResizeObserver(handleResize);
    resizeObserverRef.current.observe(canvasRef.current);

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [handleResize]);

  // Initialize on component mount
  useEffect(() => {
    if (isStatic) {
      drawStaticBubbles();
    } else {
      handleDraw();
    }

    // Cleanup animation on unmount
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      // Clear gradient cache on unmount
      cachedGradientsRef.current.clear();
    };
  }, [handleDraw, drawStaticBubbles, isStatic]);

  return (
    <div style={containerStyle}>
      <canvas
        ref={canvasRef}
        style={{
          height: '100%',
          inset: 0,
          width: '100%',
        }}
      />
    </div>
  );
};

// Memoized export to prevent unnecessary re-renders
export const FloatingBubbles = memo(FloatingBubblesComponent);
