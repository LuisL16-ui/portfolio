import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  useTheme
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import {
  Work,
  DateRange,
  LocationOn,
  TrendingUp,
  CheckCircle,
  Code,
  Business,
  Schedule
} from '@mui/icons-material';
import { createCardStyles, createTitleStyles, createDividerStyles } from '../styles/cardStyles';

const Experience = () => {
  const theme = useTheme();
  const cardStyles = createCardStyles(theme);
  const titleStyles = createTitleStyles(theme);
  const dividerStyles = createDividerStyles(theme);
  
  const experiences = [
    {
      id: 1,
      company: "Clariti",
      position: "Desarrollador Full-Stack",
      period: "Marzo 2025 - Julio 2025",
      location: "Sinaloa, México",
      type: "Trainee",
      description: "Desarrollando mis habilidades como Trainee en Clariti, trabajando con tecnologías modernas y aprendiendo de mi equipo de desarrollo en un ambiente profesional.",
      achievements: [
        "Trabajando con Express, NestJS y TypeScript",
        "Desarrollando interfaces con React y mejores prácticas",
        "Aprendiendo manejo de bases de datos PostgreSQL",
        "Implementando soluciones con Docker para desarrollo"
      ],
      technologies: ["Node.js", "NestJS", "TypeScript", "React", "PostgreSQL", "Docker"],
      projects: ["Sistema de validación de PIN vía WhatsApp", "Sistema de gestion de creditos de vivienda"],
      color: "#3B82F6",
      current: true
    }
  ];

  const stats = [
    { number: "6+", label: "Meses de experiencia", icon: DateRange },
    { number: "5+", label: "Tecnologías principales", icon: Business },
    { number: "Estudiante", label: "Ing. Sistemas", icon: Code }
  ];

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'
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
              Experiencia Profesional
            </Typography>
            <Box sx={dividerStyles.gradientDivider} />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}
            >
              Mi trayectoria profesional y los hitos alcanzados en cada etapa de mi carrera como desarrollador
            </Typography>
          </Box>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Paper
            elevation={2}
            sx={{
              p: 4,
              mb: 8,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.95) 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`
            }}
          >
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 4 }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        mx: 'auto',
                        mb: 1,
                        width: 56,
                        height: 56
                      }}
                    >
                      <stat.icon sx={{ fontSize: 28 }} />
                    </Avatar>
                    <Typography
                      variant="h3"
                      fontWeight={700}
                      color="primary"
                      sx={{ mb: 1 }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight={600}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Paper>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Timeline position="alternate">
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineSeparator>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <TimelineDot
                      sx={{
                        bgcolor: experience.color,
                        width: 60,
                        height: 60,
                        border: theme.palette.mode === 'dark' 
                          ? '4px solid rgba(30, 41, 59, 1)'
                          : '4px solid white',
                        boxShadow: `0 4px 20px ${experience.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {experience.current ? (
                        <TrendingUp sx={{ color: 'white', fontSize: 28 }} />
                      ) : (
                        <Work sx={{ color: 'white', fontSize: 28 }} />
                      )}
                    </TimelineDot>
                  </motion.div>
                  {index < experiences.length - 1 && (
                    <TimelineConnector
                      sx={{
                        bgcolor: 'primary.light',
                        width: 3
                      }}
                    />
                  )}
                </TimelineSeparator>

                <TimelineContent sx={{ py: 2 }}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        ...cardStyles.glassCard,
                        p: 4,
                        position: 'relative',
                        '&:hover': {
                          ...cardStyles.glassCard['&:hover'],
                          transform: 'translateY(-4px)',
                        }
                      }}
                    >

                      <CardContent sx={{ p: 0 }}>
                        {/* Header */}
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="h5" fontWeight={700} gutterBottom>
                            {experience.position}
                          </Typography>
                          <Typography
                            variant="h6"
                            color="primary"
                            fontWeight={600}
                            sx={{ mb: 2 }}
                          >
                            {experience.company}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                            <Chip
                              icon={<DateRange />}
                              label={experience.period}
                              size="small"
                              variant="outlined"
                              sx={{ 
                                borderColor: theme.palette.mode === 'dark' ? '#60A5FA' : 'primary.main', 
                                color: theme.palette.mode === 'dark' ? '#60A5FA' : 'primary.main',
                                margin: 0
                              }}
                            />
                            <Chip
                              icon={<LocationOn />}
                              label={experience.location}
                              size="small"
                              variant="outlined"
                              sx={{ 
                                borderColor: theme.palette.mode === 'dark' ? '#60A5FA' : 'primary.main', 
                                color: theme.palette.mode === 'dark' ? '#60A5FA' : 'primary.main',
                                margin: 0
                              }}
                            />
                            <Chip
                              icon={<Schedule />}
                              label={experience.type}
                              size="small"
                              variant="outlined"
                              sx={{ 
                                borderColor: theme.palette.mode === 'dark' ? '#60A5FA' : 'primary.main', 
                                color: theme.palette.mode === 'dark' ? '#60A5FA' : 'primary.main',
                                margin: 0
                              }}
                            />
                          </Box>
                        </Box>

                        {/* Description */}
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ mb: 3, lineHeight: 1.7 }}
                        >
                          {experience.description}
                        </Typography>

                        {/* Achievements */}
                        <Box sx={{ mb: 3 }}>
                          <Typography 
                            variant="h6" 
                            fontWeight={600} 
                            sx={{ 
                              mb: 2,
                              color: theme.palette.mode === 'dark' ? 'text.primary' : 'text.primary'
                            }}
                          >
                            Logros principales:
                          </Typography>
                          <List dense>
                            {experience.achievements.map((achievement, idx) => (
                              <ListItem key={idx} sx={{ pl: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                  <CheckCircle 
                                    sx={{ 
                                      color: theme.palette.mode === 'dark' ? '#4ADE80' : 'success.main', 
                                      fontSize: 20 
                                    }} 
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  primary={achievement}
                                  primaryTypographyProps={{
                                    variant: 'body2',
                                    sx: { lineHeight: 1.6 }
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Box>

                        <Divider 
                          sx={{ 
                            my: 3,
                            borderColor: theme.palette.mode === 'dark' 
                              ? 'rgba(59, 130, 246, 0.2)'
                              : 'rgba(0, 0, 0, 0.12)'
                          }} 
                        />

                        {/* Technologies */}
                        <Box sx={{ mb: 3 }}>
                          <Typography 
                            variant="body2" 
                            fontWeight={600} 
                            sx={{ 
                              mb: 2,
                              color: theme.palette.mode === 'dark' ? 'text.primary' : 'text.primary'
                            }}
                          >
                            Tecnologías utilizadas:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {experience.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                  backgroundColor: theme.palette.mode === 'dark'
                                    ? 'rgba(59, 130, 246, 0.15)'
                                    : `${experience.color}20`,
                                  color: theme.palette.mode === 'dark'
                                    ? '#60A5FA'
                                    : experience.color,
                                  fontWeight: 500,
                                  border: theme.palette.mode === 'dark'
                                    ? '1px solid rgba(59, 130, 246, 0.3)'
                                    : `1px solid ${experience.color}40`,
                                  margin: 0,
                                  '&:hover': {
                                    backgroundColor: theme.palette.mode === 'dark'
                                      ? '#60A5FA'
                                      : experience.color,
                                    color: 'white',
                                  }
                                }}
                              />
                            ))}
                          </Box>
                        </Box>

                        {/* Projects */}
                        <Box>
                          <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                            Proyectos destacados:
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {experience.projects.join(', ')}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;
