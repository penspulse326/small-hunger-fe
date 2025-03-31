'use client';

import { useState } from 'react';

import Link from 'next/link';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, useColorScheme, Link as MuiLink } from '@mui/material';

import {
  StyledAppBar,
  NavBox,
  LogoBox,
  NavItemsBox,
  ActionsBox,
  NavLink,
} from './styled';

function Navbar() {
  const { mode, setMode } = useColorScheme();

  const [isLogin, setIsLogin] = useState(false);

  function handleToggleTheme() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <StyledAppBar position="sticky">
      <NavBox>
        <Link href="/" legacyBehavior passHref>
          <LogoBox>
            <MuiLink color="primary" variant="body1" underline="none">
              Small Hunger 小餓
            </MuiLink>
          </LogoBox>
        </Link>

        <ActionsBox>
          <IconButton onClick={handleToggleTheme} color="primary">
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton onClick={() => setIsLogin(!isLogin)} color="primary">
            1
          </IconButton>
          <NavItemsBox>
            {isLogin ? (
              <>
                <IconButton
                  onClick={() => setIsLogin(!isLogin)}
                  color="primary"
                >
                  1
                </IconButton>
                <IconButton
                  onClick={() => setIsLogin(!isLogin)}
                  color="primary"
                >
                  1
                </IconButton>
                <IconButton
                  onClick={() => setIsLogin(!isLogin)}
                  color="primary"
                >
                  1
                </IconButton>
              </>
            ) : (
              <NavLink href="/">登入/註冊</NavLink>
            )}
          </NavItemsBox>
        </ActionsBox>
      </NavBox>
    </StyledAppBar>
  );
}

export default Navbar;
