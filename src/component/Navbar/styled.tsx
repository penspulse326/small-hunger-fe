import Link from 'next/link';

import { AppBar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: none;
`;

export const NavBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`;

export const LogoBox = styled(Box)`
  display: flex;
  align-items: center;

  padding: 0 ${({ theme }) => theme.spacing(1)};

  cursor: pointer;
`;

export const NavItemsBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const ActionsBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const NavLink = styled(Link)`
  position: relative;

  display: block;

  padding: ${({ theme }) => theme.spacing(1, 2)};

  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
  font-family: inherit;

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }

  &::after {
    content: '';

    position: absolute;
    bottom: 4px;
    left: 50%;

    width: 0;
    height: 2px;

    background-color: ${({ theme }) => theme.palette.primary.main};

    transition: all 0.2s ease-in-out;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: calc(100% - ${({ theme }) => theme.spacing(4)});
  }
`;
