import React from 'react';
import Button from '@material-ui/core/Button';

function PopupButton({ onClick }) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Open Popup
    </Button>
  );
}

export default PopupButton;