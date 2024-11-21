// Import modules
const express = require("express");
const { OpenAI } = require("openai");

// Initialize app and configuration
const app = express();
const port = process.env.PORT || 3000;

// Configure OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Test route
app.get("/app-test", async (req, res) => {
  try {
    res.send("Successfully connected to OpenAI API.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to connect to OpenAI API.");
  }
});

// Test /query route
app.post("/query", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  res.json({
    response: `You said: "${message}"`,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
