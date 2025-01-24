const express = require("express");
const router = express.Router();
const multer = require("multer");
const Message = require("../models/message");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Configure Multer
const upload = multer();

// POST /api/contact
router.post("/", upload.none(), async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send email to yourself
      subject: "New Contact Form Submission",
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
