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
  useTheme,
  Modal,
  IconButton
} from '@mui/material';
import {
  School,
  EmojiEvents,
  DateRange,
  LocationOn,
  Launch,
  Visibility,
  Close
} from '@mui/icons-material';
import { createCardStyles, createTitleStyles } from '../styles/cardStyles';
import { useState } from 'react';

const Education = () => {
  const theme = useTheme();
  const cardStyles = createCardStyles(theme);
  const titleStyles = createTitleStyles(theme);
  
  // Estado para el modal de previsualización
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  const handleImageClick = (cert: any) => {
    setSelectedImage({
      src: cert.badge,
      alt: `Certificado: ${cert.name}`,
      title: cert.name
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  
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
      name: "JavaScript Moderno",
      issuer: "Aprendizaje autodidacta",
      date: "2024",
      credentialId: "UC-0c2da7a5-2af4-4b35-a976-18172db03640",
      description: "Desarrollo de habilidades en JavaScript",
      skills: ["JavaScript","DOM","Fetch API", "Async/Await","localStorage"],
      link: "https://www.udemy.com/certificate/UC-0c2da7a5-2af4-4b35-a976-18172db03640/",
      badge: "/UC-0c2da7a5-2af4-4b35-a976-18172db03640.jpg"
    },
    {
      id: 2,
      name: "Desarrollo web con Node.js",
      issuer: "Aprendizaje autodidacta",
      date: "2025",
      credentialId: "UC-39f63f80-0d6e-465f-b461-78d131b9a2ef",
      description: "Dominio de Node.js para desarrollo de aplicaciones web",
      skills: ["Node.js", "Express", "MongoDB","MySQL","PostgreSQL","REST API","ORMs"],
      link: "https://www.udemy.com/certificate/UC-39f63f80-0d6e-465f-b461-78d131b9a2ef/",
      badge: "/UC-39f63f80-0d6e-465f-b461-78d131b9a2ef.jpg"
    },
    {
      id: 3,
      name: "###",
      issuer: "###",
      date: "####",
      credentialId: "###",
      description: "##",
      skills: ["##", "##"],
      link: "#",
      badge: "https://imgs.search.brave.com/vvfZfG06PGYuoz-7mGPBGZuOXanMgyL8RabOdAZaGPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLWdyYXRp/cy9mb25kby1wYW50/YWxsYS1uZW9uLXBy/b3hpbWFtZW50ZV8y/My0yMTQ4ODkxMTc5/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA"
    },
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
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
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
                                    : `1px solid ${edu.color}40`,
                                  margin: 0
                                }}
                              />
                            ))}
                          </Box>
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
                      <Box
                        sx={{
                          width: 120,
                          height: 80,
                          mx: 'auto',
                          mb: 2,
                          borderRadius: 2,
                          overflow: 'hidden',
                          boxShadow: theme.palette.mode === 'dark' 
                            ? '0 4px 12px rgba(59, 130, 246, 0.2)'
                            : '0 4px 12px rgba(0, 0, 0, 0.1)',
                          border: `2px solid ${theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                          position: 'relative',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: theme.palette.mode === 'dark' 
                              ? '0 8px 24px rgba(59, 130, 246, 0.3)'
                              : '0 8px 24px rgba(0, 0, 0, 0.15)',
                            '& .hover-overlay': {
                              opacity: 1
                            }
                          }
                        }}
                        onClick={() => handleImageClick(cert)}
                      >
                        <img
                          src={cert.badge}
                          alt={`Certificado: ${cert.name}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          onLoad={() => {
                            console.log(`Imagen cargada correctamente: ${cert.badge}`);
                          }}
                          onError={(e) => {
                            console.error(`Error al cargar imagen: ${cert.badge}`);
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div style="
                                  width: 100%; 
                                  height: 100%; 
                                  display: flex; 
                                  align-items: center; 
                                  justify-content: center; 
                                  background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
                                  color: white;
                                  font-size: 24px;
                                  font-weight: bold;
                                  flex-direction: column;
                                  text-align: center;
                                ">
                                  <div style="font-size: 32px; margin-bottom: 4px;">🏆</div>
                                  <div style="font-size: 10px;">Certificado</div>
                                </div>
                              `;
                            }
                          }}
                        />
                        
                        {/* Overlay de hover */}
                        <Box
                          className="hover-overlay"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            opacity: 0,
                            transition: 'opacity 0.3s ease-in-out'
                          }}
                        >
                          <Visibility sx={{ color: 'white', fontSize: 24, mb: 0.5 }} />
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'white',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: 1
                            }}
                          >
                            Ver
                          </Typography>
                        </Box>
                      </Box>
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
                      target="_blank"
                      rel="noopener noreferrer"
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
        </motion.div>

        {/* Modal de previsualización de certificado */}
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            overflowY: 'auto'
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '95vw',
              maxHeight: '95vh',
              outline: 'none',
              display: 'flex',
              flexDirection: 'column',
              my: 'auto'
            }}
          >
            {/* Botón de cerrar */}
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: 'absolute',
                top: -16,
                right: -16,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                zIndex: 1000,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  transform: 'scale(1.1)'
                }
              }}
            >
              <Close />
            </IconButton>

            {/* Contenedor scrolleable de la imagen */}
            {selectedImage && (
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  border: '4px solid white',
                  maxHeight: '90vh',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Área scrolleable de la imagen */}
                <Box
                  sx={{
                    overflow: 'auto',
                    maxHeight: 'calc(90vh - 80px)', // Restamos espacio para el título
                    '&::-webkit-scrollbar': {
                      width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                      backgroundColor: 'rgba(0,0,0,0.1)',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      borderRadius: '4px',
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                      }
                    }
                  }}
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      minWidth: '300px', // Ancho mínimo para legibilidad
                    }}
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div style="
                            width: 100%; 
                            height: 300px; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
                            color: white;
                            font-size: 24px;
                            font-weight: bold;
                            flex-direction: column;
                            text-align: center;
                          ">
                            <div style="font-size: 48px; margin-bottom: 8px;">🏆</div>
                            <div style="font-size: 16px;">Certificado no disponible</div>
                            <div style="font-size: 12px; margin-top: 8px; opacity: 0.8;">Verifica que la imagen esté en la carpeta public</div>
                          </div>
                        `;
                      }
                    }}
                  />
                </Box>
                
                {/* Título del certificado - Fixed en la parte inferior */}
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(30, 41, 59, 0.95)'
                      : 'white',
                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                    flexShrink: 0
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    textAlign="center"
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'white' : 'text.primary'
                    }}
                  >
                    {selectedImage.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    textAlign="center"
                    display="block"
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                      mt: 0.5
                    }}
                  >
                    Desplázate para ver el certificado completo
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default Education;
