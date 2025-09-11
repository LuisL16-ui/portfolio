import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Stack,
  Fab,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Favorite,
  KeyboardArrowUp
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDark = theme.palette.mode === 'dark';
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacion: [
      { name: 'Inicio', href: '#hero' },
      { name: 'Sobre mí', href: '#about' },
      { name: 'Habilidades', href: '#skills' },
      { name: 'Proyectos', href: '#projects' }
    ],
    informacion: [
      { name: 'Experiencia', href: '#experience' },
      { name: 'Educación', href: '#education' },
      { name: 'Contacto', href: '#contact' }
    ]
  };

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: isDark 
          ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)'
          : 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #475569 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 160,
          height: 160,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 240,
          height: 240,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(50%, 50%)'
        }}
      />

      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 4 }}>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ gridColumn: { xs: '1', md: 'span 2' } }}>
              <Typography variant="h3" fontWeight={700} gutterBottom>
                José Luis López
              </Typography>
              
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="body2" color="grey.300">
                  ¿Listo para colaborar?
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => scrollToSection('#contact')}
                  sx={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: 3,
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  Hablemos
                </Button>
              </Stack>
            </Box>
          </motion.div>

          {/* Navigation Links */}
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Navegación
            </Typography>
            <Stack spacing={1.5}>
              {footerLinks.navegacion.map((link) => (
                <Typography
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  sx={{
                    color: 'grey.300',
                    cursor: 'pointer',
                    p: 0.5,
                    fontSize: '0.875rem'
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* Information Links */}
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Información
            </Typography>
            <Stack spacing={1.5}>
              {footerLinks.informacion.map((link) => (
                <Typography
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  sx={{
                    color: 'grey.300',
                    cursor: 'pointer',
                    p: 0.5,
                    fontSize: '0.875rem'
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Divider sx={{ my: 6, borderColor: 'grey.700' }} />
          
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              justifyContent: 'space-between', 
              alignItems: 'center',
              gap: 2
            }}
          >
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2" color="grey.300">
                  © {currentYear} José Luis López Perez.
                </Typography>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Favorite sx={{ color: '#EF4444', fontSize: 16 }} />
                </motion.div>
              </Stack>
            </motion.div>

            {/* Back to top */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                onClick={scrollToTop}
                endIcon={
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <KeyboardArrowUp />
                  </motion.div>
                }
                sx={{
                  color: 'grey.300',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                Volver arriba
              </Button>
            </motion.div>
          </Box>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Divider sx={{ my: 4, borderColor: 'grey.700' }} />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="grey.400" sx={{ lineHeight: 1.6 }}>
              Este portafolio fue desarrollado con React, TypeScript, Material-UI y Framer Motion.
              <br />
              Optimizado para rendimiento y accesibilidad web.
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* Scroll to top button - Fixed position for mobile */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Fab
            onClick={scrollToTop}
            sx={{
              position: 'fixed',
              bottom: 16,
              right: 16,
              background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
              color: 'white',
              zIndex: 1000,
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <KeyboardArrowUp />
          </Fab>
        </motion.div>
      )}
    </Box>
  );
};

export default Footer;
