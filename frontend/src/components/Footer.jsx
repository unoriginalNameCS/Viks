import { Box, Container, Grid, Typography, Link } from '@mui/material'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <BatteryChargingFullIcon sx={{ mr: 1 }} />
              <Typography variant="h6">Car Battery Pro</Typography>
            </Box>
            <Typography variant="body2" color="grey.400">
              Your trusted source for premium car batteries. Quality, warranty,
              and support you can count on.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link
              onClick={navigate('/')}
              color="grey.400"
              underline="hover"
              display="block"
            >
              Home
            </Link>
            <Link
              onClick={navigate('/contact')}
              color="grey.400"
              underline="hover"
              display="block"
            >
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="grey.400">
                0400 000 000
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="grey.400">
                info@viksbatteries.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="grey.400">
                Plumpton
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: 1, borderColor: 'grey.800', mt: 4, pt: 3 }}>
          <Typography variant="body2" color="grey.500" align="center">
            © {new Date().getFullYear()} Car Battery Pro. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
