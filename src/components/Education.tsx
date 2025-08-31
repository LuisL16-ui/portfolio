import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  Button,
  useTheme
} from '@mui/material';
import {
  School,
  EmojiEvents,
  DateRange,
  LocationOn,
  Launch,
  CheckCircle
} from '@mui/icons-material';
import { createCardStyles, createTitleStyles } from '../styles/cardStyles';

const Education = () => {
  const theme = useTheme();
  const cardStyles = createCardStyles(theme);
  const titleStyles = createTitleStyles(theme);
  
  const education = [
    {
      id: 1,
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Instituto Tecnológico de México Campus Culiacán",
      period: "2020 - Actualidad",
      location: "Sinaloa, México",
      type: "Carrera Universitaria",
      description: "Formación integral en desarrollo de software, algoritmos, estructuras de datos y gestión de sistemas. Enfoque en tecnologías modernas de desarrollo.",
      highlights: [
        "Estudiante activo con buen rendimiento académico",
        "Participación en proyectos de desarrollo de software",
        "Aprendizaje de metodologías de desarrollo ágil"
      ],
      skills: ["Programación", "Estructuras de datos", "Algoritmos", "Bases de datos", "Desarrollo de software", "Metodologías ágiles"],
      color: "#3B82F6"
    },
    {
      id: 2,
      degree: "Preparatoria General con énfasis en Informática",
      institution: "Preparatoria Rafael Ramírez",
      period: "2017 - 2020",
      location: "Sinaloa, México",
      type: "Educación Media Superior",
      description: "Formación en ciencias exactas con especialización en informática, proporcionando bases sólidas para estudios superiores en tecnología.",
      highlights: [
        "Enfoque especial en matemáticas e informática",
        "Participación en actividades académicas relacionadas con tecnología"
      ],
      skills: ["Matemáticas", "Informática básica", "Lógica de programación", "Fundamentos de computación"],
      color: "#10B981"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Desarrollo con Node.js y TypeScript",
      issuer: "Aprendizaje autodidacta",
      date: "2024",
      credentialId: "AUTO-2024-001",
      description: "Desarrollo de habilidades en backend con Node.js y TypeScript",
      skills: ["Node.js", "TypeScript", "Express", "API Development"],
      link: "#",
      badge: "?"
    },
    {
      id: 2,
      name: "Desarrollo Frontend con React",
      issuer: "Aprendizaje autodidacta",
      date: "2023",
      credentialId: "AUTO-2023-001", 
      description: "Dominio de React para desarrollo de interfaces de usuario",
      skills: ["React", "JavaScript", "Material-UI", "Frontend Development"],
      link: "#",
      badge: "?"
    },
    {
      id: 3,
      name: "Bases de Datos PostgreSQL",
      issuer: "Práctica profesional",
      date: "2024",
      credentialId: "PRAC-2024-001",
      description: "Experiencia trabajando con PostgreSQL en proyectos reales",
      skills: ["PostgreSQL", "SQL", "Database Design", "Data Management"],
      link: "#",
      badge: "?"
    },
  ];

  const continuousLearning = [
    "Estudiante activo en Ingeniería en Sistemas Computacionales",
    "Aprendizaje autodidacta a través de documentación oficial y tutoriales",
    "Práctica constante con proyectos personales y académicos",
    "Experimentación con nuevas tecnologías en tiempo libre"
  ];

  return (
    <Box
      id="education"
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
              sx={{
                background: theme.palette.gradient?.primary || 'linear-gradient(135deg, #1F2937 0%, #3B82F6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Educación y Certificaciones
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                background: theme.palette.gradient?.primary || 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                mx: 'auto',
                borderRadius: 2,
                mb: 3
              }}
            />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}
            >
              Mi formación académica y certificaciones profesionales que respaldan mi expertise técnico y compromiso con el aprendizaje continuo
            </Typography>
          </Box>
        </motion.div>

        {/* Formal Education */}
        <Box sx={{ mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
                <School sx={{ fontSize: 28 }} />
              </Avatar>
              <Typography 
                variant="h4" 
                fontWeight={700} 
                sx={titleStyles.gradientTitle}
              >
                Formación Académica
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    ...cardStyles.glassCard,
                    '&:hover': {
                      ...cardStyles.glassCard['&:hover'],
                      transform: 'translateY(-4px)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
                      {/* Left Column - Main Info */}
                      <Box sx={{ flex: { xs: 1, lg: 2 } }}>
                        <Chip
                          label={edu.type}
                          sx={{
                            mb: 2,
                            backgroundColor: edu.color,
                            color: 'white',
                            fontWeight: 600
                          }}
                        />
                        
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                          {edu.degree}
                        </Typography>
                        <Typography variant="h6" color="primary" fontWeight={600} sx={{ mb: 3 }}>
                          {edu.institution}
                        </Typography>
                        
                        <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                          <Chip
                            icon={<DateRange />}
                            label={edu.period}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              borderColor: theme.palette.mode === 'dark' ? '#60A5FA' : 'primary.main', 
                              color: theme.palette.mode === 'dark' ? '#60A5FA' : 'primary.main' 
                            }}
                          />
                          <Chip
                            icon={<LocationOn />}
                            label={edu.location}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              borderColor: theme.palette.mode === 'dark' ? '#60A5FA' : 'primary.main', 
                              color: theme.palette.mode === 'dark' ? '#60A5FA' : 'primary.main' 
                            }}
                          />
                        </Stack>

                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ mb: 3, lineHeight: 1.7 }}
                        >
                          {edu.description}
                        </Typography>

                        {/* Highlights */}
                        <Box sx={{ mb: 3 }}>
                          <Typography 
                            variant="h6" 
                            fontWeight={600} 
                            sx={{ 
                              mb: 2,
                              color: theme.palette.mode === 'dark' ? 'text.primary' : 'text.primary'
                            }}
                          >
                            Aspectos destacados
                          </Typography>
                          <List dense>
                            {edu.highlights.map((highlight, hIndex) => (
                              <ListItem key={hIndex} sx={{ pl: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                  <EmojiEvents 
                                    sx={{ 
                                      color: theme.palette.mode === 'dark' ? '#60A5FA' : edu.color, 
                                      fontSize: 20 
                                    }} 
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  primary={highlight}
                                  primaryTypographyProps={{
                                    variant: 'body2',
                                    sx: { lineHeight: 1.6 }
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </Box>

                      {/* Right Column - Skills */}
                      <Box sx={{ flex: { xs: 1, lg: 1 } }}>
                        <Paper
                          elevation={2}
                          sx={{
                            p: 3,
                            background: theme.palette.mode === 'dark'
                              ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.8) 100%)'
                              : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
                            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <Typography 
                            variant="h6" 
                            fontWeight={600} 
                            sx={{ 
                              mb: 2,
                              color: theme.palette.mode === 'dark' ? 'text.primary' : 'text.primary'
                            }}
                          >
                            Competencias adquiridas
                          </Typography>
                          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                            {edu.skills.map((skill) => (
                              <Chip
                                key={skill}
                                label={skill}
                                size="small"
                                sx={{
                                  backgroundColor: theme.palette.mode === 'dark'
                                    ? `rgba(59, 130, 246, 0.15)`
                                    : `${edu.color}20`,
                                  color: theme.palette.mode === 'dark'
                                    ? '#60A5FA'
                                    : edu.color,
                                  fontWeight: 500,
                                  border: theme.palette.mode === 'dark'
                                    ? '1px solid rgba(59, 130, 246, 0.3)'
                                    : `1px solid ${edu.color}40`
                                }}
                              />
                            ))}
                          </Stack>
                        </Paper>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Certifications */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
                <EmojiEvents sx={{ fontSize: 28 }} />
              </Avatar>
              <Typography 
                variant="h4" 
                fontWeight={700} 
                sx={titleStyles.gradientTitle}
              >
                Certificaciones Profesionales
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card
                  sx={{
                    ...cardStyles.glassCard,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center', flexGrow: 1 }}>
                    {/* Badge and Title */}
                    <Box sx={{ mb: 2 }}>
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          mb: 1,
                          filter: theme.palette.mode === 'dark' 
                            ? 'brightness(1.2) contrast(1.1)'
                            : 'none'
                        }}
                      >
                        {cert.badge}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        fontWeight={700} 
                        gutterBottom
                        sx={{
                          color: theme.palette.mode === 'dark' 
                            ? 'text.primary'
                            : 'text.primary'
                        }}
                      >
                        {cert.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="primary" 
                        fontWeight={600}
                        sx={{
                          color: theme.palette.mode === 'dark'
                            ? '#60A5FA'
                            : 'primary.main'
                        }}
                      >
                        {cert.issuer}
                      </Typography>
                    </Box>

                    <Divider 
                      sx={{ 
                        my: 2,
                        borderColor: theme.palette.mode === 'dark' 
                          ? 'rgba(59, 130, 246, 0.2)'
                          : 'rgba(0, 0, 0, 0.12)'
                      }} 
                    />

                    {/* Date and ID */}
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Emitido: {cert.date}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        ID: {cert.credentialId}
                      </Typography>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.6 }}
                    >
                      {cert.description}
                    </Typography>

                    {/* Skills */}
                    <Box sx={{ mb: 3 }}>
                      <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                        {cert.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            sx={{
                              fontSize: '0.75rem',
                              height: 24,
                              backgroundColor: theme.palette.mode === 'dark' 
                                ? 'rgba(59, 130, 246, 0.2)'
                                : 'primary.light',
                              color: theme.palette.mode === 'dark'
                                ? '#3B82F6'
                                : 'white',
                              border: theme.palette.mode === 'dark'
                                ? '1px solid rgba(59, 130, 246, 0.3)'
                                : 'none'
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>

                    {/* Verify Link */}
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Launch />}
                      href={cert.link}
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease-in-out'
                      }}
                    >
                      Verificar
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card
            sx={{
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.95) 100%)'
                : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
              p: 4
            }}
          >
            <Typography variant="h4" fontWeight={700} sx={{ textAlign: 'center', mb: 4 }}>
              Compromiso con el Aprendizaje Continuo
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.7 }}
                >
                  La tecnología evoluciona constantemente, y mi pasión por el aprendizaje me mantiene 
                  actualizado con las últimas tendencias y mejores prácticas del desarrollo de software.
                </Typography>
                
                <List>
                  {continuousLearning.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ListItem sx={{ pl: 0 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <CheckCircle sx={{ color: 'primary.main', fontSize: 16 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { lineHeight: 1.6 }
                          }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      fontSize: 60,
                      bgcolor: 'transparent',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    🎓
                  </Avatar>
                </motion.div>
                <Typography variant="h6" fontWeight={600} color="primary">
                  Siempre aprendiendo, siempre creciendo
                </Typography>
              </Box>
            </Box>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;
