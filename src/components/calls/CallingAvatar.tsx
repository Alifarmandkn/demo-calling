import { Box, Avatar } from '@mui/material';
import { Person } from '@mui/icons-material';
import { useThemeContext } from '../../theme/theme';

interface CallingAvatarProps {
  firstName?: string | null;
  lastName?: string | null;
  size?: number;
}

/**
 * CallingAvatar Component
 * Displays an avatar with animated pulse rings to indicate an active call
 */
export function CallingAvatar({ firstName, lastName, size = 120 }: CallingAvatarProps) {
  const { theme } = useThemeContext();

  const getInitials = () => {
    const first = firstName?.charAt(0) || '';
    const last = lastName?.charAt(0) || '';
    return (first + last).toUpperCase() || '?';
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
      }}
    >
      {/* Pulse animation border - First wave */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: `3px solid ${theme.palette.primary.main}`,
          transform: 'translateX(-50%) translateY(-50%)',
          animation: 'pulse-border 2s ease-out infinite',
          pointerEvents: 'none',
          '@keyframes pulse-border': {
            '0%': {
              transform: 'translateX(-50%) translateY(-50%) translateZ(0) scale(1)',
              opacity: 0.6,
            },
            '100%': {
              transform: 'translateX(-50%) translateY(-50%) translateZ(0) scale(1.5)',
              opacity: 0,
            },
          },
        }}
      />
      {/* Pulse animation border - Second wave (delayed) */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: `3px solid ${theme.palette.primary.main}`,
          transform: 'translateX(-50%) translateY(-50%)',
          animation: 'pulse-border 2s ease-out infinite 1s',
          pointerEvents: 'none',
        }}
      />
      {/* Avatar */}
      <Avatar
        sx={{
          width: size,
          height: size,
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          position: 'relative',
          zIndex: 1,
          fontSize: size * 0.4,
          fontWeight: 600,
        }}
      >
        {getInitials() || <Person sx={{ fontSize: size * 0.5 }} />}
      </Avatar>
    </Box>
  );
}

