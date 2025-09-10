import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Tabs,
  Tab,
  Paper,
  useTheme
} from '@mui/material';
import {
  GitHub,
  Launch,
  Person
} from '@mui/icons-material';
import { createCardStyles, createTitleStyles, createDividerStyles } from '../styles/cardStyles';

const Projects = () => {
  const theme = useTheme();
  const cardStyles = createCardStyles(theme);
  const titleStyles = createTitleStyles(theme);
  const dividerStyles = createDividerStyles(theme);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Web Apps' },
    { id: 'academic', name: 'Académicos' },
    { id: 'freelance', name: 'Freelance' }
  ];

  const projects = [
    {
      id: 1,
      title: "Sistema de validación de PIN vía WhatsApp",
      description: "Sistema desarrollado para validar PIN de usuarios a través de WhatsApp, implementando comunicación automatizada y validación segura.",
      image: "https://imgs.search.brave.com/vvfZfG06PGYuoz-7mGPBGZuOXanMgyL8RabOdAZaGPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLWdyYXRp/cy9mb25kby1wYW50/YWxsYS1uZW9uLXBy/b3hpbWFtZW50ZV8y/My0yMTQ4ODkxMTc5/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA",
      technologies: ["Node.js", "TypeScript", "WhatsApp API", "PostgreSQL"],
      category: "web",
      role: "Full-Stack Developer",
      contribution: "Desarrollo completo del sistema de validación, implementación de API de WhatsApp y manejo de base de datos.",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Portafolio Personal",
      description: "Sitio web personal desarrollado con React y Material-UI, mostrando mis habilidades y proyectos de desarrollo web.",
      image: "https://imgs.search.brave.com/vvfZfG06PGYuoz-7mGPBGZuOXanMgyL8RabOdAZaGPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLWdyYXRp/cy9mb25kby1wYW50/YWxsYS1uZW9uLXBy/b3hpbWFtZW50ZV8y/My0yMTQ4ODkxMTc5/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA",
      technologies: ["React", "TypeScript", "Material-UI", "Vite"],
      category: "web",
      role: "Frontend Developer",
      contribution: "Diseño y desarrollo completo del sitio web, implementación de componentes responsivos y animaciones.",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Proyecto Académico - Base de Datos",
      description: "Proyecto universitario enfocado en el diseño y desarrollo de bases de datos relacionales utilizando PostgreSQL.",
      image: "https://imgs.search.brave.com/vvfZfG06PGYuoz-7mGPBGZuOXanMgyL8RabOdAZaGPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLWdyYXRp/cy9mb25kby1wYW50/YWxsYS1uZW9uLXBy/b3hpbWFtZW50ZV8y/My0yMTQ4ODkxMTc5/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA",
      technologies: ["PostgreSQL", "SQL", "Node.js", "Database Design"],
      category: "academic",
      role: "Database Developer",
      contribution: "Diseño de esquema de base de datos, implementación de consultas complejas y optimización de rendimiento.",
      github: "#",
      demo: "#"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Box
      id="projects"
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
              Proyectos
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
              Una selección de proyectos que demuestran mis habilidades técnicas y creatividad en el desarrollo de software
            </Typography>
          </Box>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper
            elevation={2}
            sx={{
              p: 2,
              mb: 6,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
              border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
              backdropFilter: 'blur(10px)'
            }}
          >
            <Tabs
              value={selectedCategory}
              onChange={(_, newValue) => setSelectedCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  color: theme.palette.mode === 'dark' ? 'text.secondary' : 'text.primary',
                  fontWeight: 600,
                  '&.Mui-selected': {
                    color: theme.palette.primary.main
                  }
                }
              }}
            >
              {categories.map((category) => (
                <Tab
                  key={category.id}
                  label={category.name}
                  value={category.id}
                />
              ))}
            </Tabs>
          </Paper>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={titleStyles.gradientTitle}
          >
            {selectedCategory === 'all' ? 'Todos los Proyectos' : `Proyectos de ${categories.find(c => c.id === selectedCategory)?.name}`}
          </Typography>
          <Box sx={dividerStyles.gradientDivider} />

          <Box sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 3, md: 4 },
            mx: 'auto',
            maxWidth: '1400px'
          }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                style={{ 
                  width: '100%',
                  maxWidth: '380px',
                  minWidth: '300px',
                  flex: '1 1 auto'
                }}
              >
                <Card sx={{
                  ...cardStyles.projectCard,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%'
                }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 200,
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease-in-out'
                    }}
                    image={project.image}
                    alt={project.title}
                  />

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {project.title}
                    </Typography>
                    
                    <Chip
                      label={project.role}
                      size="small"
                      icon={<Person />}
                      sx={{
                        mb: 2,
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
                        color: theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : theme.palette.primary.main,
                        fontWeight: 500
                      }}
                    />

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.6 }}
                    >
                      {project.description}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.5, fontStyle: 'italic' }}
                    >
                      <strong>Mi contribución:</strong> {project.contribution}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                        Tecnologías:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'primary.light',
                              color: theme.palette.mode === 'dark' ? '#3B82F6' : 'white',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                              margin: 0
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>

                  {/* Actions */}
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                      sx={{
                        mr: 1,
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      Código
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<Launch />}
                      href={project.demo}
                      target="_blank"
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.dark,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease-in-out'
                      }}
                    >
                      Ver Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              ¿Interesado en colaborar?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Siempre estoy abierto a discutir nuevos proyectos y oportunidades.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: theme.palette.primary.main,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out'
              }}
              href="#contact"
            >
              Contactar
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;