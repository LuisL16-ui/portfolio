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

const SCRIPT_URL = "https://workers-playground-dark-term-90af.luislopezp913.workers.dev/api";


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

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState('');
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="turnstile"]');
    if (!window.turnstile && !turnstileLoaded && !existingScript) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = () => setTurnstileLoaded(true);
      script.onerror = () => {
        setTurnstileLoaded(false);
        setCaptchaError('Error al cargar la verificación de seguridad.');
      };
      document.head.appendChild(script);
    } else if (window.turnstile) {
      setTurnstileLoaded(true);
    } else if (existingScript) {
      setTimeout(() => {
        if (window.turnstile) setTurnstileLoaded(true);
      }, 1000);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setCaptchaError('Por favor, completa la verificación de seguridad.');
      return;
    }

    setCaptchaError('');
    setIsSubmitting(true);

    try {
      const params = new URLSearchParams();
      params.append('name', formData.name.trim());
      params.append('email', formData.email.trim());
      params.append('subject', formData.subject.trim());
      params.append('message', formData.message.trim());
      params.append('submittedAt', new Date().toISOString());

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: params.toString()
      });

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTurnstileToken(null);
        alert('¡Mensaje enviado exitosamente! Te responderé pronto.');
      } else {
        alert('Ocurrió un error al enviar el formulario.');
      }
    } catch (error) {
      console.error(error);
      alert('Error de red al enviar el formulario.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Email, label: "Email", value: "joselp.02@outlook.com", href: "mailto:joselp.02@outlook.com", description: "Respondo en menos de 24 horas" },
    { icon: Phone, label: "Teléfono", value: "+52 667 404 2841", href: "tel:+526674042841", description: "Disponible de 9:00 a 18:00" },
    { icon: LocationOn, label: "Ubicación", value: "Sinaloa, México", href: "#", description: "También trabajo remotamente" }
  ];

  const socialLinks = [
    { icon: GitHub, label: "GitHub", href: "https://github.com/joseluislopez", username: "@joseluislopez", color: "#333" },
    { icon: LinkedIn, label: "LinkedIn", href: "https://linkedin.com/in/joseluislopez", username: "/in/joseluislopez", color: "#0077B5" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/joseluislopez", username: "@joseluislopez", color: "#1DA1F2" }
  ];

  const quickActions = [
    { icon: Chat, title: "Chat rápido", description: "Envíame un mensaje directo", action: "Abrir WhatsApp", href: "https://wa.me/6674042841", color: "#25D366" },
    { icon: Event, title: "Reunión virtual", description: "Agenda una videollamada", action: "Programar reunión", href: "#", color: "#3B82F6" },
    { icon: Email, title: "Consulta por email", description: "Para proyectos complejos", action: "Enviar email", href: "mailto:joseluislopezperez@email.com", color: "#8B5CF6" }
  ];

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={titleStyles.gradientTitle}>¡Hablemos!</Typography>
            <Box sx={dividerStyles.gradientDivider} />
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}>
              ¿Tienes un proyecto en mente? ¿Necesitas una consulta técnica? ¿O simplemente quieres saludar? Me encantaría conocer tu historia y ver cómo puedo ayudarte.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6 }}>
          <Box sx={{ flex: { xs: 1, lg: 7 } }}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Card sx={{ background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 41, 59, 0.95) 100%)' : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(255, 255, 255, 1) 100%)', border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`, boxShadow: theme.palette.mode === 'dark' ? '0 8px 32px rgba(0, 0, 0, 0.3)' : '0 8px 32px rgba(59, 130, 246, 0.1)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" fontWeight={700} gutterBottom>Envíame un mensaje</Typography>

                  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Stack spacing={3}>
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
                        <TextField fullWidth name="name" label="Nombre completo" value={formData.name} onChange={handleChange} required placeholder="Tu nombre" />
                        <TextField fullWidth name="email" label="Email" type="email" value={formData.email} onChange={handleChange} required placeholder="tu@email.com" />
                      </Box>
                      <TextField fullWidth name="subject" label="Asunto" value={formData.subject} onChange={handleChange} required placeholder="¿En qué puedo ayudarte?" />
                      <TextField fullWidth name="message" label="Mensaje" multiline rows={6} value={formData.message} onChange={handleChange} required placeholder="Cuéntame sobre tu proyecto, consulta o simplemente saluda..." />

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>Verificación de seguridad:</Typography>
                        {turnstileLoaded ? (
                          <Turnstile siteKey="0x4AAAAAABw8YfT1CfP680X4" onSuccess={token => { setTurnstileToken(token); setCaptchaError(''); }} onError={() => { setTurnstileToken(null); setCaptchaError('Error en la verificación. Inténtalo de nuevo.'); }} onExpire={() => { setTurnstileToken(null); setCaptchaError('La verificación ha expirado. Por favor, refresca.'); }} />
                        ) : (<Typography variant="body2" color="text.secondary">Cargando verificación de seguridad...</Typography>)}
                        {captchaError && (<Typography variant="caption" color="error">{captchaError}</Typography>)}
                      </Box>

                      <Button type="submit" variant="contained" fullWidth size="large" disabled={isSubmitting} startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send />}>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</Button>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>

          <Box sx={{ flex: { xs: 1, lg: 5 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Card sx={{ p: 3, background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}` }}>
                <Typography variant="h5" gutterBottom>Información de contacto</Typography>
                <Stack spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Paper key={index} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer', transition: '0.3s', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' } }} component="a" href={info.href} target="_blank" rel="noopener noreferrer">
                      <Avatar sx={{ bgcolor: 'primary.main', color: 'white' }}>{<info.icon />}</Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>{info.label}</Typography>
                        <Typography variant="body2">{info.value}</Typography>
                        <Typography variant="caption" color="text.secondary">{info.description}</Typography>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Card sx={{ p: 3, background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}` }}>
                <Typography variant="h5" gutterBottom>Acciones rápidas</Typography>
                <Stack spacing={2}>
                  {quickActions.map((action, index) => (
                    <Paper key={index} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, borderLeft: `4px solid ${action.color}`, transition: '0.3s', cursor: 'pointer', '&:hover': { transform: 'translateX(5px)', backgroundColor: theme.palette.action.hover } }} component="a" href={action.href} target="_blank" rel="noopener noreferrer">
                      <Avatar sx={{ bgcolor: action.color, color: 'white' }}>{<action.icon />}</Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>{action.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{action.description}</Typography>
                        <Typography variant="caption" color="primary">{action.action}</Typography>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
              <Card sx={{ p: 3, background: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}` }}>
                <Typography variant="h5" gutterBottom>Conecta conmigo</Typography>
                <Stack direction="row" spacing={2}>
                  {socialLinks.map((social, index) => (
                    <Avatar key={index} sx={{ bgcolor: social.color, cursor: 'pointer', width: 48, height: 48, '&:hover': { opacity: 0.8, transform: 'scale(1.1)', transition: '0.3s' } }} component="a" href={social.href} target="_blank" rel="noopener noreferrer">{<social.icon />}</Avatar>
                  ))}
                </Stack>
              </Card>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
