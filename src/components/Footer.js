// src/components/Footer.js
import React from 'react';
import { Typography, Link, Container, Grid, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
  },
  link: {
    margin: theme.spacing(1),
  },
  icon: {
    color: theme.palette.text.secondary,
  },
  section: {
    marginBottom: theme.spacing(4),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={4} justifyContent="space-around">
          <Grid item xs={12} sm={6} md={3} className={classes.section}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We are a team dedicated to creating the best websites with an emphasis on user experience and design.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.section}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: contact@websitestarter.com
              <br />
              Phone: +1234567890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.section}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton className={classes.icon} href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton className={classes.icon} href="#">
                <TwitterIcon />
              </IconButton>
              <IconButton className={classes.icon} href="#">
                <LinkedInIcon />
              </IconButton>
              <IconButton className={classes.icon} href="#">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.section}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Legal
            </Typography>
            <Link href="#" color="inherit" className={classes.link}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" className={classes.link}>
              Terms of Service
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            &copy; 2024 Website Starter. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
