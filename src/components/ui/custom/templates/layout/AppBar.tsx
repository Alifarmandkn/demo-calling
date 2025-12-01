import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import {
  Brightness5Rounded,
  Brightness2Rounded,
} from '@mui/icons-material';
import { useThemeContext } from '../../../../../theme/theme';
import { hexToRGBA } from '../../../../../utils/colorUtils';
import { MegaLogo } from '../../../svg/MegaLogo';

export function AppBar() {
  const { theme, isDarkMode, toggleTheme } = useThemeContext();

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: hexToRGBA(theme.palette.background.default, 0.05),
        backgroundImage: 'none',
        backdropFilter: 'blur(8px)',
        boxShadow: 'none',
        border: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Tooltip title="Mega" placement="bottom" arrow>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MegaLogo width="120px" />
            </Box>
          </Tooltip>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} placement="bottom" arrow>
            <IconButton size="large" onClick={toggleTheme}>
              {isDarkMode ? <Brightness5Rounded /> : <Brightness2Rounded />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
