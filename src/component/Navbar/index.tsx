'use client';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, Typography, useColorScheme } from '@mui/material';

function Navbar() {
  const { mode, setMode } = useColorScheme();

  function handleToggleTheme() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <div>
      <Typography color="primary" variant="h6">
        LOGO
      </Typography>
      <IconButton onClick={handleToggleTheme} color="primary">
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </div>
  );
}

export default Navbar;
