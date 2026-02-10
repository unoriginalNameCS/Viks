import {
  Toolbar,
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Grid,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Form submission logic will go here
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <Toolbar />
      <Box
        sx={{
          bgcolor: 'background.default',
          minHeight: 'calc(100vh - 64px)',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            color="primary"
            sx={{ mb: 4, fontWeight: 700 }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            paragraph
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Get in touch with us for all your car battery needs.
          </Typography>

          <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <PhoneIcon
                sx={{ mr: 2, color: 'secondary.main', fontSize: 30 }}
              />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Phone
                </Typography>
                <Typography variant="h6">0400 000 000</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmailIcon
                sx={{ mr: 2, color: 'secondary.main', fontSize: 30 }}
              />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Email
                </Typography>
                <Typography variant="h6">info@viksbatteries.com</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon
                sx={{ mr: 2, color: 'secondary.main', fontSize: 30 }}
              />
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  Address
                </Typography>
                <Typography variant="h6">Plumpton</Typography>
              </Box>
            </Box>
          </Paper>

          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Send us an Enquiry
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ px: 4 }}
                  >
                    Submit Enquiry
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  )
}
