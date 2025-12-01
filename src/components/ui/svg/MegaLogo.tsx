import { useThemeContext } from '../../../theme/theme';

interface MegaLogoProps {
  textColor?: string;
  barColor?: string;
  width?: string;
  height?: string;
  className?: string;
}

export function MegaLogo({
  width = '100%',
  height = '100%',
  className,
  textColor,
  barColor,
}: MegaLogoProps) {
  const { theme } = useThemeContext();

  // Use theme colors
  const blueColor = textColor || theme.palette.custom.megablue;
  const greenColor = barColor || theme.palette.brand[600];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1407 372"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M87.75 63H50.25V314H87.75V130.5L155.25 241H180.25L251.25 130.5V314H288.25V63H251.25L169.25 197.5L87.75 63Z"
        fill={blueColor}
      />
      <path d="M493.25 63H337.75V99.5H493.25V63Z" fill={blueColor} />
      <path d="M493.25 171H337.75V207.5H493.25V171Z" fill={blueColor} />
      <path d="M493.25 277H337.75V313.5H493.25V277Z" fill={blueColor} />
      <path
        d="M922.75 63L1022.25 314.5H977.25L953.75 252.003H850.75L826.25 314.5H787.25L883.75 63H922.75ZM864.75 214.706H939.75L902.25 106.849L864.75 214.706Z"
        fill={blueColor}
      />
      <path
        d="M623.587 66.452C670.183 55.9495 724.968 69.7945 752.801 102.546L726.75 128.51C710.083 108.898 668.066 94.9349 632.038 103.055C614.746 106.953 599.451 115.308 588.466 128.51C577.579 141.593 569.75 160.845 569.75 188.714C569.75 237.775 598.425 264.568 631.85 273.319C667.026 282.529 704.802 271.342 722.589 245.762C725.732 241.241 726.911 236.922 727.75 230.5V223.998L728.559 222.582C728.621 222.005 728.684 221.419 728.75 220.824C729.338 215.524 730.126 209.493 730.357 203.04C730.582 196.76 730.279 190.797 728.75 183.998L768.75 182.998C770.75 217 770.608 243.007 753.911 267.02C724.985 308.622 669.01 321.888 622.115 309.609C573.468 296.872 531.75 256.234 531.75 188.714C531.75 153.55 541.796 125.478 559.112 104.668C576.33 83.9757 599.566 71.8661 623.587 66.452Z"
        fill={blueColor}
      />
      <path d="M657.75 182.998L768.75 182.998L765.75 223.998H657.75V182.998Z" fill={blueColor} />
      <rect x="1095.75" y="148" width="27" height="69" rx="4" fill={greenColor} />
      <rect x="1329.75" y="141" width="27" height="76" rx="4" fill={greenColor} />
      <rect x="1142.75" y="85" width="27" height="208" rx="4" fill={greenColor} />
      <rect x="1235.75" y="127" width="27" height="209" rx="4" fill={greenColor} />
      <rect x="1282.75" y="78" width="27" height="222" rx="4" fill={greenColor} />
      <rect x="1190.75" y="36" width="27" height="216" rx="4" fill={greenColor} />
    </svg>
  );
}
