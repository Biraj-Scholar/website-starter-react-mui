import React from 'react';
import Button from '@mui/material/Button';

function CustomButton({ onClick, label, variant, color }) {
  return (
    <Button onClick={onClick} variant={variant} color={color}>
      {label}
    </Button>
  );
}

export default CustomButton;
