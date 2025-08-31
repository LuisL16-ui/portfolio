import { motion } from 'framer-motion';
import { useState, memo } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Chip
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'education', label: 'Educación' },
    { id: 'contact', label: 'Contacto' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Actualizar inmediatamente para evitar parpadeo
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) {
        setIsMenuOpen(false);
      }
    }
  };

  const MotionAppBar = motion.create(AppBar);

  return (
    <>
      <MotionAppBar
        position="fixed"
        elevation={0}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          backdropFilter: 'blur(20px)',
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          transition: 'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',
          color: theme.palette.text.primary
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ cursor: 'pointer' }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.5px'
                }}
                onClick={() => scrollToSection('hero')}
              >
                Luis López
              </Typography>
            </motion.div>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeSection === item.id ? (
                      <Chip
                        label={item.label}
                        variant="filled"
                        onClick={() => scrollToSection(item.id)}
                        sx={{
                          fontWeight: 600,
                          cursor: 'pointer',
                          background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                          color: 'white',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                            transform: 'translateY(-1px)',
                          },
                          transition: 'all 0.2s ease-in-out'
                        }}
                      />
                    ) : (
                      <Button
                        onClick={() => scrollToSection(item.id)}
                        sx={{
                          fontWeight: 500,
                          color: theme.palette.text.primary,
                          '&:hover': {
                            backgroundColor: 'rgba(59, 130, 246, 0.08)',
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    )}
                  </motion.div>
                ))}
                
                {/* Theme Toggle */}
                <Box sx={{ ml: 2 }}>
                  <ThemeToggle />
                </Box>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ThemeToggle sx={{ width: 40, height: 40 }} />
                <motion.div whileTap={{ scale: 0.95 }}>
                  <IconButton
                    edge="end"
                    onClick={() => setIsMenuOpen(true)}
                    sx={{ 
                      color: theme.palette.text.primary,
                      '&:hover': {
                        backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      }
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </motion.div>
              </Box>
            )}
          </Toolbar>
        </Container>
      </MotionAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
            backdropFilter: 'blur(20px)',
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" fontWeight={700} color="primary">
              Navegación
            </Typography>
            <IconButton 
              onClick={() => setIsMenuOpen(false)}
              sx={{ color: theme.palette.text.primary }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          
          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
                <motion.div
                  style={{ width: '100%' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ListItemButton
                    onClick={() => scrollToSection(item.id)}
                    selected={activeSection === item.id}
                    sx={{
                      borderRadius: 2,
                      '&.Mui-selected': {
                        background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                        color: 'white',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                        },
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: activeSection === item.id ? 600 : 500,
                        color: activeSection === item.id ? 'white' : theme.palette.text.primary
                      }}
                    />
                  </ListItemButton>
                </motion.div>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default memo(Header, (prevProps, nextProps) => {
  // Solo re-renderizar si activeSection realmente cambió
  return prevProps.activeSection === nextProps.activeSection;
});
