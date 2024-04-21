const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/test", (req, res, next) => {
  try {
    res.status(200).json({ message: "Success! " });
  } catch (error) {
    next(error);
  }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
