import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  Avatar,
  Stack,
  CircularProgress,
  useTheme
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
  Send,
  Chat,
  Event
} from '@mui/icons-material';
import { createTitleStyles, createDividerStyles } from '../styles/cardStyles';

const Contact = () => {
  const theme = useTheme();
  const titleStyles = createTitleStyles(theme);
  const dividerStyles = createDividerStyles(theme);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Turnstile CAPTCHA state
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState('');
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);

  // Load Turnstile script dynamically
  useEffect(() => {
    // Check if script already exists to prevent duplicates
    const existingScript = document.querySelector('script[src*="turnstile"]');
    
    if (!window.turnstile && !turnstileLoaded && !existingScript) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => setTurnstileLoaded(true);
      script.onerror = () => {
        console.error('Failed to load Turnstile script');
        setTurnstileLoaded(false);
      };
      document.head.appendChild(script);
    } else if (window.turnstile) {
      setTurnstileLoaded(true);
    }
  }, []); // Remove turnstileLoaded dependency to prevent re-runs

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate Turnstile CAPTCHA
    if (!turnstileToken) {
      setCaptchaError('Por favor, completa la verificación de seguridad.');
      return;
    }
    
    setCaptchaError('');
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form and CAPTCHA
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTurnstileToken(null);
    setIsSubmitting(false);
    
    // Show success message (you can implement a toast notification here)
    alert('¡Mensaje enviado exitosamente! Te responderé pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Email,
      label: "Email",
      value: "joselp.02@outlook.com",
      href: "mailto:joselp.02@outlook.com",
      description: "Respondo en menos de 24 horas"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+52 667 404 2841",
      href: "tel:+526674042841",
      description: "Disponible de 9:00 a 18:00"
    },
    {
      icon: LocationOn,
      label: "Ubicación",
      value: "Sinaloa, México",
      href: "#",
      description: "También trabajo remotamente"
    }
  ];

  const socialLinks = [
    {
      icon: GitHub,
      label: "GitHub",
      href: "https://github.com/joseluislopez",
      username: "@joseluislopez",
      color: "#333"
    },
    {
      icon: LinkedIn,
      label: "LinkedIn",
      href: "https://linkedin.com/in/joseluislopez",
      username: "/in/joseluislopez",
      color: "#0077B5"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/joseluislopez",
      username: "@joseluislopez",
      color: "#1DA1F2"
    }
  ];

  const quickActions = [
    {
      icon: Chat,
      title: "Chat rápido",
      description: "Envíame un mensaje directo",
      action: "Abrir WhatsApp",
      href: "https://wa.me/6674042841",
      color: "#25D366"
    },
    {
      icon: Event,
      title: "Reunión virtual",
      description: "Agenda una videollamada",
      action: "Programar reunión",
      href: "#",
      color: "#3B82F6"
    },
    {
      icon: Email,
      title: "Consulta por email",
      description: "Para proyectos complejos",
      action: "Enviar email",
      href: "mailto:joseluislopezperez@email.com",
      color: "#8B5CF6"
    }
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={titleStyles.gradientTitle}
            >
              ¡Hablemos!
            </Typography>
            <Box sx={dividerStyles.gradientDivider} />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}
            >
              ¿Tienes un proyecto en mente? ¿Necesitas una consulta técnica? ¿O simplemente quieres saludar? 
              Me encantaría conocer tu historia y ver cómo puedo ayudarte.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6 }}>
          {/* Contact Form */}
          <Box sx={{ flex: { xs: 1, lg: 7 } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card
                sx={{
                  background: theme.palette.mode === 'dark' 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 41, 59, 0.95) 100%)'
                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
                  boxShadow: theme.palette.mode === 'dark' 
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(59, 130, 246, 0.1)'
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    Envíame un mensaje
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Stack spacing={3}>
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <TextField
                            fullWidth
                            name="name"
                            label="Nombre completo"
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Tu nombre"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                  borderColor: 'primary.main',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'primary.main',
                                }
                              }
                            }}
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <TextField
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="tu@email.com"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                  borderColor: 'primary.main',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'primary.main',
                                }
                              }
                            }}
                          />
                        </motion.div>
                      </Box>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <TextField
                          fullWidth
                          name="subject"
                          label="Asunto"
                          variant="outlined"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="¿En qué puedo ayudarte?"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'primary.main',
                              }
                            }
                          }}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <TextField
                          fullWidth
                          name="message"
                          label="Mensaje"
                          variant="outlined"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Cuéntame sobre tu proyecto, consulta o simplemente saluda..."
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'primary.main',
                              }
                            }
                          }}
                        />
                      </motion.div>

                      {/* Cloudflare Turnstile CAPTCHA */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                      >
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
                            Verificación de seguridad:
                          </Typography>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Turnstile
                              siteKey="0x4AAAAAABw8YfT1CfP680X4" // Reemplaza con tu site key real de Cloudflare
                              onSuccess={(token) => {
                                setTurnstileToken(token);
                                setCaptchaError('');
                              }}
                              onError={() => {
                                setTurnstileToken(null);
                                setCaptchaError('Error en la verificación. Inténtalo de nuevo.');
                              }}
                              onExpire={() => {
                                setTurnstileToken(null);
                                setCaptchaError('La verificación ha expirado. Por favor, refresca.');
                              }}
                            />
                            {captchaError && (
                              <Typography variant="caption" color="error">
                                {captchaError}
                              </Typography>
                            )}
                          </Box>
                          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                            Protegido por Cloudflare Turnstile
                          </Typography>
                        </Box>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          size="large"
                          disabled={isSubmitting}
                          startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send />}
                          sx={{
                            background: theme.palette.gradient?.primary || 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                            fontWeight: 700,
                            py: 2,
                            '&:hover': {
                              background: theme.palette.gradient?.secondary || 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
                            },
                            '&:disabled': {
                              opacity: 0.6
                            },
                            transition: 'all 0.3s ease-in-out'
                          }}
                        >
                          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                        </Button>
                      </motion.div>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>

          {/* Contact Info & Quick Actions */}
          <Box sx={{ flex: { xs: 1, lg: 5 } }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={3}>
                {/* Contact Information */}
                <Card sx={{ boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      Información de contacto
                    </Typography>
                    
                    <Stack spacing={3} sx={{ mt: 3 }}>
                      {contactInfo.map((info, index) => (
                        <motion.div
                          key={info.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Paper
                            component="a"
                            href={info.href}
                            sx={{
                              p: 2,
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 2,
                              textDecoration: 'none',
                              color: 'inherit',
                              cursor: 'pointer',
                              '&:hover': {
                                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                                transform: 'translateX(4px)',
                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)'
                              },
                              transition: 'all 0.3s ease-in-out'
                            }}
                            elevation={1}
                          >
                            <Avatar
                              sx={{
                                bgcolor: 'rgba(59, 130, 246, 0.1)',
                                color: 'primary.main',
                                width: 48,
                                height: 48
                              }}
                            >
                              <info.icon />
                            </Avatar>
                            <Box>
                              <Typography variant="h6" fontWeight={600}>
                                {info.label}
                              </Typography>
                              <Typography variant="body1" color="primary.main" fontWeight={500}>
                                {info.value}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {info.description}
                              </Typography>
                            </Box>
                          </Paper>
                        </motion.div>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card sx={{ boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      Acciones rápidas
                    </Typography>
                    
                    <Stack spacing={2} sx={{ mt: 3 }}>
                      {quickActions.map((action, index) => (
                        <motion.div
                          key={action.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Button
                            component="a"
                            href={action.href}
                            fullWidth
                            variant="contained"
                            startIcon={<action.icon />}
                            sx={{
                              backgroundColor: action.color,
                              color: 'white',
                              p: 2,
                              justifyContent: 'flex-start',
                              textAlign: 'left',
                              '&:hover': {
                                backgroundColor: action.color,
                                filter: 'brightness(0.9)',
                                transform: 'translateY(-2px)',
                                boxShadow: `0 8px 25px ${action.color}40`
                              },
                              transition: 'all 0.3s ease-in-out'
                            }}
                          >
                            <Box sx={{ textAlign: 'left' }}>
                              <Typography variant="subtitle1" fontWeight={600}>
                                {action.title}
                              </Typography>
                              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                {action.description}
                              </Typography>
                            </Box>
                          </Button>
                        </motion.div>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card sx={{ boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      Sígueme en redes
                    </Typography>
                    
                    <Stack spacing={2} sx={{ mt: 3 }}>
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={social.label}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Paper
                            component="a"
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              p: 2,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              textDecoration: 'none',
                              color: 'text.primary',
                              cursor: 'pointer',
                              '&:hover': {
                                backgroundColor: 'grey.50',
                                transform: 'translateX(4px)',
                                '& .social-icon': {
                                  color: social.color
                                }
                              },
                              transition: 'all 0.3s ease-in-out'
                            }}
                            elevation={1}
                          >
                            <social.icon className="social-icon" sx={{ fontSize: 24 }} />
                            <Box>
                              <Typography variant="subtitle1" fontWeight={600}>
                                {social.label}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {social.username}
                              </Typography>
                            </Box>
                          </Paper>
                        </motion.div>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </motion.div>
          </Box>
        </Box>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card
            sx={{
              mt: 8,
              background: theme.palette.gradient?.primary || 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <CardContent sx={{ p: 6 }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                ¿Listo para empezar tu proyecto?
              </Typography>
              <Typography
                variant="h6"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  mb: 4,
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                No importa si es una idea inicial, un proyecto complejo o solo necesitas una consulta técnica. 
                Estoy aquí para ayudarte a convertir tus ideas en realidad digital.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  component="a"
                  href="mailto:joseluislopezperez@email.com"
                  variant="contained"
                  size="large"
                  sx={{
                  backgroundColor: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.main',
                  color: 'white',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' ? 'primary.main' : 'primary.dark',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.6)'
                  },
                  transition: 'all 0.3s ease-in-out'
                  }}
                >
                  Enviar email
                </Button>
                <Button
                  component="a"
                  href="https://wa.me/34123456789"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'white',
                      color: 'primary.main',
                      borderColor: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)'
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  WhatsApp
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
