// Centralized border radius values for consistent styling across components
export const borderRadius = {
  // Basic radius values
  none: 0,
  xs: 2, // Used for small elements, previously: borderRadius: 2
  sm: 4, // Default for cards and buttons, previously: borderRadius: 4
  md: 8, // Medium radius, previously: borderRadius: '8px'
  lg: 16, // Large radius for prominent elements, previously: borderRadius: 16
  xl: 24, // Extra large for special cases

  // Special cases
  circle: 2, // For circular elements like avatars, previously: borderRadius: '50%'

  // Component-specific radius (using theme.spacing patterns)
  tableContainer: 2, // For table containers, previously: theme.spacing(2)
  scrollbar: 8, // For scrollbar styling, previously: '8px'
  scrollbarThumb: 4, // For scrollbar thumb, previously: '4px'

  // Complex radius patterns
  bottomOnly: '0 0 4px 4px', // For dropdowns, previously: '0 0 4px 4px'

  // Function to get consistent spacing-based radius
  spacing: (multiplier: number) => multiplier * 8, // Follows theme.spacing pattern
} as const;

// Type for border radius values
export type BorderRadiusKey = keyof typeof borderRadius;

// Helper function to get borderRadius value - can be used in components
export const getBorderRadius = (key: BorderRadiusKey | keyof typeof borderRadius) => {
  return borderRadius[key];
};
