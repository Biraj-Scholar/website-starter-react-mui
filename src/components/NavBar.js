// NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';


import ThemeToggleButton from './ThemeToggleButton';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Website Name
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Contact</Button>
        <ThemeToggleButton />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
