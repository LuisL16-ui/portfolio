import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  CircularProgress,
  useTheme
} from '@mui/material'
import { Email, Phone, LocationOn, Send } from '@mui/icons-material'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw23hvgQusaLIe4cJBz93emEUf7qCUiYrRqEa0ubMkwEDKmUJ3ASWCmumeY9mZdoCMw/exec'

const Contact = () => {
  const theme = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMsg('')
    setErrorMsg('')

    try {
      const params = new URLSearchParams()
      params.append('name', formData.name.trim())
      params.append('email', formData.email.trim())
      params.append('subject', formData.subject.trim())
      params.append('message', formData.message.trim())
      params.append('submittedAt', new Date().toISOString())

      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: params.toString()
      })

      if (!res.ok) throw new Error('Error en la solicitud')

      setFormData({ name: '', email: '', subject: '', message: '' })
      setSuccessMsg('¡Mensaje enviado correctamente!')
    } catch (err) {
      console.error(err)
      setErrorMsg('No se pudo enviar el formulario. Intenta más tarde.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>¡Hablemos!</Typography>
            <Typography variant="body1" color="text.secondary">
              Si tienes un proyecto o consulta, llena el formulario y te responderé pronto.
            </Typography>
          </Box>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Nombre"
                  name="name"
                  fullWidth
                  margin="normal"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Asunto"
                  name="subject"
                  fullWidth
                  margin="normal"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <TextField
                  label="Mensaje"
                  name="message"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                {isSubmitting ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                    sx={{ mt: 2 }}
                  >
                    Enviar
                  </Button>
                )}

                {successMsg && <Typography color="success.main" sx={{ mt: 2 }}>{successMsg}</Typography>}
                {errorMsg && <Typography color="error.main" sx={{ mt: 2 }}>{errorMsg}</Typography>}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h6" gutterBottom>Contacto directo</Typography>
          <Typography><Email fontSize="small" /> joselp.02@outlook.com</Typography>
          <Typography><Phone fontSize="small" /> +52 667 404 2841</Typography>
          <Typography><LocationOn fontSize="small" /> Sinaloa, México</Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
