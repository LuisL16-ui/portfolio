import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  IconButton,
  Stack,
  Chip,
  Fab,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  KeyboardArrowDown,
  Download,
  GitHub,
  LinkedIn,
  Email,
  Code,
  Lightbulb
} from '@mui/icons-material';

interface HeroProps {
  onScrollToAbout: () => void;
}

const Hero = ({ onScrollToAbout }: HeroProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: isDark 
          ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)'
          : 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #EFF6FF 100%)',
        overflow: 'hidden',
        pt: { xs: 8, md: 10 }
      }}
    >
      {/* Background Animation Elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 0
        }}
      >
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '5%',
            right: '0%',
            width: 300,
            height: 300,
            background: isDark 
              ? 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)'
          }}
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '0%',
            width: 400,
            height: 400,
            background: isDark 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)'
          }}
        />
        
        {/* Additional particles for enhanced effect */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: 150,
            height: 150,
            background: isDark
              ? 'radial-gradient(circle, rgba(147, 197, 253, 0.08) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)'
          }}
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            bottom: '30%',
            right: '15%',
            width: 200,
            height: 200,
            background: isDark
              ? 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(29, 78, 216, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(35px)'
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          {/* Avatar Section */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <Box sx={{ position: 'relative', display: 'inline-block', mb: 4 }}>
              <Avatar
                sx={{
                  width: { xs: 150, md: 200 },
                  height: { xs: 150, md: 200 },
                  mx: 'auto',
                  background: theme.palette.gradient?.primary || 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                  fontSize: { xs: '3rem', md: '4rem' },
                  fontWeight: 900,
                  boxShadow: isDark 
                    ? '0 20px 40px rgba(59, 130, 246, 0.4)'
                    : '0 20px 40px rgba(59, 130, 246, 0.3)',
                  border: `4px solid ${theme.palette.background.paper}`,
                  transition: 'all 0.3s ease'
                }}
              >
                JL
              </Avatar>
              
              {/* Floating Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', inset: -20 }}
              >
                <Chip
                  icon={<Code />}
                  label="React"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    background: isDark 
                      ? 'rgba(96, 165, 250, 0.15)' 
                      : 'rgba(59, 130, 246, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.primary.main}30`,
                    color: theme.palette.primary.main,
                    fontWeight: 600
                  }}
                />
                <Chip
                  icon={<Lightbulb />}
                  label="AI"
                  size="small"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    background: isDark 
                      ? 'rgba(96, 165, 250, 0.15)' 
                      : 'rgba(59, 130, 246, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.primary.main}30`,
                    color: theme.palette.primary.main,
                    fontWeight: 600
                  }}
                />
              </motion.div>
            </Box>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                background: theme.palette.gradient?.primary || 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                fontWeight: 900,
                textAlign: 'center'
              }}
            >
              José Luis López Perez
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h3"
              color="primary"
              sx={{
                fontWeight: 300,
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Estudiante de Ingeniería en Sistemas Computacionales & Desarrollador Full-Stack
            </Typography>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                mb: 4,
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              Desarrollo soluciones web rápidas, escalables y centradas en el usuario.
              Transformo ideas en experiencias digitales excepcionales.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={onScrollToAbout}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}
                >
                  Conoce mi trabajo
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Download />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/CV-Jose-Luis-Lopez-Perez.pdf';
                    link.download = 'CV-Jose-Luis-Lopez-Perez.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Descargar CV
                </Button>
              </motion.div>
            </Stack>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Stack direction="row" spacing={2} justifyContent="center">
              {[
                { icon: GitHub, href: "#", label: "GitHub", color: "#333" },
                { icon: LinkedIn, href: "#", label: "LinkedIn", color: "#0077b5" },
                { icon: Email, href: "#", label: "Email", color: "#ea4335" }
              ].map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    href={social.href}
                    size="large"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: social.color,
                        backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      },
                    }}
                  >
                    <social.icon fontSize="large" />
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{
              marginTop: isMobile ? 24 : 32,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Fab
                size={isMobile ? "medium" : "small"}
                onClick={onScrollToAbout}
                sx={{
                  backgroundColor: 'transparent',
                  color: 'primary.main',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                    boxShadow: 'none',
                  },
                }}
              >
                <KeyboardArrowDown fontSize={isMobile ? "medium" : "large"} />
              </Fab>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
