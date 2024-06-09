// src/components/Home.js
import React from 'react';
import { Container, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeToggleButton from './ThemeToggleButton';
import PopupComponent from './PopupComponent';

const Home = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container className="container">
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant={isXs ? "h4" : isSm ? "h3" : "h2"} align="center" gutterBottom>
            Welcome to Website Starter
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={isXs ? "body1" : "h5"} align="center" gutterBottom>
            Build responsive websites with ease.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} align="center">
          <Button variant="contained" color="primary" size={isXs ? "small" : "medium"}>
            Get Started
          </Button>
          <PopupComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={2} align="center">
          <ThemeToggleButton />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
