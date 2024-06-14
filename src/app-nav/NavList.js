import React from 'react';
import List from '@mui/material/List';
import NavItem from './NavItem';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const NavList = () => {
  const navItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'About', icon: <InfoIcon /> },
    { text: 'Contact', icon: <ContactMailIcon /> },
  ];

  return (
    <List>
      {navItems.map((item, index) => (
        <NavItem key={index} icon={item.icon} text={item.text} />
      ))}
    </List>
  );
};

export default NavList;
