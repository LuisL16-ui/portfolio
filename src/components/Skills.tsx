import { motion } from 'framer-motion';
import { memo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
  Stack,
  Button,
  useTheme
} from '@mui/material';
import {
  Code,
  Language,
  Storage,
  Build,
  Groups,
  Psychology,
  TrendingUp,
  EmojiEvents,
  Dataset
} from '@mui/icons-material';
import { createTitleStyles, createDividerStyles } from '../styles/cardStyles';

const Skills = () => {
  const theme = useTheme();
  const titleStyles = createTitleStyles(theme);
  const dividerStyles = createDividerStyles(theme);
  const isDark = theme.palette.mode === 'dark';
  const skillCategories = [
    {
      title: "Frontend",
      icon: Language,
      color: "#3B82F6",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
      ]
    },
    {
      title: "Backend",
      icon: Storage,
      color: "#10B981",
      skills: [
        { name: "Node" },
        { name: "Express" },
        { name: "NestJS" },
        { name: "Java" },
        { name: "Python" }
      ]
    },
    {
      title: "Bases de Datos",
      icon: Dataset,
      color: "#8B5CF6",
      skills: [
        { name: "PostgreSQL" },
        { name: "SQL Server" },
        { name: "MongoDB" },
        { name: "MariaDB" },
      ]
    },
    {
      title: "Herramientas",
      icon: Build,
      color: "#F59E0B",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "Docker" },
        { name: "VS Code" },
      ]
    },
    {
      title: "Conceptos",
      icon: Psychology,
      color: "#EF4444",
      skills: [
        { name: "API REST" },
        { name: "Responsive Design" },
        { name: "Clean Code" },
        { name: "SCRUM" },
        { name: "Desing Paterns"}
      ]
    }
  ];

  const softSkills = [
    { name: "Trabajo en equipo", icon: Groups, color: "#3B82F6" },
    { name: "Comunicación efectiva", icon: Language, color: "#10B981" },
    { name: "Resolución de problemas", icon: Psychology, color: "#F59E0B" },
    { name: "Aprendizaje continuo", icon: EmojiEvents, color: "#8B5CF6" },
    { name: "Gestión de proyectos", icon: Build, color: "#EF4444" },
    { name: "Adaptabilidad", icon: TrendingUp, color: "#06B6D4" }
  ];

  const techStack = [
    "JavaScript", "TypeScript", "Java", "Python", "React", "Node", "HTML5", "CSS3", 
    "PostgreSQL", "Docker", "Git", "GitHub", "Postman",
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: isDark 
          ? 'linear-gradient(135deg, #1E293B 0%, #334155 50%, #475569 100%)'
          : 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 50%, #EFF6FF 100%)'
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
              Habilidades
            </Typography>
            <Box sx={dividerStyles.gradientDivider} />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}
            >
              Dominio técnico y habilidades blandas que me permiten crear soluciones completas y trabajar efectivamente en equipo
            </Typography>
          </Box>
        </motion.div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card
            sx={{
              p: 2,
              height: '100%',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
              '&:hover': {
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 8px 32px rgba(59, 130, 246, 0.3)'
                  : '0 8px 32px rgba(59, 130, 246, 0.15)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease-in-out',
              mb: 5
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ mb: 3, textAlign: 'center' }}
              color="primary"
            >
              Mi Stack Tecnológico
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 1
              }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Chip
                    label={tech}
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                      },
                      transition: 'all 0.3s ease-in-out'
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Card>
        </motion.div>

        {/* Technical Skills */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: 'repeat(5, 1fr)' }, gap: 4, mb: 8 }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card
                sx={{
                  p: 2,
                  height: '100%',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.9) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
                  '&:hover': {
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(59, 130, 246, 0.3)'
                      : '0 8px 32px rgba(59, 130, 246, 0.15)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Category Header */}
                  <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Avatar
                      sx={{
                        bgcolor: `${category.color}30`,
                        color: category.color,
                        width: 72,
                        height: 72,
                        mx: 'auto',
                        mb: 2,
                        boxShadow: `0 4px 16px ${category.color}40`
                      }}
                    >
                      <category.icon sx={{ fontSize: 32 }} />
                    </Avatar>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color="text.primary"
                      sx={{ 
                        textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                        fontSize: '1.1rem'
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>

                  {/* Skills List */}
                  <Box sx={{ space: 4 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        <Box sx={{ mb: 2 }}>
                          <Typography
                            variant="body2"
                            fontWeight={600}
                            color="text.primary"
                            sx={{ 
                              fontSize: '0.95rem',
                              textShadow: '0 1px 1px rgba(0,0,0,0.05)',
                              textAlign: 'center'
                            }}
                          >
                            {skill.name}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card
            sx={{
              p: 2,
              height: '100%',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
              '&:hover': {
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 8px 32px rgba(59, 130, 246, 0.3)'
                  : '0 8px 32px rgba(59, 130, 246, 0.15)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease-in-out',
              mb: 5
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ mb: 4, textAlign: 'center' }}
              color="primary"
            >
              Competencias Blandas
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }, gap: 3 }}>
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 2,
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'primary.light',
                        color: 'white',
                        '& .MuiAvatar-root': {
                          backgroundColor: 'white',
                          color: 'primary.main'
                        }
                      },
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: `${skill.color}20`,
                        color: skill.color,
                        width: 48,
                        height: 48,
                        mx: 'auto',
                        mb: 1
                      }}
                    >
                      <skill.icon sx={{ fontSize: 20 }} />
                    </Avatar>
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      sx={{ lineHeight: 1.3 }}
                    >
                      {skill.name}
                    </Typography>
                  </Card>
                </motion.div>
              ))}
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
          <Card
            sx={{
              p: 2,
              height: '100%',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
              '&:hover': {
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 8px 32px rgba(59, 130, 246, 0.3)'
                  : '0 8px 32px rgba(59, 130, 246, 0.15)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease-in-out',
              textAlign: 'center'
            }}
          >
            <Avatar
              sx={{
              bgcolor: isDark ? 'primary.dark' : 'primary.main',
              color: isDark ? 'primary.main' : '#FFFFFF',
              mx: 'auto',
              mb: 2,
              width: 64,
              height: 64,
              border: '2px solid',
              }}
            >
              <Code sx={{ fontSize: 32, color: isDark ? '#FFFFFF' : '#000000' }} />
            </Avatar>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              ¿Tienes un proyecto en mente?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, maxWidth: 500, mx: 'auto' }}>
              Trabajemos juntos para hacerlo realidad con estas tecnologías y habilidades.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: isDark ? '#FFFFFF' : '#000000',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'grey.100',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                },
                transition: 'all 0.3s ease-in-out'
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Empezar un proyecto
            </Button>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default memo(Skills);
