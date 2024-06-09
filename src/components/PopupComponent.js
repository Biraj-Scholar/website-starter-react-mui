// PopupComponent.js
import React, { useState } from 'react';
import PopupButton from './PopupButton';
import PopupDialog from './PopupDialog';

function PopupComponent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <PopupButton onClick={handleClickOpen} />
      <PopupDialog
        open={open}
        onClose={handleClose}
        title="Popup Title"
        content="This is the content of the popup."
      />
    </div>
  );
}

export default PopupComponent;
