/**
 * Color utility functions for generating color palettes
 */

/**
 * Converts a hex color to HSL values
 * @param hex - Hex color string (e.g., "#FF0000")
 * @returns Object with h, s, l values
 */
function hexToHSL(hex: string): { h: number; s: number; l: number } {
  // Remove the hash if it exists
  hex = hex.replace('#', '');

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Find min and max RGB values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // Calculate lightness
  const l = (max + min) / 2;

  // Calculate saturation
  let s = 0;
  if (max !== min) {
    s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  }

  // Calculate hue
  let h = 0;
  if (max !== min) {
    if (max === r) {
      h = (g - b) / (max - min) + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / (max - min) + 2;
    } else if (max === b) {
      h = (r - g) / (max - min) + 4;
    }
    h /= 6;
  }

  // Convert to degrees
  h = h * 360;

  return { h, s, l };
}

/**
 * Converts HSL values to a hex color
 * @param h - Hue (0-360)
 * @param s - Saturation (0-1)
 * @param l - Lightness (0-1)
 * @returns Hex color string
 */
function hslToHex(h: number, s: number, l: number): string {
  // Ensure h is between 0 and 360
  h = ((h % 360) + 360) % 360;

  // Convert h to 0-1 range
  h = h / 360;

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  // Convert to hex
  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Converts a hex color to RGB values
 * @param hex - Hex color string (e.g., "#FF0000", "FF0000", "#F00", or "F00")
 * @returns Object with r, g, b values
 */
export function hexToRGB(hex: string): { r: number; g: number; b: number } {
  // Check if hex is defined and is a string
  if (!hex || typeof hex !== 'string') {
    console.warn(`Invalid hex color: ${hex}, using default color`);
    return { r: 255, g: 255, b: 255 }; // Default to white
  }

  // Remove the hash if it exists
  hex = hex.replace('#', '');

  // Handle 3-digit hex codes
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  // Ensure hex is 6 characters long
  if (hex.length !== 6) {
    console.warn(`Invalid hex color: ${hex}, using default color`);
    return { r: 255, g: 255, b: 255 }; // Default to white
  }

  // Convert hex to RGB with validation
  const r = parseInt(hex.substring(0, 2), 16) || 255;
  const g = parseInt(hex.substring(2, 4), 16) || 255;
  const b = parseInt(hex.substring(4, 6), 16) || 255;

  // Validate that all values are numbers
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    console.warn(`Invalid hex color: ${hex}, using default color`);
    return { r: 255, g: 255, b: 255 }; // Default to white
  }

  return { r, g, b };
}

/**
 * Converts a hex color to rgba string with specified opacity
 * @param hex - Hex color string (e.g., "#FF0000", "FF0000", "#F00", or "F00")
 * @param opacity - Opacity value between 0 and 1
 * @returns RGBA string (e.g., "rgba(255, 0, 0, 0.5)")
 */
export function hexToRGBA(hex: string, opacity: number): string {
  // Handle undefined or null inputs
  if (!hex) {
    console.warn(`Invalid hex color: ${hex}, using default color`);
    return `rgba(255, 255, 255, ${opacity})`; // Default to white with specified opacity
  }

  // If input is already an RGBA string, return it as-is
  if (hex.startsWith('rgba(')) {
    return hex;
  }

  // If input is an RGB string, convert to RGBA
  if (hex.startsWith('rgb(')) {
    return hex.replace('rgb(', 'rgba(').replace(')', `, ${opacity})`);
  }

  // Handle hex values
  const rgb = hexToRGB(hex);
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
}

/**
 * Generates a palette of colors based on a single input color
 * @param baseColor - The base color to generate the palette from (hex format)
 * @param count - Number of colors to generate (including the base color)
 * @param hueRotationRange - Maximum hue rotation in degrees (default: 30)
 * @returns Array of hex colors
 */
export function generateColorPalette(
  baseColor: string,
  count: number,
  hueRotationRange: number = 50
): string[] {
  // Ensure the base color is in hex format
  if (!baseColor.startsWith('#')) {
    baseColor = '#' + baseColor;
  }

  // Convert base color to HSL
  const { h, s, l } = hexToHSL(baseColor);

  // Generate colors
  const colors: string[] = [baseColor];

  // Calculate how many additional colors we need
  const additionalColors = count - 1;

  // Calculate the step size for hue rotation
  const stepSize = hueRotationRange / (additionalColors / 2);

  // Generate colors with hue rotation
  for (let i = 0; i < additionalColors; i++) {
    // Alternate between positive and negative rotation
    const rotation =
      i % 2 === 0 ? stepSize * (Math.floor(i / 2) + 1) : -stepSize * (Math.floor(i / 2) + 1);

    // Calculate new hue
    const newHue = h + rotation;

    // Convert back to hex
    const newColor = hslToHex(newHue, s, l);

    colors.push(newColor);
  }

  return colors;
}

