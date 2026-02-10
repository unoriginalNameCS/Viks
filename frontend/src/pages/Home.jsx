import { useNavigate } from 'react-router-dom'
import { Typography, Button, Container, Box, Toolbar } from '@mui/material'

export default function Home() {
  const navigate = useNavigate()

  const goToContact = () => {
    navigate('/contact')
  }

  return (
    <>
      <Toolbar />
      {/* Hero Section - Full Width */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage:
            'linear-gradient(135deg, rgba(44, 62, 80, 0.95) 0%, rgba(52, 73, 94, 0.9) 100%)',
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Premium Car Batteries
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{ mb: 4, color: 'grey.300', mx: 'auto', maxWidth: '700px' }}
          >
            Reliable power when you need it most. Get long-lasting performance
            and peace of mind with our premium battery solutions.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={goToContact}
              sx={{ px: 4, py: 1.5 }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'grey.300',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              About us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
