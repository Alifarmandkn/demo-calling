export type CustomPalette = {
  brand: Record<number, string>;
  accent: Record<number, string>;
  highlight: Record<number, string>;
  neutral: Record<number, string>;
  megaBackground: Record<number, string>;
  megaText: Record<number, string>;
  success: Record<number, string>;
  warning: Record<number, string>;
  error: Record<number, string>;
  custom: {
    default: string;
    contrast: string;
    white: string;
    black: string;
    glassEdge: string;
    glassEdgeTwo: string;
    glass: string;
    glassSurfaceTop: string;
    glassSurfaceBottom: string;
    glassSubtleEdge: string;
    megablue: string;
    genderFemale: string;
    genderMale: string;
  };
};

export const lightPalette: CustomPalette = {
  brand: {
    50: '#F2FCF6',
    100: '#D4F6E0',
    200: '#92E6B2',
    300: '#40D686',
    400: '#38BB72',
    500: '#369D5F',
    600: '#327F4D',
    700: '#2E6B41',
    800: '#285534',
    900: '#213E27',
    950: '#1D3622',
  },
  neutral: {
    50: '#F9FAFB',
    100: '#EDEEEF',
    200: '#D4D5D6',
    300: '#BCBDBE',
    400: '#A4A5A5',
    500: '#8A8B8B',
    600: '#717171',
    800: '#4C4C4D',
    900: '#383838',
    950: '#303030',
  },
  accent: {
    50: '#F1FCFA',
    100: '#D0F5EE',
    200: '#83E6D6',
    300: '#60CFBE',
    400: '#56B4A6',
    500: '#4A988C',
    600: '#3F7B72',
    700: '#366860',
    800: '#2D534D',
    900: '#233D38',
    950: '#1F3431',
  },
  highlight: {
    50: '#FDF8FF',
    100: '#F8E9FF',
    200: '#ECC8FE',
    300: '#DFA8FC',
    400: '#D087FA',
    500: '#BD5FF8',
    600: '#9C4AD0',
    700: '#8340AD',
    800: '#683588',
    900: '#4C2962',
    950: '#412453',
  },
  success: {
    50: '#F7FFF2',
    100: '#E0FFE4',
    200: '#D0FEC4',
    300: '#A7F8A3',
    400: '#74E873',
    500: '#10D54A',
    600: '#07B82E',
    700: '#109E44',
    800: '#006B26',
    900: '#005A28',
    950: '#013213',
  },
  warning: {
    50: '#FCFCE9',
    100: '#FFF4C4',
    200: '#FFF38F',
    300: '#FFF5A3',
    400: '#FFD837',
    500: '#FBC016',
    600: '#AC9130',
    700: '#AC7424',
    800: '#7F5414',
    900: '#6E4B0D',
    950: '#3F1409',
  },
  error: {
    50: '#FDF3F3',
    100: '#FCE4E4',
    200: '#FBCDDD',
    300: '#F7AAAA',
    400: '#F07979',
    500: '#E54E4E',
    600: '#C20000',
    700: '#AC2624',
    800: '#7F2222',
    900: '#792323',
    950: '#420D0D',
  },
  megaBackground: {
    950: '#101016',
    900: '#1A2545',
    800: '#225B80',
    700: '#203B71',
    600: '#1780B6',
  },
  megaText: {
    50: '#BFFFEF',
    100: '#E6FBF8',
    200: '#C7F0EE',
    300: '#96E3DD',
    400: '#6ED6CE',
    500: '#3ABEC2',
    600: '#39A099',
  },
  custom: {
    default: '#000000',
    contrast: '#B0B0B0',
    white: '#FFFFFF',
    black: '#191919',
    glassEdge: '#FFFFFF',
    glassEdgeTwo: '#D4D5D6',
    glass: '#FFFFFF',
    glassSurfaceTop: '#FFFFFF',
    glassSurfaceBottom: '#FFFFFF',
    glassSubtleEdge: '#FFFFFF',
    megablue: '#1b335f',
    genderFemale: '#C000C5',
    genderMale: '#0511F2',
  },
};
