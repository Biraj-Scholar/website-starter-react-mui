import React from 'react';
import Drawer from '@mui/material/Drawer';
import NavList from '../app-nav/NavList';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose} variant="persistent">
      <NavList />
    </Drawer>
  );
};

export default Sidebar;
