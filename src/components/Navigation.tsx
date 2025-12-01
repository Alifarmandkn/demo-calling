import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="static">
      <Toolbar>
        <LocalDrinkIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DrinkMate
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            color="inherit"
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: isActive('/') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/ingredients')}
            sx={{
              backgroundColor: isActive('/ingredients') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            }}
          >
            Ingredients
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate('/recipes')}
            sx={{
              backgroundColor: isActive('/recipes') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            }}
          >
            Recipes
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
