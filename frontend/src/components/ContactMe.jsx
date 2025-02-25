import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

function ContactMe({ open, setIsOpen }) {
  // useState to store form data
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  // Updates the form data when a text field is being updated
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Closes this form
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        backdrop: {
          style: { backgroundColor: "rgba(0, 0, 0, 0.3)" },
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">Send me a message!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          If you're interested in exploring opportunities, don't hesitate to
          reach out and send me a message!
        </DialogContentText>
        <TextField
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          fullWidth
          rows={1}
          sx={{ marginTop: 2 }}
        />
        <TextField
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          fullWidth
          multiline
          rows={10}
          sx={{ marginTop: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            // TODO: Send message to backend server
            alert(JSON.stringify(formData));
            // TODO: Lock website while awaiting server response
            // TODO: Unlock website, clear form data, and close this dialog box
            setFormData({
              email: "",
              message: "",
            });
            handleClose();
          }}
          autoFocus
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContactMe;
