import { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import styles from "./ContactMe.module.css";
import emailjs from "@emailjs/browser";

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_public_key);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData:", formData);
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_serviceId,
        import.meta.env.VITE_EMAILJS_templateId,
        templateParams
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Mail sent successfully!");
          setOpen(true);
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send Mail.");
          setOpen(true);
        }
      );
  };

  const handleClose =()=>{
    setOpen(false);
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.contact}>
        <h3 className={styles.title}>Contact Me</h3>
        <img src="/assets/contact.png" alt="contactMe" />
      </div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={styles.box}
        onSubmit={handleSubmit}
      >
        <TextField
          id="name"
          name="name"
          label="Name"
          value={formData.name}
          variant="filled"
          onChange={handleChange}
          // className={styles.customTextField}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              // padding: "10px"
            },
            "& .MuiFilledInput-root:hover": {
              backgroundColor: "#e0e0e0",
            },
            "& .MuiFilledInput-root.Mui-focused": {
              backgroundColor: "#e8f5e9",
            },
          }}
        />
        <TextField
          id="email"
          label="Email"
          name="email"
          value={formData.email}
          variant="filled"
          autoComplete="on"
          onChange={handleChange}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              // padding: "10px"
            },
            "& .MuiFilledInput-root:hover": {
              backgroundColor: "#e0e0e0",
            },
            "& .MuiFilledInput-root.Mui-focused": {
              backgroundColor: "#e8f5e9",
            },
          }}
        />
        <TextField
          id="message"
          label=""
          variant="filled"
          value={formData.message}
          placeholder="Enter your message"
          name="message"
          multiline
          onChange={handleChange}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              padding: "15px",
            },
            "& .MuiFilledInput-root:hover": {
              backgroundColor: "#e0e0e0",
            },
            "& .MuiFilledInput-root.Mui-focused": {
              backgroundColor: "#e8f5e9",
            },
          }}
        />
        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{ width: "50%", borderRadius: "10px" }}
            type="submit"
          >
            Submit
          </Button>
          <div>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={status}
              action={action}
            />
          </div>
        </div>
      </Box>
    </section>
  );
}
