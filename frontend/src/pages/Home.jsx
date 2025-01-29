import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Task Manager
      </Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Organize your tasks efficiently
      </Typography>
      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/login"
        sx={{ mr: 2 }}
      >
        Get Started
      </Button>
      <Button
        variant="outlined"
        size="large"
        component={Link}
        to="/register"
      >
        Create Account
      </Button>
    </Container>
  );
};

export default Home;