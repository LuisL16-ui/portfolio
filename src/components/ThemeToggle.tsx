import React from 'react';
import { IconButton, Tooltip, useTheme as useMuiTheme } from '@mui/material';
import { motion } from 'framer-motion';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../ThemeProvider';

interface ThemeToggleProps {
  sx?: object;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ sx = {} }) => {
  const { mode, toggleTheme, isTransitioning } = useTheme();
  const muiTheme = useMuiTheme();
  
  const isDark = mode === 'dark';

  return (
    <Tooltip 
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      placement="bottom"
    >
      <motion.div
        whileHover={{ scale: isTransitioning ? 1 : 1.1 }}
        whileTap={{ scale: isTransitioning ? 1 : 0.95 }}
        animate={{ rotate: isTransitioning ? 360 : 0 }}
        transition={{ duration: isTransitioning ? 0.3 : 0.2 }}
      >
        <IconButton
          onClick={toggleTheme}
          disabled={isTransitioning}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 3,
            background: isDark 
              ? 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
              : 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 152, 0, 0.1) 100%)',
            border: `2px solid ${isDark ? muiTheme.palette.primary.main : '#FF9800'}`,
            width: 48,
            height: 48,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: isTransitioning ? 0.7 : 1,
            '&:hover': {
              background: isDark
                ? 'linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)'
                : 'linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 152, 0, 0.2) 100%)',
              borderColor: isDark ? muiTheme.palette.primary.light : '#FFB74D',
              transform: isTransitioning ? 'none' : 'translateY(-2px)',
              boxShadow: isDark
                ? '0px 8px 25px rgba(59, 130, 246, 0.3)'
                : '0px 8px 25px rgba(255, 152, 0, 0.3)',
            },
            '&:disabled': {
              opacity: 0.7,
              pointerEvents: 'none',
            },
            ...sx,
          }}
        >
          <motion.div
            initial={false}
            animate={{
              scale: isDark ? 0 : 1,
              rotate: isDark ? 180 : 0,
              opacity: isDark ? 0 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LightModeIcon
              sx={{
                color: '#FF9800',
                fontSize: 24,
              }}
            />
          </motion.div>
          
          <motion.div
            initial={false}
            animate={{
              scale: isDark ? 1 : 0,
              rotate: isDark ? 0 : -180,
              opacity: isDark ? 1 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: isDark ? 0.1 : 0,
            }}
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <DarkModeIcon
              sx={{
                color: muiTheme.palette.primary.main,
                fontSize: 24,
              }}
            />
          </motion.div>
        </IconButton>
      </motion.div>
    </Tooltip>
  );
};
