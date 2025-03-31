'use client';

import { useState } from 'react';

import Link from 'next/link';

import { AccountCircle, Campaign, ShoppingCart } from '@mui/icons-material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  IconButton,
  useColorScheme,
  Link as MuiLink,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  function handleToggleTheme() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  function handleMenuOpen(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function handleLogout() {
    handleMenuClose();
    setIsLogin(false);
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

          <NavItemsBox>
            {isLogin ? (
              <>
                <Link href="/">
                  <IconButton sx={{ color: 'primary.contrastText' }}>
                    <Campaign />
                  </IconButton>
                </Link>

                <Link href="/">
                  <IconButton sx={{ color: 'primary.contrastText' }}>
                    <ShoppingCart />
                  </IconButton>
                </Link>

                <div>
                  <IconButton
                    sx={{ color: 'primary.contrastText' }}
                    onClick={handleMenuOpen}
                    aria-label="account of current user"
                    aria-controls="menu"
                    aria-haspopup="true"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>帳號設定</MenuItem>
                    <MenuItem onClick={handleMenuClose}>收藏店家</MenuItem>
                    <MenuItem onClick={handleMenuClose}>訂單管理</MenuItem>
                    <MenuItem onClick={handleMenuClose}>店家後台</MenuItem>
                    <MenuItem onClick={handleLogout}>登出</MenuItem>
                  </Menu>
                </div>
              </>
            ) : (
              <NavLink href="/">
                <Typography onClick={() => setIsLogin(!isLogin)}>
                  登入/註冊
                </Typography>
              </NavLink>
            )}
          </NavItemsBox>
        </ActionsBox>
      </NavBox>
    </StyledAppBar>
  );
}

export default Navbar;
