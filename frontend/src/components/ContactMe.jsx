import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import messageService from "../api/messageService";
import validator from "validator";
import LoadingOverlay from "./LoadingOverlay";

function ContactMe({ open, setIsOpen }) {
  const maxContentLength = 500;

  const [isLoading, setIsLoading] = useState(false);

  // useState to store form data
  const [formData, setFormData] = useState({
    Email: "",
    Content: "",
  });

  // Updates the form data when a text field is being updated
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Check if both fields are filled
    if (!formData.Email || !formData.Content) {
      alert("Please enter your email address and message before submitting!");
      return;
    }

    // Validate email structure
    if (!validator.isEmail(formData.Email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Check content length
    if (formData.Content.length > maxContentLength) {
      alert("Your message is too long. Please keep it within 500 characters.");
      return;
    }

    // Enable overlay to disable inputs
    setIsLoading(true);

    try {
      // Send message to backend server
      const result = await messageService.sendMessage(formData);

      // Clear form data, and close this dialog box
      alert(result.response);
      setFormData({
        Email: "",
        Content: "",
      });
      handleClose();
    } catch {
      alert("Failed to send message. Please try again later.");
    }

    // Disable overlay to re-enable inputs
    setIsLoading(false);
  };

  // Closes this form
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isLoading && <LoadingOverlay />}
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
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Email Address"
            fullWidth
            rows={1}
            sx={{ marginTop: 2 }}
          />
          <TextField
            name="Content"
            value={formData.Content}
            onChange={handleChange}
            placeholder="Message"
            fullWidth
            multiline
            rows={10}
            sx={{ marginTop: 1 }}
          />
          <p className="pl-1 pt-1 text-gray text-sm italic">
            Remaining Word Count: {maxContentLength - formData.Content.length}
          </p>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleSubmit} autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ContactMe;
