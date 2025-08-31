import { createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';

// Extended color palette for gradients and variations
declare module '@mui/material/styles' {
  interface Palette {
    gradient: {
      primary: string;
      secondary: string;
      accent: string;
      glass: string;
    };
  }

  interface PaletteOptions {
    gradient?: {
      primary?: string;
      secondary?: string;
      accent?: string;
      glass?: string;
    };
  }
}

// Blue color palette variations
const blueColors = {
  50: '#EFF6FF',
  100: '#DBEAFE',
  200: '#BFDBFE',
  300: '#93C5FD',
  400: '#60A5FA',
  500: '#3B82F6',
  600: '#2563EB',
  700: '#1D4ED8',
  800: '#1E40AF',
  900: '#1E3A8A',
  950: '#172554',
};

const createCustomTheme = (mode: PaletteMode) => {
  const isLight = mode === 'light';
  
  return createTheme({
    palette: {
      mode,
      primary: {
        main: isLight ? blueColors[600] : blueColors[500],
        light: isLight ? blueColors[400] : blueColors[300],
        dark: isLight ? blueColors[800] : blueColors[700],
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: isLight ? '#64748B' : '#94A3B8',
        light: isLight ? '#94A3B8' : '#CBD5E1',
        dark: isLight ? '#475569' : '#64748B',
        contrastText: isLight ? '#FFFFFF' : '#0F172A',
      },
      background: {
        default: isLight ? '#FFFFFF' : '#0F172A',
        paper: isLight ? '#FAFBFF' : '#1E293B',
      },
      text: {
        primary: isLight ? '#1E293B' : '#F1F5F9',
        secondary: isLight ? '#64748B' : '#94A3B8',
      },
      divider: isLight ? 'rgba(59, 130, 246, 0.12)' : 'rgba(148, 163, 184, 0.12)',
      gradient: {
        primary: isLight 
          ? 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 50%, #1E40AF 100%)'
          : 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #2563EB 100%)',
        secondary: isLight
          ? 'linear-gradient(135deg, #64748B 0%, #475569 100%)'
          : 'linear-gradient(135deg, #94A3B8 0%, #64748B 100%)',
        accent: isLight
          ? 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 50%, #93C5FD 100%)'
          : 'linear-gradient(135deg, #1E40AF 0%, #1E3A8A 50%, #172554 100%)',
        glass: isLight
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)'
          : 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.7) 100%)',
      },
      grey: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
      },
    },
    typography: {
      fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '3.75rem',
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: '-0.025em',
        '@media (max-width:600px)': {
          fontSize: '2.75rem',
        },
      },
      h2: {
        fontSize: '3rem',
        fontWeight: 800,
        lineHeight: 1.2,
        letterSpacing: '-0.025em',
        '@media (max-width:600px)': {
          fontSize: '2.25rem',
        },
      },
      h3: {
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: 1.2,
        '@media (max-width:600px)': {
          fontSize: '1.75rem',
        },
      },
      h4: {
        fontSize: '1.875rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      body1: {
        fontSize: '1.125rem',
        lineHeight: 1.7,
      },
      body2: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      button: {
        fontWeight: 600,
        textTransform: 'none' as const,
        letterSpacing: '0.025em',
        fontSize: '1rem',
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: isLight ? '#F1F5F9' : '#1E293B',
            },
            '&::-webkit-scrollbar-thumb': {
              background: isLight ? blueColors[500] : blueColors[400],
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: isLight ? blueColors[600] : blueColors[500],
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            padding: '14px 36px',
            fontSize: '1rem',
            fontWeight: 600,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: isLight 
                ? '0px 12px 32px rgba(59, 130, 246, 0.3)' 
                : '0px 12px 32px rgba(0, 0, 0, 0.6)',
              transform: 'translateY(-3px)',
            },
            '&:active': {
              transform: 'translateY(-1px)',
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          contained: {
            background: isLight 
              ? 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)'
              : 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
            color: '#FFFFFF',
            '&:hover': {
              background: isLight
                ? 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)'
                : 'linear-gradient(135deg, #93C5FD 0%, #60A5FA 100%)',
            },
          },
          outlined: {
            borderWidth: 2,
            borderColor: isLight ? blueColors[500] : blueColors[400],
            color: isLight ? blueColors[600] : blueColors[300],
            '&:hover': {
              borderWidth: 2,
              backgroundColor: isLight 
                ? 'rgba(59, 130, 246, 0.08)' 
                : 'rgba(96, 165, 250, 0.08)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            background: isLight 
              ? 'rgba(255, 255, 255, 0.9)' 
              : 'rgba(30, 41, 59, 0.9)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${isLight ? 'rgba(59, 130, 246, 0.1)' : 'rgba(148, 163, 184, 0.1)'}`,
            boxShadow: isLight 
              ? '0px 8px 32px rgba(59, 130, 246, 0.1)' 
              : '0px 8px 32px rgba(0, 0, 0, 0.3)',
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: isLight 
                ? '0px 20px 48px rgba(59, 130, 246, 0.2)' 
                : '0px 20px 48px rgba(0, 0, 0, 0.5)',
            },
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            background: isLight 
              ? 'rgba(255, 255, 255, 0.95)' 
              : 'rgba(30, 41, 59, 0.95)',
            backdropFilter: 'blur(16px)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            fontWeight: 500,
          },
          filled: {
            background: isLight 
              ? 'rgba(59, 130, 246, 0.15)'
              : 'rgba(96, 165, 250, 0.2)',
            color: isLight ? blueColors[700] : blueColors[200],
            '&:hover': {
              background: isLight 
                ? 'rgba(59, 130, 246, 0.25)'
                : 'rgba(96, 165, 250, 0.3)',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 16,
              background: isLight 
                ? 'rgba(255, 255, 255, 0.8)' 
                : 'rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(10px)',
              '& fieldset': {
                borderColor: isLight 
                  ? 'rgba(59, 130, 246, 0.2)' 
                  : 'rgba(148, 163, 184, 0.2)',
                borderWidth: 2,
              },
              '&:hover fieldset': {
                borderColor: isLight ? blueColors[500] : blueColors[400],
              },
              '&.Mui-focused fieldset': {
                borderColor: isLight ? blueColors[500] : blueColors[400],
                borderWidth: 2,
              },
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: isLight 
              ? 'rgba(255, 255, 255, 0.9)'
              : 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(20px)',
            borderBottom: `1px solid ${isLight ? 'rgba(59, 130, 246, 0.1)' : 'rgba(148, 163, 184, 0.1)'}`,
            boxShadow: isLight 
              ? '0px 4px 32px rgba(59, 130, 246, 0.08)' 
              : '0px 4px 32px rgba(0, 0, 0, 0.3)',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            '&:hover': {
              backgroundColor: isLight 
                ? 'rgba(59, 130, 246, 0.1)' 
                : 'rgba(96, 165, 250, 0.1)',
              transform: 'scale(1.08)',
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            height: 10,
            backgroundColor: isLight 
              ? 'rgba(59, 130, 246, 0.1)' 
              : 'rgba(148, 163, 184, 0.1)',
          },
          bar: {
            borderRadius: 10,
            background: isLight 
              ? 'linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)'
              : 'linear-gradient(90deg, #60A5FA 0%, #3B82F6 100%)',
          },
        },
      },
      MuiRating: {
        styleOverrides: {
          iconFilled: {
            color: '#FBBF24',
          },
          iconEmpty: {
            color: isLight ? 'rgba(251, 191, 36, 0.3)' : 'rgba(251, 191, 36, 0.2)',
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },
  });
};

// Create both themes
export const lightTheme = createCustomTheme('light');
export const darkTheme = createCustomTheme('dark');

// Default export (light theme for compatibility)
export const theme = lightTheme;
