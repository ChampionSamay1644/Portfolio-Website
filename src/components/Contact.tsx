import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    if (name && email && message) {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      // ✅ 1. Send main contact notification to YOU
      emailjs
        .send(
          "service_m5fmhtd",
          "template_57qe5n8",
          templateParams,
          "23b-5AeIF0lf3jEQ4"
        )
        .then(
          (response) => {
            console.log("Message sent to you!", response.status, response.text);
          },
          (error) => {
            console.log("FAILED to send to you...", error);
          }
        );

      const templateParams2 = {
        name: name,
        email: email,
        title: message,
      };

      // ✅ 2. Send auto-reply to the visitor
      emailjs
        .send(
          "service_m5fmhtd",
          "template_yjeth3f", // e.g., template_xxx
          templateParams2,
          "23b-5AeIF0lf3jEQ4"
        )
        .then(
          (response) => {
            console.log("Auto-reply sent!", response.status, response.text);
            setSuccessMessage(
              "Your message has been sent successfully! I'll get back to you soon."
            );
          },
          (error) => {
            console.error("FAILED to send auto-reply...", error);
            setSuccessMessage(
              "Oops! Something went wrong. Please try again later."
            );
          }
        );

      // ✅ Clear the form
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
