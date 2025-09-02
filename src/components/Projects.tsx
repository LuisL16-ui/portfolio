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
  Stack,
  IconButton,
  Badge,
  Tabs,
  Tab,
  Paper,
  Avatar,
  useTheme
} from '@mui/material';
import {
  GitHub,
  Launch,
  Code,
  Star,
  Visibility,
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
      demo: "#",
      featured: true
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
      demo: "#",
      featured: true
    },
    {
      id: 3,
      title: "Proyecto Académico - Base de Datos",
      description: "Proyecto universitario enfocado en el diseño y desarrollo de bases de datos relacionales utilizando PostgreSQL.",
      image: "https://imgs.search.brave.com/vvfZfG06PGYuoz-7mGPBGZuOXanMgyL8RabOdAZaGPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLWdyYXRp/cy9mb25kby1wYW50/YWxsYS1uZW9uLXBy/b3hpbWFtZW50ZV8y/My0yMTQ4ODkxMTc5/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA",
      technologies: ["PostgreSQL", "SQL", "Node.js", "Database Design"],
      category: "academic",
      role: "Database",
      contribution: "Diseño de esquema de base de datos, implementación de consultas complejas y optimización de rendimiento.",
      github: "#",
      demo: "#",
      featured: true
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

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
              sx={titleStyles.gradientTitle}
            >
              Proyectos Destacados
            </Typography>
            <Box
              sx={dividerStyles.gradientDivider}
            />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}
            >
              Una selección de proyectos que demuestran mis habilidades técnicas y capacidad para resolver problemas complejos
            </Typography>
          </Box>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper
            elevation={2}
            sx={cardStyles.tabsPaper}
          >
            <Tabs
              value={selectedCategory}
              onChange={(_, newValue) => setSelectedCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  fontWeight: 600,
                  minHeight: 48,
                  '&.Mui-selected': {
                    color: 'primary.main',
                  }
                },
                '& .MuiTabs-indicator': {
                  height: 3,
                  borderRadius: 2,
                  background: theme.palette.gradient?.primary || 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
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

        {/* Featured Projects - Large Cards */}
        {selectedCategory === 'all' && (
          <Box sx={{ mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h4" 
                fontWeight={700} 
                sx={titleStyles.gradientTitle}
              >
                Proyectos Principales
              </Typography>
              <Box sx={dividerStyles.gradientDivider} />
            </motion.div>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {featuredProjects.map((project, index) => (
              <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              >
              <Card
              sx={{
                ...cardStyles.featuredProjectCard,
                flexDirection: { xs: 'column', lg: index % 2 === 1 ? 'row-reverse' : 'row' },
                gap: { xs: 2, lg: 4 },
                p: { xs: 2, lg: 4 },
                alignItems: 'center',
              }}
              >
              {/* Project Image */}
              <Box sx={{ 
                position: 'relative', 
                flex: { xs: 'none', lg: '1 1 50%' }, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                width: '100%'
              }}>
                <motion.div whileHover={{ scale: 1.02 }} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <CardMedia
                component="img"
                sx={{
                height: { xs: 250, lg: 350 },
                objectFit: 'cover',
                width: { xs: '100%', lg: 'auto' },
                maxWidth: '100%',
                borderRadius: 2,
                }}
                image={project.image}
                alt={project.title}
                />
                <Box
                sx={{
                position: 'absolute',
                top: { xs: 8, lg: 16 },
                right: { xs: 8, lg: 16 },
                display: 'flex',
                gap: 1,
                zIndex: 2
                }}
                >
                <Badge badgeContent={<Star sx={{ fontSize: 12 }} />} color="primary">
                <Chip
                  label="Destacado"
                  size="small"
                  sx={{
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  fontWeight: 600,
                  backdropFilter: 'blur(8px)',
                  }}
                />
                </Badge>
                </Box>
                </motion.div>
              </Box>

              {/* Project Content */}
              <CardContent sx={{ flex: '1 1 50%', p: { xs: 2, lg: 4 } }}>
                <Box sx={{ mb: 2 }}>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                {project.title}
                </Typography>
                <Chip
                label={project.role}
                size="small"
                icon={<Person />}
                sx={{
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                fontWeight: 600,
                }}
                />
                </Box>

                <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.7, fontSize: '1.1rem' }}
                >
                {project.description}
                </Typography>

                <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3, fontStyle: 'italic' }}
                >
                <strong>Mi contribución:</strong> {project.contribution}
                </Typography>

                {/* Technologies */}
                <Box sx={{ mb: 4 }}>
                <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                Tecnologías utilizadas:
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {project.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.mode === 'dark' ? 'black' : 'white',
                  },
                  }}
                />
                ))}
                </Stack>
                </Box>

                {/* Action Buttons */}
                <CardActions sx={{ p: 0, gap: 1 }}>
                <Button
                variant="contained"
                startIcon={<GitHub />}
                href={project.github}
                sx={{
                background: theme.palette.gradient?.primary || 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                fontWeight: 600,
                '&:hover': {
                  background: theme.palette.gradient?.secondary || 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                },
                transition: 'all 0.3s ease-in-out',
                }}
                >
                Código
                </Button>
                <Button
                variant="outlined"
                startIcon={<Launch />}
                href={project.demo}
                sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease-in-out',
                }}
                >
                Ver Demo
                </Button>
                </CardActions>
              </CardContent>
              </Card>
              </motion.div>
              ))}
            </Box>
          </Box>
        )}

        {/* All Projects Grid */}
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

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
            {filteredProjects.map((project, index) => (
              <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -8 }}
              >
          <Card
            sx={cardStyles.projectCard}
          >
            {/* Featured Badge */}
            {project.featured && (
              <Box
                sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 1
                }}
              >
                <Chip
            icon={<Star sx={{ fontSize: 16 }} />}
            label="Destacado"
            size="small"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
            }}
                />
              </Box>
            )}

            <CardMedia
              component="img"
              className="project-image"
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

              <Box sx={{ mb: 2 }}>
                <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 0.5 }}>
            {project.technologies.slice(0, 3).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.75rem',
                  height: 24,
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
                  }
                }}
              />
            ))}
            {project.technologies.length > 3 && (
              <Chip
                label={`+${project.technologies.length - 3}`}
                size="small"
                sx={{
                  fontSize: '0.75rem',
                  height: 24,
                  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
                  color: theme.palette.text.secondary
                }}
              />
            )}
                </Stack>
              </Box>
            </CardContent>

            <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
              <IconButton
                href={project.github}
                sx={{
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.contrastText,
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease-in-out'
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href={project.demo}
                sx={{
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.contrastText,
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease-in-out'
                }}
              >
                <Launch />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                size="small"
                endIcon={<Visibility />}
                sx={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText
            }
                }}
              >
                Ver más
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
          <Card
            sx={{
              mt: 8,
              p: 4,
              textAlign: 'center',
              background: theme.palette.gradient?.primary || 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
              color: 'white'
            }}
          >
            <Avatar
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                mx: 'auto',
                mb: 2,
                width: 64,
                height: 64
              }}
            >
              <Code sx={{ fontSize: 32 }} />
            </Avatar>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              ¿Te gusta lo que ves?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, maxWidth: 500, mx: 'auto' }}>
              Estos son solo algunos ejemplos de mi trabajo. Cada proyecto representa horas de dedicación y aprendizaje continuo.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
              backgroundColor: 'white',
              color: theme.palette.mode === 'dark' ? 'white' : 'black',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'gray.100',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              },
              transition: 'all 0.3s ease-in-out'
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Trabajemos juntos
            </Button>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
