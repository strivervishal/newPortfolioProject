require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
const corsOptions = {
  origin: "https://new-portfolio-project-three.vercel.app", // Frontend domain
  methods: ["GET", "POST"], // Allowed methods
  allowedHeaders: ["Content-Type"], // Allowed headers
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// Routes
app.use("/api/contact", contactRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
