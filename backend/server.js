// A simple Express server to handle emails
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // To use environment variables from .env file

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // To parse JSON bodies

// API endpoint to send email
app.post('/api/send-email', (req, res) => {
  // Change 1: Destructure phone from the request body.
  const { name, email, phone, company, message } = req.body;

  // Change 2: Update validation to include the required fields from the frontend.
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'Name, email, phone, and message are required.' });
  }

  // Configure the email transporter using environment variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address from .env file
      pass: process.env.EMAIL_PASS, // Your Gmail App Password from .env file
    },
  });

  // Email content
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender's name and email
    to: process.env.RECIPIENT_EMAIL, // Your email address where you want to receive messages
    subject: `New Contact Form Submission from ${name}`,
    // Change 3: Add the Phone Number and Company to the email's HTML body.
    html: `
      <h2>New Message from Contact Form</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email.' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});