/**
 * Converts RGB values to hex color
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @returns Hex color string (e.g., "#FF0000")
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (value: number) => {
    const hex = Math.round(Math.max(0, Math.min(255, value))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Converts an RGB string to RGBA string with specified opacity
 * @param rgb - RGB string (e.g., "255, 0, 0" or "rgb(255, 0, 0)")
 * @param opacity - Opacity value between 0 and 1
 * @returns RGBA string (e.g., "rgba(255, 0, 0, 0.5)")
 */
export function rgbToRGBA(rgb: string | undefined | null, opacity: number): string {
  // Handle undefined, null, or empty string
  if (!rgb || typeof rgb !== 'string') {
    console.warn(`Invalid RGB color: ${rgb}, using default transparent color`);
    return `rgba(0, 0, 0, ${opacity})`;
  }

  // If input is already an RGBA string, return it as-is
  if (rgb.startsWith('rgba(')) {
    return rgb;
  }

  // Handle both "rgb(255, 0, 0)" and "255, 0, 0" formats
  const rgbValues = rgb
    .replace(/rgb\(|\)/g, '')
    .split(',')
    .map((val) => val.trim());

  // Validate that we have exactly 3 values
  if (rgbValues.length !== 3) {
    console.warn(`Invalid RGB format: ${rgb}, using default transparent color`);
    return `rgba(0, 0, 0, ${opacity})`;
  }

  return `rgba(${rgbValues.join(', ')}, ${opacity})`;
}

/**
 * Converts RGB values to HSL
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @returns Object with h, s, l values
 */
function rgbToHSL(r: number, g: number, b: number): { h: number; s: number; l: number } {
  // Convert RGB to 0-1 range
  r = r / 255;
  g = g / 255;
  b = b / 255;

  // Find min and max RGB values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // Calculate lightness
  const l = (max + min) / 2;

  // Calculate saturation
  let s = 0;
  if (max !== min) {
    s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  }

  // Calculate hue
  let h = 0;
  if (max !== min) {
    if (max === r) {
      h = (g - b) / (max - min) + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / (max - min) + 2;
    } else if (max === b) {
      h = (r - g) / (max - min) + 4;
    }
    h /= 6;
  }

  // Convert to degrees
  h = h * 360;

  return { h, s, l };
}

/**
 * Converts HSL values to RGB
 * @param h - Hue (0-360)
 * @param s - Saturation (0-1)
 * @param l - Lightness (0-1)
 * @returns Object with r, g, b values (0-255)
 */
