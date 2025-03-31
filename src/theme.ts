'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#65c3c8', // cupcake primary
          contrastText: '#1d1d1d',
        },
        secondary: {
          main: '#ef9fbc', // cupcake secondary
        },
        error: {
          main: '#f87272', // cupcake error
        },
        warning: {
          main: '#fbbd23', // cupcake warning
        },
        info: {
          main: '#3abff8', // cupcake info
        },
        success: {
          main: '#36d399', // cupcake success
        },
        background: {
          default: '#faf7f5', // cupcake base-100
          paper: '#ffffff', // cupcake base-200
        },
        text: {
          primary: '#291334', // cupcake base content
          secondary: '#291334',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#38bdf8', // business primary
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#818cf8', // business secondary
        },
        error: {
          main: '#f87272', // business error
        },
        warning: {
          main: '#facc15', // business warning
        },
        info: {
          main: '#0ea5e9', // business info
        },
        success: {
          main: '#4ade80', // business success
        },
        background: {
          default: '#1d232a', // business base-100
          paper: '#191e24', // business base-200
        },
        text: {
          primary: '#a6adba', // business base content
          secondary: '#a6adba',
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: `var(--font-noto-sans-tc)`,
  },
});

export default theme;
