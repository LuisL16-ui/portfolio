import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Card,
  Paper,
  Avatar,
  Divider,
  useTheme
} from '@mui/material';
import {
  Code,
  Person,
  FavoriteOutlined,
  TrackChanges,
  TrendingUp
} from '@mui/icons-material';
import { createCardStyles, createTitleStyles, createDividerStyles } from '../styles/cardStyles';

const About = () => {
  const theme = useTheme();
  const cardStyles = createCardStyles(theme);
  const titleStyles = createTitleStyles(theme);
  const dividerStyles = createDividerStyles(theme);
  
  const stats = [
    { number: "+6", label: "Meses de experiencia", icon: TrendingUp },
    { number: "100%", label: "Dedicación", icon: FavoriteOutlined }
  ];

  const values = [
    { icon: Code, title: "Clean Code", desc: "Código limpio y mantenible", color: "#3B82F6" },
    { icon: Person, title: "UX Focused", desc: "Centrado en el usuario", color: "#10B981" },
    { icon: TrackChanges, title: "Goal Oriented", desc: "Orientado a resultados", color: "#F59E0B" },
    { icon: FavoriteOutlined, title: "Passionate", desc: "Apasionado por innovar", color: "#EF4444" }
  ];

  return (
    <Box
      id="about"
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
              Sobre mí
            </Typography>
            <Box
              sx={dividerStyles.gradientDivider}
            />
          </Box>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4, alignItems: 'flex-start' }}>
          {/* Left Content */}
          <Box sx={{ flex: { xs: 1, lg: '1 1 58%' } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}
                >
                  Soy José Luis, estudiante de Ingeniería en Sistemas Computacionales en el Instituto 
                  Tecnológico de México Campus Culiacán. Actualmente cursando mi ultimo semestre.
                </Typography>
                
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}
                >
                  Me especializo en desarrollo backend con Node.js, TypeScript, ExpressJS y NestJS, así como 
                  frontend con React y Material-UI. Trabajo con bases de datos PostgreSQL y herramientas como 
                  Docker para el despliegue de aplicaciones.
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}
                >
                  Me motiva aprender constantemente, trabajar en equipo y enfrentar nuevos desafíos. 
                  Busco oportunidades para aplicar mis conocimientos y seguir creciendo tanto profesional 
                  como personalmente.
                </Typography>
                
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}
                >
                  Cuando no estoy programando, me puedes encontrar explorando nuevas tecnologías, o disfrutando de una buena taza de café 
                  mientras leo sobre las últimas tendencias en desarrollo de software.
                </Typography>
              </Box>

              {/* Values Grid */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                {values.map((value, index) => (
                  <Box key={value.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card
                        sx={cardStyles.glassCard}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Avatar
                            sx={{
                              bgcolor: `${value.color}20`,
                              color: value.color,
                              width: 48,
                              height: 48
                            }}
                          >
                            <value.icon />
                          </Avatar>
                          <Box>
                            <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
                              {value.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {value.desc}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </motion.div>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Right Content - Stats & Philosophy */}
          <Box sx={{ flex: { xs: 1, lg: '1 1 42%' } }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={3}
                sx={cardStyles.gradientPaper}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ mb: 4, textAlign: 'center' }}
                  color="primary"
                >
                  Mi trayectoria en números
                </Typography>
                
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, mb: 4 }}>
                  {stats.map((stat, index) => (
                    <Box key={stat.label}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Card
                          sx={cardStyles.glassCenterCard}
                        >
                          <Avatar
                            sx={{
                              bgcolor: 'primary.main',
                              mx: 'auto',
                              mb: 1,
                              width: 40,
                              height: 40
                            }}
                          >
                            <stat.icon fontSize="small" />
                          </Avatar>
                          <Typography
                            variant="h4"
                            fontWeight={700}
                            color="primary"
                            sx={{ mb: 1 }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            fontWeight={500}
                          >
                            {stat.label}
                          </Typography>
                        </Card>
                      </motion.div>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Philosophy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                </motion.div>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