function hslToRGB(h: number, s: number, l: number): { r: number; g: number; b: number } {
  // Ensure h is between 0 and 360
  h = ((h % 360) + 360) % 360;

  // Convert h to 0-1 range
  h = h / 360;

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  // Convert to 0-255 range
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

/**
 * Desaturates an RGB color by 30% while retaining the same hue
 * @param rgb - RGB string (e.g., "255, 0, 0" or "rgb(255, 0, 0)")
 * @returns Desaturated RGB string in "r, g, b" format
 */
export function desaturateRGB(rgb: string): string {
  // Parse RGB values from string
  const rgbValues = rgb
    .replace(/rgb\(|\)/g, '')
    .split(',')
    .map((val) => parseInt(val.trim(), 10));

  if (rgbValues.length !== 3 || rgbValues.some((val) => isNaN(val))) {
    console.warn(`Invalid RGB color: ${rgb}, returning original color`);
    return rgb;
  }

  const [r, g, b] = rgbValues;

  // Convert to HSL
  const { h, s, l } = rgbToHSL(r, g, b);

  // Reduce saturation by 30%
  const newSaturation = Math.max(0, s * 0.5);

  // Convert back to RGB
  const desaturatedRGB = hslToRGB(h, newSaturation, l);

  return `${desaturatedRGB.r}, ${desaturatedRGB.g}, ${desaturatedRGB.b}`;
}

/**
 * Adjusts the lightness of an RGB color
 * @param rgb - RGB string (e.g., "255, 0, 0" or "rgb(255, 0, 0)")
 * @param factor - Lightness factor between 0 and 1 (0 = black, 0.5 = original, 1 = white)
 * @returns Adjusted RGB string in "r, g, b" format
 */
export function adjustLightRGB(rgb: string, factor: number = 0.5): string {
  // Parse RGB values from string
  const rgbValues = rgb
    .replace(/rgb\(|\)/g, '')
    .split(',')
    .map((val) => parseInt(val.trim(), 10));

  if (rgbValues.length !== 3 || rgbValues.some((val) => isNaN(val))) {
    console.warn(`Invalid RGB color: ${rgb}, returning original color`);
    return rgb;
  }

  const [r, g, b] = rgbValues;

  // Clamp factor between 0 and 1
  const clampedFactor = Math.max(0, Math.min(1, factor));

  let adjustedR: number;
  let adjustedG: number;
  let adjustedB: number;

  if (clampedFactor < 0.5) {
    // Darken: interpolate from black (0) to original color
    const t = clampedFactor * 2; // Map 0-0.5 to 0-1
    adjustedR = Math.round(r * t);
    adjustedG = Math.round(g * t);
    adjustedB = Math.round(b * t);
  } else {
    // Lighten: interpolate from original color to white (255)
    const t = (clampedFactor - 0.5) * 2; // Map 0.5-1 to 0-1
    adjustedR = Math.round(r + (255 - r) * t);
    adjustedG = Math.round(g + (255 - g) * t);
    adjustedB = Math.round(b + (255 - b) * t);
  }

  return `${adjustedR}, ${adjustedG}, ${adjustedB}`;
}

/**
 * Darkens an RGB color by a specified amount
 * @param rgb - RGB string (e.g., "255, 0, 0" or "rgb(255, 0, 0)")
 * @param amount - Amount to darken (0 = no change, 1 = black)
 * @returns Darkened RGB string in "r, g, b" format
 */
export function darkenRGB(rgb: string, amount: number = 0.3): string {
  // Convert amount to lightness factor (darken by 30% means factor = 0.5 - 0.3*0.5 = 0.35)
  const factor = 0.5 * (1 - amount);
  return adjustLightRGB(rgb, factor);
}

/**
 * Lightens an RGB color by a specified amount
 * @param rgb - RGB string (e.g., "255, 0, 0" or "rgb(255, 0, 0)")
 * @param amount - Amount to lighten (0 = no change, 1 = white)
 * @returns Lightened RGB string in "r, g, b" format
 */
export function lightenRGB(rgb: string, amount: number = 0.3): string {
  // Convert amount to lightness factor (lighten by 30% means factor = 0.5 + 0.3*0.5 = 0.65)
  const factor = 0.5 + 0.5 * amount;
  return adjustLightRGB(rgb, factor);
}

/**
 * Desaturates a hex color by reducing saturation
 * @param hex - Hex color string (e.g., "#FF0000", "FF0000", "#F00", or "F00")
 * @returns Desaturated hex color string
 */
export function desaturateHex(hex: string): string {
  // Convert hex to HSL
  const { h, s, l } = hexToHSL(hex);

  // Reduce saturation by 50%
  const newSaturation = Math.max(0, s * 0.5);

  // Convert back to hex
  return hslToHex(h, newSaturation, l);
}

/**
 * Converts hex color to RGB string format (for compatibility with existing functions)
 * @param hex - Hex color string (e.g., "#FF0000", "FF0000", "#F00", or "F00")
 * @returns RGB string in "r, g, b" format
 */
export function hexToRGBString(hex: string): string {
  const { r, g, b } = hexToRGB(hex);
  return `${r}, ${g}, ${b}`;
}

/**
 * Generates a random vibrant color with guaranteed hue (not grayscale)
 * @param seed - Optional seed for consistent color generation based on index/ID (string or number)
 * @returns RGB string in "r, g, b" format
 */
export function generateRandomVibrantColor(seed?: string | number): string {
  let numericSeed: number | undefined = undefined;
  if (typeof seed === 'string') {
    // Simple deterministic string hash (FNV-1a variant)
    let hash = 2166136261;
    for (let i = 0; i < seed.length; i++) {
      hash ^= seed.charCodeAt(i);
      hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    }
    numericSeed = Math.abs(hash) % 100000;
  } else if (typeof seed === 'number') {
    numericSeed = seed;
  }

  let hue: number;
  let saturation: number;
  let lightness: number;

  if (numericSeed !== undefined) {
    // Use golden angle for optimal hue distribution
    const goldenAngle = 137.508;
    hue = (numericSeed * goldenAngle) % 360;

    // Vary saturation and lightness, but keep them vibrant
    // Use two different primes for variation
    const satVar = ((numericSeed * 31) % 100) / 100; // 0-0.99
    const lightVar = ((numericSeed * 47) % 100) / 100; // 0-0.99

    // Saturation: 0.6 - 0.95 (never gray)
    saturation = 0.6 + satVar * 0.35;
    // Lightness: 0.42 - 0.62 (pleasant, not too dark/light)
    lightness = 0.42 + lightVar * 0.2;
  } else {
    hue = Math.floor(Math.random() * 360);
    saturation = 0.7 + Math.random() * 0.25;
    lightness = 0.45 + Math.random() * 0.15;
  }

  const rgb = hslToRGB(hue, saturation, lightness);
  return `${rgb.r}, ${rgb.g}, ${rgb.b}`;
}

/**
 * Generates a set of distinct vibrant colors
 * @param count - Number of colors to generate
 * @param startSeed - Starting seed for consistent generation
 * @returns Array of RGB strings in "r, g, b" format
 */
export function generateVibrantColorSet(count: number, startSeed: number = 0): string[] {
  const colors: string[] = [];
  const goldenRatio = 0.618033988749;

  // Generate colors with better distribution using golden ratio
  for (let i = 0; i < count; i++) {
    // Use golden ratio for optimal hue distribution
    const hue = (i * goldenRatio * 360 + startSeed * 137) % 360; // 137° is golden angle

    // Use index-based variation for saturation and lightness
    const indexVariation1 = ((i + startSeed) * 41) % 100; // Prime for saturation
    const indexVariation2 = ((i + startSeed) * 67) % 100; // Prime for lightness

    // Vary saturation and lightness for visual interest
    const saturation = 0.7 + (indexVariation1 / 100) * 0.25; // 70-95%
    const lightness = 0.4 + (indexVariation2 / 100) * 0.3; // 40-70%

    const rgb = hslToRGB(hue, saturation, lightness);
    colors.push(`${rgb.r}, ${rgb.g}, ${rgb.b}`);
  }

  return colors;
}

/**
 * Generates a complementary color while maintaining the same saturation
 * @param hex - Hex color string (e.g., "#FF0000", "FF0000", "#F00", or "F00")
 * @returns Complementary hex color string
 */
export function getComplementaryColor(hex: string): string {
  // Convert hex to HSL
  const { h, s, l } = hexToHSL(hex);

  // Calculate complementary hue (opposite on the color wheel)
  const complementaryHue = (h + 180) % 360;

  // Convert back to hex with same saturation and lightness
  return hslToHex(complementaryHue, s, l);
}

/**
 * Rotates the hue of a color by a specified amount
 * Supports both hex colors (e.g., "#FF0000") and RGB strings (e.g., "255, 0, 0" or "rgb(255, 0, 0)")
 * Returns the same format as the input
 * @param color - Color string in hex or RGB format
 * @param amount - Amount to rotate hue in degrees
 * @returns Rotated color in the same format as input
 */
export function rotateHue(color: string, amount: number): string {
  if (!color || typeof color !== 'string') {
    console.warn(`Invalid color: ${color}, returning original color`);
    return color || '';
  }

  // Check if color is hex format
  const isHex = color.startsWith('#');

  let h: number;
  let s: number;
  let l: number;

  if (isHex) {
    // Handle hex color
    const hsl = hexToHSL(color);
    h = hsl.h;
    s = hsl.s;
    l = hsl.l;
  } else {
    // Handle RGB string (e.g., "255, 0, 0" or "rgb(255, 0, 0)")
    const rgbValues = color
      .replace(/rgb\(|\)/g, '')
      .split(',')
      .map((val) => parseInt(val.trim(), 10));

    if (rgbValues.length !== 3 || rgbValues.some((val) => isNaN(val))) {
      console.warn(`Invalid RGB color: ${color}, returning original color`);
      return color;
    }

    const [r, g, b] = rgbValues;
    const hsl = rgbToHSL(r, g, b);
    h = hsl.h;
    s = hsl.s;
    l = hsl.l;
  }

  // Rotate hue
  const newHue = (((h + amount) % 360) + 360) % 360; // Ensure positive value

  // Convert back to original format
  if (isHex) {
    return hslToHex(newHue, s, l);
  } else {
    const rgb = hslToRGB(newHue, s, l);
    return `${rgb.r}, ${rgb.g}, ${rgb.b}`;
  }
}

// Helper function to safely get theme colors
export const safeHexToRGBA = (color: string | undefined, opacity: number): string => {
  if (!color) {
    return `rgba(0, 0, 0, ${opacity})`; // Default to black with opacity
  }
  return hexToRGBA(color, opacity);
};
