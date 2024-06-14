// src/App.js
import React from 'react';
import { Box } from '@mui/material';
//import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import Layout from './layouts/Layout';

import Home from './components/Home';
//import NavBar from './components/NavBar';
import Footer from './components/Footer';
const App = () => {
  return (
    <Layout>
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
       
        <Home />
      </Box>
      <Footer />
    </Box>
    </Layout>
  );
};

export default App;
